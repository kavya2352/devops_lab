const mongoose = require('mongoose');

const mongodbConnect = async () => {
 try {
   await mongoose.connect(
     process.env.MONGO_URI,
     {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     },
     console.log('MongoDB Connected...')
   );
 } catch (err) {
   console.error(err.message);

   // Exit process with failure
   process.exit(1);
 }
};
module.exports = mongodbConnect;


// const mongoose = require("mongoose");

// const mongodbConnect = async () => {
//   try {
//     const uri = process.env.MONGO_URI;
//     if (!uri) {
//       throw new Error("MongoDB connection URI is missing. Check .env file!");
//     }

//     await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("MongoDB Connected...");
//   } catch (error) {
//     console.error("MongoDB connection error:", error.message);
//     process.exit(1);
//   }
// };

// module.exports = mongodbConnect;
