var domain = window.location.host;
console.log(domain);
var host = domain.split(".");
console.log(host);
var flag = 0;
if(host[0] == "luov" || host[1] == "luov") {
	var mubiao = "https://luov.top";
	flag = 1;
} else if(host[0] == "xian6ge" || host[1] == "xian6ge") {
	var mubiao = "https://xian6ge.cn";
	flag = 1;
}
if(domain == "time.luov.top"){
	flag = 0;
}	

console.log(mubiao);
var other = GetUrlRelativePath();
console.log(other);

if(flag == 1) {
	window.location.href = mubiao + other;
}