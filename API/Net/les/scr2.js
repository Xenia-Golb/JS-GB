const accessKey = 'pjzCM0trMzf-ohdcrnpdm2LjsjBq11spSQm8mKZeH00';
const container = document.querySelector('.photo-container');
let isFetching = false;

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
        img.src = photo.urls.small;
        container.insertAdjacentHTML('beforeend', `
        <div class="photo">
        <img src="${photo.urls.small}" alt="${photo.alt_description}">
        </div>`)
    });
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
