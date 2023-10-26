import React from 'react'
import BtnConversor from './BtnConversor'
import { useState } from 'react'

const Card = ({ data, conversionType }) => {

    let imagen =
        data.img === 'Clear' ? 'Clear.png' :
        data.img === 'Clouds' ? 'HeavyCloud.png':
        data.img === 'Snow' ? 'Snow.png':
        data.img === 'Rain' ? 'Shower.png':
        data.img === 'Drizzle' ? 'LightRain.png':
        data.img === 'Thunderstorm' ? 'Thunderstorm.png':
        data.img === 'mist' ? 'Hail.png': ''

    const day = new Date().getDay()

    const weekDay = {
        1: 'Mon',
        2: 'Tues',
        3: 'Wed',
        4: 'Thurs',
        5: 'Fri',
        6: 'Sat',
        0: 'Sun',
    }
    const today = weekDay[day]

    //------------------------

    // const [kelvin, setKelvin] = useState(data.temp);
    console.log (data.temp)
    // const [conversionType, setConversionType] = useState('°K');
  
    // const convertToCelsius = () => {
    //   setConversionType('Celsius');
    // };
  
    // const convertToFahrenheit = () => {
    //   setConversionType('Fahrenheit');
    // };
  
    const convertedValue = () => {
      if (conversionType === 'Celsius') {
        return (Math.round(data.temp - 273.15) + ' °C');
      }
      if (conversionType === 'Fahrenheit') {
        return (Math.round((data.temp - 273.15) * 9/5 + 32) + ' °F');
      }
      return data.temp + '°K';
    };  

    //--------------------------

    return (
        <>
            <div>
              
                <img src={`./iconos/${imagen}`} alt="" />
             
                <h1>{convertedValue()}</h1>
                <h1>Shower</h1>
                <p>Today . {today}</p>
                <p>{data.city}</p>
            </div>
        </>
    )
}

export default Card