module.exports = {
		publicPath: '/',
		pwa: {
			name: 'Scommunity',
			themeColor: '#000000',
			msTileColor: '#000000',
			appleMobileWebAppCapable: 'yes',
			appleMobileWebAppStatusBarStyle: '#202020'
		},
		css: {
			loaderOptions: {
				sass: {
					prependData: `
						@import "@/Styles/Variables.scss";
						@import "@/Styles/Keyframes.scss";
						@import "@/Styles/Mixins.scss";
					`
				}
			}
		},
		pluginOptions: {
			i18n: {
				locale: 'pl',
				fallbackLocale: 'pl',
				localeDir: 'Locales',
				enableInSFC: false
			}
		}
};
