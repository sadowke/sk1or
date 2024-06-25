document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('bgVideo');
    
    // تحديد ما إذا كان يجب إسكات الفيديو
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
        video.muted = false;
        video.play().catch(error => {
            console.error('فشل تشغيل الفيديو بالصوت:', error);
            video.muted = true; // إذا فشل تشغيل الصوت، اسكت الفيديو
            video.play();
        });
    } else {
        video.muted = true; // اسكت الفيديو افتراضيًا على الأجهزة المحمولة
        video.play();
    }

    // محاولة تشغيل الصوت إذا تم كتم الفيديو افتراضيًا
    video.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
            video.play().catch(error => {
                console.error('فشل تشغيل الفيديو بالصوت بعد النقر:', error);
            });
        }
    });
});