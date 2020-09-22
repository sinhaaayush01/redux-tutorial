import {BUY_CAKES} from './cakeTypes';

export const buyCakes = (number = 1) => {
    return {
        type: BUY_CAKES,
        payload: number
    }
};