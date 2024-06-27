const mongoose = require("mongoose");
const dbConnect = async () => {
  try {
    //note password is saint50.
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected successfully");
  } catch (error) {
    console.log("DB connection failed", error.message);
  }
};
dbConnect();

// const mongoose = require("mongoose");
// const dbConnect = async () => {
//   try {
//       //note password is saint50.
//     await mongoose.connect("mongodb+srv://saint50:saint50.@cluster0.kt3qi6p.mongodb.net/LMS?retryWrites=true&w=majority&appName=Cluster0");
//   } catch (error) {
//     console.log("DB connection failed", error.message);
//   }
// };
// dbConnect()
