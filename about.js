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
let aboutH1 = document.getElementById('aboutH1')
let aboutDetails = document.getElementById('aboutDetails')
let aboutBtn = document.getElementById('aboutBtn')
let voiceH1 = document.getElementById('voiceH1')
let voiceBtn = document.getElementById('voiceBtn')

const english = {
    home:'Home',
    about:'About',
    donate:'Donate',
    contact:'Contact',
    bill:'Bill',
    membership:'Membership',
    footerBrand: 'Vanchit Bahujan Muslim Aghadi',
    footerT: 'All rights reserved',
    aboutH1:'About Us',
    aboutDetails:'The Vanchit Bahujan Muslim Aaghadi is an Indian political party founded by Prakash Ambedkar on 20 March 2018.',
    aboutBtn:'Know more',
    voiceH1:'Voice of the people',
    voiceBtn:'Know more',
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
    aboutH1:'हमारे बारे में',
    aboutDetails:'वंचित बहुजन मुस्लिम आघाड़ी 20 मार्च 2018 को प्रकाश अंबेडकर द्वारा स्थापित एक भारतीय राजनीतिक दल है।',
    aboutBtn:'अधिक जानिए',
    voiceH1:'लोगों की आवाज',
    voiceBtn:'अधिक जानिए',
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
    aboutH1:'كل شيء عنا',
    aboutDetails:'فانشيت بهوجان مسلم أقدي هو حزب سياسي هندي أسسه براكاش أمبيدكار في 20 مارس 2018.',
    aboutBtn:'تعرف أكثر',
    voiceH1:'صوت الشعب',
    voiceBtn:'تعرف أكثر',
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
    aboutH1.innerHTML = hindi.aboutH1
    aboutDetails.innerHTML = hindi.aboutDetails
    aboutBtn.innerHTML = hindi.aboutBtn
    voiceH1.innerHTML = hindi.voiceH1
    voiceBtn.innerHTML = hindi.voiceBtn
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
    aboutH1.innerHTML = urdu.aboutH1
    aboutDetails.innerHTML = urdu.aboutDetails
    aboutBtn.innerHTML = urdu.aboutBtn
    voiceH1.innerHTML = urdu.voiceH1
    voiceBtn.innerHTML = urdu.voiceBtn
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
    aboutH1.innerHTML = english.aboutH1
    aboutDetails.innerHTML = english.aboutDetails
    aboutBtn.innerHTML = english.aboutBtn
    voiceH1.innerHTML = english.voiceH1
    voiceBtn.innerHTML = english.voiceBtn
}

hindiBtn.addEventListener('click',convertToHindi)
englishBtn.addEventListener('click',convertToEnglish)
urduBtn.addEventListener('click',convertToUrdu)
navBtn.addEventListener('click',() => {
    mobNav.classList.toggle('show')
})