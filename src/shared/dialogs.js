import Swal from "sweetalert2"

const sendToast = (title, icon) => {

    const toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    toast.fire({
        icon,
        title
    })
}

const registerModal = _ => {
    return Swal.fire({
        title: 'Sign up Form',
        html: `
            <input type="text" id="username" class="swal2-input" placeholder="Username">
            <input type="password" id="password" class="swal2-input" placeholder="Password">
        `,
        confirmButtonText: 'Sign up',
        focusConfirm: false,
        preConfirm: () => {
            const username = Swal.getPopup().querySelector('#username').value
            const password = Swal.getPopup().querySelector('#password').value
            if (!username || !password) {
                Swal.showValidationMessage(`Please enter username and password`)
            }

            const regx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
            let re = new RegExp(regx);
            if(!re.test(password)){
                Swal.showValidationMessage(`Password must have a min. 6 chars. a capital letter and a number`)
            }

            return { username, password }
        }
    })
}

const sendOkToast = (title) => sendToast(title, 'success')
const sendErrorToast = (title) => sendToast(title, 'error')

export { sendOkToast, sendErrorToast, registerModal }