(function () {
	if (typeof require !== 'undefined') {
		const { webFrame } = require('electron');
		class Zoom {
			constructor() {
				this.zoom_factors = [0.25, 0.5, 0.67, 0.75, 0.8, 0.9, 1, 1.1, 1.25, 1.5, 2, 2.5, 3, 4, 5];
				this.index = this.zoom_factors.findIndex(value => value >= webFrame.getZoomFactor());
			}
			zoom_in() {
				if (this.index + 1 < this.zoom_factors.length) this.index++;
				webFrame.setZoomFactor(this.zoom_factors[this.index]);
			}
			zoom_out() {
				if (this.index > 0) this.index--;
				webFrame.setZoomFactor(this.zoom_factors[this.index]);
			}
		}
		var zoom = new Zoom();
		var is_control_down = false;
		parent.window.addEventListener("keydown", function (event) {
			if (event.key == "Control") is_control_down = true;
			if (event.repeat) return; // key is still pressed down
			if (is_control_down && event.key == "=") zoom.zoom_out();
			if (is_control_down && event.key == "-") zoom.zoom_in();
		});
		parent.window.addEventListener("keyup", function (event) {
			if (event.key == "Control") is_control_down = false;
		});
		parent.window.addEventListener("wheel", function (event) {
			if (!is_control_down) return;
			if (event.deltaY < 0) { zoom.zoom_in(); }
			else { zoom.zoom_out(); }
		});
	}
})();