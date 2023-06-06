import * as tools from './tools';
import { PageWelcome } from './pages/PageWelcome';
import { PageInfo } from './pages/PageInfo';
import { PageAbout } from './pages/PageAbout';

const pageNames = ['Welcome', 'Info', 'About'];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
	switch (currentPageIdCode) {
		case '':
		case 'welcome':
			return PageWelcome();
		case 'info':
			return PageInfo();
		case 'about':
			return PageAbout();
		default:
			return '404 Error';
	}
}

export const getMenu = () => {
	const getMenuClass = (pageName: string) => {
		const pageIdCode = pageName.toLowerCase();
		if (pageIdCode === currentPageIdCode) {
			return ` class="active"`
		} else {
			return '';
		}
	}

	return /*html*/`
	<ul>
		${pageNames.map(pageName => `<li><a href="${pageName.toLowerCase()}"${getMenuClass(pageName)}>${pageName}</a></li>`).join('')}
	</ul>
`;
}

function getSmartCurrentPageId() {
	let currentPageIdCode = tools.getCurrentPageIdCode();
	currentPageIdCode = currentPageIdCode === '' ? pageNames[0].toLowerCase() : currentPageIdCode;
	return currentPageIdCode;
}
