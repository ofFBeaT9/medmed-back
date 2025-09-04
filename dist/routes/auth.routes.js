"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const data_source_1 = require("../data-source");
const User_1 = require("../entities/User");
const router = (0, express_1.Router)();
// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key-for-development';
// Register new user
router.post('/register', async (req, res) => {
    try {
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
        const { firstName, lastName, email, password, role, department } = req.body;
        // Validation
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        // Check if user already exists
        const existingUser = await userRepository.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }
        // Hash password
        const saltRounds = 12;
        const hashedPassword = await bcrypt_1.default.hash(password, saltRounds);
        // Create new user
        const user = userRepository.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role: role || 'doctor',
            department
        });
        await userRepository.save(user);
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
        // Remove password from response
        const { password: _ } = user, userResponse = __rest(user, ["password"]);
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user: userResponse,
            token
        });
    }
    catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
// Login user
router.post('/login', async (req, res) => {
    try {
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
        const { email, password } = req.body;
        // Validation
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        // Find user by email
        const user = await userRepository.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // Check password
        const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // Update last login
        user.lastLogin = new Date();
        await userRepository.save(user);
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
        // Remove password from response
        const { password: _ } = user, userResponse = __rest(user, ["password"]);
        res.json({
            success: true,
            message: 'Login successful',
            user: userResponse,
            token
        });
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
// Get current user profile
router.get('/me', async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'No valid token provided' });
        }
        const token = authHeader.split(' ')[1];
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
        const user = await userRepository.findOne({ where: { id: decoded.userId } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const { password: _ } = user, userResponse = __rest(user, ["password"]);
        res.json({
            success: true,
            user: userResponse
        });
    }
    catch (error) {
        console.error('Get profile error:', error);
        res.status(401).json({ message: 'Invalid token' });
    }
});
// Logout (client-side token removal)
router.post('/logout', (req, res) => {
    res.json({
        success: true,
        message: 'Logged out successfully'
    });
});
exports.default = router;
