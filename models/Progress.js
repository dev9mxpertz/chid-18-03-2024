const mongoose = require("mongoose");

const Progressschema = new mongoose.Schema({
  //   Title:{type: String},
  StudentId: {
    type: mongoose.Types.ObjectId,
    ref:"student"
  },
  QuestionsCorrect: [],
  QuestionsWrong: [],
});

const Progress = mongoose.model("Progress", Progressschema);

module.exports = Progress;
