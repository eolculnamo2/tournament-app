<script>
  import LoginForm from '../../components/LoginForm/LoginForm.svelte';
  import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.svelte';
  import RandomQuote from '../../components/RandomQuote/RandomQuote.svelte';

  let showLogin = true;
  let toggleLogin = newValue => (showLogin = newValue);
</script>

<RandomQuote />
{#if showLogin}
  <LoginForm goToRegistration={toggleLogin} />
{:else}
  <RegistrationForm goToLogin={toggleLogin} />
{/if}
