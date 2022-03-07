const Order = require("../models/Order");

const {
    verifyToken, 
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);

    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }catch(err){
        res.status(500).json(err);
    }
})

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

    try{
        const updatedOrder = await User.findByIdAndUpdate(
            req.params.id, 
            {
                $set: req.body
            },
            {
                new: true
            },
            );

            res.status(200).json(updatedOrder);
    }catch(err){
        res.status(500).json(err)
    }
});

// DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted...")
    }catch(err){
        res.status(500).json(err);
    }
});

//GET USER ORDER
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
      const order = await Order.find(req.params.id);
      
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET ALL
router.get("/", verifyTokenAndAdmin, async (req, res) => {

    try{
        const order = await Order.find();

        res.status(200).json(order)
    }catch(err){
        res.status(500).json(err);
    }
});

//GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try{
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: prevMonth } } },
            {
                $project: {
                    month: {$month: "$createdAt"},
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$amount",
                    total: {$sum: "$sales"},
                },
            },
        ]);
    }catch(err){
        res.status(500).json(err);
    };
});

module.exports = router;