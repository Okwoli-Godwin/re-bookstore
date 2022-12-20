import mongoose from "mongoose";

const URI: string = "mongodb://localhost/booksDB";
const lifeURI: string = "mongodb+srv://Godwin:mynetwork@cluster0.8usbdhw.mongodb.net/Bookstore?retryWrites=true&w=majority";
  
// mongodb+srv://Godwin:<password>@cluster0.8usbdhw.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(lifeURI);
mongoose.connection
  .on("open", () => {
    console.log("DataBase Connected");
  })
  .once("error", (error) => {
    console.log(`Failed to Connect to the Database\n ${error}`);
  });