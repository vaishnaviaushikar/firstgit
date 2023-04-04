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

        const name=nameInput.value;
        const email=emailInput.value;
        const obj={
            name,
            email
        }
       // console.log(JSON.stringify(obj  ) )
       localStorage.setItem('obj,email',JSON.stringify(obj))
        showUserOnscreen(obj)


        //clear fields
        // nameInput.value='';
        // emailInput.value="";
        function showUserOnscreen(obj){
            const parentelement=document.getElementById('users')
            parentelement.innerHTML=parentelement.innerHTML + `<li>${obj.name} - ${obj.email}</li>'
         }

    }
 
}