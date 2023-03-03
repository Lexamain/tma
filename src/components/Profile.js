const person = {
    name: 'muhammed',
    age: 42,
    address: 'gomycode yaba'
}


function Profile (props) {
 return (<div>
    <h1>{person.name}</h1>
    <h1>{person.age}</h1>
    <h1>{person.address}</h1>
 </div>)
}

export default Profile