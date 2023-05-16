import { INCREMENT, DECREMENT } from "./types";

export const incrementCounter = () => {
    console.log(">>> action incre");
    return (

        {
            type: INCREMENT,
            payload: {id: 1, name: 'abc'}
        }
    )
}

export const decrementCounter = () => {
    console.log(">>> action incre");
    return (
        {
            type: DECREMENT
        }
    )
}
