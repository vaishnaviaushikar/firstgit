 var form=document.getElementById('addForm');
 var itemlist=document.getElementById('items');
 var filter=document.getElementById('filter')

//FORM SUBMIT EVENT-----
form.addEventListener('submit',addItem)
//DELETE EVENT---
itemlist.addEventListener('click',removeItem);
//FILTER EVENT---
filter.addEventListener('keyup',filterItems)

//ADD ITEM----
function addItem(e){
    e.preventDefault();
    
    //GET INPUT VALUE----
    var inputvalue=document.getElementById('item').value;
    const description=document.getElementById('description').value;

    //create ne li element;

    var li=document.createElement('li');
    //ADD CLASS--
    li.className='list-group-item';
   //ADD text node with input value---
   const newtext=document.createTextNode(inputvalue);
   const desciptionNode=document.createTextNode(" "+description)
   li.appendChild(newtext);
   li.appendChild(desciptionNode);
   // CREATE DELETE BUTTON ELEMENT
   var deletebtn=document.createElement('button');
   var editbtn=document.createElement('button')  

   //ADD CLASSES TO THE DELETE BUTTON--
   deletebtn.className='btn btn-danger btn-sm float-right delete';
deletebtn.appendChild(document.createTextNode('X'))
editbtn.className='btn btn-light btn-sm float-right edit'
editbtn.appendChild(document.createTextNode('EDIT'))
//append button to li
   li.appendChild(deletebtn)
   li.appendChild(editbtn)

   //Append li to list
   itemlist.appendChild(li)


}

//REMOVEITEM FUNCTION---
function removeItem(e){
if(e.target.classList.contains('delete')){
if(confirm("Are You Sure?")){
    var li=e.target.parentElement;
    itemlist.removeChild(li);
}
}
}

//FILTER ITEMS----
function filterItems(e){
    //CONVERT TEXT TO LOWERCASE
    var text=e.target.value.toLowerCase();
    //GET LIST
   var items= itemlist.getElementsByTagName('li');
   //CONVERT TO AN ARRAY
   Array.from(items).forEach(function(item){
    var itemName=item.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1)
    {
        item.style.display='block';
    }
    else{
        item.style.display="none"; 
    }

   })

}
