const accessKey = '';
const container = document.querySelector('.photo-container');
const photoEl = document.querySelector('.photo')

let isFetching = false;
let count = 0;

const lsKey = 'likes';
const initLikes = parseInt(localStorage.getItem(lsKey)) || 0;


const fetchPhoto = async () => {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/?page=${page}&client_id=${accessKey}`);
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const data = await response.json();
        return data;
    }
    catch (err) {
        const errorMessage = document.createElement('div');
        errorMessage.textContent = err.message;
        container.append(errorMessage)
    }
    finally {
        isFetching = false;
    }

}
let page = 1;
async function init() {
    try {
        const data = await fetchPhoto(page);
        console.log(data);
        addPhotosInHTML(data);

    }
    catch (error) {
        console.log(error);
    }
}
init();

function addPhotosInHTML(data) {
    data.forEach((photo) => {
        const img = document.createElement('img');
        img.src = photo.urls.regular;
        container.insertAdjacentHTML('beforeend', `
        <div class="photo">
        <img src="${photo.urls.regular}" alt="${photo.alt_description}">
        <div class="user"> Имя фотографа: ${photo.user.name}</div>
        <div class="likes">
        <svg class="icon" width="60px" height="60px" viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg" fill=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M725.333333 192c-89.6 0-168.533333 44.8-213.333333 115.2C467.2 236.8 388.266667 192 298.666667 192 157.866667 192 42.666667 307.2 42.666667 448c0 253.866667 469.333333 512 469.333333 512s469.333333-256 469.333333-512c0-140.8-115.2-256-256-256z" fill="#FFCDD2"></path></g></svg>
        <p class="countLike"></p></div>
        </div>`)


    });

    const svgs = document.querySelectorAll('.icon');
    const arr = [];
    const pLike = document.querySelectorAll('.countLike');
    svgs.forEach((svg) => {
        svg.addEventListener('click', ({ target }) => {
            target.style.fill = 'rgb(106, 102, 96)';

            arr.push({
                name: target.closest('.photo').querySelector('.user').textContent,
                like: count += 1
            });
            pLike.textContent = arr.forEach((like) => {
                return like.like
            });
            localStorage.setItem(lsKey, JSON.stringify(arr))
        })
    })


}
window.addEventListener('scroll', async () => {
    const parcentPage = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100;
    if (parcentPage >= 90 && !isFetching) {
        isFetching = true;
        page++;
        console.log('fetch');
        try {
            const data = await fetchPhoto(page);
            addPhotosInHTML(data);
        } catch (error) {
            alert(error.message);
        }

    }
})


function countLikes() {
    count += 1;
    return count;
}


