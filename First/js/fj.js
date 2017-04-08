/**
 * Created by edeft on 2017-04-08.
 */
var today = new Date(); //새로운 날짜 객체를 생성한다.
var hourNow = today.getHours(); // 현재 시를 구현한다.
var greeting;

//현재 시간에 따라 적당한 인사말을 출력한다.
if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = "Good morning!";
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');