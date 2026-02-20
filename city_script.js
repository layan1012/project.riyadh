// ==========================================
// 1. تفعيل قائمة التنقل (الهمبرجر) للشاشات الصغيرة
// ==========================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if(hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// ==========================================
// 2. تفعيل الزر التفاعلي وسحب التحية المخصصة
// ==========================================
const interactiveBtn = document.getElementById('interactiveBtn');
const responseMsg = document.getElementById('responseMsg');

if(interactiveBtn) {
    interactiveBtn.addEventListener('click', () => {
        // يسحب التحية من السطر البرمجي للزر، وإذا مالقاها يحط تحية افتراضية
        const customGreeting = interactiveBtn.getAttribute('data-greeting') || "دامت مدن المملكة عامرة بالرخاء 🇸🇦";
        
        responseMsg.textContent = customGreeting;
        
        // حركة بصرية للزر
        interactiveBtn.style.transform = "rotate(5deg)";
        setTimeout(() => {
            interactiveBtn.style.transform = "rotate(0deg)";
        }, 300);
    });
}