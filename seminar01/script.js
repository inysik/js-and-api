//  данные о занятиях загружаются из JSON-файла
const scheduleData = [
    { name: "Занятие 1", time: "10:00", maxParticipants: 15, currentParticipants: 10 },
    { name: "Занятие 2", time: "12:00", maxParticipants: 20, currentParticipants: 18 },
    { name: "Занятие 3", time: "15:00", maxParticipants: 12, currentParticipants: 8 }
  ];
  
  // Функция для отображения расписания занятий
  function displaySchedule() {
    const scheduleContainer = document.getElementById('schedule');
    scheduleContainer.innerHTML = '';
  
    scheduleData.forEach((item, index) => {
      const scheduleItem = `
        <div class="card mb-3 text-white " style="max-width: 18rem;">
          <div class="card-body ">
            <h5 class="card-title text-primary ">${item.name}</h5>
            <p class="card-text text-dark ">Время: ${item.time}</p>
            <p class="card-text text-dark">Макс. участников: ${item.maxParticipants}</p>
            <p class="card-text text-dark">Текущие участники: ${item.currentParticipants}</p>
            <button class="btn  enroll-btn btn-outline-success m-2" data-index="${index}">Записаться</button>
            <button class="btn  cancel-btn btn-outline-danger " data-index="${index}">Отменить запись</button>
          </div>
        </div>
      `;
      scheduleContainer.innerHTML += scheduleItem;
    });
  }
  
  // Функция для обработки нажатия на кнопку "Записаться"
  function enroll(index) {
    if (scheduleData[index].currentParticipants < scheduleData[index].maxParticipants) {
      scheduleData[index].currentParticipants++;
      displaySchedule();
    }
  }
  
  // Функция для обработки нажатия на кнопку "Отменить запись"
  function cancelEnrollment(index) {
    if (scheduleData[index].currentParticipants > 0) {
      scheduleData[index].currentParticipants--;
      displaySchedule();
    }
  }
  
  // Обработчики событий для кнопок "Записаться" и "Отменить запись"
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('enroll-btn')) {
      const index = event.target.getAttribute('data-index');
      enroll(index);
    }
    if (event.target.classList.contains('cancel-btn')) {
      const index = event.target.getAttribute('data-index');
      cancelEnrollment(index);
    }
  });
  
  // Инициализация отображения расписания
  displaySchedule();
  