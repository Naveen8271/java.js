let aish=document.createElement("p");
// aish.textContent="iam naveen";
aish.innerHTML="memory 1 tera byte";
aish.style.color="red";
aish.style.fontSize="30px";
document.getElementById("vasi").appendChild(aish);
setTimeout(()=>{
    let kittu = document.getElementsByClassName("list")[5];
    if(kittu){
    kittu.remove();
    }
},
2000);

let newHeading =document.createElement("h2");
newHeading.innerHTML = "This is a new heading added by javascript";
newHeading.style.color="green";
newHeading.style.fontSize="30px";
document.body.appendChild(newHeading)

setTimeout(()=>{
let kittu1= document.createElement("p");
kittu1.textContent="this text after added 3 seconds";
kittu1.style.color="black";
kittu1.style.fontSize="40px";
document.body.appendChild(kittu1);
},3000
);

let kittu2 = document.createElement("p");
kittu2.textContent="this an text is append in top of tag";
kittu2.style.color="orange";
kittu2.style.fontSize="40px";
document.getElementById("vasi").appendChild(kittu2);

let mylist=document.createElement("u1");
for (let i=1;i<=3;i++){
    let kittu3=document.createElement("li");
    kittu3.textContent="item"+i;
    kittu3.style.color="blue";
    kittu3.style.fontSize="40px";

    mylist.appendChild(li);
    document.body.appendChild(mylist);
}


















