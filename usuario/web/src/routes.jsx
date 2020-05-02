import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Msg from './pages/Mensagem';
import Participantes from './pages/Participantes';
// import { Container } from './styles';
import Login from './pages/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/participantes" component={Participantes} />
        <Route path="/msg" component={Msg} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
