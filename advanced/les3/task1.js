// 1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером 
// для их отображения.
// 2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна 
// имитировать задержку в 2 секунды перед успешным возвращением данных из 
// "виртуальной" базы данных. Для добавления интереса: с вероятностью 10% она 
// должна возвращать ошибку вместо данных.
// 3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), 
// обрабатывая успешное выполнение и ошибки с использованием then() и catch().
// При успешной загрузке отобразите статьи на странице. При ошибке покажите 
// сообщение об ошибке.
// 4. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" 
// новостей и активирует её снова после завершения операции (будь то успешная 
// загрузка или ошибка).
// */
const mockDatabase = [
    { title: "Новость 1", content: "Содержимое новости 1..." },
    { title: "Новость 2", content: "Содержимое новости 2..." },
    // ... другие статьи
];

function fetchNews() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() * 10 > 3) {
                resolve(mockDatabase)
            } else {
                reject(new Error('Проблемы с сетью'))
            }

        }, 1000);
    })
}



const button = document.querySelector('button');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
    button.disabled = true;
    fetchNews()
        .then((arr) => printNews(arr))
        .catch((err) => printErr(err.message))
        .finally(() => button.disabled = false)
});

function printNews(arr) {
    container.textContent = '';
    arr.forEach(element => {
        container.textContent += `${element.title} ${element.content}`
    });

}
function printErr(err) {
    container.textContent = err
}
