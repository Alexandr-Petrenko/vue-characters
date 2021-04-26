<template>
  <header class="header">
    <div class="container header__container">
      <a href="#" class="header__logo">
        <img
          src="../../images/StarWars.png"
          alt="Star Wars"
          class="header__logo logo"
        >
      </a>
      <div class="header__block">
        <div class="header__lang">
        <span
          class="header__lang-selected"
          v-click-outside="hide"
          @click="toggle"
          @dblclick.prevent=""
        >
          En
        </span>
          <ul class="header__lang-list"
              :style="{display: display}"
              v-show="opened"
          >
            <li class="header__lang-option" @click="setValue">En</li>
          </ul>
        </div>
        <a href="#" class="header__log-in">Log In</a>
        <button class="header__button">Sign Up</button>
        <div class="header__burger"
             @click="burgerChangeHandler"
             v-click-outside="burgerChangeHandler"
        >
          <div class="header__burger-menu" v-if="isBurgerOpen">
            <span class="header__burger-lang">
              En
            </span>
            <a href="#" class="header__log-in header__burger-login">Log In</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  name: 'Header',
  data() {
    return {
      opened: false,
      display: 'none',
      isBurgerOpen: false,
    };
  },

  methods: {
    visibleChangeHandler() {
      this.display = this.display === 'none' ? 'block' : 'none';
    },

    setValue() {
      this.display = 'none';
    },

    toggle() {
      this.opened = true;
    },

    hide() {
      this.opened = false;
    },

    burgerChangeHandler() {
      this.isBurgerOpen = !this.isBurgerOpen;
      console.log(this.isBurgerOpen);
    },
  },

  directives: {
    ClickOutside,
  },
};

</script>

<style lang="scss">
  .header {
    padding: 25px 10px 25px 10px;
    background: #f2eeee;
    color: #000;
    font-size: 14px;

    @media (max-width: 700px) {
      padding: 25px 20px 25px 20px;
    }

    @media (max-width: 499px) {
      background: #fff;
      padding: 18px 20px 25px 18px;
    }

    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__logo {
      margin-right: 10px;
    }

    &__block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      width: 100%;
      max-width: 425px;

      @media (max-width: 499px) {
        justify-content: space-between;
        max-width: 120px;
      }
    }

    &__lang-selected {
      position: relative;
      cursor: pointer;

      @media (max-width: 499px) {
        display: none;
      }

      &:after {
        position: absolute;
        content: "";
        top: calc(50% - 3px);
        right: -7px;
        width: 3px;
        height: 3px;
        border-bottom: 1px solid #000;
        border-right: 1px solid #000;
        transform: rotate(45deg);
      }
    }

    &__lang-list {
      margin: 0;
      padding: 0;
      list-style: none;
      cursor: pointer;

      @media (max-width: 499px) {
        display: none;
      }
    }

    &__log-in {
      color: #000;
      text-decoration: none;

      @media (max-width: 499px) {
        display: none;
      }
    }

    &__button {
      width: 162px;
      height: 48px;
      padding: 0;
      background: #ff634a;
      color: #fff;
      border: none;
      border-radius: 6px;
      cursor: pointer;

      @media (max-width: 499px) {
        width: 65px;
        background: transparent;
        color: inherit;
        font-weight: 600;
      }
    }

    &__burger {
      width: 27px;
      height: 9px;
      position: relative;
      display: none;

      @media(max-width: 499px) {
        display: block;
      }

      &:before, &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        width: 100%;
        height: 1px;
        background: #000;
      }

      &:after {
        top: 10px;
      }

      &-menu {
        position: absolute;
        content: '';
        top: 21px;
        right: -2px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100px;
        height: 60px;
      }

      &-login {
        display: block;
      }
    }
  }

  .logo {

    @media (max-width: 499px) {
      width: 82px;
      height: 24px;
    }
  }
</style>
