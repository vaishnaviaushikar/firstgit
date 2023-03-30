

//var newli=document.getElementsByClassName("list-group-item")---//cannot access newly added li element as it doesnt belong to any class;
var newli=document.getElementsByTagName("li")
var lastelement= newli[newli.length-1]
lastelement.textContent="newly added element"
lastelement.style.color='red'
console.log(lastelement)
//console.log(newli[newli.length-1].textContent)
