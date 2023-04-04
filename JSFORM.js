

// FUNCTIONALITY OF FORM-----

 const myForm=document.querySelector('#my-form');
 const nameInput=document.querySelector('#name');
 const emailInput=document.querySelector('#email');
 const msg=document.querySelector('.msg');
 const userlist=document.querySelector('#users');

 myForm.addEventListener('submit', onsubmit)
 function onsubmit(e){
    e.preventDefault();
    
    if(nameInput.value== ""|| emailInput.value=="")
    {
        //alert("please enter fields");
        msg.classList.add('error')//to style the msg, classname derived from css sheet
        msg.innerHTML= "please enter all fields";
        setTimeout(()=>msg.remove(),2000)//------to  remove timeout after certain interval

    }
    else{
        let myobj={
            name:nameInput.value,
            email:emailInput.value
        }
        myobj_stringified=JSON.stringify(myobj)
        localStorage.setItem('details',myobj_stringified)

        //clear fields
        nameInput.value='';
        emailInput.value="";
    }
 }
 