// const API_KEY = `${process.env.REACT_APP_NY_TIMES_KEY}=${process.env.REACT_APP_NY_TIMES_SECRET_KEY}`;

// https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/science.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/us.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey

export const getData = async (section) => {
  try {
    const data = await fetch(
      'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=VUy19Fl88GH7UARSGbrbazb9U2MqOVdj',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      }
    );
    const articles = await data.json();
    console.log(articles);
  } catch (error) {
    console.log(error);
  }
};
