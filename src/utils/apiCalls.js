// const API_KEY = `${process.env.REACT_APP_NY_TIMES_KEY}=${process.env.REACT_APP_NY_TIMES_SECRET_KEY}`;

// https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/science.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/us.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey

// export const getData = async (section) => {
//   try {
//     const data = await (
//       await fetch(
//         `https://api.nytimes.com/svc/topstories/v2/${section}.json?${API_KEY}`
//       )
//     ).json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getData = async (section, apiKey) => {
  try {
    const data = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?${apiKey}`
    );
    const articles = await data.json();
    console.log(articles);
  } catch (error) {
    console.log(error);
  }
};
