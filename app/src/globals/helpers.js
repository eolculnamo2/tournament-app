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

    const {
      status
    } = response;

    if (status === 200 || status === 304) {
      return await response.json();
    }
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