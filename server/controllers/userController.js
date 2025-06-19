const User = require('../models/User');

exports.register = async (req, res) => {
    // TODO: регистрация пользователя
    res.json({ token: 'mock-token' });
};

exports.login = async (req, res) => {
    // TODO: логин пользователя
    res.json({ token: 'mock-token' });
};

exports.getProfile = async (req, res) => {
    // TODO: получить профиль пользователя
    res.json({ id: req.params.id, name: 'John Doe', avatar: '/assets/default-avatar.png' });
}; 