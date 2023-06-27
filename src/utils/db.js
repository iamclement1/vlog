import mongoose from "mongoose";

const connect = async () => {
   try {
      await mongoose.connect(process.env.MONGO);
   } catch (error) {
      throw new Error("Couldn't connect to Mongo server: " + error );
   }
};

export default connect;