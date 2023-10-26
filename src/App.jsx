import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import ApiClima from './components/ApiClima'
import Card from './components/Card'

function App() {

  const [data, setData] = useState({
    city: "",
    country: "",
    temp: "",
    temp_max: "",
    temp_min: ""
  })
  const [city, setCity] = useState(null)


  useEffect(() => {
    ApiClima(city).then(data => {
      setData(ele => ({
        ...ele,
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min
      }))
    })
  }, [city])

  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(e.target[0].value)
    console.log(e.target[0].value)
  }

  return (
    <>
      <div>
      <button className="btn btn-secondary mt-4 " data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
        Search for places
      </button>
      <Form handleSubmit={handleSubmit} />
      </div>
      <Card data={data} />
    </>
  )
}

export default App
