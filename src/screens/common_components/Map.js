import React from 'react'
import { YMaps, Map, Placemark, GeolocationControl } from 'react-yandex-maps';
import pin from '../../img/pin.svg'

const App = (props) => (
    <YMaps>
        <Map 
            defaultState={{
                center: props.placemark,
                zoom: 16,
                controls: ['zoomControl']
              }}
            modules={['control.ZoomControl']}
            id="map" 
            width={'100%'} 
            height={'100%'}>

            <GeolocationControl options={{ float: 'left' }} />
            <Placemark
                geometry={props.placemark}
                options={{
                    iconLayout: 'default#image',
                    iconImageHref: pin,
                }}
            />
        </Map>

    </YMaps>
  );

  export default App