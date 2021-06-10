import mongoose from "mongoose";

const connection = {}

const connectDB = async () => {
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
  const db = await mongoose.connect( process.env.MONGO_DB, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true
  })

  console.log("DB Connected to", db.connection.host);
  connection.isConnected = db.connections[0].readyState
}

export default connectDB