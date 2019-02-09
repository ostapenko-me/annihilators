import Polynomial from '../core/polynomial';
import {printTex} from '../core/print';
import * as fs from 'fs';
import * as path from 'path';

const size = 5;
const deg = 3;
const limit = 512;

const filteredPolynomials: Polynomial[] = [];

for (let vector of Polynomial.Vectors(size)) {
	const p = Polynomial.from(vector, size);
	if (p.deg === deg) {
		filteredPolynomials.push(p);
		if (filteredPolynomials.length > limit) {
			break;
		}
	}
}

fs.writeFileSync(
	path.resolve(__dirname, '..', 'size5deg3.json'),
	JSON.stringify(filteredPolynomials.map(p => p.vector)),
	'utf8',
);

// const list = filteredPolynomials.map(p => p.toTex());
//
// printTex('list', list.map(item => `$$ ${item} $$`).join('\n'));
