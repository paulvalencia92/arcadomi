<template>
  <section>
    <h1>Tests</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto autem corporis deleniti deserunt
      dolor dolore dolorem ducimus fuga, id impedit iure magni, minima mollitia non officiis quasi sapiente similique
      ullam vel. Amet aut deserunt dolorum, esse expedita hic laudantium, maxime modi nisi nobis sint, veniam voluptatem
      voluptatum. A animi, architecto assumenda at consequuntur debitis doloribus eaque eos illo in ipsum iste iure
      magni maxime minus mollitia nemo neque nihil obcaecati odio officiis omnis pariatur provident, quasi recusandae
      reiciendis saepe sequi sit vero voluptates! Beatae consectetur consequatur dicta neque repellat reprehenderit
      sapiente sed tempore? Magni nisi praesentium quidem quod reprehenderit?</p>
    <b-button variant="primary" size="md">Registro</b-button>
  </section>
</template>

<script>
import {core} from "../../config/pluginInit";

export default {
  name: "Test",
  mounted() {
    core.index();
  },
}
</script>

<style scoped>

</style>
