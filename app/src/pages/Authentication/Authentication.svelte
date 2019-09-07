<script>
  import LoginForm from '../../components/LoginForm/LoginForm.svelte';
  import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.svelte';

  let showLogin = true;
  let toggleLogin = newValue => (showLogin = newValue);
</script>

{#if showLogin}
  <LoginForm goToRegistration={toggleLogin} />
{:else}
  <RegistrationForm goToLogin={toggleLogin} />
{/if}
