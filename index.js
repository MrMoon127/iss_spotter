const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('108.63.136.152', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:', coordinates)
// })

fetchISSFlyOverTimes({ latitude: 43.5890452, longitude: -79.6441198}, (error, times) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('it worked! returned fly over times:', times);
});