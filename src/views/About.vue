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
  top: 40px;
  padding: 3%;
}

.paragraph {
  font-size: 20px;
  color: #d59f0f;
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
