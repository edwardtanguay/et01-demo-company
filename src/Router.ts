import * as tools from './tools';
import { PageUeberuns } from './pages/PageUeberuns';
import { PageBauherrenvertretung } from './pages/PageBauherrenvertretung';

const pageNames = ['Über uns', 'Bauherrenvertretung', 'Projektleitung', 'Interims', 'Kundenprojekte', 'Kontakt'];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
	switch (currentPageIdCode) {
		case '':
		case 'ueberuns':
			return PageUeberuns()
		case 'bauherrenvertretung':
			return PageBauherrenvertretung()
		default:
			return '404 Error';
	}
}

const getPageIdCode = (pageName: string) => {
	if (pageName === 'Über uns') {
		pageName = 'Ueberuns';
	}
	return pageName.toLowerCase();
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
	<nav class="menu">
		<ul>
			${pageNames.map(pageName => `<li><a href="${getPageIdCode(pageName)}"${getMenuClass(pageName)}>${pageName}</a></li>`).join('')}
		</ul>
	</nav>
`;
}


function getSmartCurrentPageId() {
	let currentPageIdCode = tools.getCurrentPageIdCode();
	currentPageIdCode = currentPageIdCode === '' ? pageNames[0].toLowerCase() : currentPageIdCode;
	return currentPageIdCode;
}
