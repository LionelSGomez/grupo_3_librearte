const path = require('path');

const controller = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    },
    register: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/register.html'));
    }
};

module.exports = controller;