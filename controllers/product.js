const db = require('../models')

// product indexpage
const index = (req, res) => {
    db.Product.find({}, (err, foundProduct) => {
        if(err) console.log('Error in finding product:', err)
        console.log(foundProduct)
        //if product is not found
        if(!foundProduct.length) return res.json({
            message: 'No product found in the DB'
        })

        res.status(200).json({ product: foundProduct})
    })
}

// Product showpage
const show = (req, res) => {
    db.Product.findById(req.params.id, (err, foundProduct) => {
        if(err) console.log('Error in product showing up', err)

        if(!foundProduct) return res.json({
            message: 'No product found by that ID in the DB'
        })

        res.json({ product: foundProduct })
    })
}
// add new product
const create = (req, res) => {
        db.Product.create(req.body, (err, saveProduct) => {
            if(err) console.log('Error in creating a product', err)
    
            res.json({ product: saveProduct })
        })
}

// update product
const update = (req, res) => {
        db.Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProduct) => {
            if(err) console.log('Error in updating product:', err)
    
            res.json({
                product: updatedProduct,
                message: "Update was successfull"
            })
        })
}

// delete product
const destroy = (req, res) => {
        console.log('this is the params id', req.params.id)
        db.Product.findByIdAndDelete(req.params.id, (err, deleteProduct) => {
            if(err) console.log('Error in deleting team:', err)
            console.log(deleteProduct)
    
            res.json({
                message: 'Team was deleted successfully!'
            })
        })
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}