import {
  navigate
} from 'svelte-routing';
import moment from 'moment';
import {
  username
} from '../store/global-store.js';

export async function postRequest(url, payload) {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token || ''}`
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
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token || ''}`
      }
    });
    return await response.json();
  } catch {
    alert('A technical error has occurred. Please contact us.');
  }
}

export async function authenticationRouteCheck() {
  const token = localStorage.getItem('token');
  const pathName = window.location.pathname;
  const response = await getRequest('/api/auth/check-login');

  if (token && response.username) {
    username.set(response.username);
    if (pathName === '/') {
      navigate('/dashboard');
    }
    return;
  }

  if (!token && pathName !== '/') {
    navigate('/');
  }
}

// to be used in <Link to> i.e <Link to={validateRoute('/create-tournament)}
export function validatedRoute(user, ifLoggidInRoute) {
  if (user && ifLoggidInRoute === '/') {
    return '/dashboard';
  }
  if (!user && ifLoggidInRoute !== '/') {
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