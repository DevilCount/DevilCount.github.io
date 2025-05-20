// 计算距离2025年3月22日的天数
function getDaysPassed() {
    const targetDate = new Date('2025-03-22');
    const currentDate = new Date();
    const timeDiff = currentDate - targetDate;
    return Math.floor(timeDiff / (1000 * 3600 * 24));
}

// 更新日期显示
function updateDateDisplay() {
    const days = getDaysPassed();
    document.getElementById('dateDisplay').textContent = `我们已经在一起${days}天`;
}

// 动态加载图片
function loadPhotos() {
    const gallery = document.getElementById('photoGallery');
    // 定义五个时期的名称
    const periods = ['时期1', '时期2', '时期3', '时期4', '时期5'];

    periods.forEach(period => {
        // 创建时期标题
        const periodSection = document.createElement('div');
        periodSection.className = 'period-section';
        periodSection.innerHTML = `<h2 class="period-title">${period}</h2>`;

        // 创建图片网格
        const photoGrid = document.createElement('div');
        photoGrid.className = 'photo-grid';

        // 假设每个时期最多有15张图片（根据工具call1结果调整）
        for (let i = 1; i <= 15; i++) {
            const imgPath = `./${period}/photo${i}.jpg`;
            const img = document.createElement('img');
            img.src = imgPath;
            img.alt = `${period}照片${i}`;
            photoGrid.appendChild(img);
        }

        periodSection.appendChild(photoGrid);
        gallery.appendChild(periodSection);
    });
}

// 初始化函数
function init() {
    updateDateDisplay();
    setInterval(updateDateDisplay, 1000 * 60 * 60); // 每小时更新一次
    loadPhotos();
}

// 页面加载完成后执行
window.onload = init;