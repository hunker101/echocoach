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
        const stats = {
            totalUsers: db.users.length,
            totalModules: db.modules.length,
            totalQuestions: db.assessments.length,
            totalAbel: db.finalAssessments.length,
            recentUsers: db.users.slice(-5).reverse()
        };
        res.render('dashboard', { stats });
    },

    getAdminPanel: (req, res) => {
        res.render('admin', {
            users: db.users,
            modules: db.modules,
            assessments: db.assessments,
            finalAssessments: db.finalAssessments
        });
    },

    // --- CRUD OPERATIONS ---

    // User Management
    addUser: (req, res) => {
        db.users.push({ id: Date.now(), name: req.body.name, email: req.body.email, role: req.body.role });
        res.redirect('/admin/manage?tab=users');
    },
    editUser: (req, res) => {
        const index = db.users.findIndex(u => u.id == req.body.id);
        if (index > -1) db.users[index] = { ...db.users[index], ...req.body, id: parseInt(req.body.id) };
        res.redirect('/admin/manage?tab=users');
    },
    deleteUser: (req, res) => {
        db.users = db.users.filter(u => u.id != req.body.id);
        res.redirect('/admin/manage?tab=users');
    },

    // Module Management
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
    
    // ★ NEW AI MODULE GENERATOR ★
    generateModule: async (req, res) => {
        const { topic, level } = req.body;
        const generatedData = await aiService.generateModule(topic, level);

        if (generatedData) {
            db.modules.push({
                id: Date.now(),
                ...generatedData // Expands to code, title, description, lessons
            });
        }
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

    // Test Bank
    addAssessment: (req, res) => {
        db.assessments.push({ id: Date.now(), category: req.body.category, question: req.body.question, answer: req.body.answer });
        res.redirect('/admin/manage?tab=testbank');
    },
    generateQuestion: async (req, res) => {
        const generatedData = await aiService.generateTestQuestion(req.body.topic);
        if (generatedData) {
            db.assessments.push({ id: Date.now(), ...generatedData, generatedByAI: true });
        }
        res.redirect('/admin/manage?tab=testbank');
    },

    // ABEL
    addFinalAssessment: (req, res) => {
        db.finalAssessments.push({ id: Date.now(), prompt: req.body.prompt, type: req.body.type, difficulty: req.body.difficulty });
        res.redirect('/admin/manage?tab=abel');
    },
    deleteFinalAssessment: (req, res) => {
        db.finalAssessments = db.finalAssessments.filter(a => a.id != req.body.id);
        res.redirect('/admin/manage?tab=abel');
    }
};

module.exports = adminController;