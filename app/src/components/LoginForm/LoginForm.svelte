<script>
  import { loginHeader } from './LoginFormStyles.js';
  export let goToRegistration;
</script>

<h1 class={loginHeader} on:click={() => goToRegistration(false)}>Login Form</h1>
