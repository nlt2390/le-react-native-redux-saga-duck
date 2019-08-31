import querystring from 'query-string';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

function buildHeaders(headers) {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  };
}

function handleResponse(response) {
  return response.json()
    .then((result) => {
      return { response: result };
    });
}

function request(props) {
  const {
    url,
    init,
    query,
  } = props;

  const strQuery = query ? `?${querystring.stringify(query)}` : '';
  const fetchUrl = `${API_ENDPOINT}/${url}${strQuery}`;
  console.log(init.method.toUpperCase(), fetchUrl);

  return fetch(fetchUrl, {
    method: init.method,
    headers: buildHeaders(init.headers),
  })
    .then(handleResponse)
    .catch((error) => ({ error }));
}

const Api = {
  get: (url, query) => {
    return request({
      url,
      init: {
        method: 'GET',
      },
      query,
    });
  },

  post: (url, option) => {
    return request({
      url,
      init: {
        method: 'POST',
      },
      option,
    });
  },
};

export default Api;
