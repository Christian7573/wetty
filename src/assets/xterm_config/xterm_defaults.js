const DEFAULT_BELL_SOUND = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjMyLjEwNAAAAAAAAAAAAAAA//tQxAADB8AhSmxhIIEVCSiJrDCQBTcu3UrAIwUdkRgQbFAZC1CQEwTJ9mjRvBA4UOLD8nKVOWfh+UlK3z/177OXrfOdKl7pyn3Xf//WreyTRUoAWgBgkOAGbZHBgG1OF6zM82DWbZaUmMBptgQhGjsyYqc9ae9XFz280948NMBWInljyzsNRFLPWdnZGWrddDsjK1unuSrVN9jJsK8KuQtQCtMBjCEtImISdNKJOopIpBFpNSMbIHCSRpRR5iakjTiyzLhchUUBwCgyKiweBv/7UsQbg8isVNoMPMjAAAA0gAAABEVFGmgqK////9bP/6XCykxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq';
window.load_options({
	wetty_fit_terminal: true,
	wetty_void: 0,

	cols: 80,
	rows: 24,
	cursorBlink: false,
	cursorStyle: 'block',
	cursorWidth: 1,
	bellSound:  DEFAULT_BELL_SOUND,
	bellStyle: 'none',
	drawBoldTextInBrightColors: true,
	fastScrollModifier: 'alt',
	fastScrollSensitivity: 5,
	fontFamily: 'courier-new, courier, monospace',
	fontSize: 15,
	fontWeight: 'normal',
	fontWeightBold: 'bold',
	lineHeight: 1.0,
	linkTooltipHoverDuration: 500,
	letterSpacing: 0,
	logLevel: 'info',
	scrollback: 1000,
	scrollSensitivity: 1,
	screenReaderMode: false,
	macOptionIsMeta: false,
	macOptionClickForcesSelection: false,
	minimumContrastRatio: 1,
	disableStdin: false,
	allowProposedApi: true,
	allowTransparency: false,
	tabStopWidth: 8,
	rightClickSelectsWord: false,
	rendererType: 'canvas',
	windowOptions: {},
	windowsMode: false,
	wordSeparator: ' ()[]{}\',"`',
	altClickMovesCursor: true,
	convertEol: false,
	termName: 'xterm',
	cancelEvents: false,

	theme: {
		foreground: "#ffffff",
		background: "#000000",
		cursor: "#ffffff",
		cursorAccent: "#000000",
		selection: "#FFFFFF4D",

		black: "#2e3436",
		red: "#cc0000",
		green: "#4e9a06",
		yellow: "#c4a000",
		blue: "#3465a4",
		magenta: "#75507b",
		cyan: "#06989a",
		white: "#d3d7cf",
		brightBlack: "#555753",
		brightRed: "#ef2929",
		brightGreen: "#8ae234",
		brightYellow: "#fce94f",
		brightBlue: "#729fcf",
		brightMagenta: "#ad7fa8",
		brightCyan: "#34e2e2",
		brightWhite: "#eeeeec"
	}
});
