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
    /* */
    longi: "",
    lati: "",
    /* */
  }
  //--------------------------
  const [data, setData] = useState(datitos)
  const [city, setCity] = useState(null)
  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)
  const [current, setCurrent] = useState(null)

  /* para covertir de °k a °c y °f */
  const [conversionType, setConversionType] = useState('°K');

  const convertToCelsius = () => {
    setConversionType('Celsius');
  };

  const convertToFahrenheit = () => {
    setConversionType('Fahrenheit');
  };
  //----------------------------

  useEffect(() => {
    if (lat === null && long === null) return

    const getData = async () => {
      const link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1aa62855b1e5400bd015025241df0a72`;
      const res = await fetch(link);
      const loc = await res.json();
      console.log(loc)
      setCurrent(loc);
    }
    getData()
  }, [lat, long])


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
        pressure: data.main.pressure,
        /* */
        longi: data.coord.lon,
        lati: data.coord.lat,
        /* */
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
  const acceso = (loc) => {
    console.log("tenemos acceso", loc.coords)
    const { latitude, longitude } = loc.coords
    setLat(latitude)
    setLong(longitude)
  }

  const sinAcceso = () => {
    console.log("ubicacion denegada")

  }

  const location = () => {
    navigator.geolocation.getCurrentPosition(acceso, sinAcceso);
  }
  //-----------------------------------
  return (
    <>
      <div className='divGeneral'>
        <div className='imgDato'>
            <div className='btnSearchLoc'>
              <button className="btn btn-secondary" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                Search for places
              </button>
              <button className='btnlocation' onClick={location}>
                <i className="fa-solid fa-location-crosshairs"></i>
              </button>
            </div>
            <Form handleSubmit={handleSubmit} />
          <Card data={data} conversionType={conversionType} />
        </div>
        <div className='datitos'>
          <BtnConversor convertToCelsius={convertToCelsius} convertToFahrenheit={convertToFahrenheit} />
          <PanelDias />
          <h2>Today's Hightlights</h2>
          <PanelDatos data={data} />
        </div>
      </div>
    </>
  )
}

export default App;
