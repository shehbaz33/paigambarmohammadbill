let home = document.getElementById('home')
let about = document.getElementById('about')
let donate = document.getElementById('donate')
let bill = document.getElementById('bill')
let hindiBtn = document.getElementById('hindi')
let urduBtn = document.getElementById('urdu')
let englishBtn = document.getElementById('english')
let navBtn = document.getElementById('btn-nav')
let mobNav = document.getElementById('mob-nav')

const english = {
    home:'Home',
    about:'About',
    donate:'Donate',
    contact:'Contact',
    bill:'Bill',
    membership:'Membership',
}

const hindi = {
    home:'घर',
    about:'के बारे में',
    donate:'दान करना',
    contact:'संपर्क करें',
    bill:'विपत्र',
    membership:'सदस्यता',
}

const urdu = {
    home:'مسكن',
    about:'عن',
    donate:'يتبرع',
    contact:'اتصل',
    bill:'فاتورة',
    membership:'عضوية',
}

const convertToHindi = () => {
    home.innerHTML = hindi.home
    about.innerHTML = hindi.about
    donate.innerHTML = hindi.donate
    contact.innerHTML = hindi.contact
    bill.innerHTML = hindi.bill
    membership.innerHTML = hindi.membership
}

const convertToUrdu = () => {
    home.innerHTML = urdu.home
    about.innerHTML = urdu.about
    donate.innerHTML = urdu.donate
    contact.innerHTML = urdu.contact
    bill.innerHTML = urdu.bill
    membership.innerHTML = urdu.membership
}

const convertToEnglish = () => {
    home.innerHTML = english.home
    about.innerHTML = english.about
    donate.innerHTML = english.donate
    contact.innerHTML = english.contact
    bill.innerHTML = english.bill
    membership.innerHTML = english.membership
}

hindiBtn.addEventListener('click',convertToHindi)
englishBtn.addEventListener('click',convertToEnglish)
urduBtn.addEventListener('click',convertToUrdu)
navBtn.addEventListener('click',() => {
    mobNav.classList.toggle('show')
})