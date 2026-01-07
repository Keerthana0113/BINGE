const express=require("express")
const router=express.Router()
router.use(logger)
router.get('/',(req,res)=>{
    res.send('user list')
})


router.get("/new",(req,res)=>{
    res.render("users/new",)
})

router.post('/',(req,res)=>{
    console.log(req.body.firstName)
    res.send("Hi")
})

router.get("/:id",(req,res)=>{
    req.params.id
    req.send('Get user with Id ${req.params.id}')
})

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}

module.exports = router