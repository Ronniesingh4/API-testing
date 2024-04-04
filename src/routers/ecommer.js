const express = require("express");
const router = new express.Router();
const CommerceRanking = require("../models/commerce");

router.post("/commerce", async (req, res) => {
    try {
        const { ranking, name, company, price, color, image, description, category, featured } = req.body;
        
        const addingCommerceRecord = new CommerceRanking(req.body);
        console.log(req.body);

        const savedRecord = await addingCommerceRecord.save();
        
        res.status(201).send(savedRecord);
    } catch (error) {
        res.status(500).send(error);
    }
});



router.get("/commerce", async (req, res) => {
    try {
     const getcommerce = await CommerceRanking.find({});
        
        res.status(201).send(getcommerce);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.get("/commerce/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getcommerce= await CommerceRanking.findById(_id);
        if (!getcommerce) {
            return res.status(404).send("Men's ranking not found");
        }
        res.status(200).send(getcommerce);
    } catch (e) {
        res.status(400).send(e.message);
    }
});


module.exports = router;