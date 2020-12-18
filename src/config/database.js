import mongoose from 'mongoose';

const mongodbUrl = process.env.MONGODB_URL || 'mongodb+srv://user:livro123@cluster0.vxmqm.mongodb.net/dbLivroApis?retryWrites=true&w=majority';

const connect = () => mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export default {
  connect,
  connection: mongoose.connection
}