async function postData(route: string, payload: string) {
  const response = await fetch(route, {
    method: 'POST',
    body: payload,
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
  });
  return await response.json();
}

export { postData };
