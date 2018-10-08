function siteTime() {
	window.setTimeout("siteTime()", 1000);
	var seconds = 1000;
	var minutes = seconds * 60;
	var hours = minutes * 60;
	var days = hours * 24;
	var mouths = days * 30;
	var years = days * 365;
	var today = new Date();
	var todayYear = today.getFullYear();
	var todayMonth = today.getMonth() + 1;
	var todayDate = today.getDate();
	var todayHour = today.getHours();
	var todayMinute = today.getMinutes();
	var todaySecond = today.getSeconds();
	/* Date.UTC() -- 返回date对象距世界标准时间(UTC)1970年1月1日午夜之间的毫秒数(时间戳)
	year - 作为date对象的年份，为4位年份值
	month - 0-11之间的整数，做为date对象的月份
	day - 1-31之间的整数，做为date对象的天数
	hours - 0(午夜24点)-23之间的整数，做为date对象的小时数
	minutes - 0-59之间的整数，做为date对象的分钟数
	seconds - 0-59之间的整数，做为date对象的秒数
	microseconds - 0-999之间的整数，做为date对象的毫秒数 */
	var t1 = Date.UTC(2018, 09, 19, 18, 00, 00); //北京时间2018-2-13 00:00:00
	var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
	var diff = t2 - t1;
	var diffYears = Math.floor(diff / years);
	var diffMouths = Math.floor((diff / mouths) - diffYears * 12); //粗略计算月份	
	var diffDays = Math.floor((diff / days) - diffYears * 365 - diffMouths * 30);
	var diffDay0 = Math.floor((diff / days) - diffYears * 365);
	var diffHours = Math.floor((diff - (diffYears * 365 + diffDay0) * days) / hours);
	var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDay0) * days - diffHours * hours) / minutes);
	var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDay0) * days - diffHours * hours - diffMinutes * minutes) / seconds);
	//	document.getElementById("sitetime").innerHTML = " 已运行" + /*diffYears+" 年 "+*/ diffDays + " 天 " + diffHours + " 小时 " + diffMinutes + " 分钟 " + diffSeconds + " 秒";
	document.getElementsByClassName("years")[0].innerHTML = diffYears;
	//	document.getElementsByClassName("mouths")[0].innerHTML = diffMouths;
	document.getElementsByClassName("days")[0].innerHTML = diffDays;
	document.getElementsByClassName("hours")[0].innerHTML = diffHours;
	document.getElementsByClassName("minutes ")[0].innerHTML = diffMinutes;
	document.getElementsByClassName("seconds")[0].innerHTML = diffSeconds;
} /*因为建站时间还没有一年，就将之注释掉了。需要的可以取消*/

function getMouthDays(year, mouth) {
	//构造当前日期对象
	//	var date = new Date();
	//	var year = date.getFullYear(); //获取年份
	//	var mouth = date.getMonth() + 1; //获取当前月份
	var days; //定义当月的天数；
	if(mouth == 2) { //当月份为二月时，根据闰年还是非闰年判断天数
		days = year % 4 == 0 ? 29 : 28;
	} else if(mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {
		//月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
		days = 31;
	} else {
		//其他月份，天数为：30.
		days = 30;
	}
	return days;
}

//获取相对路径
function  GetUrlRelativePath()　　 {　　　　
	var  url = document.location.toString();　　　　
	var  arrUrl = url.split("//");

	　　　　
	var  start = arrUrl[1].indexOf("/");　　　　
	var  relUrl = arrUrl[1].substring(start); //stop省略，截取从start开始到结尾的所有字符

	　　　　
	if(relUrl.indexOf("?") != -1) {　　　　　　
		relUrl = relUrl.split("?")[0];　　　　
	}　　　　
	return  relUrl;　　
}