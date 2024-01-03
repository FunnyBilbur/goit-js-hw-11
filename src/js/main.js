import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const form = document.querySelector('.form');
const input_search = document.querySelector('.input__search');
const gallery = document.querySelector(".gallery");
const load = document.querySelector(".load");

form.addEventListener('submit', (arg) => {
    arg.preventDefault();
    gallery.innerHTML = "";
    getRandomImages();
});

function getRandomImages() {
    load.classList.add('loader');
    let randomPage = Math.floor(Math.random() * 10) + 1;
    let searchParams = new URLSearchParams({
        key: "41527522-465889db431a6a06c19f4d10b",
        q: input_search.value,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: randomPage,
    });
    fetch(`https://pixabay.com/api/?${searchParams}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then((images) => {
            if (images.total === 0) {
                console.log(images);
                iziToast.show({
                    titleColor: 'white',
                    position: 'topRight',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    messageColor: 'white',
                    backgroundColor: '#EF4040',
                    progressBarColor: '#B51B1B'
                });
                return;
            }
            if (images.total + 19 < randomPage * 20) {
                console.log(`Total image: ${images.total} less than RandomPage ${randomPage} and needed count of images ${randomPage * 20}`);
                handleEmptyPageResult();
                return;
            }
            load.classList.remove('loader');
            const markup = images.hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
                return `<li class="gallery__item">
                    <a class="gallery__link" href="${largeImageURL}">
                        <img
                            class="gallery__image"
                            src="${webformatURL}"
                            alt="${tags}"/>
                        <ul class="info__list">
                        <li class="info__item">
                        <span>Likes</span>
                        <span>${likes}</span>
                        </li>
                        <li class="info__item">
                        <span>Views</span>
                        <span>${views}</span>
                        </li>
                        <li class="info__item">
                        <span>Comments</span>
                        <span>${comments}</span>
                        </li>
                        <li class="info__item">
                        <span>Downloads</span>
                        <span>${downloads}</span>
                        </li>
                        </ul>
            
                    </a>
            </li>`;
            })
                .join("");
            gallery.insertAdjacentHTML("beforeend", markup);
            var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250' /* options */ });
            lightbox.refresh();
            console.log(images);
        })
        .catch((error) => console.log(error));
}

function handleEmptyPageResult() {
    getRandomImages();
}
