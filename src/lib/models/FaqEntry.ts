import { BaseModel } from './BaseModel';

export class FaqEntry extends BaseModel {
	constructor(
		id: string,
		public readonly question: string,
		public readonly answer: string
	) {
		super(id);
	}
}
