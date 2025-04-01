/**
 * 主脚本文件
 * 包含网站的交互功能实现和错误处理
 * 作者：景夜不熬夜
 * 
 * 功能模块：
 * 1. 移动端导航菜单控制
 * 2. 键盘访问支持
 * 3. 资源加载错误处理
 * 4. 404页面自动跳转
 */

/**
 * 切换移动端导航菜单的显示状态
 * @function toggleMenu
 * @description 
 * - 控制移动端导航菜单的展开和收起
 * - 更新汉堡按钮的状态
 * - 添加动画过渡效果
 * - 增加键盘访问支持
 */
function toggleMenu() {
    const nav = document.getElementById('primary-navigation');
    const button = document.querySelector('.hamburger');
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    
    button.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('show');
    
    // 增加键盘访问支持
    if (!isExpanded) {
        nav.querySelector('a').focus();
    } else {
        button.focus();
    }
}

/**
 * 文档加载完成后的初始化
 * @description 
 * - 设置事件监听器
 * - 处理菜单外部点击关闭
 * - 优化移动端体验
 * - 处理ESC键关闭菜单
 */
document.addEventListener('DOMContentLoaded', function() {
    // 处理移动端菜单点击外部关闭
    document.addEventListener('click', function(event) {
        const nav = document.getElementById('primary-navigation');
        const button = document.querySelector('.hamburger');
        
        if (!nav.contains(event.target) && !button.contains(event.target)) {
            nav.classList.remove('show');
            button.setAttribute('aria-expanded', 'false');
        }
    });
    
    // 处理ESC键关闭菜单
    document.addEventListener('keyup', function(event) {
        if (event.key === 'Escape') {
            const nav = document.getElementById('primary-navigation');
            const button = document.querySelector('.hamburger');
            nav.classList.remove('show');
            button.setAttribute('aria-expanded', 'false');
            button.focus();
        }
    });
});

/**
 * 资源加载错误处理
 * - 监听图片、脚本、样式表加载失败
 * - 在控制台输出错误信息
 */
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'SCRIPT' || e.target.tagName === 'LINK') {
        console.error('资源加载失败:', e.target.src || e.target.href);
    }
}, true);

/**
 * 404页面自动跳转功能
 * - 10秒倒计时
 * - 显示倒计时信息
 * - 自动返回首页
 */
if (document.querySelector('.error-page')) {
    let countdown = 10;
    const updateCountdown = setInterval(() => {
        if (countdown <= 0) {
            clearInterval(updateCountdown);
            // 修改为相对路径
            window.location.href = './index.html';
        }
        document.querySelector('.error-subtext').textContent = 
            `${countdown}秒后自动返回首页`;
        countdown--;
    }, 1000);
}
