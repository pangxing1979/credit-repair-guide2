/* ============================================
   BESHORE · 司法分析 H5 - 公共 JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  // ===== 页面加载动画 =====
  const cards = document.querySelectorAll('.card, .module-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });

  // ===== 模块卡片点击效果 =====
  const moduleCards = document.querySelectorAll('.module-card');
  moduleCards.forEach(card => {
    card.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });

  // ===== 展开/收起功能 =====
  const expandables = document.querySelectorAll('[data-expand]');
  expandables.forEach(btn => {
    btn.addEventListener('click', function() {
      const targetId = this.getAttribute('data-expand');
      const target = document.getElementById(targetId);
      if (target) {
        target.classList.toggle('collapsed');
        this.textContent = target.classList.contains('collapsed') 
          ? this.textContent.replace('收起', '展开') 
          : this.textContent.replace('展开', '收起');
      }
    });
  });

  // ===== 底部栏按钮交互 =====
  const bottomBtns = document.querySelectorAll('.bottom-bar .btn');
  bottomBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const action = this.getAttribute('data-action');
      
      if (action === 'product-list') {
        showToast('产品列表功能开发中，敬请期待');
      } else if (action === 'online-test') {
        showToast('在线测额功能开发中，敬请期待');
      }
    });
  });

  // ===== Toast 提示 =====
  function showToast(message) {
    // 移除已有 toast
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      top: 80px;
      left: 50%;
      transform: translateX(-50%) translateY(-20px);
      background: rgba(7, 27, 58, 0.95);
      color: #FBF0DC;
      padding: 10px 24px;
      border-radius: 20px;
      border: 1px solid #D5A84D;
      font-size: 12px;
      z-index: 9999;
      opacity: 0;
      transition: all 0.3s ease;
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    }, 10);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(-20px)';
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }

  // ===== 平滑滚动到锚点 =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== 表单验证辅助 =====
  function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;
    
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#C0392B';
        isValid = false;
      } else {
        field.style.borderColor = '';
      }
    });
    
    return isValid;
  }

  // ===== 工具函数 =====
  window.BeshoreUtils = {
    showToast: showToast,
    validateForm: validateForm,
    formatDate: function(dateStr) {
      const date = new Date(dateStr);
      return date.toLocaleDateString('zh-CN', { 
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit'
      });
    },
    formatMoney: function(amount) {
      return '¥' + parseFloat(amount).toLocaleString('zh-CN');
    }
  };

  console.log('BESHORE H5 初始化完成');
});
