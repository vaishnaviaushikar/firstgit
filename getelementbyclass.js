
// var listitem=document.getElementsByClassName('list-group-item')
// //var listitem3=listitem[3]
// listitem[2].style.backgroundColor="green"
// //listitem.style.fontWeight="bold"
// for(let i=0;i<listitem.length;i++)
// {
//     listitem[i].style.fontWeight="bold"
// }
// console.log(document.getElementsByClassName("list-group-item"))


//var newli=document.getElementsByClassName("list-group-item")---//cannot access newly added li element as it doesnt belong to any class;
var newli=document.getElementsByTagName("li")
var lastelement= newli[newli.length-1]
lastelement.textContent="newly added element"
lastelement.style.color='red'
console.log(lastelement)
//console.log(newli[newli.length-1].textContent)
