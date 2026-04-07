

const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        //mock data
        let user = { name: 'admin' }
        //user = null
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, 'User not found')
        }
    })
}

const login = user => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}

const showDashboard = (status, resolve, reject) => {
    console.log('Dashboard is called')
    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'Welcome to Dashboard')
        } else {
            setTimeout(reject, 1000, 'Sorry retry!')
        }
    })
}


function main() {
    // getUser(user => {
    //     login(user, status => {
    //         showDashboard(status, message => console.log(message), err => console.log(err))
    //     }, err => {
    //         console.log(err)
    //     })
    // }, err => {
    //     console.log(err)
    // })

    getUser()
        .then(user => login(user))
        .then(status => showDashboard(status))
        .then(result => console.log(result))
        .catch(err => console.log(err))
}
main()