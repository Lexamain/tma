import { Component } from "react";

class ClassCompo extends Component {
   

    constructor() {
        console.log("i am constructor 1")
        super();

        this.state = {students: [],
        };
    }

    componentDidMount() {
        console.log("i am componentdidmount 2")
        fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then((users) => this.setState(()=> {
            return { students: users}
        }, () => {
            console.log(this.state)
        }))
    }


    render() {
        console.log('i am render 3')
        return (
            <div>
                {this.state.students.map((student) => {
                    return (
                        <div key={student.id}>
                        <h1>{student.address.street}</h1>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ClassCompo