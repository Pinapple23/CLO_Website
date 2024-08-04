const express = require('express');
const { signup, login, logout, getProfile } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', getProfile);

module.exports = router;
