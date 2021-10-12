import Task from '../models/taskModel.js'
import catchAsync from '../utils/catchAsync.js'
import AppError from './../utils/appError.js'

const getTasks = catchAsync(async (req, res,next) => {

    const tasks = await Task.find( { user: req.user._id } )

    res.status(200).json({
        tasks
    })
})

const createTask = catchAsync(async (req, res,next) => {
  
    const {
      description
    } = req.body
  
    const createdTask = await Task.create({
        user: req.user._id,
        description
    })
  
    res.status(201).json(createdTask)
})

export{
    getTasks,
    createTask
}