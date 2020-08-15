const { Router } = require('express');
const User = require('../models/User');

const router = Router();

router.get('/', async (req, res) => { 
   try { 
     const users = await User.find(req.params.id) 
     res.json(users) 
   } catch (err) {
      res.status(500).json({ message: '...Error server get.routers!!!' })
   }
});

module.exports = router