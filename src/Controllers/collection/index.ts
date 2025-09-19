import {Router} from 'express'

const userRouter:Router = Router()

userRouter.get("/collection",(req,res) =>{
    res.send("Collection Route")
})


export {userRouter}