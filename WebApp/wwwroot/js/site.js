document.addEventListener('DOMContentLoaded', function () {
    handleProfileImageUpload()
})

function handleProfileImageUpload() {
    try {

        let fileUploader = document.querySelector('#fileUploader')
        if (fileUploader != undefined) {
            fileUploader.addEventListener('change', function () {
                if (this.files.length > 0) {
                    this.form.submit()
                }
            })
        }
    }
    catch { }
}

const mobileBtn = document.querySelector('mobile-btn')

mobileBtn.addEventListener('click', () => {
    const menu = document.querySelector('#mobile-menu')

    const isOpen = menu.getAttribute('aria-expanded') == 'true'
    menu.setAttribute('aria-expanded', !isOpen)
})