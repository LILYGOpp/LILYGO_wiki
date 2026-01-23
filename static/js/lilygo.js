class Carousel {
    constructor(container) {
        this.container = container;
        this.slides = Array.from(container.querySelectorAll('.slide-item'));
        this.dots = Array.from(container.querySelectorAll('.dot'));
        this.currentIndex = 0;
        this.autoSlideInterval = null;
        this.isHovered = false;

        this.init();
    }

    init() {
        // 初始化激活状态
        this.slides[0].classList.add('active');
        this.dots[0].classList.add('active');

        // 事件监听
        this.container.addEventListener('click', (e) => this.handleClick(e));
        this.container.addEventListener('mouseenter', () => this.handleHover(true));
        this.container.addEventListener('mouseleave', () => this.handleHover(false));

        // 自动播放
        this.startAutoPlay();
    }

    handleClick(e) {
        const dot = e.target.closest('.dot');
        if (dot) {
            const index = parseInt(dot.dataset.index);
            this.switchTo(index);
        }
    }

    handleHover(isHover) {
        this.isHovered = isHover;
        if (isHover) {
            this.stopAutoPlay();
        } else {
            this.startAutoPlay();
        }
    }

    switchTo(index) {
        if (index === this.currentIndex) return;
        
        // 确定切换方向
        const direction = index > this.currentIndex ? 'next' : 'prev';
        const currentSlide = this.slides[this.currentIndex];
        const nextSlide = this.slides[index];

        // 设置初始动画状态
        currentSlide.classList.add(`slide-${direction}`);
        nextSlide.classList.add(direction === 'next' ? 'slide-next' : 'slide-prev');
        nextSlide.classList.add('active');

        // 触发重绘
        void nextSlide.offsetWidth;

        // 执行动画
        currentSlide.classList.remove('active');
        nextSlide.classList.remove(direction === 'next' ? 'slide-next' : 'slide-prev');
        currentSlide.classList.remove(`slide-${direction}`);

        // 更新圆点状态
        this.updateDots(index);
        
        // 更新当前索引
        this.currentIndex = index;
    }
    updateDots(index) {
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    startAutoPlay() {
        if (this.autoSlideInterval || this.isHovered) return;
        
        this.autoSlideInterval = setInterval(() => {
            const nextIndex = (this.currentIndex + 1) % this.slides.length;
            this.switchTo(nextIndex);
        }, 3000);
    }

    stopAutoPlay() {
        clearInterval(this.autoSlideInterval);
        this.autoSlideInterval = null;
    }
}

// 初始化所有轮播图
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel-box').forEach(container => {
        new Carousel(container);
    });
});