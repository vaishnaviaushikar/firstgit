// FUNCTIONALITY OF FORM-----

const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userlist=document.querySelector('#users');

myForm.addEventListener('submit', onsubmit)
function onsubmit(e){
   e.preventDefault();
   //console.log(nameInput.value)
   if(nameInput.value== ""|| emailInput.value=="")
   {
       //alert("please enter fields");
       msg.classList.add('error')//to style the msg, classname derived from css sheet
       msg.innerHTML= "please enter all fields";
       setTimeout(()=>msg.remove(),2000)//------to  remove timeout after certain interval

   }
   else{
       //console.log("success");
       //  const li=document.createElement('li');
       // li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
       // userlist.appendChild(li);
       // localStorage.setItem('name',nameInput.value);
       // localStorage.setItem('email',emailInput.value);
       // console.log(localStorage.getItem('name'))
       //console.log(nameInput.value)
       //clear fields
       // nameInput.value='';
       // emailInput.value="";

       var obj={
           name:nameInput.value,
           email:emailInput.value
       }
   
       obj_string=JSON.stringify(obj)
       localStorage.setItem(obj.name,obj_string)
    showUsers(obj)
   function showUsers(obj)
   {
    
    const childelement=document.createElement('li')
    childelement.setAttribute('id',obj.name)
    //console.log(childelement.id)
    childelement.textContent=obj.name + ' - ' + obj.email
    var deletbtn=document.createElement('button')
   deletbtn.setAttribute('id','delete-btn')
   

    deletbtn.innerText='delete'
    userlist.appendChild(childelement)
    childelement.appendChild(deletbtn);
    //console.log(deletbtn.parentNode)
    var deletebuttons=document.querySelectorAll('#delete-btn')
    //console.log(deletebuttons.length)
    for(let i=0;i<deletebuttons.length;i++)
    {
       deletebuttons[i].addEventListener('click',function(){
           var liElement=this.parentNode;
           var ulElement=liElement.parentNode;
           ulElement.removeChild(liElement);
           localStorage.removeItem(obj.name)

       })
    }
   
    }
    
   }
} 

