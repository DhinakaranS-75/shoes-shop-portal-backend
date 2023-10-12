import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://admin:admin123456@shoeshshop.023lmcy.mongodb.net/shoeDatabase?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected Sucessfull`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
