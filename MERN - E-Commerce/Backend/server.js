const app = require("./app");
// const dotenv = require("dotenv");
const connectDatabase = require("./database");
const cors = require("cors"); 
// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "Backend/config/config.env" });
}
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'https://master--golden-bavarois-befcbf.netlify.app');
//   next();
// });
const corsOptions ={
  origin: ['https://macommerce-ndrj.onrender.com', 'https://illustrious-crepe-c524d2.netlify.app'],
    credentials:true,           
}
app.use(cors(corsOptions));
connectDatabase();



const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});




// handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error message : ${err.message}`);
  console.log("Closing Server due to uncaught exception");
  process.exit(1);
});



// Unhandled promise rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error message : ${err.message}`);
  console.log("Closing Server due to Unhandled promise rejection");

  server.close(() => {
    process.exit(1);
  });
});


