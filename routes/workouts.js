const express= require('express')
// const Workout = require('../models/workoutModel')
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// router.get('/',(req,res)=>{
//     res.json({msg:"Get all workouts"})
// })

router.get('/',getWorkouts)

router.get('/:id',getWorkout)

// router.post('/', async (req,res)=>{
//     const {title,load,reps} = req.body

//     try{
//         const workout = await Workout.create({title,load,reps})
//         res.status(200).json(workout) 
//     }catch(error){
//         res.status(400).json({error:error.message})
//     }
//     res.json({msg:"post a new workout"})
// })

router.post('/', createWorkout)

router.delete('/:id',(deleteWorkout))

router.patch('/:id',updateWorkout)

module.exports = router