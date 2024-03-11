import axios from 'axios';

// export function getImages(userValue) {
//   const BASE_URL = 'https://pixabay.com/';
//     const END_POINT = 'api/';
//   const params = new URLSearchParams({
//       key: "42734676-8c749a784e7b90411d6581e4f",
//       q: userValue,
//       image_type: "photo",
//       orientation: "horizontal",
//       safesearch: true,
//   });
//   const url = `${BASE_URL}${END_POINT}?${params}`;

//     return fetch(url).then(res => {
//         if (!res.ok) throw new Error(res.status);
//         return res.json()
//     });
// }

export async function getImages(userValue, page) {
  const url = 'https://pixabay.com/api/';
  const params = {
      key: "42734676-8c749a784e7b90411d6581e4f",
      q: userValue,
      image_type: "photo",
      orientation: "horizontal",
    safesearch: true,
    page,
    per_page: 15,
  };
 return await axios.get(url, { params })
}

