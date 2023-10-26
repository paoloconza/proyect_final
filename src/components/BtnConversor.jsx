import React from 'react'

const BtnConversor = ({ convertToCelsius, convertToFahrenheit }) => {
  return (
    <div>
      <button onClick={convertToCelsius}>°C</button>
      <button onClick={convertToFahrenheit}>°F</button>
    </div>
  )
}

export default BtnConversor