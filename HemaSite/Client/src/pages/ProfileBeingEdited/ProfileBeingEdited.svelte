
<script>
    import { 
      title,
      pageDiv,
      imageDiv,
      profileInfoDiv,
      formDiv,
      playerStats,
      playerName,
      addImage,
      cancelButton,
      saveButton
     } from './ProfileBeingEditedStyles';
    import {
      globalFormWrap1,
      globalLabel
    } from "../../globals/global-styles.js"
    import { Link } from 'svelte-routing';

  </script>
  
  
  <div class={pageDiv}>
      <div class={imageDiv}>
          <input class={addImage} type="image" src="" alt="Submit">
          <label class="globalLabel">Profile Image</label>
      </div>
      
      <div class={profileInfoDiv}>
        <h1 class={title}>My Profile</h1>
        <h3 class={playerName}>Name</h3>
        <p class={playerStats}>Wins:0</p>
        <p class={playerStats}> Loses:0</p>
      </div>
      
      <div class={formDiv}>
        <form class={globalFormWrap1}>
          <label>First Name:</label>
          <input type="text"/>
  
          <label>Last Name:</label>
          <input type="text"/>
  
          <label>HEMA School</label>
          <input type="text"/>
  
        </form>
      </div>

      <div class={saveButton}>
        <Link to="/profile">
          <button>Save</button>
        </Link>
      </div>

      <div class={cancelButton}>
        <Link to="/profile">
          <button>Cancel</button>
        </Link>
      </div>
      
  </div>
  