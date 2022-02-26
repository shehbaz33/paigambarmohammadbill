let home = document.getElementById('home')
let about = document.getElementById('about')
let donate = document.getElementById('donate')
let bill = document.getElementById('bill')
let membership = document.getElementById('membership')
let contact = document.getElementById('contact')
let hindiBtn = document.getElementById('hindi')
let urduBtn = document.getElementById('urdu')
let englishBtn = document.getElementById('english')
let headerH1 = document.getElementById('headerH1')
let headerH12 = document.getElementById('headerH12')
let headerSpan = document.getElementById('headerSpan')
let headerSpan2 = document.getElementById('headerSpan2')
let voiceH1 = document.getElementById('voiceH1')
let voiceBtn = document.getElementById('voiceBtn')
let aboutH1 = document.getElementById('aboutH1')
let aboutDetails = document.getElementById('aboutDetails')
let aboutBtn = document.getElementById('aboutBtn')
let DonateIndia = document.getElementById('DonateIndia')
let DonateInternational = document.getElementById('DonateInternational')
let donateP = document.getElementById('donateP')
let donatePInternational = document.getElementById('donatePInternational')
let gallery = document.getElementById('gallery')
let galleryP = document.getElementById('galleryP')
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
let navBtn = document.getElementById('btn-nav')
let mobNav = document.getElementById('mob-nav')


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
    voiceH1:'Voice of the people',
    voiceBtn:'Know more',
    aboutH1:'About Us',
    aboutDetails:'The Vanchit Bahujan Muslim Aaghadi is an Indian political party founded by Prakash Ambedkar on 20 March 2018.',
    aboutBtn:'Know more',
    DonateIndia: 'Indian Donations',
    DonateInternational: 'International Donations',
    donateP:'To help with this cause please scan the QR code above to donate',
    donatePInternational: 'For international donations please follow the above details',
    gallery:'GALLERY',
    galleryP: 'A glimpse of what we do',
    contactH1: 'Vanchit Bahujan Muslim Aaghadi',
    contactNumber: '022 2541122 9899585606/932228645',
    contactOffice: 'Central Office: Avedkar Bhavan, Bhokuldas Pasta Road, Dadar, Mumbai 400 028',
    contactMumbai: 'Mumbai City Office: Shop c. 04 Ratlamwala Mission Sakli Road c. 3. Byculla (W), Mumbai-4OO COL',
    contactSuburban: 'Mumbai Suburban Office: Office K10, Opposite Ajmeri Mosque, Anis Kampa Adheri Ghatkopar Link Road, Sakinaka, Mumbai - 400 072',
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
    voiceH1:'लोगों की आवाज',
    voiceBtn:'अधिक जानिए',
    aboutH1:'हमारे बारे में',
    aboutDetails:'वंचित बहुजन मुस्लिम आघाड़ी 20 मार्च 2018 को प्रकाश अंबेडकर द्वारा स्थापित एक भारतीय राजनीतिक दल है।',
    aboutBtn:'अधिक जानिए',
    DonateIndia: 'भारतीय दान',
    DonateInternational: 'अंतर्राष्ट्रीय दान',
    donateP:'इस काम में मदद करने के लिए कृपया दान करने के लिए ऊपर दिए गए क्यूआर कोड को स्कैन करें',
    donatePInternational: 'अंतरराष्ट्रीय दान के लिए कृपया उपरोक्त विवरण का पालन करें',
    gallery:'गेलरी',
    galleryP: 'हम जो करते हैं उसकी एक झलक',
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
    voiceH1:'صوت الشعب',
    voiceBtn:'تعرف أكثر',
    aboutH1:'كل شيء عنا',
    aboutDetails:'Vanchit Bahujan Muslim Aghari هو حزب سياسي هندي أسسه براكاش أمبيدكار في 20 مارس 2018.',
    aboutBtn:'تعرف أكثر',
    DonateIndia: 'التبرعات الهندية',
    DonateInternational: 'التبرعات الدولية',
    donateP:'للمساعدة في ذلك ، يرجى مسح رمز الاستجابة السريعة أعلاه للتبرع.',
    donatePInternational: 'للتبرعات الدولية ، يرجى اتباع التفاصيل أعلاه.',
    gallery:'صالة عرض',
    galleryP: 'لمحة عما نقوم به',
    contact: 'جبهة فانشيت بهوجان مسلم',
    contactNumber: '٢٥٤١١٢٢ ٩٨٩٩٥٨٥٦٠٦/٩٣٢٢٢٨٦٤٥',
    contactH1: 'جبهة فانشيت بهوجان مسلم',
    contactOffice: 'المكتب المركزي: Avedkar Bhavan، Bhokuldas Pasta Road، Dadar، Mumbai 400 028',
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
    voiceH1.innerHTML = hindi.voiceH1
    voiceBtn.innerHTML = hindi.voiceBtn
    aboutH1.innerHTML = hindi.aboutH1
    aboutDetails.innerHTML = hindi.aboutDetails
    aboutBtn.innerHTML = hindi.aboutBtn
    DonateIndia.innerHTML = hindi.DonateIndia
    DonateInternational.innerHTML = hindi.DonateInternational
    donateP.innerHTML = hindi.donateP
    donatePInternational.innerHTML = hindi.donatePInternational
    gallery.innerText = hindi.gallery
    galleryP.innerText = hindi.galleryP
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
    voiceH1.innerHTML = urdu.voiceH1
    voiceBtn.innerHTML = urdu.voiceBtn
    aboutH1.innerHTML = urdu.aboutH1
    aboutDetails.innerHTML = urdu.aboutDetails
    aboutBtn.innerHTML = urdu.aboutBtn
    DonateIndia.innerHTML = urdu.DonateIndia
    DonateInternational.innerHTML = urdu.DonateInternational
    donateP.innerHTML = urdu.donateP
    donatePInternational.innerHTML = urdu.donatePInternational
    gallery.innerText = urdu.gallery
    galleryP.innerText = urdu.galleryP
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
    voiceH1.innerHTML = english.voiceH1
    voiceBtn.innerHTML = english.voiceBtn
    aboutH1.innerHTML = english.aboutH1
    aboutDetails.innerHTML = english.aboutDetails
    aboutBtn.innerHTML = english.aboutBtn
    DonateIndia.innerHTML = english.DonateIndia
    DonateInternational.innerHTML = english.DonateInternational
    donateP.innerHTML = english.donateP
    donatePInternational.innerHTML = english.donatePInternational
    gallery.innerText = english.gallery
    galleryP.innerText = english.galleryP
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

