$(document).ready(function(){
//openIntroPage
	//ani->배경과 텍스트 서서히 등장시키기.............
	$(".main img").fadeOut(1500,function(){ //배경이미지부터 fadeIn...
		$(".main").hide(600);
	});

  	//모바일용 메뉴버튼_________ 
	$(".nav").css({"left": "-60%"}); /*처음위치*/
	$(".close").hide();

	$("#top ul li:first-child").click(function () {
		$(".nav").stop(true, true).animate({"left": "0%"});
		$(".close").show();
	});

	$(".close").click(function () {
		$(".nav").stop(true, true).animate({"left": "-60%"});
		$(".close").hide(400);
	});

 //index date/////////////////////
 $('input[name="dates"]').daterangepicker()
 //create a new date range picker
$('#daterange').daterangepicker({ startDate: '03/05/2005', endDate: '03/06/2005' });

//change the selected date range of that picker
$('#daterange').data('daterangepicker').setStartDate('05/23/2022');
$('#daterange').data('daterangepicker').setEndDate('05/24/2022');
///////////////////////////////////////////////////////

$(function () {
	$('#daterange').daterangepicker({
			"locale": {
					"format": "YYYY년 MM월 DD일",
					"separator": " ~ ",
					"applyLabel": "확인",
					"cancelLabel": "취소",
					"fromLabel": "From",
					"toLabel": "To",
					"customRangeLabel": "Custom",
					"weekLabel": "W",
					"daysOfWeek": ["월", "화", "수", "목", "금", "토", "일"],
					"monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
					"firstDay": 1
			},
			"startDate": "2022-05-23",
			"endDate": "2022-05-24",
			"drops": "down"
	}, function (start, end, label) {
			console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
	});
});



 
});

