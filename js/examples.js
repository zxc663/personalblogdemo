/**
 * 前端基础功能示例
 * 包含常用的JavaScript功能实现
 */

// 1. DOM操作示例
function domExample() {
    // 元素选择
    const element = document.querySelector('.example');
    
    // 事件处理
    element.addEventListener('click', () => {
        // 类名操作
        element.classList.toggle('active');
        
        // 属性操作
        element.setAttribute('data-state', 'changed');
        
        // 内容操作
        element.textContent = '内容已更改';
    });
}

// 2. 异步操作示例
async function fetchExample() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('数据获取失败:', error);
    }
}

// 导出示例函数
export { domExample, fetchExample };
