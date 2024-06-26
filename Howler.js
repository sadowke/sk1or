<script src="https://cdn.jsdelivr.net/npm/howler@2.2.3/dist/howler.min.js"></script>
<script>
    // إنشاء كائن صوت باستخدام Howler.js
    var sound = new Howl({
        src: ['audio/sadowke.mp3', 'audio/sadowke.ogg', 'audio/sadowke.wav'],
        autoplay: true,
        loop: true,
        volume: 0.5, // تعيين الصوت إلى النصف من الحجم القياسي
        onplayerror: function() {
            console.error('Unable to play sound');
        }
    });

    // تشغيل الصوت
    sound.play();

    // وقف الصوت
    // sound.pause();

    // إيقاف وإعادة تشغيل الصوت
    // sound.stop();
</script>