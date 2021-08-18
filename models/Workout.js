const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        "default": new Date()
    },
    exercises: {
        type: Array,
        "default": []
    },
    totalDuration: {
        type: Number,
        "default": 0
    }
});

WorkoutSchema.methods.setTotalDuration = function() {
    let totalDuration = 0
    this.exercises.forEach(exercise => {
        totalDuration += exercise.duration;
    })
    this.totalDuration = totalDuration
}

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;