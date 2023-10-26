import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import ApiClima from './components/ApiClima'
import Card from './components/Card'
import PanelDias from './components/PanelDias'
import PanelDatos from './components/PanelDatos'
import BtnConversor from './components/BtnConversor'

function App() {
/*para guardar todo lo que voy a necesitar */
  const datitos = {
    city: "",
    temp: "",
    img: "",
    viento: "",
    Humidity: "",
    Visibility: "",
    Pressure: "",
  }
  //--------------------------
  const [data, setData] = useState(datitos)
  const [city, setCity] = useState(null)

  /* para covertir de °k a °c y °f */
  const [conversionType, setConversionType] = useState('°K');

  const convertToCelsius = () => {
    setConversionType('Celsius');
  };

  const convertToFahrenheit = () => {
    setConversionType('Fahrenheit');
  };
//----------------------------

/*traigo todo lo que necesito */
  useEffect(() => {
    ApiClima(city).then(data => {
      console.log(data)
      setData(ele => ({
        ...ele,
        city: data.name,
        temp: Math.floor(data.main.temp),
        img: data.weather[0].main,
        viento: data.wind.speed,
        humidity: data.main.humidity,
        visibility: data.visibility,
        pressure: data.main.pressure
      }))
    })
  }, [city])

  //----------------------------

  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(e.target[0].value)
    console.log(e.target[0].value)
  }
/* implemetar location */
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
//-----------------------------------
  return (
    <>
      <div className='divGeneral'>
        <div className='imgDato'>
          <div>
            <button className="btn btn-secondary" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
              Search for places
            </button>
            <Form handleSubmit={handleSubmit} />
          </div>
          <Card data={data} conversionType={conversionType} />
        </div>
        <div>
          <BtnConversor convertToCelsius={convertToCelsius} convertToFahrenheit={convertToFahrenheit} />
          <PanelDias />
          <PanelDatos data={data} />
        </div>
      </div>
    </>
  )
}

export default App;
