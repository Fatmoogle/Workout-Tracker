const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

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
        type: Number
    },

    // distance is used only if the user had a cardio workout
    distance: {
        type: Number
    }
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;

// * As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.


// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const transactionSchema = new Schema({
//   name: {
//     type: String,
//     trim: true,
//     required: "Enter a name for transaction"
//   },
//   value: {
//     type: Number,
//     required: "Enter an amount"
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
// });

// const Transaction = mongoose.model("Transaction", transactionSchema);

// module.exports = Transaction;
