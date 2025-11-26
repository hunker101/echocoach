const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

const isAuth = (req, res, next) => {
    if (req.session.isLoggedIn) next();
    else res.redirect('/login');
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

// Module Actions (NEW FLOW)
router.post('/admin/validate-module', isAuth, adminController.validateModule);
router.post('/admin/regenerate-module', isAuth, adminController.regenerateModuleContent);

// Test Bank Actions
router.post('/admin/add-test', isAuth, adminController.addAssessment);
router.post('/admin/edit-test', isAuth, adminController.editAssessment);
router.post('/admin/delete-test', isAuth, adminController.deleteAssessment);
router.post('/admin/generate-test', isAuth, adminController.generateQuestion);

// ABEL Actions
router.post('/admin/add-abel', isAuth, adminController.addFinalAssessment);
router.post('/admin/delete-abel', isAuth, adminController.deleteFinalAssessment);

module.exports = router;