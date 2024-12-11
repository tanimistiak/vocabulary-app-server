const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const uri = process.env.MONGO_URI
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
