import {BASE_URL} from '../url/index'

export const getPost = async () => {
  // with async
  const postResponse = fetch(`${BASE_URL}/posts`);
  const photoResponse = fetch(`${BASE_URL}/photos`);

  const [posts, photos] = await Promise.all([postResponse, photoResponse]); //promisse
  const postsJson = await posts.json(); // converter json
  const photosJson = await photos.json(); // converter json

  const postsAndPhotos = postsJson.map((post, index) => {
    // add img in Object
    return { ...post, cover: photosJson[index].url };
  });
  return postsAndPhotos; // return object
};
