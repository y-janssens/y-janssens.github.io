const w = 8;	// width
const h = 16;	// height
const r = 1;	// radius corner
const s = 18;	// smoothness

// helper const's
const wi = w / 2 - r;
const hi = h / 2 - r;
const w2 = w / 2;
const h2 = h / 2;

/*const wi = w / 2 - r;
const hi = h / 2 - r;
const w2 = wi + r;
const h2 = hi / r;*/

const ul = (r / w);
const ur = (w - r) / w;
const vl = r / h;
const vh = (h - r) / h;

let positions = [

	-wi, -h2, 0, wi, -h2, 0, wi, h2, 0,
	-wi, -h2, 0, wi, h2, 0, -wi, h2, 0,
	-w2, -hi, 0, -wi, -hi, 0, -wi, hi, 0,
	-w2, -hi, 0, -wi, hi, 0, -w2, hi, 0,
	wi, -hi, 0, w2, -hi, 0, w2, hi, 0,
	wi, -hi, 0, w2, hi, 0, wi, hi, 0

];

let uvs = [

	ul, 0, ur, 0, ur, 1,
	ul, 0, ur, 1, ul, 1,
	0, vl, ul, vl, ul, vh,
	0, vl, ul, vh, 0, vh,
	ur, vl, 1, vl, 1, vh,
	ur, vl, 1, vh, ur, vh

];

let phia = 0;
let phib, xc, yc, uc, vc;

for (let i = 0; i < s * 4; i++) {

	phib = Math.PI * 2 * (i + 1) / (4 * s);


	xc = i < s || i >= 3 * s ? wi : - wi;
	yc = i < 2 * s ? hi : -hi;

	positions.push(xc, yc, 0, xc + r * Math.cos(phia), yc + r * Math.sin(phia), 0, xc + r * Math.cos(phib), yc + r * Math.sin(phib), 0);

	uc = xc = i < s || i >= 3 * s ? ur : ul;
	vc = i < 2 * s ? vh : vl;

	uvs.push(uc, vc, uc + ul * Math.cos(phia), vc + vl * Math.sin(phia), uc + ul * Math.cos(phib), vc + vl * Math.sin(phib));

	phia = phib;

}