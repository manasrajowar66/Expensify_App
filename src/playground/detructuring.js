const book ={
    title:'ego is the enemy',
    author:'ryan holiday',
    publisher:{
        name:'penguin'
    }
};

const {name:publisherName = 'selfPublished'} = book.publisher;

console.log(publisherName);

const arr = ['coffe(hot)','$2.3','$3.4','$4.3'];

const [coffe, , ,price] = arr;

console.log(`${coffe} is ${price}`);