<template>
  <div class="icon">
    <slot name="icon"></slot>
  </div>
  <div class="title">
    <h3><slot name="heading"></slot></h3>
  </div>
</template>

<style scoped>
.icon {
  display: flex;
  width: 50px;
  height: 50px;
  margin-top: -2px;
}

.title {
  height: 30px;
  margin-top: -9px;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
}

@media (min-width: 1024px) {

}
</style>
