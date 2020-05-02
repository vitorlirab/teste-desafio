import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import loadMsgSocket from '../../services/websocket';

import { Container } from './styles';

export default function Mensagem({ history }) {
  const [msgs, setMsgs] = useState([]);
  const [conteudo, setConteudo] = useState('');

  const autor = localStorage.getItem('username');

  useEffect(() => {
    async function loadMsg() {
      const response = await api.get('/msg');

      setMsgs(response.data);
    }
    loadMsg();
  }, [msgs]);
  useEffect(() => {
    loadMsgSocket(
      (msg) => {
        setMsgs([msg, ...msgs]);
      },
      [msgs]
    );
  }, [msgs]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      autor,
      conteudo,
    };
    await api.post('/msg', data);
    setConteudo('');
  }
  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Bem vindo(a) {autor}</h1>
      <Container>
        <ul>
          {msgs.map((msg) => (
            <li key={msg._id}>
              <span>
                {msg.data} - <strong>{msg.autor}</strong> - {msg.horario}
              </span>
              <p>=> {msg.conteudo}</p>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
          />
          <button type="submit">Enviar</button>
          <button type="button" onClick={handleLogout}>
            Sair
          </button>
        </form>
      </Container>
    </>
  );
}
