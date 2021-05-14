var fs = require('fs');
// const fetch = require("node-fetch");


//CREATE A FILE 
fs.open('greeting.txt', 'w', (err, file) => {
  if (err) throw err;
  console.log('greeting.txt file created');
});


// //ADD CONTENT TO A FILE (if the file doesn't exist, this will add it)



// //WRITE TO A FILE  (swap to sync)



// //RENAME A FILE



//DELETE A FILE



// Write to a file after fetching data
