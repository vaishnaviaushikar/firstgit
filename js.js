var form=document.getElementById('addform');
var submitbtn=document.getElementById('submit');
var list=document.getElementById('list')
var amountinput=document.querySelector('#amount')
var descriptioninput=document.querySelector('#description')
var categoryinput=document.querySelector('#category')
form.addEventListener('submit',addExpense)
function addExpense(e){
    e.preventDefault();
    if(amountinput.value=="" || descriptioninput.value=="" || categoryinput.value==""){
        alert("please enter valid details")
    }

    else{
        var inputamount=amountinput.value
        var description=descriptioninput.value;
        var category=categoryinput.value;
        
        var amounttext=document.createTextNode(inputamount);
        var descriptiontext=document.createTextNode(" "+"-"+" "+description)
       var categorytext=document.createTextNode(" "+"-"+" "+category)
        var li=document.createElement("li")
        li.className="list-group-item"
       
        li.appendChild(amounttext);
        li.appendChild(descriptiontext)
        li.appendChild(categorytext)
        
        var editbtn=document.createElement('button')
        var deletebtn=document.createElement('button')
        editbtn.appendChild(document.createTextNode('Edit Expense'))
        deletebtn.appendChild(document.createTextNode('Delete Expense'))
        editbtn.className="btn btn-outline-dark"
        deletebtn.className="btn btn-outline-danger"
        li.appendChild(editbtn)
        li.appendChild(deletebtn)
        list.appendChild(li)
        //LOCAL STORAGE--
        var obj={
            amount:inputamount,
            descri:description,
            cat:category
        }
        obj_string=JSON.stringify(obj)
        localStorage.setItem(obj.cat,obj_string)
    
        editbtn.onclick=()=>{
            localStorage.removeItem(obj.cat)
            amountinput.value=obj.amount;
            categoryinput.value=obj.cat;
            descriptioninput.value=obj.descri;
            list.removeChild(li)
            

        }
        deletebtn.onclick=()=>
        {
            localStorage.removeItem(obj.cat);
            list.removeChild(li)
            amountinput.value="";
    categoryinput.value=""
    descriptioninput.value=""

        }
        

    }
        
    amountinput.value="";
    categoryinput.value=""
    descriptioninput.value=""
  
}

