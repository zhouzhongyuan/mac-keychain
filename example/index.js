var unlockKeychain = require('../index').unlockKeychain;
unlockKeychain('1111')
    .then((d) => {
        console.log(d);
    })
    .catch((e) => {
        console.log(e);
    })
