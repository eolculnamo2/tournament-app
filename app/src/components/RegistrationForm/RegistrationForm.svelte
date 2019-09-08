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
  } from '../LoginForm/LoginFormStyles.js';
  import { postRequest } from '../../globals/helpers.js';
  import { username } from '../../store/global-store.js';

  // props
  export let goToLogin;

  //state
  let loginName = '';
  let password = '';
  let confirmPassword = '';
  let email = '';
  let dirty = false;

  const handleEnterPress = e => e.keyCode === 13 && register();

  async function register() {
    dirty = true;

    const registerPayload = {
      username: loginName,
      password,
      confirmPassword,
      email,
    };

    if (!noneAreBlank(loginName, password, confirmPassword, email)) {
      return;
    }

    const data = await postRequest('/authenticate/register', registerPayload);

    if (data && data.success) {
      username.set(loginName);
      navigate('/dashboard');
      return;
    }

    alert(
      'Registration failed. Did you already register with this username? Try a different username and try again.'
    );
  }
</script>

<svelte:window on:keydown={handleEnterPress} />
<div class={formWrap}>
  <div class={formHead}>
    <h3 class={loginHeader}>Registration Form</h3>
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
    <div class={globalLabel}>Confirm Password</div>
    <input bind:value={confirmPassword} class={globalInput} type="password" />
    {#if dirty && !confirmPassword}
      <div class={globalErrorTxt}>Confirm password is required.</div>
    {/if}
    <div class={globalLabel}>Email</div>
    <input bind:value={email} class={globalInput} />
    {#if dirty && !email}
      <div class={globalErrorTxt}>Email is required.</div>
    {/if}
    <button on:click={register} class={globalBtn1}>REGISTER</button>
    <div on:click={() => goToLogin(true)} class={smallText}>Already have an account?</div>
  </div>
</div>
