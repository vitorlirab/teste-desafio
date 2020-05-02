class ParticipantesController {
  index(req, res) {
    const participantes = [];

    for (let i = 1; i <= 117; i++) {
      participantes.push(`Participante_${i}`);
    }

    return res.json(participantes);
  }
}

export default new ParticipantesController();
