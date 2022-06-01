const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit' , (e) =>{
    let messages = []
    if (name.value === '' || name.value === null){
        messages.push("<h2>wrong Input</h2>")
    }

    if(password.value === "Ankeet" && name.value === "Ankeet"){
      messages.push("sucessfull")
      window.location.href = "homepage.html"
    }else{
        messages.push("<h2>Wrong input</h2>")
    }


    if(messages.length > 0){
        e.preventDefault()   
        errorElement.innerHTML = messages.join(',')
    }
}