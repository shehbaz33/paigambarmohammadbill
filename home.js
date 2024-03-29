let home = document.getElementById('home')
let about = document.getElementById('about')
let donate = document.getElementById('donate')
let bill = document.getElementById('bill')
let hindiBtn = document.getElementById('hindi')
let urduBtn = document.getElementById('urdu')
let englishBtn = document.getElementById('english')
let navBtn = document.getElementById('btn-nav')
let mobNav = document.getElementById('mob-nav')
let headerH1 = document.getElementById('headerH1')
let headerH12 = document.getElementById('headerH12')
let headerSpan = document.getElementById('headerSpan')
let headerSpan2 = document.getElementById('headerSpan2')
let contactH1 = document.getElementById('contactH1')
let contactOffice = document.getElementById('contactOffice')
let contactMumbai = document.getElementById('contactMumbai')
let contactSuburban = document.getElementById('contactSuburban')
let billH1 = document.getElementById('billH1')
let billH12 = document.getElementById('billH12')
let billH13 = document.getElementById('billH13')
let billH14 = document.getElementById('billH14')
let billHead = document.getElementById('billHead')
let billSpan = document.getElementById('billSpan')
let billSpan2 = document.getElementById('billSpan2')
let billSpanEnglish = document.getElementById('billSpanEnglish')
let billSpanEnglish2 = document.getElementById('billSpanEnglish2')
let footerBrand =  document.getElementById('footerBrand')
let footerT = document.getElementById('footerT')

const english = {
    home:'Home',
    about:'About',
    donate:'Donate',
    contact:'Contact',
    bill:'Bill',
    membership:'Membership',
    headerH1:'National Leader:',
    headerSpan:'Hon. Adv. Prakash and Balasaheb Ambedkar',
    headerH12:'National Leader:',
    headerSpan2:'Vanchit Bahujan Muslim Aghadi',
    contactH1: 'Vanchit Bahujan Muslim Aaghadi',
    contactNumber: '022 2541122 9899585606/932228645',
    contactOffice: 'Central Office: Avedkar Bhavan, Bhokuldas Pasta Road, Dadar, Mumbai 400 028',
    contactMumbai: 'Mumbai City Office: Shop no. 04 Ratlamwala Mansion, 3rd Sakli Street, Byculla (W), Mumbai-400008',
    contactSuburban: 'Mumbai Suburban Office: Office K10, Opposite Ajmeri Mosque, Anis Compound Andheri Ghatkopar Link Road, Sakinaka, Mumbai - 400 072',
    billHead: 'BILL',
    billH1:'Paigambar Mohammed(saw) Bill',
    billSpan: 'in Urdu Page-1',
    billSpan2: 'in Urdu Page-2',
    billSpanEnglish: 'in English Page-1',
    billSpanEnglish2: 'in English Page-2',
    footerBrand: 'Vanchit Bahujan Muslim Aghadi',
    footerT: 'All rights reserved',
}

const hindi = {
    home:'घर',
    about:'के बारे में',
    donate:'दान करना',
    contact:'संपर्क करें',
    bill:'विपत्र',
    membership:'सदस्यता',
    headerH1:'राष्ट्रीय नेता:',
    headerSpan:'माननीय सलाह प्रकाश और बालासाहेब अम्बेडकर',
    headerH12:'राष्ट्रीय नेता:',
    headerSpan2:'वंचित बहुजन मुस्लिम अघाड़ी',
    contactH1: 'वंचित बहुजन मुस्लिम आघाडी',
    contactNumber: '022 2541122 9899585606/932228645',
    contactOffice: 'केंद्रीय कार्यालय: आवेदकर भवन, भोकुलदास पास्ता रोड, दादर, मुंबई 400 028',
    contactMumbai: 'मुंबई शहर कार्यालय: दुकान सी। 04 रतलामवाला मिशन सकली रोड c. 3. भायखला (पश्चिम), मुंबई-4OO COOL',
    contactSuburban: 'मुंबई उपनगरीय कार्यालय: कार्यालय K10, अजमेरी मस्जिद के सामने, अनीस कम्पा अधेरी घाटकोपर लिंक रोड, साकीनाका, मुंबई - 400 072',
    billH1:'पैगंबर मोहम्मद बिल',
    billHead: 'विपत्र',
    billSpan: 'उर्दू में पेज-1',
    billSpan2: 'उर्दू में पेज-2',
    billSpanEnglish: 'अंग्रेजी में पेज-1',
    billSpanEnglish2: 'अंग्रेजी में पेज-2',
    footerBrand: 'वंचित बहुजन मुस्लिम अघाड़ी',
    footerT: 'सर्वाधिकार सुरक्षित',
}

