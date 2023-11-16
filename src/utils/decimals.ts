/**
* value: 数据源
* n: 保留几位小数
*/
const retain = (value, n) => {
	if (n === 'null' || n === 'undefined' || n === 0) return parseInt(value);
	let tran = Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
	let tranV = tran.toString();
	let newVal = tranV.indexOf('.');
	if (newVal < 0) {
		tranV += '.'
	};
	for (let i = tranV.length - tranV.indexOf('.'); i <= n; i++) {
		tranV += '0';
	};
	return tranV
}

export default retain