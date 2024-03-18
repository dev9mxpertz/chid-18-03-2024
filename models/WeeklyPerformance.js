const mongoose = require("mongoose");

const Weeklyperformanceschema = new mongoose.Schema({
  StudentId: { type: String },
  Weekstartingdate: { type: Date },
  Weekendingingdate: { type: Date },
  QuestionsCorrectCount: { type: Number, default: 0 },
  QuestionsWrongCount: { type: Number, default: 0 },
  TotalquestionsattemptedCount: { type: Number, default: 0 },
  Createdate: { type: Date, default: Date.Now },
  Title:{type: String},
 QuestionsCorrect: [{
    question: { type: String, },
    options: [{ type: String }],
    answer: { type: String, },
    title: { type: String },
    qid: { type: String },
    difficultyLevel: { type: String, },
  }],
  QuestionsWrong: [{
    question: { type: String, },
    options: [{ type: String }],
    answer: { type: String,  },
    title: { type: String },
    qid: { type: String },
    difficultyLevel: { type: String,  },
  }],
});

const Weeklyperformance = mongoose.model("Weeklyperformance",Weeklyperformanceschema);

module.exports = Weeklyperformance;
