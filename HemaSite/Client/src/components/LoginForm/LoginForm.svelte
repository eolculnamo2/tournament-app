<script>
  import { navigate } from 'svelte-routing';
  import { onMount, onDestroy } from 'svelte';
  import {
    globalBtn1,
    globalErrorTxt,
    globalInput,
    globalLabel,
  } from '../../globals/global-styles.js';
  import { noneAreBlank } from '../../globals/validations.js';
  import {
    formHead,
    formBody,
    formWrap,
    loginHeader,
    smallText,
  } from './LoginFormStyles.js';
  import * as store from '../../store/global-store.js';
  import { postRequest } from '../../globals/helpers.js';

  // props
  export let goToRegistration;

  // state
  let loginName = '';
  let password = '';
  let failedLogin = false;
  let dirty = false;

  const handleEnterPress = e => e.keyCode === 13 && login();

  async function login() {
    dirty = true;

    if (!noneAreBlank(loginName, password)) {
      return;
    }

    const data = await postRequest('/api/auth/login', {
      username: loginName,
      password,
    });
    if (data && data.token) {
      store.username.set(loginName);
      store.firstName.set(data.firstName);
      store.lastName.set(data.lastName);

      localStorage.setItem('token', data.token);
      navigate('/dashboard');
      return;
    }

    failedLogin = true;
  }
</script>

<svelte:window on:keydown={handleEnterPress} />
<div class={formWrap}>
  <div class={formHead}>
    <h3 class={loginHeader}>Login Form</h3>
  </div>
  <div class={formBody}>
    <div class={globalLabel}>Username</div>
    <input bind:value={loginName} class={globalInput} />
    {#if dirty && !loginName}
      <div class={globalErrorTxt}>Username is required.</div>
    {/if}
    <div class={globalLabel}>Password</div>
    <input bind:value={password} class={globalInput} type="password" />
    {#if dirty && !password}
      <div class={globalErrorTxt}>Password is required.</div>
    {/if}
    {#if failedLogin}
      <div class={globalErrorTxt}>Login Failed. Please try again.</div>
    {/if}
    <button class={globalBtn1} on:click={login}>LOGIN</button>
    <div class={smallText} on:click={() => goToRegistration(false)}>
      Create New Account
    </div>
  </div>
</div>
