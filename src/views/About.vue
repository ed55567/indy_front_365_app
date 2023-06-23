<template>
  <div class="about">
    <h1>About Indy 365</h1>
    <div class="card-panel light-blue darken-4">
      <p class="paragraph"> Indy365 is a statewide network that unites health care and human services organizations with a shared technology that enables a community and person centred approach for delivering care in Indiana.</p>
    </div>
    <div :style="imagePath" class="state"></div>
  </div>
  
  
</template>

<style>
.about {
  margin: auto;
  padding: 3%;
  max-width: 800px;
}

.paragraph {
  font-size: 20px;
  color: #d59f0f;
  margin-bottom: 20px;
}

@media screen and (max-width: 600px) {
  .about {
    padding: 2%;
  }

  .paragraph {
    font-size: 18px;
  }
}
</style>

<script>
export default {
  data: function () {
    return {
      imagePath: {
        backgroundImage: "url('/indiana_state_color.png')",
      },
    };
  },
};
</script>
