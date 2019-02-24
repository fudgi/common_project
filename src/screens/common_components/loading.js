import React from 'react'
import {icons} from '../../icon_paths'

const Loading = () => (
    <div className="d-flex flex-column">
        <p className="mx-auto my-2">Загрузка</p>
        <img src={icons.logoSingle}/>
    </div>
)

export default Loading