



// let items = []
let id_item = 0
let editID = 0

let btn_save = () =>{
   let storedItem = []
   let items = JSON.parse(localStorage.getItem("items"))?JSON.parse(localStorage.getItem("items")):[];
   let title = document.querySelector("#title")
   let description = document.querySelector("#description")
   let date_detail = document.querySelector("#date")
  

   const item = {
      id: id_item,
      title : title.value, 
      description: description.value,
      date_detail: date_detail.value
   }
   item.id = items.length
   items.push(item) 
   localStorage.setItem("items", JSON.stringify(items))
   // view_items()
   window.location.reload()
}

let display = document.querySelector(".result")




let btn_de = (id) =>{

   items = JSON.parse(localStorage.getItem("items"))
   items = items.filter(obj => obj.id !== id);
   items.forEach(item =>{
      item.id--
   })
   console.log(items);
   localStorage.setItem("items",JSON.stringify(items) )
   // view_items()
   window.location.reload()
}

let btn_edit = (id) =>{
   let title = document.querySelector("#e-title")
   let description = document.querySelector("#e-description")
   let date_detail = document.querySelector("#e-date")
   
   items.forEach((item,index) =>{
      if(item.id == id){
         title.value = item.title ;
         description.value = item.description;
         date_detail.value = item.date_detail;
         item.title = title.value
         item.description = description.value;
         item.date_detail= date_detail.value;
         editID = item.id;
      }
   })
console.log(editID)

   

   

}
let btn_view = (id) =>{
   let title = document.querySelector(".title-v")
   let description = document.querySelector(".description-v")
   // let date_detail = document.querySelector("#e-date")
   
   items.forEach((item,index) =>{

      if(item.id == id){
         // title = item.title ;
         title.innerHTML = `
         <h1 class="modal-title  fs-5" id="staticBackdropLabel">${item.title}</h1>
         `
         description.innerHTML = `
         <p class="">${item.description}</p>
          `
         console.log()
         // date_detail = item.date_detail;
      }
   })


   

   

}

let save =()=>{
   let edit_new = []
   let NewItems = []
   edit_new = JSON.parse(localStorage.getItem("items"))

   let title = document.querySelector("#e-title")
   let description = document.querySelector("#e-description")
   let date_detail = document.querySelector("#e-date")
   edit_new.forEach(item => {
   
            if(item.id == editID){

               let UpdateItem = {}

               UpdateItem.id = editID;
               UpdateItem.title = title.value;
               UpdateItem.description = description.value;
               UpdateItem.date_detail = date_detail.value;
               NewItems.push(UpdateItem);
            }
           
   })
   
         localStorage.setItem("items", JSON.stringify(NewItems))
         // console.log("Updated")
         window.location.reload()
}
let searchfield = document.querySelector(".searchfield")
items = JSON.parse(localStorage.getItem("items"))?JSON.parse(localStorage.getItem("items")):[]

let view_items = () =>{
   if(items != null){
      items.reverse()
      let searchfield = document.querySelector(".searchfield")
      let btn_search = document.querySelector("btn_search")
      items.forEach((item, i)=>{
         let itemElement = document.createElement("div");
         itemElement.classList.add("item"); 
         itemElement.innerHTML = `
            <div class="container d-flex">
            <div class="title_home container" style="margin-left: 30px" reversed>${++i}</div>
            <div class="title_home-t container">${item.title}</div>
            <div class="title_home container">${item.description}</div>
            <div class="title_home container">${item.date_detail}</div>
            <div class="title_home container">
            <span class="material-symbols-outlined"class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop-n" onclick="btn_view(${item.id})" >visibility</span>
            <span class="material-symbols-outlined " data-bs-toggle="modal" data-bs-target="#staticBackdrop"  onclick="btn_edit(${item.id})">stylus_note</span>
            <span class="material-symbols-outlined btn_delete"onclick="btn_de(${item.id})" >delete</span>
            </div>
            </div>
            <hr>
            `;
         display.appendChild(itemElement);
         // console.log(item.title,i) 
      })
      
   }else{
      console.log("items null")
   }
  }
if (searchfield !== ""){
   view_items()
}
let btn_search = ()=>{
   const foundItems = []
   let items = JSON.parse(localStorage.getItem("items"))
   searchfield.value
   items.forEach((item,i) =>{
      if (searchfield.value == item.title){
         foundItems.push(item);
      }
   })

   
   display.innerHTML = "";
   foundItems.forEach((item, i) =>{
      let itemElement = document.createElement("div");
      itemElement.classList.add("item"); 
      itemElement.innerHTML = `
         <div class="container d-flex">
         <div class="title_home container" style="margin-left: 30px" reversed>${++i}</div>
         <div class="title_home-t container">${item.title}</div>
         <div class="title_home container">${item.description}</div>
         <div class="title_home container">${item.date_detail}</div>
         <div class="title_home container">
         <span class="material-symbols-outlined"class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop-n" onclick="btn_view(${item.id})" >visibility</span>
         <span class="material-symbols-outlined " data-bs-toggle="modal" data-bs-target="#staticBackdrop"  onclick="btn_edit(${item.id})">stylus_note</span>
         <span class="material-symbols-outlined btn_delete"onclick="btn_de(${item.id})" >delete</span>
         </div>
         </div>
         <hr>
         `;
      display.appendChild(itemElement);

   })
}
  

window.addEventListener("DOMContentLoaded", () => {

   // console.log(items)


})

