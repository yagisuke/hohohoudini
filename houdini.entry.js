(async function() {
	if (CSS['paintWorklet'] === undefined) {
		await import('https://unpkg.com/css-paint-polyfill/dist/css-paint-polyfill.js');
	}

	const registrar = new Set([
		'https://unpkg.com/houdini-static-gradient@1.1.2/worklet.js',
	]);
	registrar.forEach(worklet => CSS.paintWorklet.addModule(worklet));
})()
