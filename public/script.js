import axios from 'axios';

const registrationForm = document.getElementById('registration-form');
let selectedAvatar = ''; // Переменная для хранения выбранного аватара


registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const lastGameTime = document.getElementById('last-game-time').value;

  // Проверка данных (удалите лишний fetch)
  if (!username || !selectedAvatar || !lastGameTime) {
    alert('Пожалуйста, заполните все поля!');
    return;
  }

  axios.post('http://localhost:3000/register', {
    username: username,
    avatar: selectedAvatar,
    lastGameTime: lastGameTime
  })
  .then(response => {
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Registration failed');
    }
  })
  .then(data => {
    if (data.success) {
      // Сохраняем данные пользователя
      localStorage.setItem('username', username);
      localStorage.setItem('avatar', selectedAvatar);

      // Перенаправление на profile.html
      window.location.href = 'profile.html';
    } else {
      // Обработка ошибки регистрации
    }
  })
  .catch(error => {
    console.error(error);
  });
});