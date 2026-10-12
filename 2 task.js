function readConfig(path, callback) {
    setTimeout(() => {
        if (typeof path === 'string') {
            callback(null, { 'path': path });
        } else {
            callback(new Error('path not a sring'))
        }
    }, 2000);
}

readConfig('/etc/app.json', (err, cfg) => console.log(err ? err.message : cfg)); // {path: '/etc/app.json }
readConfig(42, (err) => console.log(err)); // Error