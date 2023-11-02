import { app } from './app';
import config from './config/config';
import { connectMongoDB } from './config/mongodb';

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server successfully started on port: ${PORT}`);
  connectMongoDB();
});
