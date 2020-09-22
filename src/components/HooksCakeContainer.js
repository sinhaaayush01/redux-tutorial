import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCakes } from '../redux';

// useSelector like mapStateToProps in Redux
// useDispatch like mapDispatchToProps in Redux

function HooksCakeContainer(props) {
    const numofCakes = useSelector(state => state.cake.numofCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Cakes - {numofCakes}</h2>
            <button onClick={() => dispatch(buyCakes())}>Buy Cake</button>
        </div>
    );
}

export default HooksCakeContainer;