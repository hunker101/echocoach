const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

const isAuth = (req, res, next) => {
    if (req.session.isLoggedIn) {
        next();
    } else {
        // Check if this is an API request (expects JSON)
        if (req.path.startsWith('/admin/save-') || req.path.startsWith('/admin/delete-') || req.method === 'POST') {
            return res.status(401).json({ success: false, error: 'Unauthorized. Please log in.' });
        }
        res.redirect('/login');
    }
};

router.get('/', (req, res) => res.render('index'));

// Auth
router.get('/login', adminController.getLogin);
router.post('/login', adminController.postLogin);
router.get('/logout', adminController.logout);

// Admin Pages
router.get('/admin', isAuth, (req, res) => res.redirect('/admin/dashboard'));
router.get('/admin/dashboard', isAuth, adminController.getDashboard);
router.get('/admin/manage', isAuth, adminController.getAdminPanel);

// User Actions
router.post('/admin/add-user', isAuth, adminController.addUser);
router.post('/admin/edit-user', isAuth, adminController.editUser);
router.post('/admin/delete-user', isAuth, adminController.deleteUser);

// Module Actions
router.post('/admin/validate-module', isAuth, adminController.validateModule);
router.post('/admin/regenerate-module', isAuth, adminController.regenerateModuleContent);

// Legacy Module Actions
router.post('/admin/add-module', isAuth, adminController.addModule);
router.post('/admin/generate-module', isAuth, adminController.generateModule);
router.post('/admin/edit-module', isAuth, adminController.editModule);
router.post('/admin/delete-module', isAuth, adminController.deleteModule);

// Test Bank Actions
router.post('/admin/add-test', isAuth, adminController.addAssessment);
router.post('/admin/edit-test', isAuth, adminController.editAssessment);
router.post('/admin/delete-test', isAuth, adminController.deleteAssessment);
router.post('/admin/generate-test', isAuth, adminController.generateQuestion);

// ABEL Actions (with file upload support for Writing questions)
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadsDir = path.join(__dirname, '..', 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // Use fieldname to distinguish between task1Image and task2Image
        const prefix = file.fieldname === 'task1Image' ? 'writing-task1-' : 
                       file.fieldname === 'task2Image' ? 'writing-task2-' : 'writing-';
        cb(null, prefix + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
});

router.post('/admin/add-abel', isAuth, upload.single('image'), adminController.addFinalAssessment);
router.post('/admin/edit-abel', isAuth, upload.single('image'), adminController.editFinalAssessment);
router.post('/admin/delete-abel', isAuth, adminController.deleteFinalAssessment);

// Writing Exam Save (with file upload support for task images)
const uploadFields = multer({ 
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
}).fields([
    { name: 'task1Image', maxCount: 1 },
    { name: 'task2Image', maxCount: 1 }
]);

router.post('/admin/save-writing-exam', isAuth, uploadFields, adminController.saveWritingExam);
router.post('/admin/save-reading-exam', isAuth, adminController.saveReadingExam);
router.post('/admin/save-listening-exam', isAuth, adminController.saveListeningExam);
router.post('/admin/save-speaking-exam', isAuth, adminController.saveSpeakingExam);

module.exports = router;