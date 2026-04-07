
function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('Login success')
    } else {
        return Promise.reject('Login Failed')
    }
}

function main() {
    login('admin', 'admin')
        .then(status => console.log(status))
        .catch(err => console.log(err))
        .finally(() => console.log("promise done!"))
}
main()