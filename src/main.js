import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImj } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const searchForm = document.getElementById(`search-form`);
const searchInput = document.getElementById(`search-input`);
const loader = document.getElementById(`loader`);
const btnLoadMore = document.querySelector('.btn-load');
const removeGallery = document.getElementById(`gallery`);
// ===========================================================
let query = ``;
let page = 1;
let maxPage = 1;
const per_page = 12;
// ===========================================================
searchForm.addEventListener(`submit`, async e => {
  e.preventDefault();
  showLoading();
  query = searchInput.value.trim();
  page = 1;

  const data = await searchImj(query, page);
  removeGallery.innerHTML = '';
  searchForm.reset();

  if (query === '') {
    removeGallery.innerHTML = '';
    iziToast.warning({
      title: 'Warning!',
      message: 'Please enter a search query',
      position: 'center',
    });

    hideLoading();
    hideLoadBtn();
    return;
  }

  if (data.totalHits === 0) {
    removeGallery.innerHTML = '';
    iziToast.info({
      title: 'No results',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'center',
    });

    hideLoading();
    hideLoadBtn();
    return;
  }
  try {
    renderGallery(data.hits);
    hideLoading();
    updateBtnStatus();
  } catch (error) {
    console.error(error);
  }
});
// ===========================================================
btnLoadMore.addEventListener('click', async () => {
  page++;
  hideLoadBtn();
  showLoading();
  try {
    const data = await searchImj(query, page);
    renderGallery(data.hits);
    skipScrollElem();
  } catch {
    console.log('error');
  }

  hideLoading();
  updateBtnStatus();
});

// ============================================================

export function showLoading() {
  loader.classList.add(`loader`);
}

export function hideLoading() {
  loader.classList.remove(`loader`);
}

async function updateBtnStatus() {
  const data = await searchImj(query);
  const totalHits = Number(data.totalHits);
  maxPage = Math.ceil(totalHits / per_page);
  if (page >= maxPage) {
    hideLoadBtn();

    if (maxPage) {
      iziToast.info({
        title: 'The End!',
        message: 'End of collection!',
        position: 'bottomCenter',
      });
    }
  } else {
    showLoadBtn();
  }
}

function showLoadBtn() {
  btnLoadMore.classList.remove('hidden');
}
function hideLoadBtn() {
  btnLoadMore.classList.add('hidden');
}

function skipScrollElem() {
  const liElem = removeGallery.children[0];
  const scrollHeight = liElem.getBoundingClientRect().height;

  scrollBy({
    top: scrollHeight * 2,
    behavior: 'smooth',
  });
}
