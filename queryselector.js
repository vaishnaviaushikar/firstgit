//-------QUERY SELECTOR------

// var item2=document.querySelector('.list-group-item:nth-child(2)')
// item2.style.backgroundColor='green';
// var item3=document.querySelector('.list-group-item:nth-child(3)')
// item3.style.display='none'


//---------QUERY SELCTOR ALL--------

//var items=document.querySelectorAll('.list-group-item');

// for(let i=0;i<items.length;i++)
// {
//     items[i].style.color='green'
// };

var odd=document.querySelectorAll('.list-group-item:nth-child(odd)')
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green'
}