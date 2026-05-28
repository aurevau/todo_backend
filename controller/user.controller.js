const UserService = require('../services/user.services'); 

exports.register = async(req, res, next) =>{
    try {
        const {email, password} = req.body; 

        const successRes = await UserService.registerUser(email, password);

        res.json({status: true, success: "User Registered Successfully!"})

    } catch(error) {
        console.log('Register error:', error);  
        res.status(500).json({ 
            status: false, 
            error: error.message 
        });
    }

};

exports.login = async(req, res, next) =>{
    try {
        const {email, password} = req.body; 

        const user = await UserService.checkuser(email);

        if (!user) {
            throw new Error('User doesnt exist');
        }

        const isMatch = user.comparePassword(password);

        if (isMatch === false) {
                throw new Error('Password Invalid');
        }

        let tokenData = {_id:user._id, email:user.email};

        const token = await UserService.generateToken(tokenData, "secretKey", '1h');
        res.status(200).json({status: true, token: token})

    } catch(error) {
         console.log('Login error:', error);  
        res.status(500).json({ 
            status: false, 
            error: error.message 
        });
    }

};