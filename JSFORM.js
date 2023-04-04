

// FUNCTIONALITY OF FORM-----

 const myForm=document.querySelector('#my-form');
 const nameInput=document.querySelector('#name');
 const emailInput=document.querySelector('#email');
 const msg=document.querySelector('.msg');
 const userlist=document.querySelector('#users');

 myForm.addEventListener('submit', onsubmit)
 function onsubmit(e){
    e.preventDefault();
    console.log(nameInput.value)
    if(nameInput.value== ""|| emailInput.value=="")
    {
        //alert("please enter fields");
        msg.classList.add('error')//to style the msg, classname derived from css sheet
        msg.innerHTML= "please enter all fields";
        setTimeout(()=>msg.remove(),2000)//------to  remove timeout after certain interval

    }
    else{
       
        localStorage.setItem('name',nameInput.value);
        localStorage.setItem('email',emailInput.value);
       

        //clear fields
        nameInput.value='';
        emailInput.value="";

    }
 }
 