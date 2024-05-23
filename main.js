let user ={
   name:"Noura" ,
  email:"naara@gmail.com",
   age : 20 ,
   id:12345,
   address:{
    street:1234,
    numHome:789,
     city:{
        name1:" Riyadh",
        name2: "Jeddah",
     },
   },
   skils:["js","html","css"]

}

console.log(user);
console.log(user.name);
user .id = 6789,
console.log(user .id);
delete user.email;
console.log(user.email);

user.Available = true;
console.log(user.checkAvailable());


console.log(user.address);


console.log(user.address.city.name1);

console.log(user.skills[2]);

console.log(user.skills.join(","));





// Lab 2

characters = [
   {
     name: "Luke Skywalker",
     height: 177,
     gender: "male",
     mass: 77,
     eye_color: "brown",
   },
   {
     name: "Leia Organa",
     height: 160,
     gender: "female",
     mass: 56,
     eye_color: "blue",
   },
   {
     name: "Han Solo",
     height: 180,
     gender: "male",
     mass: 80,
     eye_color: "brown",
   },
   {
     name: "Chewie",
     height: 222,
     gender: "male",
     mass: 190,
     eye_color: "black",
   },
   {
     name: "kevien",
     height: 106,
     gender: "male",
     mass: 32.2,
     eye_color: "red",
   },
 ];


//  q1
let firstGender=characters.find(characters=>characters.eye_color=="blue").name;
console.log(firstGender);

// q2
let  firstGenderOver50Mass = characters.find(character => character.mass > 50).gender;
console.log(firstGenderOver50Mass); 

// q3
let  heightLessThan200 = characters.filter(character => character.height < 200);
console.log(heightLessThan200); 

// q4
let maleCharacters = characters.filter(character => character.gender =="male");
console.log(maleCharacters); 

// q5
let allNames = characters.map(character => character.name);
console.log(allNames); 

// q6
let allHeights = characters.map(character => character.height);
console.log(allHeights); 

//q7
let getMass = characters.sort((a, b) => a.mass - b.mass);
console.log(getMass); 
// q8
let getHeight = characters.sort((a, b) => b.height - a.height);

//q9
let allMassOver40 = characters.every(character => character.mass > 40);
console.log(allMassOver40); 
//q10
let allShortThan200 = characters.every(character => character.height < 200);
console.log(allShortThan200);
// q11
let  blueEyes = characters.some(character => character.eye_color == "blue");
console.log(blueEyes); 
// q12
let tallThan210 = characters.some(character => character.height > 210);
console.log(tallThan210);