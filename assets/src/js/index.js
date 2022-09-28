const WPFormsLandingPage = {
	btn: document.querySelector('.video-player'),
	iframe: document.querySelector('.iframe'),

	play() {
		this.iframe.src += '&autoplay=1';
	},

	show() {
		this.iframe.style.display = 'block';
	},

	init() {
		const _self = this;
		this.btn.addEventListener( 'click', (e) => {
			_self.show();
			_self.play();
		}, {
			once: true,
		});
	}
};

WPFormsLandingPage.init();
