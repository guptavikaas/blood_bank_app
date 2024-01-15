const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const path=require('path');
//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

console.log('MongoDB URL:',process.env.MONGO_URL);

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Welcome to blood bank",
    })
})

//routes
// 1 test route
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));


app.use(express.static(path.join(__dirname,'./client/build')))


app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})
//port
const PORT = 8080;



app.listen(PORT, () => {
    console.log(`Node Server Running In ${process.env.DEV_MODE} Mode On Port ${PORT}`);
  });