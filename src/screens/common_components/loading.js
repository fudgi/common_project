import React from 'react'
import logo from '../../img/logoSingle.svg'

const Loading = () => (
    <div className="d-flex flex-column">
        <p className="mx-auto my-2">Загрузка</p>
        <img src={logo}/>
    </div>
)

export default Loading