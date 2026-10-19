import { NavLink } from '$lib/models/NavLink';

export const navigation: NavLink[] = [
	new NavLink('formats', 'Направления', '#formats'),
	new NavLink('apply', 'Как подать', '#apply'),
	new NavLink('faq', 'Вопросы', '#faq'),
	new NavLink('contacts', 'Контакты', '#contacts')
];
