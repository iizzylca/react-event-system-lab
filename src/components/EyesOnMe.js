// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {

    handleFocus = () => {
        console.log('Good!')
    }

    handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render(){
        <button onFocus={this.handleFocus} onBlur={this.handleBlur} >button</button>
    }
}


export default EyesOnMe