<script>
  import {
    globalBtn1,
    globalErrorTxt,
    globalInput,
    globalLabel,
  } from '../../globals/global-styles.js';
  import { formWrap, loginHeader } from './LoginFormStyles.js';
  import { username } from '../../store/global-store.js';
  import { postRequest } from '../../globals/helpers.js';

  // props
  export let goToRegistration;

  // state
  let loginName;
  let password;
  let failedLogin = false;

  async function login() {
    const data = await postRequest('/authenticate/login', { username: loginName, password });

    if (data.success) {
      username.set(loginName);
      return;
    }
    failedLogin = true;
  }
</script>

<div class={formWrap}>
  <h1 class={loginHeader}>Login Form</h1>
  <div class={globalLabel}>Username</div>
  <input bind:value={loginName} class={globalInput} />
  <div class={globalLabel}>Password</div>
  <input bind:value={password} class={globalInput} type="password" />
  {#if failedLogin}
    <div class={globalErrorTxt}>Login Failed. Please try again.</div>
  {/if}
  <button class={globalBtn1} on:click={login}>LOGIN</button>
  <div on:click={() => goToRegistration(false)}>Create New Account</div>
</div>
