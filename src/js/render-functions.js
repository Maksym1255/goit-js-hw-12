import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(images) {
  const gallery = document.getElementById(`gallery`);
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
	<a class="gallery-link" href="${largeImageURL}">
		<img
			class="gallery-image"
			src="${webformatURL}"
			alt="${tags}"
			/>
	</a>
  <div class="details">
  <p class="info">Likes: <br>${likes}</p>
  <p class="info">Views: <br>${views}</p>
  <p class="info">Comments: <br>${comments}</p>
  <p class="info">Downloads: <br>${downloads}</p>
</div>
</li>
`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox(`.gallery a`);
  lightbox.refresh();
}
