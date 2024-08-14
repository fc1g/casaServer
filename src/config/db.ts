import mongoose from 'mongoose';

const connectDB = async (mongoURI: string) => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Database is connected');
  } catch (error: any) {
    console.log(error.message);
  }
};

export default connectDB;
