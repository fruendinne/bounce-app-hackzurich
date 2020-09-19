import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import minifyTheme from 'minify-css-string';

Vue.use(Vuetify);

const debug = process.env.NODE_ENV !== 'production';

const LIGHT_THEME = {
  background: '#FFFDF8',
  secondary: '#2B2B2B',
  primary: '#D4D6BF',
  thirdiary: '#DD9F39',
  warning: '#DC5870',
};

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    options: {
      variations: true,
      minifyTheme,
      ...(!debug && {
        themeCache: {
          get: (key) => localStorage.getItem(key),
          set: (key, value) => localStorage.setItem(key, value),
        },
      }),
    },
    themes: {
      light: LIGHT_THEME,
    },
  },
});
