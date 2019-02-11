var domain = window.location.host;
console.log(domain);
var host = domain.split(".");
console.log(host);
var flag = 0;
var mubiao = "https://time.luov.top";
if(host[0]=="time"&&host[1]=="luov"){
	flag=-1;
}else if (host[0] == "luov") {
	mubiao = "https://luov.top";
	flag = 1;
}else if(host[0] == "xian6ge") {
	mubiao = "https://xian6ge.cn";
	flag = 2;
}else if(host[1]=="luov"){
	mubiao= "https://"+host[0]+".luov.top";
	flag=3;
}else if(host[1]=="xian6ge"){
	mubiao= "https://"+host[0]+".xian6ge.cn"; 
}

console.log(mubiao);
var other = GetUrlRelativePath();
console.log(other);
console.log(flag)
if (flag != 0) {
	window.location.href = mubiao + other;
}
