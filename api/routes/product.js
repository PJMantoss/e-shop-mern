const Product = require("../models/Product");

const {
    verifyToken, 
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);

    try{
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    }catch(err){
        res.status(500).json(err);
    }
})

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

    try{
        const updatedProduct = await User.findByIdAndUpdate(
            req.params.id, 
            {
                $set: req.body
            },
            {
                new: true
            },
            );

            res.status(200).json(updatedProduct);
    }catch(err){
        res.status(500).json(err)
    }
});

// DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted...")
    }catch(err){
        res.status(500).json(err);
    }
});

//GET product
router.get("/find/:id", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// //GET USERS STATS
// router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//     try{
//         const data = await User.aggregate([
//             { $match: { createdAt: { $gte: lastYear } } },
//             {
//                 $project: {
//                     month: { $month: "createdAt" }
//                 }
//             },
//             {
//                 $group: {
//                     _id: $month,
//                     total: { $sum: 1 }
//                 }
//             }
//         ]);

//         res.status(200).json(data);
//     }catch(err){
//         res.status(500).json(err);
//     };
// });

module.exports = router;