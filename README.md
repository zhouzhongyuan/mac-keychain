# mac-keychain

## Function
- unlock-keychain
- lock-keychain


## How to use

```
var unlockKeychain = require('../index').unlockKeychain;
unlockKeychain('111')
    .then((d) => {
        console.log(d);
    })
    .catch((e) => {
        console.log(e);
    })

```
## Return value

### success
```
{
    success: true,
}
```

### fail
```
{
    success: false,
    error: '******\n' 
}
```


## Command line
```
security unlock-keychain -p <password>
```