const db = require('../models/mockDb'); // Using Mock DB
const aiService = require('../services/aiService');

const adminController = {
    
    // --- Authentication ---
    getLogin: (req, res) => { res.render('login'); },
    postLogin: (req, res) => {
        const { username, password } = req.body;
        if (username === 'admin' && password === 'password123') {
            req.session.isLoggedIn = true;
            res.redirect('/admin/dashboard');
        } else {
            res.render('login', { error: 'Invalid username or password' });
        }
    },
    logout: (req, res) => { req.session.destroy(() => res.redirect('/login')); },

    // --- Dashboards ---
    getDashboard: (req, res) => {
        const validatedCount = db.pendingModules.filter(m => m.status === 'Validated').length;
        const pendingCount = db.pendingModules.filter(m => m.status === 'Pending').length;

        const stats = {
            totalUsers: db.users.length,
            totalModules: db.pendingModules.length, 
            validatedModules: validatedCount,       
            pendingModules: pendingCount,           
            totalQuestions: db.assessments.length,
            totalAbel: db.finalAssessments.length,
            recentUsers: db.users.slice(-5).reverse()
        };
        res.render('dashboard', { stats });
    },

    getAdminPanel: (req, res) => {
        res.render('admin', {
            users: db.users,
            pendingModules: db.pendingModules, 
            modules: db.modules, // Add this line to pass admin modules
            assessments: db.assessments,
            finalAssessments: db.finalAssessments,
            tags: db.tags // Pass tags database
        });
    },

    // --- CRUD OPERATIONS ---

    // User Management
    addUser: (req, res) => {
        const randomStat = () => Math.floor(Math.random() * (100 - 40) + 40);
        db.users.push({ 
            id: Date.now(), 
            name: req.body.name, 
            email: req.body.email, 
            role: req.body.role, 
            level: req.body.level,
            stats: { speaking: randomStat(), listening: randomStat(), reading: randomStat(), writing: randomStat() }
        });
        res.redirect('/admin/manage?tab=users');
    },
    editUser: (req, res) => {
        const index = db.users.findIndex(u => u.id == req.body.id);
        if (index > -1) {
            const existingStats = db.users[index].stats;
            db.users[index] = { ...db.users[index], ...req.body, id: parseInt(req.body.id), stats: existingStats };
        }
        res.redirect('/admin/manage?tab=users');
    },
    deleteUser: (req, res) => {
        db.users = db.users.filter(u => u.id != req.body.id);
        res.redirect('/admin/manage?tab=users');
    },

    // --- Module Management ---
    validateModule: (req, res) => {
        const id = parseInt(req.body.id);
        const index = db.pendingModules.findIndex(m => m.id === id);
        if (index > -1) {
            db.pendingModules[index].status = "Validated"; 
        }
        res.redirect('/admin/manage?tab=modules');
    },

    regenerateModuleContent: async (req, res) => {
        res.redirect('/admin/manage?tab=modules');
    },

    addModule: (req, res) => { 
        db.modules.push({ 
            id: Date.now(), 
            code: req.body.code, 
            title: req.body.title, 
            description: req.body.description, 
            level: req.body.level, 
            lessons: 0 
        });
        res.redirect('/admin/manage?tab=modules'); 
    },
    generateModule: async (req, res) => { 
        const generatedData = await aiService.generateModule(req.body.topic, req.body.level);
        if (generatedData) { db.modules.push({ id: Date.now(), ...generatedData }); }
        res.redirect('/admin/manage?tab=modules'); 
    },
    editModule: (req, res) => { 
        const index = db.modules.findIndex(m => m.id == req.body.id);
        if (index > -1) db.modules[index] = { ...db.modules[index], ...req.body, id: parseInt(req.body.id) };
        res.redirect('/admin/manage?tab=modules'); 
    },
    deleteModule: (req, res) => { 
        db.modules = db.modules.filter(m => m.id != req.body.id);
        res.redirect('/admin/manage?tab=modules'); 
    },

    // --- Regular User Test Bank Management ---
    addAssessment: (req, res) => {
        db.assessments.push({ id: Date.now(), category: req.body.category, question: req.body.question });
        res.redirect('/admin/manage?tab=testbank');
    },
    editAssessment: (req, res) => {
        const index = db.assessments.findIndex(a => a.id == req.body.id);
        if (index > -1) {
            db.assessments[index] = { ...db.assessments[index], category: req.body.category, question: req.body.question, id: parseInt(req.body.id) };
        }
        res.redirect('/admin/manage?tab=testbank');
    },
    deleteAssessment: (req, res) => {
        db.assessments = db.assessments.filter(a => a.id != req.body.id);
        res.redirect('/admin/manage?tab=testbank');
    },
    generateQuestion: async (req, res) => {
        const generatedData = await aiService.generateTestQuestion(req.body.topic);
        if (generatedData) {
            db.assessments.push({ id: Date.now(), ...generatedData, generatedByAI: true });
        }
        res.redirect('/admin/manage?tab=testbank');
    },

    // --- ABEL Final Assessment (IELTS Mock Exam) ---
    addFinalAssessment: (req, res) => {
        const newQuestion = {
            id: Date.now(),
            type: req.body.type,
            difficulty: req.body.difficulty || 'Standard',
            prompt: req.body.prompt || ''
        };

        // Handle Writing questions
        if (req.body.type === 'Writing') {
            newQuestion.taskNumber = parseInt(req.body.taskNumber) || 1;
            newQuestion.title = req.body.title || '';
            // Handle uploaded image file
            if (req.file) {
                newQuestion.image = '/uploads/' + req.file.filename;
            } else {
                newQuestion.image = null;
            }
            newQuestion.description = req.body.prompt;
        }
        
        // Handle Reading/Listening questions
        if (req.body.type === 'Reading' || req.body.type === 'Listening') {
            newQuestion.optionA = req.body.optionA || '';
            newQuestion.optionB = req.body.optionB || '';
            newQuestion.optionC = req.body.optionC || '';
            newQuestion.optionD = req.body.optionD || '';
            newQuestion.correctAnswer = parseInt(req.body.correctAnswer) || 1;
            newQuestion.question = req.body.prompt; // Store question text
        }
        
        // Handle Speaking questions
        if (req.body.type === 'Speaking') {
            newQuestion.part = parseInt(req.body.part) || 1;
            newQuestion.questionNumber = parseInt(req.body.questionNumber) || 1;
            newQuestion.question1 = req.body.questionNumber == 1 ? req.body.prompt : null;
            newQuestion.question2 = req.body.questionNumber == 2 ? req.body.prompt : null;
        }

        db.finalAssessments.push(newQuestion);
        
        // Preserve the skill view in redirect
        const skillType = req.body.type ? req.body.type.toLowerCase() : '';
        res.redirect(`/admin/manage?tab=abel&skill=${skillType}`);
    },
    editFinalAssessment: (req, res) => {
        const index = db.finalAssessments.findIndex(a => a.id == req.body.id);
        if (index > -1) {
            const existing = db.finalAssessments[index];
            const updated = {
                ...existing,
                id: parseInt(req.body.id),
                type: req.body.type,
                prompt: req.body.prompt || existing.prompt,
                difficulty: req.body.difficulty || existing.difficulty || 'Standard'
            };

            // Handle Writing questions
            if (req.body.type === 'Writing') {
                updated.taskNumber = parseInt(req.body.taskNumber) || 1;
                updated.title = req.body.title || existing.title || '';
                // Handle uploaded image file - if new file uploaded, use it; otherwise keep existing
                if (req.file) {
                    updated.image = '/uploads/' + req.file.filename;
                } else {
                    updated.image = existing.image || null;
                }
                updated.description = req.body.prompt || existing.description;
            }
            
            // Handle Reading/Listening questions
            if (req.body.type === 'Reading' || req.body.type === 'Listening') {
                updated.optionA = req.body.optionA || existing.optionA || '';
                updated.optionB = req.body.optionB || existing.optionB || '';
                updated.optionC = req.body.optionC || existing.optionC || '';
                updated.optionD = req.body.optionD || existing.optionD || '';
                updated.correctAnswer = parseInt(req.body.correctAnswer) || existing.correctAnswer || 1;
                updated.question = req.body.prompt || existing.question;
            }

            // Handle Speaking questions
            if (req.body.type === 'Speaking') {
                updated.part = parseInt(req.body.part) || existing.part || 1;
                updated.questionNumber = parseInt(req.body.questionNumber) || existing.questionNumber || 1;
                if (req.body.questionNumber == 1) {
                    updated.question1 = req.body.prompt;
                    updated.question2 = existing.question2 || null;
                } else if (req.body.questionNumber == 2) {
                    updated.question1 = existing.question1 || null;
                    updated.question2 = req.body.prompt;
                }
            }

            db.finalAssessments[index] = updated;
        }
        
        // Preserve the skill view in redirect
        const skillType = req.body.type ? req.body.type.toLowerCase() : '';
        res.redirect(`/admin/manage?tab=abel&skill=${skillType}`);
    },
    deleteFinalAssessment: (req, res) => {
        const question = db.finalAssessments.find(a => a.id == req.body.id);
        db.finalAssessments = db.finalAssessments.filter(a => a.id != req.body.id);
        
        // Preserve the skill view in redirect
        const skillType = question && question.type ? question.type.toLowerCase() : '';
        res.redirect(`/admin/manage?tab=abel&skill=${skillType}`);
    },
    
    // Save Writing Exam Details (Task 1 and Task 2)
    saveWritingExam: (req, res) => {
        try {
            const index = db.finalAssessments.findIndex(a => a.id == req.body.id);
            if (index > -1) {
                const exam = db.finalAssessments[index];
                
                // Handle task1 image
                let task1Image = null;
                if (req.files && req.files.task1Image && req.files.task1Image[0]) {
                    task1Image = '/uploads/' + req.files.task1Image[0].filename;
                } else if (exam.task1 && exam.task1.image) {
                    // Keep existing image if no new one uploaded
                    task1Image = exam.task1.image;
                }
                
                // Handle task2 image
                let task2Image = null;
                if (req.files && req.files.task2Image && req.files.task2Image[0]) {
                    task2Image = '/uploads/' + req.files.task2Image[0].filename;
                } else if (exam.task2 && exam.task2.image) {
                    // Keep existing image if no new one uploaded
                    task2Image = exam.task2.image;
                }
                
                exam.task1 = {
                    description: req.body.task1Description || '',
                    tags: req.body.task1Tags || '',
                    image: task1Image
                };
                exam.task2 = {
                    description: req.body.task2Description || '',
                    tags: req.body.task2Tags || '',
                    image: task2Image
                };
                db.finalAssessments[index] = exam;
                res.json({ 
                    success: true, 
                    message: 'Writing exam saved successfully',
                    task1Image: task1Image,
                    task2Image: task2Image
                });
            } else {
                res.json({ success: false, error: 'Writing exam not found' });
            }
        } catch (error) {
            console.error('Error saving writing exam:', error);
            res.json({ success: false, error: error.message || 'Failed to save writing exam' });
        }
    },
    
    // Save Reading Exam Details (Passage and Multiple Choice Questions)
    saveReadingExam: (req, res) => {
        try {
            // Ensure we always return JSON
            res.setHeader('Content-Type', 'application/json');
            
            console.log('=== SAVE READING EXAM REQUEST ===');
            console.log('req.body:', req.body);
            console.log('req.body.id:', req.body.id, 'Type:', typeof req.body.id);
            
            // Check if ID exists in body
            if (!req.body || (req.body.id === undefined && req.body.id === null)) {
                console.error('No ID in request body');
                return res.json({ 
                    success: false, 
                    error: 'Exam ID is required. Received: ' + JSON.stringify(req.body) 
                });
            }
            
            const examId = parseInt(req.body.id);
            
            if (isNaN(examId)) {
                console.error('Invalid exam ID:', req.body.id);
                return res.json({ 
                    success: false, 
                    error: 'Invalid exam ID: ' + req.body.id + ' (parsed as: ' + examId + ')' 
                });
            }
            
            console.log('=== SAVE READING EXAM DEBUG ===');
            console.log('Received ID:', req.body.id, 'Parsed ID:', examId);
            console.log('Total exams in database:', db.finalAssessments.length);
            console.log('Reading exams:', db.finalAssessments.filter(a => a.type === 'Reading').map(a => ({ id: a.id, type: typeof a.id, title: a.title })));
            
            // Try multiple matching strategies
            let index = db.finalAssessments.findIndex(a => {
                const aId = parseInt(a.id);
                return aId === examId && a.type === 'Reading';
            });
            
            // If not found, try loose comparison
            if (index === -1) {
                index = db.finalAssessments.findIndex(a => {
                    return (a.id == examId || parseInt(a.id) == examId) && a.type === 'Reading';
                });
            }
            
            // If still not found, try string comparison
            if (index === -1) {
                index = db.finalAssessments.findIndex(a => {
                    return String(a.id) === String(examId) && a.type === 'Reading';
                });
            }
            
            console.log('Found index:', index);
            
            if (index > -1) {
                const exam = db.finalAssessments[index];
                console.log('Updating exam:', exam.id, exam.title);
                exam.passage = req.body.passage || '';
                try {
                    exam.questions = JSON.parse(req.body.questions || '[]');
                    console.log('Parsed questions count:', exam.questions.length);
                } catch (e) {
                    console.error('Error parsing questions:', e);
                    exam.questions = [];
                }
                db.finalAssessments[index] = exam;
                console.log('Exam saved successfully');
                return res.json({ 
                    success: true, 
                    message: 'Reading exam saved successfully'
                });
            } else {
                console.error('Reading exam not found. Searched ID:', examId);
                console.error('All Reading exams:', db.finalAssessments.filter(a => a.type === 'Reading'));
                return res.json({ 
                    success: false, 
                    error: 'Reading exam not found. ID: ' + examId + '. Available Reading exam IDs: ' + 
                           db.finalAssessments.filter(a => a.type === 'Reading').map(a => a.id).join(', ')
                });
            }
        } catch (error) {
            console.error('Error saving reading exam:', error);
            return res.json({ 
                success: false, 
                error: error.message || 'Failed to save reading exam' 
            });
        }
    },
    
    // Save Listening Exam Details (Narration, Speakers, and Multiple Choice Questions)
    saveListeningExam: (req, res) => {
        try {
            // Ensure we always return JSON
            res.setHeader('Content-Type', 'application/json');
            
            console.log('=== SAVE LISTENING EXAM REQUEST ===');
            console.log('req.body:', req.body);
            console.log('req.body.id:', req.body.id, 'Type:', typeof req.body.id);
            
            // Check if ID exists in body
            if (!req.body || (req.body.id === undefined && req.body.id === null)) {
                console.error('No ID in request body');
                return res.json({ 
                    success: false, 
                    error: 'Exam ID is required. Received: ' + JSON.stringify(req.body) 
                });
            }
            
            const examId = parseInt(req.body.id);
            
            if (isNaN(examId)) {
                console.error('Invalid exam ID:', req.body.id);
                return res.json({ 
                    success: false, 
                    error: 'Invalid exam ID: ' + req.body.id + ' (parsed as: ' + examId + ')' 
                });
            }
            
            console.log('=== SAVE LISTENING EXAM DEBUG ===');
            console.log('Received ID:', req.body.id, 'Parsed ID:', examId);
            console.log('Total exams in database:', db.finalAssessments.length);
            console.log('Listening exams:', db.finalAssessments.filter(a => a.type === 'Listening').map(a => ({ id: a.id, type: typeof a.id, title: a.title })));
            
            // Try multiple matching strategies
            let index = db.finalAssessments.findIndex(a => {
                const aId = parseInt(a.id);
                return aId === examId && a.type === 'Listening';
            });
            
            // If not found, try loose comparison
            if (index === -1) {
                index = db.finalAssessments.findIndex(a => {
                    return (a.id == examId || parseInt(a.id) == examId) && a.type === 'Listening';
                });
            }
            
            // If still not found, try string comparison
            if (index === -1) {
                index = db.finalAssessments.findIndex(a => {
                    return String(a.id) === String(examId) && a.type === 'Listening';
                });
            }
            
            console.log('Found index:', index);
            
            if (index > -1) {
                const exam = db.finalAssessments[index];
                console.log('Updating exam:', exam.id, exam.title);
                exam.narration = req.body.narration || '';
                exam.speakers = req.body.speakers || [];
                exam.questions = req.body.questions || [];
                console.log('Updated narration length:', exam.narration.length);
                console.log('Updated speakers count:', exam.speakers.length);
                console.log('Updated questions count:', exam.questions.length);
                db.finalAssessments[index] = exam;
                console.log('Listening exam saved successfully');
                return res.json({ 
                    success: true, 
                    message: 'Listening exam saved successfully'
                });
            } else {
                console.error('Listening exam not found. Searched ID:', examId);
                console.error('All Listening exams:', db.finalAssessments.filter(a => a.type === 'Listening'));
                return res.json({ 
                    success: false, 
                    error: 'Listening exam not found. ID: ' + examId + '. Available Listening exam IDs: ' + 
                           db.finalAssessments.filter(a => a.type === 'Listening').map(a => a.id).join(', ')
                });
            }
        } catch (error) {
            console.error('Error saving listening exam:', error);
            return res.json({ 
                success: false, 
                error: error.message || 'Failed to save listening exam' 
            });
        }
    },
    
    // Save Speaking Exam Details (Module Content and Questions by Part)
    saveSpeakingExam: (req, res) => {
        try {
            // Ensure we always return JSON
            res.setHeader('Content-Type', 'application/json');
            
            console.log('=== SAVE SPEAKING EXAM REQUEST ===');
            console.log('req.body:', req.body);
            console.log('req.body.id:', req.body.id, 'Type:', typeof req.body.id);
            
            // Check if ID exists in body
            if (!req.body || (req.body.id === undefined && req.body.id === null)) {
                console.error('No ID in request body');
                return res.json({ 
                    success: false, 
                    error: 'Exam ID is required. Received: ' + JSON.stringify(req.body) 
                });
            }
            
            const examId = parseInt(req.body.id);
            
            if (isNaN(examId)) {
                console.error('Invalid exam ID:', req.body.id);
                return res.json({ 
                    success: false, 
                    error: 'Invalid exam ID: ' + req.body.id + ' (parsed as: ' + examId + ')' 
                });
            }
            
            console.log('=== SAVE SPEAKING EXAM DEBUG ===');
            console.log('Received ID:', req.body.id, 'Parsed ID:', examId);
            console.log('Total exams in database:', db.finalAssessments.length);
            console.log('Speaking exams:', db.finalAssessments.filter(a => a.type === 'Speaking').map(a => ({ id: a.id, type: typeof a.id, title: a.title })));
            
            // Try multiple matching strategies
            let index = db.finalAssessments.findIndex(a => {
                const aId = parseInt(a.id);
                return aId === examId && a.type === 'Speaking';
            });
            
            // If not found, try loose comparison
            if (index === -1) {
                index = db.finalAssessments.findIndex(a => {
                    return (a.id == examId || parseInt(a.id) == examId) && a.type === 'Speaking';
                });
            }
            
            // If still not found, try string comparison
            if (index === -1) {
                index = db.finalAssessments.findIndex(a => {
                    return String(a.id) === String(examId) && a.type === 'Speaking';
                });
            }
            
            console.log('Found index:', index);
            
            if (index > -1) {
                const exam = db.finalAssessments[index];
                console.log('Updating exam:', exam.id, exam.title);
                exam.moduleContent = req.body.moduleContent || '';
                exam.questions = req.body.questions || [];
                console.log('Updated module content length:', exam.moduleContent.length);
                console.log('Updated questions count:', exam.questions.length);
                console.log('Questions by part:', {
                    part1: exam.questions.filter(q => q.partId === 1).length,
                    part2: exam.questions.filter(q => q.partId === 2).length,
                    part3: exam.questions.filter(q => q.partId === 3).length
                });
                db.finalAssessments[index] = exam;
                console.log('Speaking exam saved successfully');
                return res.json({ 
                    success: true, 
                    message: 'Speaking exam saved successfully'
                });
            } else {
                console.error('Speaking exam not found. Searched ID:', examId);
                console.error('All Speaking exams:', db.finalAssessments.filter(a => a.type === 'Speaking'));
                return res.json({ 
                    success: false, 
                    error: 'Speaking exam not found. ID: ' + examId + '. Available Speaking exam IDs: ' + 
                           db.finalAssessments.filter(a => a.type === 'Speaking').map(a => a.id).join(', ')
                });
            }
        } catch (error) {
            console.error('Error saving speaking exam:', error);
            return res.json({ 
                success: false, 
                error: error.message || 'Failed to save speaking exam' 
            });
        }
    }
};

module.exports = adminController;