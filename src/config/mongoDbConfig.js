import mongoose from 'mongoose';

export const connectMongo = () => {
  const url = 'mongodb://localhost:27017/ntdl';
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('DB connected'))
    .catch((error) => console.log(error));
};
