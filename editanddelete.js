var form=document.getElementById('addForm')
var itemlist=document.getElementById('items');
var listitems=document.querySelectorAll('.list-group-item')

//FORM SUBMIT---

form.addEventListener('submit',addItem);
//DELETE EVENT---
itemlist.addEventListener('click',removeItem);

//ADD ITEM--
function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    var deletebtn=document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'))
    li.appendChild(deletebtn);
    var editbutton=document.createElement('button')
   editbutton.className='btn btn-success btn-lg float-right';
   li.appendChild(editbutton)
    itemlist.appendChild(li);
   

}
function removeItem(e){
    if(e.target.classList.contains('delete')){
    if(confirm("Are You Sure?")){
        var li=e.target.parentElement;
        itemlist.removeChild(li);
    }
    }
    }
   
   //listitems.appendChild(editbutton)
   
    