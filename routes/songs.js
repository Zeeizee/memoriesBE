import express from "express"
const router = express.Router()


router.get("/",(req,res)=>{
    res.send("All Songs")
})

router.get("/add",(req,res)=>{
    res.send("add Songs")
})
router.get("/save",(req,res)=>{
    console.log('abcd')
    res.send("save Songs")
})

export default router;