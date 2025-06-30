document.title="java.js"
const newDiv = document.createElement('div');
newDiv.textContent = "Student Infromation";
document.body.appendChild(newDiv);
newDiv.style.color="red";
newDiv.style.fontSize="40px";
newDiv.style.textAlign="center"
newDiv.style.background="black"

let line= document.createElement("hr");
line.style.border="none";
line.style.height="2px";
line.style.backgroundColor="black";
line.style.margin="22px 0";
document.body.appendChild(line);

const kittu = document.createElement('div');
kittu.textContent = "Enter Full Name:";
document.body.appendChild(kittu);
kittu.style.fontSize="20px"


const inputBox = document.createElement('input');
inputBox.type = 'text';  
inputBox.placeholder = 'Enter your name';
inputBox.id = 'myInput';
document.body.appendChild(inputBox);
const kittu1 = document.createElement('div');
kittu1.textContent = "Enter Roll NO";
document.body.appendChild(kittu1);
kittu1.style.fontSize="20px"
const inputBox1 = document.createElement('input');
inputBox1.type = 'text';  
inputBox1.placeholder = '23***31';
inputBox1.id = 'myInput';
document.body.appendChild(inputBox1);

const kittu2 = document.createElement('div');
kittu2.textContent = "Enter Your Emali Id"
document.body.appendChild(kittu2);
kittu2.style.fontSize="20px"
const inputBox2 = document.createElement('input');
inputBox2.type = 'text';  
inputBox2.placeholder = 'Enter Emali @';
inputBox2.id = 'myInput';
document.body.appendChild(inputBox2);

const kittu3 = document.createElement('div');
kittu3.textContent = "Enter Your Number";
document.body.appendChild(kittu3);
kittu3.style.fontSize="20px"
const inputBox3 = document.createElement('input');
inputBox3.type = 'Number';  
inputBox3.placeholder = '+91';
inputBox3.id = 'myInput';
document.body.appendChild(inputBox3);

const kittu4 = document.createElement('div');
kittu4.textContent = "Enter Your college Name";
document.body.appendChild(kittu4);
kittu4.style.fontSize="20px"
const inputBox4 = document.createElement('input');
inputBox4.type = 'text';  
inputBox4.placeholder = 'college Name';
inputBox4.id = 'myInput';
document.body.appendChild(inputBox4);

const kittu5= document.createElement('div');
kittu5.textContent = "Enter Your Branch";
document.body.appendChild(kittu5);
kittu5.style.fontSize="20px"

const fruits = ['****select your Branch****','EEE', 'ECE', 'CSE','CSE_DS','CSAIML'];
const select = document.createElement('select');

fruits.forEach(fruit => {
const option = document.createElement('option');
option.value = fruit.toLowerCase();
option.textContent = fruit
select.appendChild(option);
});
document.body.appendChild(select);

const br = document.createElement('br');
document.body.appendChild(br);

const cityLabel = document.createElement('label');
cityLabel.textContent = 'Select City: ';
const citySelect = document.createElement('select');
citySelect.id = 'citySelect';
const cities = ['*Select city*', 'India', 'hyderbad', 'Mumbai','dehli','tamil nadu'];
cities.forEach(city => {
const option = document.createElement('option');
option.value = city.toLowerCase().replace(/\s+/g, '-');
option.textContent = city;
citySelect.appendChild(option);
});
document.body.appendChild(document.createElement('br')); 
document.body.appendChild(cityLabel);
document.body.appendChild(citySelect);

const districtLabel = document.createElement('label');
const br1 = document.createElement('br');
document.body.appendChild(br1);
const br4 = document.createElement('br');
document.body.appendChild(br4);
districtLabel.textContent = 'Select District: ';
const districtSelect = document.createElement('select');
districtSelect.id = 'districtSelect';
const districts = ['select district', 'khammam', 'hyderbad', 'sangareddy','warangal'];

districts.forEach(district => {
  const option = document.createElement('option');
  option.value = district.toLowerCase().replace(/\s+/g, '-'); 
  option.textContent = district;
  districtSelect.appendChild(option);
});

document.body.appendChild(districtLabel);
document.body.appendChild(districtSelect);

const br2 = document.createElement('br');
document.body.appendChild(br2);

const br3 = document.createElement('br');
document.body.appendChild(br3);
const btn = document.createElement('button');


btn.textContent = 'submit';


btn.id = 'myButton';
document.body.appendChild(btn);

