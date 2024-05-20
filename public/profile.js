const userName = document.getElementById('user-name');
const userAvatar = document.getElementById('user-avatar');
const balance = document.getElementById('balance');

// Получаем данные из localStorage
const username = localStorage.getItem('username');
const avatar = localStorage.getItem('avatar');

// Заполняем данные в профиле
userName.textContent = username;

// Проверяем, не пустой ли аватар
if (avatar) {
  userAvatar.src = avatar;
} else {
  // Если аватар пустой, установите значение по умолчанию
  userAvatar.src = 'default-avatar.png'; // Замените на ваше значение по умолчанию
}