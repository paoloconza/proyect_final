import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  const [isModal, setIsModal] = useState(false)
  const [data, setData] = useState(null)
  const [latitud, setLatitud] = useState(null)
  const [longitud, setLongitud] = useState(null)
  const Key = "1aa62855b1e5400bd015025241df0a72"

  useEffect(() => {
    if (latitud === null && longitud === null) return;

    const getData = async () => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${Key}`)
      const datos = await res.json()

      setData(datos)
    }
    getData()
  }, [])

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const acceso = (dato) => {
    const{lat, long} = dato.coords
    setLatitud(lat)
    setLongitud(long)
  }

  const sinAcceso = () => {
  }

  const location = () => {
    navigator.geolocation.getCurrentPosition(acceso, sinAcceso);
  }

  return (
    <>
      <div className='clima'>
        <button id='buscar' onClick={toggleModal}>Search for places</button>
        <button onClick={location}>Mi ubicacion</button>
        <Form isOpen={isModal} toggleModal={toggleModal} />
      </div>
    </>
  )
}

export default App