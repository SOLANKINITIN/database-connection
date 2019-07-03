const express = require("express");
const router = express.Router();
const Model = require("../Model/Model");


router.get("/", (req, res, next) => {
    res.render("home")
})

router.post("/", (req, res, next) => {
    
    const model = new Model({
        DisecaseName: req.body.DisecaseName,
        Summary: req.body.Summary,
        Cause: req.body.Cause,
        mediciense: req.body.mediciencse

    })
    model.save((error)=>{
        if(error){

        
        console.log("Added To The Database")
        }else{
            res.redirect("/admin")
        }
    })


})

module.exports = router;