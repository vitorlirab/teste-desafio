import mongoose from 'mongoose';

export default mongoose.connect(
  'mongodb+srv://teste:teste@cluster0-9fkne.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  }
);
