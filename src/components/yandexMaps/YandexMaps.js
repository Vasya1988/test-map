import { YMaps, Map, Placemark, RoutePanel, ZoomControl } from "react-yandex-maps";
import React, { useState, useEffect } from "react";
import classes from './YandexMaps.module.sass'

const YandexMaps = () => {

    // const [route, setRoute] = useState([])
    // const [routeState, setRouteState] = useState({fromEnabled: false, from: 'moscow', to: 'saint peterburg', type: 'auto'})


    return (
        <>
            <YMaps
                
            >
                
                <Map
                    className={classes.Container}
                    defaultState={
                        {
                            center: [55.75, 37.57],
                            zoom: 9
                        }
                    }
                >
                    <Placemark geometry={[55.684758, 37.738521]} />
                    <RoutePanel />
                </Map>
            </YMaps>
        </>
    )
}
export default YandexMaps;