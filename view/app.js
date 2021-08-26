var email = document.getElementById('email')
var password = document.getElementById('pass')

function clickme(){
    console.log(email.value, password.value)
    axios.post('http://localhost:8080/auth/signin',{email: email.value, password: password.value})
    .then((result)=>{
        console.log(result.data, 'result')
    })
    .catch((error)=>{
        console.log(error, 'error')
    })
}