const display=document.getElementById('details')
const itemname=document.getElementById('name');
const description=document.getElementById('description');
const price=document.getElementById('price');
const quantity=document.getElementById('quantity');
const additem=document.querySelector('#submit')

//console.log(list)

additem.addEventListener('click',onsubmit)
function onsubmit(e){
    e.preventDefault()
    var obj={
        item:itemname.value,
        description:description.value,
        price:price.value,
        quantity:quantity.value
    }


axios.post('https://crudcrud.com/api/48c6f2edad43415baa50dda062884969/inventory_managment',obj)
.then(()=>{
    
    
})
  

}

window.addEventListener('load',displayall)
function displayall()
{
    axios.get('https://crudcrud.com/api/48c6f2edad43415baa50dda062884969/inventory_managment')
    .then((res)=>{
        for(let i=0;i<res.data.length;i++)
        {
            allitems(res.data[i])
            
        }

        
      
    })

}
function allitems(obj)
{
const displaydiv=document.querySelector('#details')
const childHTML=`<li id=${obj.item}>${obj.item}-${obj.description}-${obj.price}-${obj.quantity}
<button onclick=bought1(${JSON.stringify(obj)})>Buy1</button>
<button onclick=bought2(${JSON.stringify(obj)})>Buy2</button>
<button onclick=bought3(${JSON.stringify(obj)})>Buy3</button></li>`

displaydiv.innerHTML=displaydiv.innerHTML+childHTML


}
function bought1(obj)
{
  obj.quantity=obj.quantity-1

axios.put(`https://crudcrud.com/api/48c6f2edad43415baa50dda062884969/inventory_managment/${obj._id}`,{
    item:obj.item,
    description:obj.description,
    price:obj.price,
    quantity:obj.quantity
   })
   .then((res)=>{
    
   updatequantityonscreen(obj)
   })


}
function bought2(obj)
{
   obj.quantity=obj.quantity-2;

axios.put(`https://crudcrud.com/api/48c6f2edad43415baa50dda062884969/inventory_managment/${obj._id}`,{
    item:obj.item,
    description:obj.description,
    price:obj.price,
    quantity:obj.quantity
   })
   .then((res)=>{
    
   updatequantityonscreen(obj)
   })

}

function bought3(obj)
{
    obj.quantity=obj.quantity-3;

axios.put(`https://crudcrud.com/api/48c6f2edad43415baa50dda062884969/inventory_managment/${obj._id}`,{
    item:obj.item,
    description:obj.description,
    price:obj.price,
    quantity:obj.quantity
   })
   .then((res)=>{
    
   updatequantityonscreen(obj)
})
}

function updatequantityonscreen(obj)
{
const itemdetails=document.getElementById(obj.item)
itemdetails.innerHTML= `<li id=${obj.item}>${obj.item}-${obj.description}-${obj.price}-${obj.quantity}
<button onclick=bought1(${JSON.stringify(obj)})>Buy1</button>
<button onclick=bought2(${JSON.stringify(obj)})>Buy2</button>
<button onclick=bought3(${JSON.stringify(obj)})>Buy3</button></li>`

itemdetails.style.listStyleType="none"
}
   