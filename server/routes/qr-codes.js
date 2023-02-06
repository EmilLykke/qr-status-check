const router = require("express").Router();
let QrCode = require("../models/qrcode.model");

router.route("/").get((req,res)=>{
    QrCode.find().then(qr_codes=>res.json(qr_codes)).catch(err=>res.status(400).json("error: "+ err));
});

router.route("/add").post((req,res)=>{
    const username = req.body.username;
    const item = req.body.item;
    const qr = req.body.qr;
    const description = req.body.description;
    const lastStatus = Date.parse(req.body.lastStatus);

    const newQrCode = new QrCode({
        username,
        item,
        qr,
        description,
        lastStatus,
    });

    newQrCode.save().then(()=>res.json("QrCode added!")).catch(err => res.status(400).json("Error: "+ err));

});

router.route("/:id").get((req,res)=>{
    QrCode.findById(req.params.id).then(qr_code=>res.json(qr_code)).catch(err=>res.status(400).json("error: "+ err));
});

router.route("/:id").delete((req,res)=>{
    QrCode.findByIdAndDelete(req.params.id).then(()=>res.json("QR code deleted")).catch(err=>res.status(400).json("error: "+ err));
});


router.route("/update/:id").post((req,res)=>{
    QrCode.findById(req.params.id).then(qr_code=>{
        qr_code.username = req.body.username;
        qr_code.item = req.body.item;
        qr_code.qr = req.body.qr;
        qr_code.description = req.body.description;
        qr_code.lastStatus = Date.parse(req.body.lastStatus);

        qr_code.save().then(()=>res.json("QR code Updated!")).catch(err => res.status(400).json("Error: "+ err));
    })
    .catch(err=>res.status(400)
    .json("error: "+ err));

});



module.exports = router;