import express from 'express'
const router = express.Router()
import {
    createTask,
    getTasks
} from '../controllers/taskController.js'
import { protect } from '../middlewares/authMiddleware.js'


router.route('/').get(protect,getTasks).post(protect,createTask)

export default router