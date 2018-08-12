const configs = {
  domain: '',
  defaultHeaders: {
    'Content-Type': 'application/json',
  },
};

export function setDomain(domain) {
  configs.domain = domain;
}

export async function api(
  {
    url,
    method = 'GET',
    body = {},
    headers = {},
    baseUrl = true,
    bodyParsing = 'json',
    ...extraProps
  },
  parsing = 'json',
) {
  try {
    const props = {
      method,
      headers: { ...configs.defaultHeaders, ...headers },
      ...extraProps,
    };
    if (method !== 'GET') {
      props.body = body;
      if (bodyParsing === 'json') {
        props.body = JSON.stringify(body);
      } else if (bodyParsing === 'formData') {
        props.headers['Content-Type'] = 'multipart/form-data';
        props.body = new FormData();
        for (let key in body) {
          props.body.append(key, body[key]);
        }
      }
    }
    let fetchUrl = url;
    if (baseUrl) {
      fetchUrl = `${configs.domain}${url}`;
    }
    const data = await fetch(fetchUrl, props);
    if (data.status >= 400) {
      throw data;
    }
    if (parsing === 'json') {
      return data.json();
    } else if (parsing === 'text') {
      return await data.text();
    }
    return data;
  } catch (e) {
    throw e;
  }
}

export default api;
