<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script')
    script.defer = true
    script.src = 'https://umami.cloud.us.kg/script.js'
    script.setAttribute('data-website-id', 'dd9c6c3e-4ae7-4c7d-9684-6021e9325880')
    document.head.appendChild(script)
  }
}
</script>
