

const renderUpLoadProductView=(req,res) =>{
    return res.render('products');
}

const renderSuccessProductCreated=(req,res) =>{

    const name=req.body.product_name;
    const description= req.body.product_descpription;
    const price=req.body.product_price;
  //creacion del producto en base de datos 

  return res.render ('product-created', {
    product_name:name,
    product_descpription:description,
    product_price:price
  })
}

module.exports={
    renderUpLoadProductView ,
    renderSuccessProductCreated
} 