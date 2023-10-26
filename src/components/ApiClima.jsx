import React from 'react'

const API_KEY = "1aa62855b1e5400bd015025241df0a72"

const ApiClima = async (city) => {

    const data = await(await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city || 'lima'}&appid=${API_KEY}`)).json()
    return data
}

export default ApiClima