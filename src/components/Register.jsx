// Hito_2
import './Register.css'
import { useState } from 'react'

const RegisterPage = () => {
// Primero declaramos todos los componentes de nuestro formulario
  const [registro, setRegistro] = useState({
    email: '',
    clave: '',
    confirmar: ''
  })
  // Controlamos los eventos de cambio
  const handleCambio = (evento) => {
    setRegistro({ ...registro, [evento.target.name]: evento.target.value })
  }

  // Controlamos que no haya carga antes de escribir los datos

  const handleCarga = async(evento) => {
    evento.preventDefault()
  // Ahora destructuramos los datos para las validaciones
  const { email, clave, confirmar } = registro
  // Condicion 1: Espacios sin escritura en los labels
  if (!email.trim() || !clave.trim() || !confirmar.trim()) {
    alert ('Todos los campos deben estar llenos')
  }
  // Condición 2: Validación de mail
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert('Ingrese un mail válido')
    return
  }
  // Condición 3: Clave de mínimo 6 caracteres y máximo 14
  if (clave.length < 6 || clave.length > 14){
    alert('La clave deben contener entre 6 y 14 carateres')
    return
  }
  // Condición 4: Clave y confirmación igual
  if(clave != confirmar){
    alert('Las clave deben ser iguales')
    return
  }
  alert('Registro éxitoso!')
  setRegistro({ email: '', clave: '', confirmar: '' })
 }
   return (
    <>
      <form className='formulario' onSubmit={handleCarga}>
          <div className='container_inputs'>
          <div className='box_input'>
            <label>Email</label>
            <input
              type='text'
              name='email'
              value={registro.email}
              onChange={handleCambio}
            />
          </div>
          <div className='box_input'>
            <label>Contraseña</label>
            <input
              type='text'
              name='clave'
              value={registro.clave}
              onChange={handleCambio}
            />
          </div>
          <div className='box_input'>
            <label>Confirmar Contraseña</label>
            <input
              type='text'
              name='confirmar'
              value={registro.confirmar}
              onChange={handleCambio}
            />
          </div>
        </div>
          <button type='submit' className='btn btn-primary'>Enviar</button>
      </form>
    </>
    )
}
export default RegisterPage
