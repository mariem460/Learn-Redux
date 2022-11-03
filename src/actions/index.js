export const  increment =(nbr) =>{
    return {
        type: 'increment',
        payload:nbr
    }

}

export const decrement =(nbrtoDec)=> {
    return {
        type: 'decrement',
        payload: nbrtoDec
    }

}
export const signin = ()=> {
    return {
        type: 'signin'

    }


}
