import React from 'react';
import { Container } from 'reactstrap'
import Header from './components/Header'
import MessagesList from './components/MessagesList'
import MessagesToolbar from './components/MessagesToolbar'

function App() {
  return (
    <Container fluid>
      <Header />
      <MessagesToolbar />
      <MessagesList />
    </Container>
  );
}

export default App;
