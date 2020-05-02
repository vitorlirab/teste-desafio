import React, { useState, useEffect } from 'react';
import api from '../../services/api';
// import { Container } from './styles';

export default function Participantes() {
  const [participantes, setParticipantes] = useState([]);

  useEffect(() => {
    async function loadParticipantes() {
      const response = await api.get('/participantes');

      setParticipantes(response.data);
    }
    loadParticipantes();
  }, [participantes]);

  return (
    <>
      <h1>Participantes</h1>
      <div>
        {participantes.map((participante) => (
          <ul>
            <li>
              <span key={participante}>{participante}</span>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}
