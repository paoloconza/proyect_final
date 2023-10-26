import React from 'react'

const BtnConversor = ({ convertToCelsius, convertToFahrenheit }) => {
  return (
    <div className='grupoBtn'>
      <button className='btngrados' onClick={convertToCelsius}>°C</button>
      <button className='btngrados'id='btnGris' onClick={convertToFahrenheit}>°F</button>
    </div>
  )
}

export default BtnConversor