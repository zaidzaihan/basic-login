let dbUsers = [{
    username: "Zaid",
    password: "password",
    name: "Zaid Zaihan",
    email: "b022110151@utem.edu.my",
},
{
    username: "Azaril",
    password: "password",
    name: "Azaril Afiq",
    email: "b022110098@utem.edu.my",
} 
]

function login(username, password){
console.log("Someone try to login with", username, password)
let matched = dbUsers.find(element => 
    element.username == username
)
//console.log(matched)
if (matched){
    if(matched.password == password){
    return matched}
    else {
        return "Password not matched"
    }
}
else{
    return "Username not found!"
}
}

function register(newusername, newpassword, newname, newEmail){
    //TODO:check if username exist
    let exist = dbUsers.find(element => 
        element.username == newusername
    )
    if(exist){
        return "Username already exist"
    }
        else{
            dbUsers.push({
                username: newusername,
                password: newpassword,
                name: newname,
                email: newEmail
            })
        }
}

//try to login
console.log(login("Zaid", "password"))
console.log(login("Abu", "hello"))
register("abu", "hello", "Abu Gaming", "AbuGaming@gmail.com")
console.log(login("abu", "hello"))
