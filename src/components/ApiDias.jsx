import React from 'react'

const API_KEY = "1aa62855b1e5400bd015025241df0a72"


const ApiDias = async (city) => {

    const datD = await(await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city || 'lima'}&appid=${API_KEY}`)).json()
    
    return datD

    
}

export default ApiDias