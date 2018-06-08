google.charts.load('current', {packages: ['bar']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
	var jsonData = $.ajax({
	url: "getData.php",
	dataType: "json",
	async: false
	}).responseText;

	var options = {
		legend: {position:'none'},
		title: "Twój poziom neurotyczności na tle innych ankietowanych",
		titleTextStyle: {fontSize: 25},
		bar: {groupWidth: "80%"},
		hAxis: {title: 'Stopień neurotyczności [%]', titleTextStyle: {fontSize: 15}},
		vAxis: {title: 'Liczba osób', titleTextStyle: {fontSize: 15}},
		colors: ['#6CDAB2'],
	};
	var data = new google.visualization.DataTable(jsonData);
	var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
	chart.draw(data, google.charts.Bar.convertOptions(options));
}