// Подсчет IP-адресов
// Реализуйте функцию, которая получает два IPv4-адреса и возвращает количество адресов между ними (включая первый, исключая последний).
// Все входные данные будут действительными IPv4-адресами в виде строк. Последний адрес всегда будет больше первого.


const submit = document.getElementById("submit-button");
const answer = document.getElementById("answer-area");

submit.addEventListener("click", countingIP);

function countingIP() {
	const arrIp1 = transferIpTo32(document.getElementById("input-ip1").value);
	const arrIp2 = transferIpTo32(document.getElementById("input-ip2").value);

	function transferIpTo32(ip) {
	return	ip.split('.').reverse().map((el, i) => el = el * Math.pow(256,i));
	}

	const arrRes = [];
	for (var i = 0; i < arrIp1.length; i++) {
		arrRes[i] = arrIp2[i] - arrIp1[i];
	}

answer.value = arrRes.reduce((acc, el) => acc * 1 + el * 1, [0]);

}