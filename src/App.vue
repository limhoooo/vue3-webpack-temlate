<template>
  <h1>{{ msg }}</h1>
  <HelloWorld />
</template>

<script>
import HelloWorld from "~/components/HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      msg: "Hi",
    };
  },
};
</script>