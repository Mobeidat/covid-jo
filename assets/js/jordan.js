const api_url = 'https://corona.lmao.ninja/countries/jordan';
	
async function getData() {

    const response = await fetch(api_url);
    const data = await response.json();

    $(".confirmedCases").text(data.cases);
    $(".activeCases").text(data.active);
    $(".Deaths").text(data.deaths);
    $(".Recovered").text(data.recovered);
    $('.TodayCases').text(data.todayCases);
    $('.TodayDeaths').text(data.todayDeaths);
}
getData();

        