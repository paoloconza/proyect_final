import React from 'react'

const PanelDatos = ({data}) => {
    return (
        <div>
            <h2>Today's Hightlights</h2>
            <div className='grupoDatos'>
                <div className='otrosDatos'>
                    <p>Wind status</p>
                    <h2>{data.viento}mph</h2>
                </div>
                <div className='otrosDatos'> 
                    <p>Humidity</p>
                    <h2>{data.humidity}%</h2>
                </div>
                <div className='otrosDatos'>
                    <p>Visibility</p>
                    <h2>{data.visibility}miles</h2>
                </div>
                <div className='otrosDatos'>
                    <p>Air Pressure</p>
                    <h2>{data.pressure}mb</h2>
                </div>
            </div>
        </div>
    )
}

export default PanelDatos