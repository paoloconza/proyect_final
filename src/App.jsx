import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import ApiClima from './components/ApiClima'
import Card from './components/Card'
import PanelDias from './components/PanelDias'
import PanelDatos from './components/PanelDatos'
import BtnConversor from './components/BtnConversor'
import ApiDias from './components/ApiDias'

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
  const datitosDias = {
    imgD1: "",
    temp_max1: "",
    temp_min1: "",
    imgD2: "",
    temp_max2: "",
    temp_min2: "",
    imgD3: "",
    temp_max3: "",
    temp_min3: "",
    imgD4: "",
    temp_max4: "",
    temp_min4: "",
    imgD5: "",
    temp_max5: "",
    temp_min5: "",
  }
  //--------------------------
  const [data, setData] = useState(datitos)
  const [dat, setDat] = useState(datitosDias)
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
      // console.log(data)
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

  useEffect(() => {
    ApiDias(city).then(dat => {
      console.log(dat)
      setDat(ele => ({
        ...ele,
        imgD1:dat.list[5].weather[0].main,
        temp_max1: Math.floor(dat.list[10].main.temp_max),
        temp_min1: Math.floor(dat.list[7].main.temp_min),
        imgD2:dat.list[13].weather[0].main,
        temp_max2: Math.floor(dat.list[18].main.temp_max),
        temp_min2: Math.floor(dat.list[15].main.temp_min),
        imgD3:dat.list[21].weather[0].main,
        temp_max3: Math.floor(dat.list[26].main.temp_max),
        temp_min3: Math.floor(dat.list[23].main.temp_min),
        imgD4:dat.list[29].weather[0].main,
        temp_max4: Math.floor(dat.list[34].main.temp_max),
        temp_min4: Math.floor(dat.list[31].main.temp_min),
        imgD5:dat.list[37].weather[0].main,
        temp_max5: Math.floor(dat.list[36].main.temp_max),
        temp_min5: Math.floor(dat.list[39].main.temp_min),
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
          <PanelDias dat={dat} />
          <h2>Today's Hightlights</h2>
          <PanelDatos data={data} />
        </div>
      </div>
    </>
  )
}

export default App;
