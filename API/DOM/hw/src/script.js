// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.

// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.
// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.
// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.
// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".
// 5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.


const initalJson = '[{"title":"Английский","time":"17:00","max":"10","current":"0"},{"title":"Математика","time":"13:00","max":"10","current":"0"},{"title":"Информатика","time":"14:00","max":"10","current":"0"}]';
const lsKey = 'schedule';
if (!localStorage.getItem(lsKey)) {
    localStorage.setItem(lsKey, initalJson);
}
const schedule = JSON.parse(localStorage.getItem(lsKey));

const scheduleBox = document.querySelector('.schedule-box');

schedule.forEach(element => {
    const lesson = document.createElement('div');
    lesson.classList.add('lesson');
    lesson.innerHTML = `
    <h3>${element.title}</h3>
    <p>Время занятия: ${element.time}</p>
    <p class="max">Максимальное количество записей:<span> ${element.max}</span></p>
    <p class="current">Количество записавшихся:<span> ${element.current}</span></p>
    <button class="button-sign" type="button">Записаться</button>
    <button class="button-cancel" type="button" >Отменить запись</buton> 
    `
    scheduleBox.append(lesson);
})

const buttonsSign = document.querySelectorAll('.button-sign');
buttonsSign.forEach((button) => {
    button.addEventListener('click', () => {
        const lesson = button.parentElement;
        const title = lesson.querySelector('h3').innerText;
        const max = lesson.querySelector('.max >span');
        let current = lesson.querySelector('.current >span');
        if (parseInt(current.innerText) < parseInt(max.innerText)) {
            alert('Вы записаны на занятие!')
            current.innerText = parseInt(current.innerText) + 1;
            button.disabled = false;
        } else {
            alert('Максимальное количество записей на занятие достигнуто!')
            button.disabled = true;
        }
        schedule.forEach(element => {
            if (element.title === title) {
                element.current = current.innerText;
            }
        })
        localStorage.setItem(lsKey, JSON.stringify(schedule));
    })
}
)
const buttonsCancel = document.querySelectorAll('.button-cancel');
buttonsCancel.forEach(button => {
    const lesson = button.parentElement;
    const title = lesson.querySelector('h3').innerText;
    let current = lesson.querySelector('.current >span');
    button.addEventListener('click', () => {
        alert('Вы отменили запись на занятие!')
        current.innerText = parseInt(current.innerText) - 1;
        button.disabled = false;
        schedule.forEach(element => {
            if (element.title === title) {
                element.current = current.innerText;
            }
        })
        localStorage.setItem(lsKey, JSON.stringify(schedule));
    })
})


