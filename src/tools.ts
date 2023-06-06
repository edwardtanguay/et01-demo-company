import * as tools from './tools';

export const getCurrentUrl = () => {
	return window.location.href;
}

export const getCurrentPageIdCode = () => {
	const url = tools.getCurrentUrl();
	const parts = url.split('/');
	let part = parts[parts.length - 1];
	part = tools.replaceAll(part, ' ', '');
	return part;
}

/**
 * REPLACE ALL OCCURANCES IN A STRING:
 *
 * qstr.replaceAll("This is a tost.", "o", "e");
 *
 * "This is a test."
 */
export const replaceAll = (text: string, search: string, replace: string) => {
	return text.split(search).join(replace);
};

export const cleanCharactersToAscii = (text: string) => {
	if (text === 'Über uns') {
		text = 'Ueberuns';
	}
	return text;
}
