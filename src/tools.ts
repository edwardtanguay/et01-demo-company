import * as tools from './tools';

export const getCurrentUrl = () => {
	return window.location.href;
}

export const getCurrentPageIdCode = () => {
	const url = tools.getCurrentUrl();
	const parts = url.split('/');
	return parts[parts.length - 1];
}
