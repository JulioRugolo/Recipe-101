// // import { useState } from 'react';
// import { useContext } from 'react';
// import AppContext from '../context/AppContext';

// // const { controlInput, dataApi, setDataApi, url, setUrl } = useContext(AppContext);

// const fetchByIngredient = async () => {
//   const { setDataApi, url } = useContext(AppContext);
//   const result = await fetch(url);
//   const data = await result.json();
//   setDataApi(data);
// };

// const useFetchApi = (typeforfetch) => {
//   const { controlInput, setUrl } = useContext(AppContext);
//   // const [isFetch, setIsFetch] = useState(false);
//   switch (typeforfetch) {
//   case 'ingredient':
//     setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${controlInput}`);
//     return;
//     // return setDataApi(fetchByIngredient(controlInput));
//   case 'name':
//     setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${controlInput}`);
//     return;
//   case 'firstletter':
//     setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${controlInput}`);
//     break;
//   default:
//   }
// };

// export default useFetchApi;
