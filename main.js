
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


// funtion for save item
let btn_save = ()=>{
  
   let title = document.querySelector("#title")
   let description = document.querySelector("#description")
   let date_detail = document.querySelector("#date")

   if(title.value === "" && description.value === "" && date_detail.value === ""){
   
      alert("Input field is empty")

   }else{
        const item = {
         title: title.value,
         description: description.value,
         date_detail: date_detail.value
      }
      localStorage.setItem("item",JSON.stringify(item))
      console.log(item)
      // window.location.assign()
   }

}

// function for edit item
let btn_edit = () =>{
   let title = document.querySelector("#title").value
   let description = document.querySelector("#description").value
   let date_detail = document.querySelector("#date").value
   let item = localStorage.getItem("item")
   
}
// display item 

let show_result = document.querySelector(".result")
let item = localStorage.getItem("item")
let info = JSON.parse(item)
let title = info.title
console.log(title)



// show_result.innerHTML =  `     
// <div class="title_home container">${info.title}</div>
// <div class="title_home container"> </div>
// <div class="title_home container">Learn..</div>
// <div class="title_home container">01/05/2022</div>

// `


console.log(item)
