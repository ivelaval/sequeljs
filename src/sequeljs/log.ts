export const log = (
	message: string,
	type: 'log' | 'error' | 'info' = 'log',
): void => {
	/* eslint-disable */
	switch (type) {
		case 'log':
			console.log(message);
			break;
		case 'error':
			console.error(message);
			break;
		case 'info':
			console.info(message);
			break;
	}
	/* eslint-enable */
};
