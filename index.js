const path = require('path');
const spawn = require('child_process').spawn;
function base(command) {
    return new Promise((resolve, reject) => {
        command.stderr.on('data', (data) => {
            data = data.toString();
            console.log(data)
            reject({
                success: false,
                message: data
            });
        });
        command.on('close', (code) => {
            resolve({
                success: true,
            });
        });
    });
}
function lockKeychain() {
    const command = spawn('security', ['lock-keychain']);
    return base(command);
}

function unlockKeychain(password) {
    password = password || '';
    const command = spawn('security', ['unlock-keychain', `-p`, password]);
    return base(command);
}

exports.unlockKeychain = unlockKeychain;
exports.lockKeychain = lockKeychain;

