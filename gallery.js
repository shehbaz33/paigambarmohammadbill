let home = document.getElementById('home')
let about = document.getElementById('about')
let donate = document.getElementById('donate')
let bill = document.getElementById('bill')
let hindiBtn = document.getElementById('hindi')
let urduBtn = document.getElementById('urdu')
let englishBtn = document.getElementById('english')
let navBtn = document.getElementById('btn-nav')
let mobNav = document.getElementById('mob-nav')
let footerBrand =  document.getElementById('footerBrand')
let footerT = document.getElementById('footerT')
let gallery = document.getElementById('gallery')
let galleryP = document.getElementById('galleryP')

const english = {
    home:'Home',
    about:'About',
    donate:'Donate',
    contact:'Contact',
    bill:'Bill',
    membership:'Membership',
    footerBrand: 'Vanchit Bahujan Muslim Aghadi',
    footerT: 'All rights reserved',
    gallery:'GALLERY',
    galleryP: 'A glimpse of what we do',
}

const hindi = {
    home:'घर',
    about:'के बारे में',
    donate:'दान करना',
    contact:'संपर्क करें',
    bill:'विपत्र',
    membership:'सदस्यता',
    footerBrand: 'वंचित बहुजन मुस्लिम अघाड़ी',
    footerT: 'सर्वाधिकार सुरक्षित',
    gallery:'गेलरी',
    galleryP: 'हम जो करते हैं उसकी एक झलक',
}

const urdu = {
    home:'مسكن',
    about:'عن',
    donate:'يتبرع',
    contact:'اتصل',
    bill:'فاتورة',
    membership:'عضوية',
    footerBrand: 'ونچیت بہوجن مسلم اگھاڑی',
    footerT: 'جملہ حقوق محفوظ ہیں',
    gallery:'صالة عرض',
    galleryP: 'لمحة عما نقوم به',
}

const convertToHindi = () => {
    home.innerHTML = hindi.home
    about.innerHTML = hindi.about
    donate.innerHTML = hindi.donate
    contact.innerHTML = hindi.contact
    bill.innerHTML = hindi.bill
    membership.innerHTML = hindi.membership
    footerBrand.innerHTML = hindi.footerBrand
    footerT.innerHTML = hindi.footerT
    gallery.innerText = hindi.gallery
    galleryP.innerText = hindi.galleryP
}

const convertToUrdu = () => {
    home.innerHTML = urdu.home
    about.innerHTML = urdu.about
    donate.innerHTML = urdu.donate
    contact.innerHTML = urdu.contact
    bill.innerHTML = urdu.bill
    membership.innerHTML = urdu.membership
    footerBrand.innerHTML = urdu.footerBrand
    footerT.innerHTML = urdu.footerT
    gallery.innerText = urdu.gallery
    galleryP.innerText = urdu.galleryP
}

const convertToEnglish = () => {
    home.innerHTML = english.home
    about.innerHTML = english.about
    donate.innerHTML = english.donate
    contact.innerHTML = english.contact
    bill.innerHTML = english.bill
    membership.innerHTML = english.membership
    footerBrand.innerHTML = english.footerBrand
    footerT.innerHTML = english.footerT
    gallery.innerText = english.gallery
    galleryP.innerText = english.galleryP
}

hindiBtn.addEventListener('click',convertToHindi)
englishBtn.addEventListener('click',convertToEnglish)
urduBtn.addEventListener('click',convertToUrdu)
navBtn.addEventListener('click',() => {
    mobNav.classList.toggle('show')
})