<script>
  import Routes from './Routes.svelte';
  import { Router } from 'svelte-routing';
  import { footerAtBottom } from './globals/global-styles.js';
  import Header from './components/Header/Header.svelte';
  import Footer from './components/Footer/Footer.svelte';
  export let url = '';
</script>

<Router {url}>
  <div class={footerAtBottom}>
    <Header />
    <Routes />
  </div>
  <Footer />
</Router>
