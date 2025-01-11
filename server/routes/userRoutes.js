import express from 'express'
import { registerUser, loginUser, userCredits, payment, verifyPay } from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js'


const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits', userAuth, userCredits)
userRouter.post('/pay-razor', userAuth, payment)
userRouter.post('/verify-razor', verifyPay)

export default userRouter

// localhost:4000/api/user/register