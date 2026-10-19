import { BaseModel } from './BaseModel';

export class NavLink extends BaseModel {
	constructor(
		id: string,
		public readonly label: string,
		public readonly href: string
	) {
		super(id);
	}
}
