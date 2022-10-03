import { useEffect, useState } from 'react'
import { Frase } from './components/Frase'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { Button, Container, Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios';
import { Spinner2 } from './components/Spinner2';

const MySwal = withReactContent(Swal)



function App() {

  const [personaje, setPersonaje] = useState()

  const [spinner, setSpinner] = useState(true)

  useEffect(() => {

    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      // api request
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      console.log(respuesta);
      const dato = await respuesta.json();
      console.log(dato[0]);
      //guardar la frase del personaje en el state
      setPersonaje(dato[0]);
      setSpinner(false)
    } catch (error) {
      MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
      // show a message to the user
    }
  };


  //conditional component 


  const conditionalComp = (spinner) ? ( <Spinner2/>) : (<Frase personaje={personaje}></Frase>)

  return (
        <Container className='my-5'>
          <section>

    <div className='col-12 col-lg-12 divImgButton'>
    <img src="https://trello.com/1/cards/63288a1289c67400fd5b534f/attachments/632b24ad1ed8b700597e4050/previews/632b24ae1ed8b700597e418b/download/theSimpson.png" style={{width:"40%"}} className="p-3 imgSimpsons" alt="Los simpsons titulo" />
    <Button className='btn' variant='warning' onClick={consultarAPI}>Get phrase</Button>
    </div>
    <div className='my-5'>
 
    </div>
      {
        conditionalComp
      }
          </section>
     
        </Container>
  )
}

export default App
