import React, { useReducer } from 'react';
import globalContext from './globalContext';
import globalReducer from './globalReducer';
import { SET_CURRENT, CLEAR_CURRENT } from '../types';

const GlobalState = props => {
    const initialState = {
        shoes: [
            {
                name: 'Nike ZoomX Vaporfly Next% x Gyakusou',
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3673b76f-0cab-4d1c-bfde-a5d85d72efb2/zoomx-vaporfly-next-x-gyakusou-running-shoes-c0TglG.png',
                slug: 'nike-zoomx-vaporfly-next-x-gyakusou',
                price: 200
            },
            {
                name: 'Nike Adapt BB 2.0',
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3a17cab8-f220-4247-b522-b8464bab472c/adapt-bb-2-basketball-shoes-vdFwKS.png',
                slug: 'nike-adapt-bb-2.0',
                price: 150
            },
            {
                name: 'Nike ZoomX Vaporfly NEXT% 2',
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8d792bb2-ddd7-418f-ab3f-0c06b21e659c/zoomx-vaporfly-next-2-mens-racing-shoes-C0Z7Hg.png',
                slug: 'nike-zoomz-vaporfly-next-2',
                price: 120
            },
            {
                name: 'Nike Air Max 95',
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/aa5e9c67-72fd-457c-95bf-1cf1323d15c6/air-max-95-mens-shoes-gHjGdd.png',
                slug: 'nike-air-max-95',
                price: 138.97
            },
            {
                name: 'Nike Air Zoom Alphafly NEXT% Flyknit',
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a7f8760-47d8-4396-9f0a-5feb79598e41/air-zoom-alphafly-next-flyknit-mens-road-racing-shoe-fNntgL.png',
                slug: 'nike-air-zoom-alphafly-next-flyknit',
                price: 100
            },
            {
                name: 'Nike Air Zoom Pegasus 38',
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2ac4657d-4763-4998-a8ba-431b58cfb8b9/air-zoom-pegasus-38-mens-running-shoe-jQfFVs.png',
                slug: 'nike-air-zoom-pegasus-38',
                price: 250
            },
            {
                name: 'Nike Air Max 270',
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7322750b-ff85-4b3f-b1a3-091a2cae7ef8/air-max-270-mens-shoes-KkLcGR.png',
                slug: 'nike-air-max-270',
                price: 150
            },
            {
                name: "Nike Air Max 95 Essential",
                image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e20484c2-2b66-4124-b692-ad132a4ef9a5/air-max-95-essential-mens-shoes-V8wCh2.png",
                slug: "nike-air-max-95-essential",
                price: 170
            },
            {
                name: 'Nike Air VaporMax Plus',
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/g5ipp7dymwsfsltjb6ro/air-vapormax-plus-mens-shoes-nC0dzF.png',
                slug: 'nike-air-vapormax-plus',
                price: 200
            },
            {
                name: 'Nike Air Force 1 \'07 Craft',
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c2baa9a6-9d39-4c83-8010-b9c81b5bad0a/air-force-1-07-craft-mens-shoes-CL8Zfx.png',
                slug: 'nike-air-force-1-07-craft',
                price: 120
            }
        ],
        current: null
    }

    const [state, dispatch] = useReducer(globalReducer, initialState)

    const setCurrent = slug => {
        const selectedShoe = state.shoes.filter(shoe => shoe.slug === slug)[0];
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