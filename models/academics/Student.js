const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    studentId: {
      type: String,
      required: true,
      default: function () {
        return (
          "STU" +
          Math.floor(10 + Math.random() * 90) +
          Date.now().toString().slice(2, 4) +
          this.name
            .split(" ")
            .map((name) => name[0])
            .join("")
            .toUpperCase()
        );
      },
    },

    role: {
      type: String,
      default: "Student",
    },

    classLevels: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ClassLevel",
        required: true,
      },
    ],
    currentClassLevel: {
      type: String,
      default: function () {
        return this.classLevels[this.currentClassLevel.length - 1];
      },
    },
    academicYear: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AcadmicYear",
      required: true,
    },
    dateAdmitted: {
      type: Date,
      default: Date.now,
    },
    examResults: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ExamResult",
      required: true,
    },
    program: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Program",
      required: true,
    },
    isPromotedTo200L: {
      type: Boolean,
      default: false,
    },
    isPromotedTo300L: {
      type: Boolean,
      default: false,
    },
    isPromotedTo400L: {
      type: Boolean,
      default: false,
    },
    isGraduated: {
      type: Boolean,
      default: false,
    },
    isWithdrawn: {
      type: Boolean,
      default: false,
    },
    isSuspended: {
      type: Boolean,
      default: false,
    },
    prefectName: {
      type: String,
    },
    yearGraduated: {
      type: String,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);
module.export = Student;
