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
let DonateIndia = document.getElementById('DonateIndia')
let DonateInternational = document.getElementById('DonateInternational')
let donateP = document.getElementById('donateP')
let donatePInternational = document.getElementById('donatePInternational')

const english = {
    home:'Home',
    about:'About',
    donate:'Donate',
    contact:'Contact',
    bill:'Bill',
    membership:'Membership',
    footerBrand: 'Vanchit Bahujan Muslim Aghadi',
    footerT: 'All rights reserved',
    DonateIndia: 'Indian Donations',
    DonateInternational: 'International Donations',
    donateP:'To help with this cause please scan the QR code above to donate',
    donatePInternational: 'For international donations please follow the above details',
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
    DonateIndia: 'भारतीय दान',
    DonateInternational: 'अंतर्राष्ट्रीय दान',
    donateP:'इस काम में मदद करने के लिए कृपया दान करने के लिए ऊपर दिए गए क्यूआर कोड को स्कैन करें',
    donatePInternational: 'अंतरराष्ट्रीय दान के लिए कृपया उपरोक्त विवरण का पालन करें',
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
    DonateIndia: 'التبرعات الهندية',
    DonateInternational: 'التبرعات الدولية',
    donateP:'للمساعدة في ذلك ، يرجى مسح رمز الاستجابة السريعة أعلاه للتبرع.',
    donatePInternational: 'للتبرعات الدولية ، يرجى اتباع التفاصيل أعلاه.',
}

const convertToHindi = () => {
    home.innerHTML = hindi.home
    about.innerHTML = hindi.about
    donate.innerHTML = hindi.donate
    contact.innerHTML = hindi.contact
    bill.innerHTML = hindi.bill
    membership.innerHTML = hindi.membership
    DonateIndia.innerText = hindi.DonateIndia
    DonateInternational.innerText = hindi.DonateInternational
    donateP.innerText = hindi.donateP
    donatePInternational.innerText = hindi.donatePInternational
}

const convertToUrdu = () => {
    home.innerHTML = urdu.home
    about.innerHTML = urdu.about
    donate.innerHTML = urdu.donate
    contact.innerHTML = urdu.contact
    bill.innerHTML = urdu.bill
    membership.innerHTML = urdu.membership
    DonateIndia.innerHTML = urdu.DonateIndia
    DonateInternational.innerHTML = urdu.DonateInternational
    donateP.innerHTML = urdu.donateP
    donatePInternational.innerHTML = urdu.donatePInternational
}

const convertToEnglish = () => {
    home.innerHTML = english.home
    about.innerHTML = english.about
    donate.innerHTML = english.donate
    contact.innerHTML = english.contact
    bill.innerHTML = english.bill
    membership.innerHTML = english.membership
    DonateIndia.innerHTML = english.DonateIndia
    DonateInternational.innerHTML = english.DonateInternational
    donateP.innerHTML = english.donateP
    donatePInternational.innerHTML = english.donatePInternational
}

hindiBtn.addEventListener('click',convertToHindi)
englishBtn.addEventListener('click',convertToEnglish)
urduBtn.addEventListener('click',convertToUrdu)
navBtn.addEventListener('click',() => {
    mobNav.classList.toggle('show')
})