const express = require('express');
const app = express();
const router = express.Router();
const authMiddleware = require('../middleware/auth');

const {
    login,
    dashboard
} = require('../controllers/main');

router.get('/dashboard', authMiddleware, dashboard);
router.post('/login', login);

module.exports = router;