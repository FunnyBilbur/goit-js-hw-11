import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const form = document.querySelector('.form');
const input_search = document.querySelector('.input__search');
const gallery = document.querySelector(".gallery");


form.addEventListener('submit', (arg) => {
    arg.preventDefault();
    let searchParams = new URLSearchParams({
        key: "41527522-465889db431a6a06c19f4d10b",
        q: input_search.value,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    fetch(`https://pixabay.com/api/?${searchParams}`)
        .then((response) => {
            gallery.innerHTML = "";
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then((users) => {
            const markup = users.hits.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => {
                return `<li class="gallery__item">
                    <a class="gallery__link" href="${largeImageURL}">
                        <img
                            class="gallery__image"
                            src="${webformatURL}"
                            alt="${tags}"/>
                    </a>
            </li>`;
            })
                .join("");

            gallery.insertAdjacentHTML("beforeend", markup);
            var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250' /* options */ });
            console.log(users);

        })
        .catch((error) => console.log(error));
});

// const fetchUsersBtn = document.querySelector(".btn");


// fetchUsersBtn.addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/users?_limit=4&_sort=name")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         })
//         .then((users) => {
//             const markup = users.map((user) => {
//                 return `<li>
// 	          <p><b>Name</b>: ${user.name}</p>
// 	          <p><b>Email</b>: ${user.email}</p>
// 	          <p><b>Company</b>: ${user.company.name}</p>
// 	        </li>`;
//             })
//                 .join("");

//             userList.insertAdjacentHTML("beforeend", markup);
//         })
//         .catch((error) => console.log(error));
// });






// fetchUsersBtn.addEventListener("click", () => {
//     fetchUsers()
//         .then((users) => console.log(users))
//         .catch((error) => console.log(error));
// });

// function fetchUsers() {
//     return fetch("https://jsonplaceholder.typicode.com/users").then(
//         (response) => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         }
//     );
// }

// function renderUsers(users) {
//     const markup = users
//         .map((user) => {
//             return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//         })
//         .join("");
//     userList.insertAdjacentHTML("beforeend", markup);
// }
