const router = require('express').Router();
const { body,validationResult } = require('express-validator');
const mongoose = require("mongoose");
const User = mongoose.model('User',require('../schemas/user.schemas'));

// fetch all the users
router.get('/',(req,res) => {
    User.find((error,users) => {
        if(error) {
            console.log(error);
        }
        else{
            res.json(users);
        }
    });
});

// find a user by username
router.get('/findUsername',async (req,res) => {
    const user = await User.findOne({username: req.query.username}).exec();
    res.json(user);
});

// find a user by email
router.get('/findEmail',async (req,res) => {
    const user = await User.findOne({email: req.query.email}).exec();
    res.json(user);
});

//update the user information
router.post('/updateUser/:id',(req,res) => {
    User.findById(req.params.id, (err,user) => {
        if(!user){
            res.status(404).send("data not found");
        }
        else{
            user.bill = req.body.bill;
            user.save().then((_user) => {
                res.json('User information updated');
            })
            .catch(err => {
                res.status(400).send("Update failed");
            })
        }
    })
});

// register a user
router.post('/register',body("username").custom(async (value) => {
    const user = await User.find({username: value});
    if(user.length > 0) {
        // user name already exists
        // reject the promise
        return Promise.reject('Username already in use');
    }
}),body("email").custom(async (value) => {
    const user = await User.find({email : value});
    if(user.length > 0) {
        // email already exists
        // reject the promise
        return Promise.reject('Email already in use');
    }
}),async (req,res) => {
    // Validate incoming input
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(400).send(errors)
    }
    else{
        const user = new User(req.body);
        user.save()
        .then((_user) => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch((error) => {
            res.status(400).send('adding new user failed');
        })
    }
});

module.exports = router;