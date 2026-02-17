// 1. وظيفة القائمة الجانبية (Hamburger Menu) للجوال
function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('active');
}

// 2. برمجة قسم التعليقات (Guestbook)
document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    
    // جلب القيم
    const name = document.getElementById('visitor-name').value;
    const msg = document.getElementById('visitor-msg').value;
    const container = document.getElementById('comments-display');
    
    // إنشاء عنصر HTML للتعليق
    const newComment = document.createElement('div');
    newComment.classList.add('comment-item');
    newComment.innerHTML = `<strong>${name}:</strong> <br> ${msg}`;
    
    // إضافة التعليق للصفحة
    container.prepend(newComment); // يضيفه في الأعلى
    
    // مسح الحقول
    document.getElementById('comment-form').reset();
    alert("شكراً لك! تم نشر تعليقك.");
});

// 3. زر الصعود للأعلى (Scroll to Top)
window.onscroll = function() {
    const btn = document.getElementById('scroll-top');
    if (document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
