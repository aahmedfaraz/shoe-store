import React, { useReducer } from 'react';
import globalContext from './globalContext';
import globalReducer from './globalReducer';
import { SET_CURRENT, CLEAR_CURRENT } from '../types';
import shoe1 from '../../assets/images/shoe1.jpg';
import shoe2 from '../../assets/images/shoe2.jpg';
import shoe3 from '../../assets/images/shoe3.jpg';
import shoe4 from '../../assets/images/shoe4.jpg';
import shoe5 from '../../assets/images/shoe5.jpg';
import shoe6 from '../../assets/images/shoe6.jpg';
import shoe7 from '../../assets/images/shoe7.jpg';
import shoe8 from '../../assets/images/shoe8.jpg';
import shoe9 from '../../assets/images/shoe9.jpg';
import shoe10 from '../../assets/images/shoe10.jpg';

const GlobalState = props => {
    const initialState = {
        shoes: [
            {
                name: 'Nike ZoomX Vaporfly Next% x Gyakusou',
                image: `${shoe1}`,
                slug: 'nike-zoomx-vaporfly-next-x-gyakusou',
                price: 200
            },
            {
                name: 'Nike Adapt BB 2.0',
                image: shoe2,
                slug: 'nike-adapt-bb-2.0',
                price: 150
            },
            {
                name: 'Nike ZoomX Vaporfly NEXT% 2',
                image: shoe3,
                slug: 'nike-zoomz-vaporfly-next-2',
                price: 120
            },
            {
                name: 'Nike Air Max 95',
                image: shoe4,
                slug: 'nike-air-max-95',
                price: 138.97
            },
            {
                name: 'Nike Air Zoom Alphafly NEXT% Flyknit',
                image: shoe5,
                slug: 'nike-air-zoom-alphafly-next-flyknit',
                price: 100
            },
            {
                name: 'Nike Air Zoom Pegasus 38',
                image: shoe6,
                slug: 'nike-air-zoom-pegasus-38',
                price: 250
            },
            {
                name: 'Nike Air Max 270',
                image: shoe7,
                slug: 'nike-air-max-270',
                price: 150
            },
            {
                name: "Nike Air Max 95 Essential",
                image: shoe8,
                slug: "nike-air-max-95-essential",
                price: 170
            },
            {
                name: 'Nike Air VaporMax Plus',
                image: shoe9,
                slug: 'nike-air-vapormax-plus',
                price: 200
            },
            {
                name: 'Nike Air Force 1 \'07 Craft',
                image: shoe10,
                slug: 'nike-air-force-1-07-craft',
                price: 120
            }
        ],
        current: null
    }

    const [state, dispatch] = useReducer(globalReducer, initialState)

    const setCurrent = slug => {
        let selectedShoe = state.shoes.filter(shoe => shoe.slug === slug)[0];
        try {
            selectedShoe = selectedShoe.name !== null && selectedShoe;
        } catch (error) {
            selectedShoe = {
                name: null,
                image: null,
                price: null,
                slug: null
            }
        }
        dispatch({
            type: SET_CURRENT,
            payload: selectedShoe
        })
    }

    const clearCurrent = () => dispatch({type: CLEAR_CURRENT});

    return (
        <globalContext.Provider
            value={{
                shoes: state.shoes,
                current: state.current,
                setCurrent: setCurrent,
                clearCurrent: clearCurrent
            }}
        >
            {props.children}
        </globalContext.Provider>
    )
}

export default GlobalState;