import mongoose,{connect} from "mongoose";
require('dotenv').config();
const connectionURL = process.env.MONGOURL;

if (!connectionURL) {
    console.error('MONGOURL environment variable is not defined.');
    process.exit(1); // Exit the process with an error code
  }

export  const dbConnection = async()=>{
    await mongoose.connect(connectionURL).then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
}
