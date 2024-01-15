const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    // await mongoose.connect("mongodb+srv://vikasgupta46276:201119019@cluster0.qvxg9sb.mongodb.net/");
    // await mongoose.connect("mongodb+srv://vikasgupta46276:201119019@cluster0.qvxg9sb.mongodb.net/?retryWrites=true&w=majority");
    await mongoose.connect(process.env.MONGO_URL);
    // await mongoose.connect("mongodb://localhost:27017");
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
 
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;



