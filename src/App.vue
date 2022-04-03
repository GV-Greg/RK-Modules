<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/anim">Animation</RouterLink>
        <RouterLink to="/eco">Economie</RouterLink>
        <RouterLink to="/secu">S&eacute;curit&eacute;</RouterLink>
        <RouterLink to="/vitart">Vit'Art</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<style>
  @import '@/assets/base.css';
  @import '@/assets/style.css';

  #app {
    width: 65%;
    margin: 0 auto;
    padding: 2rem;
    font-weight: normal;
    min-height: 100vh;
  }

  header {
    height: 90px;
    grid-area: header;
    display: flex;
    justify-content: center;
    line-height: 1.5;
  }

  a,
  .green {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
  }

  @media (hover: hover) {
    a:hover {
      background-color: hsla(160, 100%, 37%, 0.2);
    }
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  main {
    grid-area: main;
    height: 87vh;
    display: flex;
    position: relative;
    padding-bottom: 50px;
  }

  .container {
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .module {
    height: 100%;
    display:flex;
    justify-content: flex-start;
  }

  footer {
    grid-area: footer;
    height: 50px;
    position: absolute;
    bottom: 0;
  }

  @media (min-width: 1024px) {
    body {
      display: flex;
      place-items: start;
    }

    #app {
      display: grid;
      grid-template-areas:
      'header'
      'main'
      'footer';
      padding: 0 2rem;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    nav {
      text-align: left;
      font-size: 1rem;
      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
</style>
