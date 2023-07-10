const fs = require('fs');

fs.rename('arquivo.txt', 'safadinho.txt', (err) => {
    if(err){
        console.log(err)
    }
    console.log('Tá pronto!');
  }); 