const urdu = {
    home:'مسكن',
    about:'عن',
    donate:'يتبرع',
    contact:'اتصل',
    bill:'فاتورة',
    membership:'عضوية',
    headerH1:'القائد الوطني:',
    headerSpan:'المحامي المحترم براكاش وبالاشهب أمبيدكار',
    headerH12:'القائد الوطني:',
    headerSpan2:'جبهة فانشيت بهوجان مسلم',
    contactH1: 'جبهة فانشيت بهوجان مسلم',
    contactOffice: 'المكتب المركزي: أفيدكار بهافان ، طريق باستا بهوكولداس ، دادار ، مومباي 400 028',
    contactMumbai: 'ممبئی سٹی آفس: دکان c. 04 رتلام والا مشن ساکلی روڈ سی۔ 3. بائیکلہ (W) ، ممبئی -4 OO COL',
    contactSuburban: 'ممبئی مضافاتی دفتر: آفس K10 ، مجمییری مسجد کے سامن ، شکل کمپا تعدادات کور ، ساکیناکا ، ممبئی - 400 072',
    billH1:'پیگمبر محمد (ص) بل',
    billHead: 'بل',
    billSpan: 'اردو میں صفحہ 1',
    billSpan2: 'اردو میں صفحہ 2',
    billSpanEnglish: 'انگریزی میں صفحہ -1',
    billSpanEnglish2: 'انگریزی میں صفحہ -2',
    footerBrand: 'ونچیت بہوجن مسلم اگھاڑی',
    footerT: 'جملہ حقوق محفوظ ہیں',
}

const convertToHindi = () => {
    home.innerHTML = hindi.home
    about.innerHTML = hindi.about
    donate.innerHTML = hindi.donate
    contact.innerHTML = hindi.contact
    bill.innerHTML = hindi.bill
    membership.innerHTML = hindi.membership
    headerH1.innerHTML = hindi.headerH1
    headerH12.innerHTML = hindi.headerH1
    headerSpan.innerText = hindi.headerSpan
    headerSpan2.innerText = hindi.headerSpan2
    contactH1.innerText = hindi.contactH1
    contactOffice.innerText = hindi.contactOffice
    contactMumbai.innerText = hindi.contactMumbai
    contactSuburban.innerText = hindi.contactSuburban
    billH1.innerHTML = hindi.billH1
    billH12.innerHTML = hindi.billH1
    billH13.innerHTML = hindi.billH1
    billH14.innerHTML = hindi.billH1
    billHead.innerHTML = hindi.billHead
    billSpan.innerHTML = hindi.billSpan
    billSpan2.innerHTML = hindi.billSpan2
    billSpanEnglish.innerHTML = hindi.billSpanEnglish
    billSpanEnglish2.innerHTML = hindi.billSpanEnglish2
    footerBrand.innerHTML = hindi.footerBrand
    footerT.innerHTML = hindi.footerT
}

const convertToUrdu = () => {
    home.innerHTML = urdu.home
    about.innerHTML = urdu.about
    donate.innerHTML = urdu.donate
    contact.innerHTML = urdu.contact
    bill.innerHTML = urdu.bill
    membership.innerHTML = urdu.membership
    headerH1.innerHTML = urdu.headerH1
    headerH12.innerHTML = urdu.headerH1
    headerSpan.innerText = urdu.headerSpan
    headerSpan2.innerText = urdu.headerSpan2
    contactH1.innerHTML = urdu.contactH1
    contactOffice.innerHTML = urdu.contactOffice
    contactMumbai.innerHTML = urdu.contactMumbai
    contactSuburban.innerHTML = urdu.contactSuburban
    billH1.innerHTML = urdu.billH1
    billH12.innerHTML = urdu.billH1
    billH13.innerHTML = urdu.billH1
    billH14.innerHTML = urdu.billH1
    billHead.innerHTML = urdu.billHead
    billSpan.innerHTML = urdu.billSpan
    billSpan2.innerHTML = urdu.billSpan2
    billSpanEnglish.innerHTML = urdu.billSpanEnglish
    billSpanEnglish2.innerHTML = urdu.billSpanEnglish2
    footerBrand.innerHTML = urdu.footerBrand
    footerT.innerHTML = urdu.footerT
}

const convertToEnglish = () => {
    home.innerHTML = english.home
    about.innerHTML = english.about
    donate.innerHTML = english.donate
    contact.innerHTML = english.contact
    bill.innerHTML = english.bill
    membership.innerHTML = english.membership
    headerH1.innerHTML = english.headerH1
    headerH12.innerHTML = english.headerH1
    headerSpan.innerText = english.headerSpan
    headerSpan2.innerText = english.headerSpan2
    contactH1.innerHTML = english.contactH1
    contactOffice.innerHTML = english.contactOffice
    contactMumbai.innerHTML = english.contactMumbai
    contactSuburban.innerHTML = english.contactSuburban
    billH1.innerHTML = english.billH1
    billH12.innerHTML = english.billH1
    billH13.innerHTML = english.billH1
    billH14.innerHTML = english.billH1
    billHead.innerHTML = english.billHead
    billSpan.innerHTML = english.billSpan
    billSpan2.innerHTML = english.billSpan2
    billSpanEnglish.innerHTML = english.billSpanEnglish
    billSpanEnglish2.innerHTML = english.billSpanEnglish2
    footerBrand.innerHTML = english.footerBrand
    footerT.innerHTML = english.footerT
}

hindiBtn.addEventListener('click',convertToHindi)
englishBtn.addEventListener('click',convertToEnglish)
urduBtn.addEventListener('click',convertToUrdu)
navBtn.addEventListener('click',() => {
    mobNav.classList.toggle('show')
})