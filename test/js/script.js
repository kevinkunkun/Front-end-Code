let currentImageIndex = 0;
const images = ["img/54.jpg", "img/5402.jpg", "img/五四1.webp"]; // 更多图片路径
const sliderImage = document.getElementById('sliderImage');

function changeImage() {
    sliderImage.src = images[currentLEDImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length; // 更新索引
    setTimeout(changeImage, 3000); // 每3秒更换图片
}

changeImage(); // 开始轮播
