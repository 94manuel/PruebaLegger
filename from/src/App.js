import logo from './logo.svg';
import fondo from './images/fondo.jpg';
import TEXTURAS from './images/TEXTURAS.png';
import KV from './images/KV.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Formulario from './components/pages/Formulario/index'
var {XLSX} = require("xlsx");

function App() {
  
  return (
    <div className='Portada'>      
      <img src={fondo} className="Fondo-Portada" alt="logo" />
      <Container>
        <img src={TEXTURAS} className="Logo" alt="logo" />
        <Row className='tablas'>
          <Col sm="6" md="6" lg="6" className='logoHome'>
           <img src={KV} className="Logo" alt="logo" />
          </Col>
          <Col sm="6" md="" lg="">
            <Formulario className='formulario'/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
