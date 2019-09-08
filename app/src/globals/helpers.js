export async function postRequest(url, payload) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
    });
    return await response.json();
  } catch {
    alert('A technical error has occurred. Please contact us.');
  }
}

export async function getRequest(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch {
    alert('A technical error has occurred. Please contact us.');
  }
}