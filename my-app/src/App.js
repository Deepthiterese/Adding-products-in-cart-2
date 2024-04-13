import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Main } from './components/Main';
import {Container} from "react-bootstrap";

function App() {
  return (
    <div className='App'>
    <Container>
    <Main/>
    </Container>
    </div>
  );
}

export default App;
