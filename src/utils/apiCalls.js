export const getData = (section) => {
  return fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=VUy19Fl88GH7UARSGbrbazb9U2MqOVdj`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    }
  ).then((res) => res.json());
};
