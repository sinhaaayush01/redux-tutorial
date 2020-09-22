import React, {useState} from 'react';
import { buyCakes } from '../redux/index';
import { connect } from 'react-redux';

function CakeContainer(props) {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h2>Number of Cakes - {props.numofCakes}</h2>
            <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => props.buyCakes(number)}>Buy {number} Cake</button>
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
        buyCakes: (number) => dispatch(buyCakes(number)) 
    }
}
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CakeContainer);