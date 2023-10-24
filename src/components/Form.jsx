import { useState } from "react"

const Form = ({ isOpen, toggleModal }) => {
    const [city, setCity] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({ city })

        if (city === "" || !city) return;
    }

    return isOpen ? (
        <div className="Buscador" >
            <button onClick={toggleModal} >x</button>
            <form onSubmit={onSubmit}>
                <input  type="text" onChange={(e) => setCity(e.target.value)} placeholder="search location" />
                <button id="btnBuscador" type="submit">Search</button>
            </form>
        </div>
    ):null
}
export default Form