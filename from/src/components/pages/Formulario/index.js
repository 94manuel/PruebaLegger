import { useEffect, useState } from "react"
import { Form, Row, Col, Container, View } from 'react-bootstrap'
import ButtonCuston  from '../../atoms/Button/Button';
import FormGroup from '../../molecules/FormGroup/FormGroup';
import FormSelect from '../../atoms/FormSelect/FormSelect';
import axios from 'axios'
import { ExportReactCSV } from '../../molecules/excel/ExportReactCSV'

function Todo(props) {
  const [ NombreCliente, setNombreCliente ] = useState("")
  const [ Nit, setNit ] = useState("")
  const [ NombreDelPunto, setNombreDelPunto ] = useState("")
  const [ NombreDelEquipo, setNombreDelEquipo ] = useState("")
  const [ Ciudad, setCiudad ] = useState("")
  const [ dataCiudad, setDataCiudad ] = useState([
    {value:"Bogota D.C",text:"Bogota D.C"},
    {value:"Tarqui",text:"Tarqui"},
    {value:"Garzon",text:"Garzon"},
  ])
  const [ Promotor, setPromotor ] = useState("")
  const [ RTC, setRTC ] = useState("")
  const [ Capitan, setCapitan ] = useState("")
  const [ estadoFormulario, setEstadoFormulario ] = useState(true)
  const [ip, setIP] = useState('');
  const [excel, setExcel] = useState([]);
  const [check, setCheck] = useState();

  var isLoading = false;

  const rtc = data => {
    if (data.target.value < 0) {
      setRTC("")
    } else if(Number.isInteger(data.target.value)) {
      setRTC("")
    } else {
      setRTC(data.target.value.replace(/[^0-9\d]/ig, ""))
    }
    console.log(data.target.value.replace(/[^0-9\d]/ig, ""));
  }
const getip = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data.IPv4);
    setIP(res.data.IPv4)
  }
  
  useEffect( () => {
    
    getip()

  }, [])
  const validar = () =>{
    if (NombreCliente == "") {
      alert("El Nombre Cliente no puede ser vacio");
      return false;
    } else if(Nit == ""){
      alert("El Nit no puede ser vacio");
      return false;
    }else if(check == undefined){
      alert("Tienes que aceptar los terminos y condiciones.");
      return false;
    }else{
      return true;
    }
  }
  const enviar = async(data) => {
    console.log(check);
    if (validar()) {
      setEstadoFormulario(false);
      setExcel(customers());
      const requestOptions = {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded'}),
        body: "NombreCliente="+NombreCliente+"&"+
        "NIT="+ Nit+"&"+
        "NombreDelPunto="+ NombreDelPunto+"&"+
        "NombreDelEquipo="+ NombreDelEquipo+"&"+
        "Ciudad="+ Ciudad+"&"+
        "Promotor="+ Promotor+"&"+
        "RTC="+ RTC+"&"+
        "Capitan="+ Capitan,
    };
      
    await fetch('http://127.0.0.1/', requestOptions)
        .then(response => response.json()).then(res => {
          if (res.success) {
            console.log(res);
          }else{
          //mensaje de error
          }
        });
    } else {
      
    }
    
  }
  const customers = () => {
    let custs = []
    for (let i = 0; i < 1; i++) {
      custs.push({
        NombreCliente: NombreCliente, 
        Nit: Nit,
        NombreDelPunto: NombreDelPunto, 
        NombreDelEquipo: NombreDelEquipo, 
        Ciudad: Ciudad,
        Promotor: Promotor,
        RTC: RTC,
        Capitan: Capitan,
        ip: ip
      });
    }
    console.log(custs);
    return custs;
  }


  return (
    <div className="form">
      <div style={{ display: !estadoFormulario ? "" : "none", textAlign: "center" }}>
        <div>Gracias</div>        
        <div className="col-md-4 center">
          <ExportReactCSV csvData={excel} fileName={"DatosUsuario"} />
        </div>
      </div>
      <Form action="#" style={{ display: estadoFormulario ? "" : "none" }}>
        <Row>
          <label><label className="numero">1.</label> Incriccion punto de venta</label>
        </Row>
        <Row>
          <Col>
            <FormGroup 
              controlId="NombreCliente"
              label='Nombre del Cliente' 
              type="text"
              placeholder="Nombre del Cliente"
              name='NombreCliente'
              value={NombreCliente}
              required={true}
              onChange={(e) => setNombreCliente(e.target.value.replace(/[^a-zA-Z/á/é/í/ó/ó/ñ]/ig, ""))}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup 
              controlId="NIT"
              label='NIT' 
              type="text"
              placeholder="NIT"
              name='NIT'
              value={Nit}
              required={true}
              onChange={(e) => setNit(e.target.value.replace(/[^a-zA-Z\d]/ig, ""))}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup 
              controlId="Nombre del punto"
              label='Nombre del punto' 
              type="text"
              placeholder="Nombre del punto"
              name='NombreDelPunto'
              value={NombreDelPunto}
              onChange={(e) => setNombreDelPunto(e.target.value.replace(/[^a-zA-Z\d]/ig, ""))}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup 
              controlId="Nombre del equipo"
              label='Nombre del equipo' 
              type="text"
              placeholder="Nombre del equipo"
              name='NombreDelEquipo'
              value={NombreDelEquipo}
              onChange={(e) => setNombreDelEquipo(e.target.value.replace(/[^a-zA-Z\d]/ig, ""))}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "9%" }}>
          <Col>
            <FormSelect 
              onChange={(e) => setCiudad(e.target.value)}
              select={dataCiudad}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup 
              controlId="Promotor"
              label='Promotor' 
              type="text"
              placeholder="Promotor"
              name='Promotor'
              value={Promotor}
              onChange={(e) => setPromotor(e.target.value.replace(/[^a-zA-Z\d]/ig, ""))}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup 
              controlId="RTC"
              label='RTC' 
              type="text"
              placeholder="RTC"
              name='RTC'
              value={RTC}
              onChange={(e) => rtc(e)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup 
              controlId="Capitan"
              label='Capitan y/o Usuario (Solo Minusculas)' 
              type="text"
              placeholder="Capitan y/o Usuario (Solo Minusculas)"
              name='Capitan'
              value={Capitan}
              onChange={(e) => setCapitan(e.target.value.replace(/[^a-zA-Z\d]/ig, ""))}
            />
          </Col>
        </Row>
        <Row>
        <Form.Group className="mb-3">
          <Form.Check 
          onChange={(e) => setCheck(e.target.value)}
          type="checkbox" 
          label="He leido y acepto las politicas de Tratamiento de Datos Personales Conoce los terminos y condiciones " required/>
        </Form.Group>
        </Row>
        <Row>
        <ButtonCuston 
            variant="primary" 
            onClick={() => enviar(this)}
            //disabled={isLoading}
            text={isLoading ? '...loading' : 'Seguimiento'}
            />
        </Row>
      </Form>
    </div>
  )
}


export default Todo