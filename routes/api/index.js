const router = require('express').Router();
const {Workout} = require('../../models')

router.get("/workouts", async (req, res) => {
    const workoutData = await Workout.find({})
    workoutData.forEach(workout => {
        workout.setTotalDuration()
    })
    res.json(workoutData);
})

router.post("/workouts", async (req, res) => {
    const newWorkout = await Workout.create({exercises: [], day: new Date()})
    res.json(newWorkout);
})

router.put("/workouts/:id", async (req, res) => {
    const updateWorkout = await Workout.findOne({_id: req.params.id})
    updateWorkout.exercises.push(req.body)
    updateWorkout.setTotalDuration()
    await updateWorkout.save()
    res.json(updateWorkout);
})

router.get("/workouts/range", async (req, res) => {
    const lastSeven = await Workout.find({}).sort({'day': -1}).limit(7)
    lastSeven.forEach(workout => {
        workout.setTotalDuration()
    })
    res.json(lastSeven)
})

module.exports = router;
