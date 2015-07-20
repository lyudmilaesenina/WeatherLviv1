$(function(){
    getWeatherData('ua', dataReceived, showError);

    function dataReceived(data) {
        var offset = (new Date()).getTimezoneOffset()*60*1000; 
        var city = data.city.name;
        var country = data.city.country;

        $('#day1').html(moment(data.list[0].dt*1000 - offset).calendar());
        $('#icon1').html('<img src="images/icons/'+ data.list[0].weather[0].icon +'.png" alt="Conditions" width="111" height="110">');
        $('#temp1').html(Math.round(data.list[0].temp.day) + '&deg;C');
        
        $('#day2').html(moment(data.list[1].dt*1000 - offset).calendar());
        $('#icon2').html('<img src="images/icons/'+ data.list[1].weather[0].icon +'.png" alt="Conditions" width="111" height="110">');
        $('#temp2').html(Math.round(data.list[1].temp.day) + '&deg;C');
       
        $('#day3').html(moment(data.list[2].dt*1000 - offset).calendar());
        $('#icon3').html('<img src="images/icons/'+ data.list[2].weather[0].icon +'.png" alt="Conditions" width="111" height="110">');
        $('#temp3').html(Math.round(data.list[2].temp.day) + '&deg;C');
        
        $('#day4').html(moment(data.list[3].dt*1000 - offset).calendar());
        $('#icon4').html('<img src="images/icons/'+ data.list[3].weather[0].icon +'.png" alt="Conditions" width="111" height="110">');
        $('#temp4').html(Math.round(data.list[3].temp.day) + '&deg;C');
        
        $('#day5').html(moment(data.list[4].dt*1000 - offset).calendar());
        $('#icon5').html('<img src="images/icons/'+ data.list[4].weather[0].icon +'.png" alt="Conditions" width="111" height="110">');
        $('#temp5').html(Math.round(data.list[4].temp.day) + '&deg;C');
        
        $('#day6').html(moment(data.list[5].dt*1000 - offset).calendar());
        $('#icon6').html('<img src="images/icons/'+ data.list[5].weather[0].icon +'.png" alt="Conditions" width="111" height="110">');
        $('#temp6').html(Math.round(data.list[5].temp.day) + '&deg;C');
        
        $('#day7').html(moment(data.list[6].dt*1000 - offset).calendar());
        $('#icon7').html('<img src="images/icons/'+ data.list[6].weather[0].icon +'.png" alt="Conditions" width="111" height="110">');
        $('#temp7').html(Math.round(data.list[6].temp.day) + '&deg;C');
        
        $('#location').html(city + ', <b>' + country + '</b>'); 
    }

    function showError(msg){
        $('#error').html('Ñòàëàñÿ ïîìèëêà: ' + msg);
    }
});