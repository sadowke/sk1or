document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('bgVideo');

    const playVideoWithSound = () => {
        video.muted = false;
        video.play().catch(err => {
            console.error('فشل تشغيل الفيديو بالصوت:', err);
        });
    };

    // حاول تشغيل الفيديو بالصوت تلقائيًا
    video.play().then(() => {
        video.muted = false;
    }).catch(error => {
        console.error('فشل تشغيل الفيديو تلقائيًا:', error);
        // طلب تفاعل المستخدم لتشغيل الصوت
        document.addEventListener('click', playVideoWithSound, { once: true });
        document.addEventListener('touchstart', playVideoWithSound, { once: true });
    });

    // تأكيد تشغيل الصوت مباشرة على الهواتف
    video.muted = false;
});