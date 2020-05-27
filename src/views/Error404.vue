<template>
  <div>
      <img :src="url" alt="imgError" width="70%">
  </div>
</template>

<script>
export default {
    name: 'Error404',
    data() {
        return {
            url: 'https://freefrontend.com/assets/img/html-css-404-page-templates/Sad-Mac-404-Error-Page.png'
        }
    },
}
</script>