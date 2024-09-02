const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://vivek:Vivek2468@cluster0.tnqaa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/book-management', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Connection error', err.message);
  }
};

module.exports = connectDB;
