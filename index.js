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
//console.log("Someone try to login with", username, password)
let matched = dbUsers.find(element => 
    element.username == username
)
//console.log(matched)
if (matched){
    if(matched.password == password){
    window.location.href = "Welcome.html"}
    else {
        document.getElementById("prompt").innerHTML = "Wrong Password!";
    }
}
else{
    document.getElementById("prompt").innerHTML = "Username Not Registered. Please register!";
}
console.log(dbUsers)
}

function register(newusername, newpassword, newname, newEmail){
    //TODO:check if username exist
    let exist = dbUsers.find(element => 
        element.username == newusername
    )
    if(exist){
        document.getElementById("prompt").innerHTML = "Username Already Exist";
    }
        else{
            dbUsers.push({
                username: newusername,
                password: newpassword,
                name: newname,
                email: newEmail
            })
            document.getElementById("prompt").innerHTML = "Successfully registered!";
            console.log(dbUsers)
        }
}

function loginFunc(){
    let name = document.getElementById("fname").value;
    console.log(name)
    let password = document.getElementById("fpassword").value;
    console.log(password)
    //call function
    login(name, password);
}

function registerFunc(){
    let name = document.getElementById("rname").value;
    let password = document.getElementById("rpassword").value;
    let nickname = document.getElementById("rnickname").value;
    let email = document.getElementById("remail").value;
    //call function
    register(name, password, nickname, email);
}



//try to login
// console.log(login("Zaid", "password"))
// console.log(login("Abu", "hello"))
// register("abu", "hello", "Abu Gaming", "AbuGaming@gmail.com")
// console.log(login("abu", "hello"))
