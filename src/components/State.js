import {Component} from 'react'

class State extends Component {
   
        state = {
            name : 'kehinde',
            company: 'Gomycode'
        }

    render() {
        return (
            <div>
            <p>
                HI i am {this.state.name}, i work at {this.state.company}
            </p>
            <button onClick={() => 
                this.setState({name: "billions"})}>change name</button>
            </div>
        )
    }

}

export default State