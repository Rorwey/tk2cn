function siteTime() {
	window.setTimeout("siteTime()", 1000);
	var seconds = 1000;
	var minutes = seconds * 60;
	var hours = minutes * 60;
	var days = hours * 24;
	var mouths = days * 30;
	var years = days * 365;
	var today = new Date(jQuery.ajax({
		async: false
	}).getResponseHeader("Date"));
	// console.log(today);
	// var today = new Date();
	var todayYear = today.getFullYear();
	var todayMonth = today.getMonth() + 1;
	var todayDate = today.getDate();
	var todayWeek = today.getDay();
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
	var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDay0) * days - diffHours * hours - diffMinutes * minutes) /
		seconds);
	//	document.getElementById("sitetime").innerHTML = " 已运行" + /*diffYears+" 年 "+*/ diffDays + " 天 " + diffHours + " 小时 " + diffMinutes + " 分钟 " + diffSeconds + " 秒";
	//	console.log(diffDay0);
	document.getElementsByClassName("years")[0].innerHTML = diffYears;
	//	document.getElementsByClassName("mouths")[0].innerHTML = diffMouths;
	document.getElementsByClassName("days")[0].innerHTML = diffDay0;
	document.getElementsByClassName("hours")[0].innerHTML = diffHours;
	document.getElementsByClassName("minutes ")[0].innerHTML = diffMinutes;
	document.getElementsByClassName("seconds")[0].innerHTML = diffSeconds;

	var lunar = getLunarDate(todayYear, todayMonth, todayDate);
	var week = getWeek(todayWeek);
	var lunarTime = getLunarTime(todayHour, todayMinute);
	//	console.log(lunar);
	todayMonth = completionDate(todayMonth.toString());
	todayDate = completionDate(todayDate.toString());
	todayHour = completionDate(todayHour.toString());
	todayMinute = completionDate(todayMinute.toString());
	todaySecond = completionDate(todaySecond.toString());
	if (lunar.isTerm) //节气lunar.isTerm
		// var nowTime = todayYear + "/" + todayMonth + "/" + todayDate+"&nbsp;" + week+ "&nbsp;" + todayHour + ":" + todayMinute + ":" + todaySecond + "<br />" + lunar.gzYear + lunar.Animal + "年" + "" + lunar.IMonthCn + lunar.IDayCn  + lunar.Term+""+lunarTime;
		var nowTime = todayYear + "/" + todayMonth + "/" + todayDate + "&nbsp;&nbsp;&nbsp;" + week + "&nbsp;&nbsp;&nbsp;" +
			todayHour + ":" + todayMinute + ":" + todaySecond + "<br />" + lunar.gzYear + lunar.Animal + "年" + "&nbsp;" + lunar.IMonthCn +
			lunar.IDayCn + "&nbsp;" + lunar.Term + lunarTime;
	else
		var nowTime = todayYear + "/" + todayMonth + "/" + todayDate + "&nbsp;" + week + "&nbsp;" + todayHour + ":" +
			todayMinute + ":" +
			todaySecond + "<br />" + lunar.gzYear + lunar.Animal + "年" + "&nbsp;&nbsp;&nbsp;" + lunar.IMonthCn + lunar.IDayCn +
			"&nbsp;&nbsp;" + lunarTime;
	document.getElementsByClassName("li-text")[0].innerHTML = nowTime;
} /*因为建站时间还没有一年，就将之注释掉了。需要的可以取消*/

function getMouthDays(year, mouth) {
	//构造当前日期对象
	//	var date = new Date();
	//	var year = date.getFullYear(); //获取年份
	//	var mouth = date.getMonth() + 1; //获取当前月份
	var days; //定义当月的天数；
	if (mouth == 2) { //当月份为二月时，根据闰年还是非闰年判断天数
		days = year % 4 == 0 ? 29 : 28;
	} else if (mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {
		//月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
		days = 31;
	} else {
		//其他月份，天数为：30.
		days = 30;
	}
	return days;
}

//获取相对路径
function GetUrlRelativePath() {
	var url = document.location.toString();
	var arrUrl = url.split("//");


	var start = arrUrl[1].indexOf("/");
	var relUrl = arrUrl[1].substring(start); //stop省略，截取从start开始到结尾的所有字符


	if (relUrl.indexOf("?") != -1) {
		relUrl = relUrl.split("?")[0];
	}
	return relUrl;
}

function completionDate(day) {
	if (day.length == 1) {
		return '0' + day
	} else
		return day
}

//获取今天的星期
function getWeek(date) {
	var weekday = ["Sun.", "Mon.", "Tues.", "Wed.", "Thur.", "Fri.", "Sat."];
	return weekday[date];
}
//获取今天的农历日子
function getLunarDate(year, month, day) {
	var lunar = calendar.solar2lunar(year, month, day);
	//	console.log(lunar);
	return lunar;
}

//获取农历时辰
function getLunarTime(hour, minute) {
	var time0 = ["子", "丑", "丑", "寅", "寅", "卯", "卯", "辰", "辰", "巳", "巳", "午", "午", "未", "未", "申", "申", "酉", "酉", "戌", "戌",
		"亥", "亥", "子"
	];
	var time1 = ["初", "正", "末"];
	var k = hour % 2;
	if (hour % 2 == 0) { //末尾
		var a = 20;
		var b = [1, 2];
	} else { //开头
		var a = 40;
		var b = [0, 1];
	}
	if (minute < a) {
		var time = time0[hour] + time1[b[0]];
	} else {
		var time = time0[hour] + time1[b[1]];
	}
	return time;
}
