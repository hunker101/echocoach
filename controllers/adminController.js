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

    // NEW: Add Question to Module Test Bank (Redirects to new tab)
    addModuleQuestion: (req, res) => {
        // In a real app, you'd save to a specific module's question list
        console.log("Added Question to Module Test Bank:", req.body);
        res.redirect('/admin/manage?tab=moduletestbank'); 
    },

    // --- General Test Bank Management ---
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
        res.redirect('/admin/manage?tab=abel');
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
        res.redirect('/admin/manage?tab=abel');
    },
    deleteFinalAssessment: (req, res) => {
        db.finalAssessments = db.finalAssessments.filter(a => a.id != req.body.id);
        res.redirect('/admin/manage?tab=abel');
    }
};

module.exports = adminController;