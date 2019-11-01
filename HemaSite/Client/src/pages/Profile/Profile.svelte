<script>
  import {
    profilePage,
    profileImage,
    profileHeader,
    statsDiv,
    editButton,
  } from './ProfileStyles.js';

  import { globalBtn1 } from '../../globals/global-styles.js';
  import { Link } from 'svelte-routing';
</script>

<div class={profilePage}>
  <h1 class={profileHeader}>My Profile</h1>
  <img class={profileImage} alt="Profile Image" />
  <div class={statsDiv}>
    <h2>Statistics</h2>
    <p>Wins:0</p>
    <p>Loses:0</p>
    <p>HEMA School</p>
  </div>

  <div class={editButton}>
    <Link to="/edit-profile">
      <button>Edit Profile</button>
    </Link>
  </div>

</div>
