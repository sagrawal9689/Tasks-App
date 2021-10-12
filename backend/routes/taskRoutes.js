import express from 'express'
const router = express.Router()
import {
    createTask,
    getTasks,
    updateTask,
    deleteTask
} from '../controllers/taskController.js'
import { protect } from '../middlewares/authMiddleware.js'


router.route('/').get(protect,getTasks).post(protect,createTask).patch(protect,updateTask).delete(protect,deleteTask)

export default router