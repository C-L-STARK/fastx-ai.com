// 导航菜单切换
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR-GA-ID');

// 滚动动画
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.service-card, .achievement-card');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if(position.top < window.innerHeight) {
            element.classList.add('animate');
        }
    });
}); 