

const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const contactInput=document.querySelector('#tel')
const userlist=document.querySelector('.list');
const msg=document.querySelector('.msg');
myForm.addEventListener('submit', onsubmit)
function onsubmit(e){
   e.preventDefault();
   //console.log(nameInput.value)
   if(nameInput.value== ""|| emailInput.value=="")
   {
     
       msg.classList.add('error')
       msg.innerHTML= "please enter all fields";
       setTimeout(()=>msg.remove(),2000)

   }
   else{
      
       var obj={
           name:nameInput.value,
           email:emailInput.value,
           contact:contactInput.value
       }

       var obj_string=JSON.stringify(obj)
       localStorage.setItem(obj.name,obj_string)
       axios.post('https://crudcrud.com/api/7a9b8024de6446f082f8b595aa86db60/appointment_details',obj)
       .then((res)=>showUsers(obj))
       //console.log(res))
       .catch((err)=>console.log(err))

       
    
   function showUsers(obj)
   {
    
    const childelement=document.createElement('li')
    childelement.setAttribute('id',obj.name)
    //console.log(childelement.id)
    childelement.textContent=obj.name + ' - ' + obj.email+ ' - '+obj.contact
    var deletbtn=document.createElement('button')
   deletbtn.setAttribute('id','delete-btn')
   

    deletbtn.innerText='delete'
    userlist.appendChild(childelement)
    childelement.appendChild(deletbtn);
    
   deletbtn.onclick=()=>{
    //    localStorage.removeItem(obj.name);
       userlist.removeChild(childelement)
   }

   var editbtn=document.createElement('button');
   editbtn.innerText='Edit'
   childelement.appendChild(editbtn);
   editbtn.onclick=()=>{
    //    localStorage.removeItem(obj.name);
       userlist.removeChild(childelement);
       nameInput.value=obj.name;
       emailInput.value=obj.email;

   }
    }
    nameInput.value='';
       emailInput.value="";
   }
} 


window.addEventListener('load',shownondisplay)

function shownondisplay(){
   

// var stringified=JSON.stringify(localStorage)

// document.querySelector('.display').innerHTML=stringified


axios.get('https://crudcrud.com/api/7a9b8024de6446f082f8b595aa86db60/appointment_details')
.then((res)=>
document.querySelector('.display').innerHTML=JSON.stringify(res.data))

}
