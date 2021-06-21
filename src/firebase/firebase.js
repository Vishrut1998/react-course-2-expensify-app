import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  apiId : process.env.FIREBASE_APP_ID,
  measurementId : process.env.FIREBASE_MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };


// const notes = [{
//     id:'12',
//     title:'My First Note',
//     body : 'This is Note 1'
// },
// {
//     id:'13',
//     title:'My Second Note',
//     body : 'This is Note 2'

// }];

// database.ref('expenses').on('child_removed' , (snapshot) => {
//     console.log(snapshot.key , snapshot.val());
// })

// database.ref('expenses').on('child_changed' , (snapshot) => {
//     console.log(snapshot.key , snapshot.val());
// })

// database.ref('expenses').on('child_added' , (snapshot) => {
//     console.log(snapshot.key , snapshot.val());
// })


// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);

// })

// database.ref('expenses').on('value',(snapshot)=>{
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);

// })




// database.ref('expenses').push({
//     description : 'Rent',
//     note : '',
//     amount:109500,
//     createdAt:4686454843


// });


// database.ref('expenses').push({
//     description : 'Phone bill',
//     note : '',
//     amount:5900,
//     createdAt:4686454843


// });


// database.ref('expenses').push({
//     description : 'Food',
//     note : '',
//     amount:1200,
//     createdAt:4686454843


// });




// database.ref().on('value' , (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) => {
//     console.log("Error Fetching data" , e);
// })

// database.ref().set({
//       name:'Vishrut Sharma',
//       age:22,
//       stressLevel:6,
//       job:{
//           title:'Software Developer',
//           company:'Google'
//       },
//       location:{
//           city:'New Delhi',
//           country:'India'
//       }
//   }).then(() => {
//       console.log('Data is saved');
//   }).catch((e) => {
//       console.log('This failed' , e);

//   });

// // database.ref('isSingle').remove().then(() => {
// //     console.log("Remove successful");
// // }).catch((e) => {
// //     console.log('data not found to be removed' , e);
// // });

// database.ref().update({
//     stressLevel:9,
//     'job/company' : 'Amazon',
//     'location/city' : 'Seatlle',
//     'location/country' : 'America'

// })