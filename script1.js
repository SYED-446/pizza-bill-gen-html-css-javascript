function login()
{
let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user=="admin" && pass=="1234")
{
window.location="welcome.html";
}
else
{
document.getElementById("error").innerHTML="Invalid Login";
}
}

function startOrder()
{
window.location="pizza.html";
}

function generateBill()
{
let name=document.getElementById("name").value;
let pizzaPrice=document.getElementById("pizza").value;
let qty=document.getElementById("qty").value;

let toppings=document.getElementsByClassName("topping");

let toppingTotal=0;

for(let i=0;i<toppings.length;i++)
{
if(toppings[i].checked)
{
toppingTotal+=parseInt(toppings[i].value);
}
}

let total=(parseInt(pizzaPrice)+toppingTotal)*qty;

document.getElementById("bill").innerHTML=

`
<h3>Bill Receipt</h3>
Customer : ${name} <br>
Pizza : ₹${pizzaPrice} <br>
Toppings : ₹${toppingTotal} <br>
Quantity : ${qty} <br>
<hr>
<h2>Total Bill : ₹${total}</h2>
`;
}
