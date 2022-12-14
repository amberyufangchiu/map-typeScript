import faker from 'faker';
import { Mappable } from './CustomMap';
export class User implements Mappable {
	name: string;
	location: {
		lat: number;
		lng: number;
	}
	color: string;

	constructor() {
		this.name = faker.name.firstName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		}
		this.color = faker.commerce.color();
	}

	markerContent(){
		return `User name: ${this.name} and favo color is ${this.color}`
	}
}