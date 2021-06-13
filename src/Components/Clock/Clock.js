import React from 'react'

const Clock=(props)=>{
    return (
        <>
        <h1>{props.heading}</h1>
        <h3>Time is :- {props.date.toLocaleTimeString()}</h3>
        </>
    )
}

export default Clock;