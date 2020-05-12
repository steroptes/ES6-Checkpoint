let pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

getAge=(pet) => new Date().getFullYear() - pet.bornOn;
pets.map(pet => {pet.age = getAge(pet)});
console.log(pets);
let jasper = pets
  .filter(pet => pet.type === "dog")
  .find(dog => dog.name === "Jasper");
console.log(`Jasper is ${jasper.age} years old`);
