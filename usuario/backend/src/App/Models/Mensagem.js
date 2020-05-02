import { Schema, model } from 'mongoose';

const MsgSchema = new Schema(
  {
    autor: String,
    conteudo: String,
    data: String,
    horario: String,
  },
  {
    timestamps: true,
  }
);

export default model('Mensagem', MsgSchema);
