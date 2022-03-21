import { Form, Row, Col } from 'react-bootstrap'
import ButtonCuston  from '../../atoms/Button/Button';
import FormGroup from '../../molecules/FormGroup/FormGroup';

const AddressFrom = ({ show, setShow, formFrom, setFormValueFrom, setFrom, isLoading, error },props) =>{

  return(<>
    <>
      <Form>
        <label>Datos remitente</label>
        <Row>
          <Col md={3}>
            <FormGroup 
              controlId="formCountry"
              label='Country' 
              type="text"
              placeholder="MX"
              name='countryFrom'
              onChange={(e) => setFormValueFrom({ ...formFrom, country: e.target.value})}
            />
          </Col>
          <Col md={3}>
            <FormGroup 
              controlId="formProvince"
              label='Province' 
              type="text"
              placeholder="Ciudad de México"
              name='provinceFrom'
              onChange={(e) => setFormValueFrom({ ...formFrom, province: e.target.value})}
            />
          </Col>
          <Col md={3}>
            <FormGroup 
              controlId="formCity"
              label='City' 
              type="text"
              placeholder="Azcapotzalco"
              name='cityFrom'
              onChange={(e) => setFormValueFrom({ ...formFrom, city: e.target.value})}
            />
          </Col>
          <Col md={3}>
            <FormGroup 
              controlId="formZip"
              label='Zip' 
              type="text"
              placeholder="Zip"
              name='ZipFrom'
              onChange={(e) => setFormValueFrom({ ...formFrom, zip: e.target.value})}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup 
              controlId="formNameFrom"
              label='Name' 
              type="text"
              placeholder="Jose Fernando"
              name='nameFrom'
              onChange={(e) => setFormValueFrom({ ...formFrom, name: e.target.value})}
            />
          </Col>
          <Col md={4}>
            <FormGroup 
              controlId="formAddress1"
              label='Address 1' 
              type="text"
              placeholder="Av. Principal #234"
              name='address1From'
              onChange={(e) => setFormValueFrom({ ...formFrom, address1: e.target.value})}
            />
          </Col>
          <Col md={4}>
            <FormGroup 
              controlId="formCompany"
              label='Company' 
              type="text"
              placeholder="skydropx"
              name='companyFrom'
              onChange={(e) => setFormValueFrom({ ...formFrom, company: e.target.value})}
            />
          </Col>
        </Row>
        <Row>  
          <Col md={4}>
            <FormGroup 
              controlId="formAddress2"
              label='Address 2' 
              type="text"
              placeholder="Centro"
              name='address2From'
              onChange={(e) => setFormValueFrom({ ...formFrom, address2: e.target.value})}
            />
          </Col>
          <Col md={4}>
            <FormGroup 
              controlId="formPhone"
              label='Phone' 
              type="number"
              placeholder="Phone"
              name='phoneFrom'
              onChange={(e) => setFormValueFrom({ ...formFrom, phone: e.target.value})}
            />
          </Col>
          <Col md={4}>
            <FormGroup 
              controlId="formEmail"
              label='Email' 
              type="email"
              placeholder="Email"
              name='emailFrom'
              onChange={(e) => setFormValueFrom({ ...formFrom, email: e.target.value})}
            />
          </Col>
        </Row>
      </Form>
      <ButtonCuston 
          variant="primary" 
          onClick={() => setFrom()}
          disabled={isLoading}
          text={isLoading ? '...loading' : 'Confirmar Remitente'}/> 
    </>
  </>)
}


export default AddressFrom;