const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Please enter a name for the exercise."
            },
            type: {
                type: String,
                trim: true,
                required: "Please enter the type of exercise."
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            duration: {
                type: Number,
                required: "Please enter the duration of your session"
            },
            // distance is used only if the user had a cardio workout
            distance: {
                type: Number
            }
        }
    ]
},
    {
    toJSON: {
        virtuals: true
    }
});

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;