import logo from './logo.svg';
import './App.css';
import RootComponent from './components/RootComponent'
import styled from 'styled-components'

const Container = styled.div`
  display: block;
  height: 100%;
`

function App() {
  return (
 
    <Container>
      <RootComponent/>
    </Container>
  );
}

export default App;
