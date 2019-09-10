import {
  navigate
} from 'svelte-routing';
import moment from 'moment';
import {
  username
} from '../store/global-store.js';

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

export async function authenticationRouteCheck() {
  const response = await postRequest('/authenticate/checkLogin');
  const pathName = window.location.pathname;
  if (response && response.loggedIn) {
    username.set(response.user);

    if (pathName === '/') {
      navigate('/dashboard');
    }

    return;
  }

  if ((!response || !response.loggedIn) && pathName !== '/') {
    navigate('/');
  }
}

// to be used in <Link to> i.e <Link to={validateRoute('/create-tournament)}
export function validatedRoute(ifLoggidInRoute) {
  const pathName = window.location.pathname;
  if (username && pathName === '/') {
    return '/dashboard';
  }
  if (!username && pathName !== '/') {
    return '/';
  }
  return ifLoggidInRoute;
}

export function formatDate(dateString) {
  if (dateString) {
    return moment(dateString).format('MMMM Do YYYY');
  }
  return '';
}