var users = [
    {
        email: 'test@gmail.com',
        password: "test"
    },
    {
        email: 'test1@gmail.com',
        password: "test1"
    },
    {
        email: 'test2@gmail.com',
        password: "test2"
    },
]


function login() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var title = document.getElementById('title')
    var login = document.getElementById('login')
    var register = document.getElementById('register')
    var hmitouch = document.getElementById('logout')

    const found = users.find(user => user.email === email)

    if (found && found.password === password) {
        title.style.visibility = "visible"
        login.style.visibility = "hidden"
        register.style.visibility = "hidden"
        hmitouch.style.display = "block"

        alert('welcome')
    } else {
        alert('this user doesnt exist')
    }
}

function register() {
    var newEmail = document.getElementById('newemail').value
    var newPassword = document.getElementById('newpassword').value
    var newpassword2 = document.getElementById('newpassword2').value

    const found = users.find(user => user.email === newEmail)

    if (found) {
        alert('User already exists')
    } else {
        if (newPassword !== newpassword2) {
            alert('Passwords not the same')
        } else if (newPassword.length < 4) {
            alert('password is not enough')
        } else {
            const newUser = {
                email: newEmail,
                password: newPassword
            }
            users.push(newUser)
        }
    }
}

function logout() {
    location.reload();
}