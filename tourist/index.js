const  express  = require ("express");
const dotenv = require ("dotenv")
const routes = require ("./routes");
const connectDB = require("./db");
dotenv.config()

const app = express();

app.use(express.json())



const PORT = process.env.PORT || 9000

connectDB()

app.use("/api", routes)

// index page API

app.get("/", (req, res) =>{ 
    res.status(200).json({msg: "Welcome to Pjazz Backend"})
}) 

app.use(express.json())   

 
app.listen(PORT, (req, res) =>{
    console.log(`Tourist sever running on port ${PORT}`)
})     