const mongoose = require("mongoose");
const { Schema } = mongoose;
const examResultSchema = new Schema(
  {
    student: {
      type: Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    exam: {
      type: Schema.Types.ObjectId,
      ref: "Exam",
      required: true,
    },
    grade: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    passMark: {
      type: Number,
      required: true,
      default: 50,
    },
    status: {
      type: String,
      required: true,
      enum: ["failed", "passed"],
      default: "failed",
    },
    remark: {
      type: String,
      required: true,
      enum: ["excellent", "good", "poor"],
      default: "poor",
    },
    position: {
      type: Number,
      required: true,
    },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Subject"
    },
    academicTerm: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"AcademicTerm"
    },
    academicYear: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"academicYear"
    },
    classLevel: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"ClassLevel"
    }, 
    isPublished:{
      type:Boolean,
      required:true,
    },
  },
  { timestamps: true }
);

const ExamResult = mongoose.model("ExamResult", examResultSchema);
module.export = ExamResult;
