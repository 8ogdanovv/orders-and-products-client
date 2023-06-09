<template>
  <div class="flex-col">
    <div class="footer">
      <div class="spa">
        <a href="/" style="text-decoration: none;">
          SPA-приложение: Orders & Products
        </a>
      </div>

        <div class="flex">
        &copy; 2023

        <a href="https://vadym4che.github.io/cv/" class="cv">
          Vadym Chervoniak
        </a>

        <a href="https://github.com/vadym4che" class="gh">
          @vadym4che
        </a>

        specially for

        &nbsp;

      <a href="https://dzencode.com/ua">
      <svg class="logo-image dZEN" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33 0.800781C30.8991 0.800781 28.8405 1.00137 26.8451 1.39198C12.0123 4.25298 0.800568 17.3228 0.800568 33.0002C0.800568 43.9902 9.71083 52.9005 20.7009 52.9005C22.844 52.9005 24.9132 52.5626 26.8451 51.9292C18.8639 49.3427 13.0997 41.8471 13.0997 33.0002C13.0997 24.1533 18.8745 16.6577 26.8451 14.0712C28.7771 13.4377 30.8463 13.0999 33 13.0999C43.99 13.0999 52.9003 22.0102 52.9003 33.0002C52.9003 48.6776 41.6885 61.7474 26.8451 64.6084C28.8405 64.9884 30.8885 65.1996 33 65.1996C50.7888 65.1996 65.1994 50.789 65.1994 33.0002C65.1994 15.2113 50.7888 0.800781 33 0.800781Z" fill="black">
        </path>
      </svg>
      <strong>
        <sub>&nbsp;dZENcode</sub>
      </strong>
      </a>

      </div>
    </div>

    <div class="UA"></div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
  .flex-col {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    z-index: 1;
    background-color: #fff8;
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: right;
    letter-spacing: 0.05rem;
  }

  .footer a {
    text-decoration: none;
  }

  .cv {
    color: hsl(120, 57%, 20%);
  }

  .gh {
    color: black;
    font-weight: 600;
    opacity: 0.6;
  }

  .dZEN {
    width: 2.5dvw;
    height: auto;
  }

  sub {
    color: black;
    font-size: 95%;
    text-shadow: 0 0 1px black;
    height: auto;
    position: relative;
    top: 2px;
    opacity: 0.9;
  }

  .UA {
    position: relative;
    bottom: 0;
    width: 100dvw;
    height: 2dvh;
    background: linear-gradient(0deg, gold 50%, navy 50%);
  }
</style>