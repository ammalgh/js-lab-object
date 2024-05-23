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
