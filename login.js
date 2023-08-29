// function for sign up
let sign_up = ()=>{
    let user_name = document.querySelector(".username").value
    const password = document.querySelector(".password").value
    const re_password = document.querySelector(".re_password").value
    if (user_name === "" && password === "" && re_password == ""  ){
       alert("Invaild detail")
    } else if(password != re_password) {
     alert("does")
    }
    else{
       // localStorage.
       localStorage.setItem("username",user_name )
       localStorage.setItem("pasword", password)
       // localStorage.setItem("repasword", re_password)
       alert("Signup was successful!! ")
       console.log(user_name, password, re_password)
       window.location.assign("home.html")

     
   } 
  
}
// function for login
let login = ()=>{
  let username = document.querySelector(".username").value
  let password = document.querySelector(".password").value
  let user_conf = localStorage.getItem("username")
  let password_conf = localStorage.getItem("password")
  if (username != user_conf && password != password_conf){
     alert("Invaild datails ");
     
  }else{
     alert("Login Successful");
     window.location.assign("home.html")
  } 


}
