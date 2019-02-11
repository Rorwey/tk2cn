var domain = window.location.host;
console.log(domain);
var host = domain.split(".");
console.log(host);
var flag = 0;
var mubiao = "https://time.luov.top";
if (host[0] == "luov") {
	mubiao = "https://luov.top";
	flag = 1;
}else if(host[0] == "xian6ge") {
	mubiao = "https://xian6ge.cn";
	flag = 1;
}else if(host[1]=="luov"){
	mubiao= "https://"+host[0]+"luov.top";
	flag=1;
}else if(host[1]=="xian6ge"){
	mubiao= "https://"+host[0]+"xian6ge.cn"; 
}

console.log(mubiao);
var other = GetUrlRelativePath();
console.log(other);

if (flag == 1) {
	window.location.href = mubiao + other;
}
