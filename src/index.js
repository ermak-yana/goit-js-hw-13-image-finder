import './css/styles.css';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import ApiService from './js/apiService';
import cardTemplation from './templation/cardTemplation.hbs'




const refs = {
    searchForm: document.querySelector('.search-form'),
    galleryContent: document.querySelector('.gallery'),
    loadMoreButton: document.querySelector('#my-element-selector')
}

const apiService = new ApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreButton.addEventListener('click', onLoadMore);



function onSearch (e) {
e.preventDefault ();
clearCardTemplate ();
apiService.query = e.currentTarget.elements.query.value;
if (apiService.query === "") {
return alert("Erro! Try again");
}
apiService.resetPage();
apiService.fetchArticles().then(appendCardTemplation);

}

function onLoadMore (e) {
    apiService.fetchArticles().then(appendCardTemplation);;  
}
// const element = document.getElementById('.my-element-selector');
// element.scrollIntoView({
//   behavior: 'smooth',
//   block: 'end',
// });
function appendCardTemplation (hits) {
    refs.galleryContent.insertAdjacentHTML('beforeend', cardTemplation(hits));
    pageScroll();
}
function pageScroll() {
    const { height: cardHeight } = document
        .querySelector('.gallery')
        .firstElementChild.getBoundingClientRect();
        window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth',
        });
}

function clearCardTemplate () {
    refs.galleryContent.innerHTML = "";
}