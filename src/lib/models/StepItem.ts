import { BaseModel } from './BaseModel';

export class StepItem extends BaseModel {
	constructor(
		id: string,
		public readonly index: number,
		public readonly title: string,
		public readonly description: string
	) {
		super(id);
	}

	get displayIndex(): string {
		return String(this.index).padStart(2, '0');
	}
}
