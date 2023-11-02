const dotenv = require('dotenv'); // loads environment variables from .env file
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

const config = {
  port: process.env.PORT,
  mongo_db_url: process.env.MONGO_DB_URL,
  mongo_db_password: process.env.MONGO_DB_PASSWORD,
};

export default config;
