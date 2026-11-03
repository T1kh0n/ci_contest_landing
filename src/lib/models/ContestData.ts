import type { NavItem } from './NavItem';
import type { FaqItem } from './FaqItem';
import type { Step } from './Step';

export class ContestData {
	constructor(
		public readonly title: string,
		public readonly subtitle: string,
		public readonly description: string,
		public readonly nav: NavItem[],
		public readonly applicationSteps: Step[],
		public readonly yandexSteps: Step[],
		public readonly faq: FaqItem[],
		public readonly yandexFormId: string = '6727a1e0d04688756c9a2c34'
	) {}
}
