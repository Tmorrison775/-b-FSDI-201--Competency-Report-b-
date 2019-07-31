const salon = { //object
    name: 'Fashion Pets',
    phone: '886-567-4356',
    address: { //object inside object
        street: '5th Avenue',
        number: '25-A'

    },
    workingHours: {
        open: '8:00 AM',
        close: '5:00 PM'
    },
    pets: [],
    length: ''
}


console.log(salon.pets.length);
//object destructuring

let {
    name,
    phone,
    address: {
        street,
        number
    },
    workingHours: {
        open,
        close
    }
} = salon;

console.log(open);
var petId = 0;

function Pet(name, age, service, ownername, contactphone) {
    this.id = 'pet' + petId;
    petId += 1;
    this.hunger = 10;
    this.happiness = 5;
    this.name = name;
    this.age = age;
    this.ownername = ownername;
    this.contactphone = contactphone;
    this.service = service
    this.feed = function () {
        this.hunger -= 10;
        this.happiness += 10;
    };
    this.status = function () {
        console.log(this.name + 'hunger: ' + this.hunger + ' happiness: ' + this.happiness);
    }
    this.ownerContact = function () {
        console.log('Name:' + this.ownername + '\n' + 'Phone:' + this.contactphone);

    }
}

/*const pet1 = new Pet('Zoey', 2, 'shower', 'Travis', '654-786-8345');
const pet2 = new Pet('Janis', 2, 'hair cut', 'Sabrina', '758-293-5748');
const pet3 = new Pet('Ozzy', 6, 'shower', 'Yair', '912-345-9185');


pet1.feed();
pet1.status();
pet1.feed();
pet1.status();
pet1.ownerContact();

//this will put the parameters in the pets method inside salon
salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);
salon.length=salon.pets.length;


//this prints pet names from the pets method in the salon object.
for(i=0;i<salon.pets.length;i++){

    document.getElementById('info2').innerHTML += `<br>` + (i+1) + ' : ' + salon.pets[i].name;}

//this prints number of pets in the salon 
console.log(salon.length);
document.getElementById('info').innerHTML = `<h2> ${name} (${phone}), ${street} ${number} <br> It is open from ${open} to ${close}<br> We currently have ${salon.length} pets in the salon!</h2>`;*/
var txtname = document.getElementById('name');
var txtage = document.getElementById('PetAge');
var txtservices = document.getElementById('services');
var txtownername = document.getElementById('OwnerName');
var txtphone = document.getElementById('phone');

function registerPet() {

    var age = parseInt(txtage.value);
    var thePet = new Pet(txtname.value, age, txtservices.value, txtownername.value, txtphone.value);


    console.log(thePet);

    salon.pets.push(thePet);


    // display(thePet);
    eraseForm();
    displayTable(thePet);

    alert("you have " + salon.pets.length + " registered pets...");
}

function display(aPet) {
    var list = document.getElementById("petList");
    var li = document.createElement('td');
    li.innerText = aPet.id + " --- " + aPet.name + " ---" + aPet.service;
    list.appendChild(li);
    li.classList.add('petList');
}

function eraseForm() {
    document.getElementById('name').value = "";
    document.getElementById('PetAge').value = "";
    document.getElementById('services').value = "";
    document.getElementById('OwnerName').value = "";
    document.getElementById('phone').value = "";
}

function displayTable(aPet) {
    var tbody = document.getElementById("listBody");

    var row = `<tr id=${aPet.id}> <td>${aPet.id}</td><td>${aPet.name}</td><td>${aPet.age}</td><td>${aPet.service}</td><td>${aPet.ownername}</td><td>${aPet.contactphone}</td><td><input id="btn" value= "Remove" type="button" onclick="remove(${aPet.id});"></input></td></tr>`;
    tbody.innerHTML += row;
}

function remove(idpet) {
    console.log('I want to remove' + idpet);
    var indexDelete = 0;
    for (var i = 0; i < salon.pets.length; i++) {
        var indexPet = salon.pets[i];

        if (indexPet.id === idpet) {
            indexDelete = i;
        }
    }
    salon.pets.splice(indexDelete, 1);
    var tr = idpet;
    tr.remove();
}
function highlight(idpet){
    var indexHighlight = 0
    for (var i=0; i<salon.pets.length;i++){
        indexHighlight
    }
}
//this function searches for pets
function Search(){
var txtsearch=document.getElementById("search").value;
var searchstring=txtsearch;
var foundpet = 0;
    for (var i = 0; i<salon.pets.length;i++){
        var searchpet=salon.pets[i];
    
    if (searchstring===searchpet.name || searchstring===searchpet.id){
       foundpet=i;
       var x = document.getElementById("listBody");
       document.querySelector('#' + searchpet.id).style.background = "red";//this will highlight found pets
     

       
    }}
}


//search a name/id of pet. when you search it, feedback must be given to the user such as the line changing colors, another table with searched name, etc.