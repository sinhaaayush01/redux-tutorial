import React from 'react';
import { buyCakes } from '../redux/index';
import { connect } from 'react-redux';

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numofCakes}</h2>
            <button onClick={props.buyCakes}>Buy Cake</button>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        numofCakes: state.cake.numofCakes
    }
};

const mapDispatchToProps = dispatch => {
    return {
        buyCakes: () => dispatch(buyCakes()) 
    }
}
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CakeContainer);