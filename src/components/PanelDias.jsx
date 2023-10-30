
import React from 'react'

const PanelDias = ({ dat }) => {

  let imagen1 =
    dat.imgD1 === 'Clear' ? 'Clear.png' :
      dat.imgD1 === 'Clouds' ? 'HeavyCloud.png' :
        dat.imgD1 === 'Snow' ? 'Snow.png' :
          dat.imgD1 === 'Rain' ? 'Shower.png' :
            dat.imgD1 === 'Drizzle' ? 'LightRain.png' :
              dat.imgD1 === 'Thunderstorm' ? 'Thunderstorm.png' :
                dat.imgD1 === 'mist' ? 'Hail.png' : ''

  let imagen2 =
    dat.imgD2 === 'Clear' ? 'Clear.png' :
      dat.imgD2 === 'Clouds' ? 'HeavyCloud.png' :
        dat.imgD2 === 'Snow' ? 'Snow.png' :
          dat.imgD2 === 'Rain' ? 'Shower.png' :
            dat.imgD2 === 'Drizzle' ? 'LightRain.png' :
              dat.imgD2 === 'Thunderstorm' ? 'Thunderstorm.png' :
                dat.imgD2 === 'mist' ? 'Hail.png' : ''

  let imagen3 =
    dat.imgD3 === 'Clear' ? 'Clear.png' :
      dat.imgD3 === 'Clouds' ? 'HeavyCloud.png' :
        dat.imgD3 === 'Snow' ? 'Snow.png' :
          dat.imgD3 === 'Rain' ? 'Shower.png' :
            dat.imgD3 === 'Drizzle' ? 'LightRain.png' :
              dat.imgD3 === 'Thunderstorm' ? 'Thunderstorm.png' :
                dat.imgD3 === 'mist' ? 'Hail.png' : ''

  let imagen4 =
    dat.imgD4 === 'Clear' ? 'Clear.png' :
      dat.imgD4 === 'Clouds' ? 'HeavyCloud.png' :
        dat.imgD4 === 'Snow' ? 'Snow.png' :
          dat.imgD4 === 'Rain' ? 'Shower.png' :
            dat.imgD4 === 'Drizzle' ? 'LightRain.png' :
              dat.imgD4 === 'Thunderstorm' ? 'Thunderstorm.png' :
                dat.imgD4 === 'mist' ? 'Hail.png' : ''

  let imagen5 =
    dat.imgD5 === 'Clear' ? 'Clear.png' :
      dat.imgD5 === 'Clouds' ? 'HeavyCloud.png' :
        dat.imgD5 === 'Snow' ? 'Snow.png' :
          dat.imgD5 === 'Rain' ? 'Shower.png' :
            dat.imgD5 === 'Drizzle' ? 'LightRain.png' :
              dat.imgD5 === 'Thunderstorm' ? 'Thunderstorm.png' :
                dat.imgD5 === 'mist' ? 'Hail.png' : ''

  return (
    <div className='grupoDias'>
      <div className='divDias'>
        <p>dia 1</p>
        <img src={`./iconos/${imagen1}`} alt="" style={{ width: '85px' }} />
        <p>{dat.temp_max1}°C {dat.temp_min1}°C</p>
      </div>
      <div className='divDias'>
        <p>dia 2</p>
        <img src={`./iconos/${imagen2}`} alt="" style={{ width: '85px' }} />
        <p>{dat.temp_max2}°C {dat.temp_min2}°C</p>
      </div>
      <div className='divDias'>
        <p>dia 3</p>
        <img src={`./iconos/${imagen3}`} alt="" style={{ width: '85px' }} />
        <p>{dat.temp_max3}°C {dat.temp_min3}°C</p>
      </div>
      <div className='divDias'>
        <p>dia 4</p>
        <img src={`./iconos/${imagen4}`} alt="" style={{ width: '85px' }} />
        <p>{dat.temp_max4}°C {dat.temp_min4}°C</p>
      </div>
      <div className='divDias'>
        <p>dia 5</p>
        <img src={`./iconos/${imagen5}`} alt="" style={{ width: '85px' }} />
        <p>{dat.temp_max5}°C {dat.temp_min5}°C</p>
      </div>
    </div>
  )
}

export default PanelDias