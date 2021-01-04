// Code Keypad Component Here
import React from 'react'

class Keypad extends Component {

    handleKey = () => {
        console.log('Entering password...')
    }

    render() {
        <input type="password" onKeyUp={this.handleKey}/>
    }
}

export default Keypad 