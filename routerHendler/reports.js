const express = require('express')
const mongoose = require('mongoose');
const router = express.Router();
const ReportsSchema = require("../SchemaHendler/reportsSchema")
const Reports = new mongoose.model("Reports", ReportsSchema);

router.post('/', async (req, res) => {
    const newReport = new Reports(req.body);
    await newReport.save((err, doc) => {
        if (err) {
            res.status(500).json({
                error: err
            })
        } else {
            res.status(200).json({
                status: "success",
                reportID: doc._id
            })
        }
    })
});

router.get('/reportID/:id', async (req, res)=>{
    console.log(req.params.id);
    const getReport = await Reports.find({_id: req.params.id}).exec()
    res.send(getReport)
})

module.exports = router