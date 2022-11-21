import classes from './Container.module.sass'
import React, {useEffect} from 'react';
import YandexMaps from '../components/yandexMaps/YandexMaps';
import EnterTitle from '../ui/enterTitle/EnterTitle';

const Container = () => {

    
    return (
        <div
            className={classes.Container}
        >
            <EnterTitle />
            <div>
                <YandexMaps />
            </div>
        </div>
    )
}
export default Container;