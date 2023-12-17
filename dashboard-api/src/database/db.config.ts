import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log("Conexão bem sucedida");
  } catch (error) {
    console.error("Erro na conexão", error);
  }
};
