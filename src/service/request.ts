import { API_URL } from "../global/api";

const request = async({
  route, 
  body, 
  method = 'GET',
  headers
}: {
  route: string;
  body?: BodyInit;
  method?: RequestInit['method'];
  headers?: HeadersInit;
}) => {
  return fetch(`${API_URL}${route}`, {
    method,
    body,
    headers
  })
}

export default request