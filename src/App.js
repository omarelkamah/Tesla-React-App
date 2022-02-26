import './App.css';
import styled from 'styled-components';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

const Container = styled.div``

function App() {
  return (
    <Container>
      <Navbar />
      <Home />
    </Container>
  );
}

export default App;
