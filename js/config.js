// Supabase 配置 - 注意：supabase客户端已在index.html中声明
const supabaseUrl = 'https://mcjiaozdiihisthjzqye.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jamlhb3pkaWloaXN0aGp6cXllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0NjYxOTIsImV4cCI6MjA5MzA0MjE5Mn0.9GRLhtAHlQS_JVnGqLNvJYoBwpr6RHvAKB9sAsiNOv0';

// 初始化 Supabase 客户端
window.supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// 账号列表
const accounts = [
  { name: '叶焕柱', role: 'admin' },
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
