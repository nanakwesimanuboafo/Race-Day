let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let age = 34;

if (age > 18 && registeredEarly){
raceNumber +=1000;
}

if(age > 18 && registeredEarly){
  console.log(`Runner ${raceNumber}, Your race will be starting at 9:30am`);
} 
else if (age > 18 && !registeredEarly){
  console.log(`Runner ${raceNumber} Your race will be starting at 11:00am`);
}
else if(age < 18 ){
  console.log(`Runner ${raceNumber} Your race will be starting at 12:30pm`);
}
else {
  console.log('Runners who are 18 years old should see the registration desk.');
}