import * as mongoose from 'mongoose';

mongoose.connection.on('connected', () => console.log('MongoDB connection established'));

mongoose.connection.on('reconnected', () => console.log('MongoDB connection reestablished'));

mongoose.connection.on('disconnected', () => console.log('MongoDB connection disconnected'));

mongoose.connection.on('close', () => console.log('MongoDB connection closed'));

mongoose.connection.on('error', (err: Error) => {
  console.log(`MongoDB ERROR: ${err.message}`);
  process.exit(1);
});

const connectMongo = (): void => {
  const connectionUri = process.env.MONGO_URL;

  const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose
    .connect(connectionUri, config)
    .then(() => console.log('MongoDB connected with success'))
    .catch((err: Error) => {
      console.log(`MongoDB ERROR: ${err.message}`);
      process.exit();
    });
};

export default connectMongo;
