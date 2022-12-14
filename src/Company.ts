import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
	companyName: string;
	catchPhrase: string;
	location: {
		lat: number;
		lng: number;
	}
	color: string;

	constructor() {
		this.companyName = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		}
	}

	markerContent(){
		return `
		<div>
			<h3>
				Company name: ${this.companyName}
			</h3>
			<p>
				Catch phrase: ${this.catchPhrase}
			</p>
		</div>
		`
	}
}
