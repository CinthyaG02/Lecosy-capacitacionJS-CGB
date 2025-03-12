let user = {
    id: 1,
    name: 'Lalo Comotora',
    age: 25,
}

for(let prop in user){
    console.log(prop, user[prop]); 
}

let animales = ['Coshi', 'Pejelagarto', 'Cabaio'];
for (let indice in animales){
    console.log(indice, animales[indice]);
}