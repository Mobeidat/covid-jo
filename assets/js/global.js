const api_url_all = 'https://corona.lmao.ninja/v2/all';
	
async function getDataAll() {

    const response = await fetch(api_url_all);
    const data = await response.json();
    $(".allCases").text(data.cases);
    $(".allDeaths").text(data.deaths);
    $(".allRecovered").text(data.recovered);}
		getDataAll();

        