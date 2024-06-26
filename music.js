// تعريف كائن الصوت باستخدام Howler.js
var sound = new Howl({
    src: ['music/music.mp3', 'music/music.ogg', 'music/music.wav'],
    autoplay: true,
    loop: true,
    volume: 0.5, // تعيين الصوت إلى النصف من الحجم القياسي
    onplayerror: function() {
        console.error('Unable to play sound');
    }
});