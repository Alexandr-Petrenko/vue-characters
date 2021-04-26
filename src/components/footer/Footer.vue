<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__main-container">
        <img
          src="../../images/StarWars.png"
          alt="Star Wars"
          class="footer__logo logo"
        >
        <div class="footer__socials">
          <a href="https://ru-ru.facebook.com/StarWars"
             class="footer__social-link"
             target="_blank"
             rel="noopener"
          >
            <img
              src="../../images/facebook.png"
              alt="Facebook"
              class="footer__social-logo">
          </a>
          <a href="https://www.instagram.com/starwars/?hl=ru"
             class="footer__social-link"
             target="_blank"
             rel="noopener"
          >
            <img
              src="../../images/instagram.png"
              alt="Instagram"
              class="footer__social-logo">
          </a>
        </div>
      </div>
      <div class="footer__copy-rights">
        <address class="footer__text">
          All rights Reserved.
        </address>
        <address class="footer__text">
          Privacy Policy
        </address>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped lang="scss">
  .footer {
    padding: 45px 10px 21px 10px;
    background: #f2eeee;

    @media (max-width: 499px) {
      padding: 32px 18px 24px 18px;
    }

    &__main-container {
      display: flex;
      justify-content: space-between;
      margin-bottom: 65px;
      width: 100%;

      @media (max-width: 499px) {
        flex-direction: column;
        margin-bottom: 40px;
      }
    }

    &__logo {
      margin-bottom: 24px;
    }

    &__socials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 100px;

      @media (max-width: 499px) {
        max-width: 77px;
        //flex-direction: column;
        margin-bottom: 40px;
      }
    }

    &__social-link {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      width: 40px;
      height: 40px;
      background: #ff634a;

      @media (max-width: 499px) {
        width: 32px;
        height: 32px;
      }
    }

    &__copy-rights {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      font-weight: 300;
      color: #100f0f;
      line-height: 180%;
    }
  }
</style>
