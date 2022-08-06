const express= require('express');
const { renderUpLoadProductView, renderSuccessProductCreated } = require('../controllers/product');
const router=express.Router();

router.get('/cargar-producto', renderUpLoadProductView);
router.post('/cargar-producto',renderSuccessProductCreated);


module.exports=router;