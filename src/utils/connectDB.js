import mongoose, { Mongoose } from "mongoose";

const connection = {}

const connectDB = () => {
    /**
   * check if db available as NextJS sometimes will dispose inactive api
   */
    if (connection.isConnected) {
        console.log("Using existing connection");
        return
    }

    /**
   * use the new database connection
   */
  const db = await Mongoose.connect( process.env.MONGODB, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true
  })

  console.log("DB Connected to" , db.connection.host);
  connection.isConnected = db.connections[0].readyState
}

export default connectDB