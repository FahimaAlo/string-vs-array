const person = {
    name:'Fahima',
    age:19,
    profession:'web developer',
    salary:25000,
    married:false
}
person.salary = 30000;
console.log(person);

const propName = 'profession';
person[propName] = 'devops'

console.log(person)