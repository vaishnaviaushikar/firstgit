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
     
    deletbtn.onclick=()=>{
        localStorage.removeItem(obj.name);
        userlist.removeChild(childelement)
    }

    var editbtn=document.createElement('button');
    editbtn.innerText='Edit'
    childelement.appendChild(editbtn);
    editbtn.onclick=()=>{
        localStorage.removeItem(obj.name);
        userlist.removeChild(childelement);
        nameInput.value=obj.name;
        emailInput.value=obj.email;

    }
     }
     nameInput.value='';
        emailInput.value="";
    }
} 
 
 