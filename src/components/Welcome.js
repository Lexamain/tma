const Welcome = props => {
    console.log(`Props:`, props)
    return (
        <h1>welcome {props.name} {props.lastName} {props.school}</h1>
    )
}

export default Welcome