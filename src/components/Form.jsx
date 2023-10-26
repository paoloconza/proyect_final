import { useState } from "react"

const Form = ({ handleSubmit }) => {

    return (
        <>
            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">

                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div >

                <div className="offcanvas-body">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="search location" />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </> 
    )
}
export default Form
