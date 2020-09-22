import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(props) {
    const numOfIceCream = useSelector(state =>  state.iceCream.numOfIceCream);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Ice Creams - {numOfIceCream}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
        </div>
    );
}

export default IceCreamContainer;