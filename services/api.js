import qs from 'query-string';

const configs = {
  domain: '',
  defaultHeaders: {
    'Content-Type': 'application/json',
  },
};

export function setDomain(domain) {
  configs.domain = domain;
}

export function setHeaders(headers) {
  configs.defaultHeaders = { ...configs.defaultHeaders, ...headers };
}

export async function api(
  {
    url,
    method = 'GET',
    body = {},
    headers = {},
    params = null,
    baseUrl = true,
    bodyParsing = 'json',
    ...extraProps
  },
  res = { parsing: 'json', mapResponse: null }
) {
  try {
    const { parsing, mapResponse } = res;
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
        for (const key in body) {
          props.body.append(key, body[key]);
        }
      }
    }
    let fetchUrl = url;
    if (baseUrl) {
      fetchUrl = `${configs.domain}${url}`;
    }
    if (params) {
      fetchUrl = `${fetchUrl}?${qs.stringify(params)}`;
    }
    const data = await fetch(fetchUrl, props);
    if (data.status >= 400) {
      throw data;
    }
    let parsedData = data;
    if (parsing === 'json') {
      parsedData = await data.json();
    }
    if (parsing === 'text') {
      parsedData = await data.text();
    }
    if (mapResponse) {
      return mapResponse(parsedData);
    }
    return parsedData;
  } catch (e) {
    throw e;
  }
}

export default api;
