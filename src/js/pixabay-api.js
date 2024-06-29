import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://pixabay.com/api/',
});

export async function searchImj(query, page) {
  const params = new URLSearchParams({
    key: '44595659-f233d14b1d86ebf700a2637af',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 12,
  });
  try {
    const res = await axios.get(``, { params });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
