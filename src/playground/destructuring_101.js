// const book = {
//     title : 'Ego is the enemy',
//     auhor : 'Ryan Holiday',
//     publisher : {
//         name : 'Penguin'
//     }
// };

// const {name : publisherName = 'Self-published'} = book.publisher;
// console.log(`${publisherName}`);

const item = ['Coffee(hot)' , '$2.00' , '$2.50' , '$2.75'];

const[product,,medium] = item

console.log(`A medium ${product} costs ${medium}`);