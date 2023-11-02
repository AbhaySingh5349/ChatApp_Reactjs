import mongoose from 'mongoose';
import config from './config';

const connectMongoDB = async () => {
  const MONGOOSE_PASSWORD = config.mongo_db_password;
  const MONGOOSE_URL = config.mongo_db_url?.replace(
    '<PASSWORD>',
    MONGOOSE_PASSWORD!
  );

  try {
    // db is present at other pod and to connect with that we have to go through ClusterIP service

    await mongoose.connect(MONGOOSE_URL!);
    console.log('mongodb is connected');
  } catch (err) {
    console.log('error connecting mongodb: ', err);
  }
};

export { connectMongoDB };
