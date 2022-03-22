import { render, screen } from '@testing-library/react';
import App from './App';
/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
import '@testing-library/jest-dom/extend-expect'
import Todo from './components/pages/Formulario/index'

test('Prueba formulario', () => {
    const component = render(<Todo/>)
    component.getByPlaceholderText("Nombre del Cliente")
    component.getByPlaceholderText("NIT")
    component.getByPlaceholderText("Nombre del punto")
    component.getByPlaceholderText("Nombre del equipo")
    component.getByPlaceholderText("Promotor")
    component.getByPlaceholderText("RTC")
    component.getByPlaceholderText("Capitan y/o Usuario (Solo Minusculas)")

})