import React from 'react';

const JSX=()=>{
    // const name='Prince'
    // const element=<h1>My Name is {name}</h1>
    const formatUser=(user)=>{
        return user.firstName+' '+user.secondName;
    }
    const user={
        firstName:"Prince",
        secondName:'Kumar'
    }
    const element=(
        <h1>
            Hello , {formatUser(user)}
        </h1>
    )
    // const element=React.createElement(
    //     'h1',
    //     {className:'box'},
    //     'hello world'
    // )
    return (
        <>
        {element}
        </>
    )
}
export default JSX;