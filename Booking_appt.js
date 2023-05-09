const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const contactInput=document.querySelector('#tel')

const submit=document.getElementById('submit')

myForm.addEventListener('submit',savedata)
function savedata(e){
    e.preventDefault();
    var obj={
        name:nameInput.value,
        email:emailInput.value,
        contact:contactInput.value
    }
    axios.post('https://crudcrud.com/api/f9eb38cd6a7040edab125245da19f1fd/appt_data',obj)
    .then((res)=>console.log(''))
    const obj_string=JSON.stringify(obj)
    localStorage.setItem(obj.name,obj_string)
    
}
window.addEventListener('DOMContentLoaded',()=>{axios.get('https://crudcrud.com/api/f9eb38cd6a7040edab125245da19f1fd/appt_data')
.then((res)=>{
 for(let i=0;i<res.data.length;i++)
 {
showuseronscreen(res.data[i])
 }
})})
function showuseronscreen(obj){
    const userlist=document.querySelector('.list'); 
    const childHTML=`<li id=${obj._id}>${obj.name}-${obj.email}
    <button onclick=deleteuser('${obj._id}')>Delete </button>

    </li>`

    userlist.innerHTML=userlist.innerHTML+childHTML
}
function deleteuser(userid){
   axios.delete(`https://crudcrud.com/api/f9eb38cd6a7040edab125245da19f1fd/appt_data/${userid}`)
.then((res)=>{
    removeuserfromscreen(userid)
})
.catch((err)=>{
    console.log(err)
})
   
}
function removeuserfromscreen(userid)
{
    const userlist=document.querySelector('.list'); 
    const childnodetobedeleted=document.getElementById(userid) ;
    if(childnodetobedeleted){
        userlist.removeChild(childnodetobedeleted)
    }
}
