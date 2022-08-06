const express= require('express');
const { renderUpLoadProductView } = require('../controllers/product');
const router=express.Router();

router.get('/cargar-producto', renderUpLoadProductView);


module.exports=router;