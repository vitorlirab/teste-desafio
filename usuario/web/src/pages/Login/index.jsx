import React, { useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';

export default function Login({ history }) {
  const [username, setUsername] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    await api.post('/login', username);
    localStorage.setItem('username', username);
    history.push('/msg');
  }

  return (
    <>
      <Container onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Seu Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </Container>
    </>
  );
}
