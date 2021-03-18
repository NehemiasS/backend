const userCtrl = {};

const User = require('../models/user');

userCtrl.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

userCtrl.createUser = async (req, res) => {
    try {
        const { name, lastname, username,email,password, date } = req.body;

        const newUser = new User({ 
            name,
            lastname,
            username,
            email,
            password,
            date
         });
        await newUser.save();
        res.json('User created');
        
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

userCtrl.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json('User deleted');
}

module.exports = userCtrl;