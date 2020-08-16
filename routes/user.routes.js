const { Router } = require('express');
const User = require('../models/User');
// const { check, validationResult } = require('express-validator');

const router = Router() 

router.post('/create',
// [ 
//    check('email', 'Некорректный email').isEmail()
// ],
 async (req, res) => {
   try {

      // const errors = validationResult(req);
      // console.log(errors)
      // if(!errors.isEmpty()) { 
      //    return res.status(400).json({
      //       errors: errors.array(),
      //       message: 'Некорректные данные'
      //    })
      // }

      const { name, surname, email } = req.body;

      const user = new User ({ name, surname, email })
      
      await user.save();
      res.status(201).json(user)
     
   } catch (err) {
      res.status(500).json({ message: '...Error server user.routers !!!' })
   }
});

module.exports = router 