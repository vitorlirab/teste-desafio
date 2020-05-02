import { format } from 'date-fns';
import Msg from '../Models/Mensagem';

class MensagemController {
  async index(req, res) {
    const msg = await Msg.find().sort('-createdAt');

    return res.json(msg);
  }

  async store(req, res) {
    const { autor, conteudo } = req.body;

    const formattedDate = format(new Date(), 'dd/MM/yy HH:mm');

    const [data, horario] = formattedDate.split(' ');

    const msg = await Msg.create({
      autor,
      conteudo,
      data,
      horario,
    });

    req.io.emit('msg', msg);

    return res.json(msg);
  }
}
export default new MensagemController();
