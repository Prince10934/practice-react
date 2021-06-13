import React from 'react'

class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isToggle:true
        }
        this.handleToggle=this.handleToggle.bind(this);
    }
    handleToggle(){
        this.setState((prevState)=>(
             {
                 isToggle:!prevState.isToggle
             }
        ))
    }
    render(){
        return (
            <>
                <h1>{this.state.isToggle?"On":'Off'}</h1>
                <button onClick={this.handleToggle}>{this.state.isToggle?"On":"Off"}</button>
            </>
        )
    }
}

export default Toggle