// 注意：Supabase客户端已在index.html中初始化

// 账号列表
const accounts = [
  { name: '叶环珠', role: 'admin' },
  { name: '测试用户', role: 'user' }
];

// 渲染账号列表
function renderAccounts() {
  const list = document.getElementById('account-list');
  if (!list) return;
  list.innerHTML = accounts.map(acc => `
    <div class="account-btn" onclick="selectAccount('${acc.name}')">
      <div class="font-medium">${acc.name}</div>
      <div class="text-sm text-gray-500">${acc.role}</div>
    </div>
  `).join('');
}

// 选择账号登录
function selectAccount(name) {
  localStorage.setItem('currentUser', name);
  window.location.href = '/dashboard.html';
}

// 页面加载时渲染
document.addEventListener('DOMContentLoaded', renderAccounts);
