let newsID = 458;

function set_id_single(news_id){
    newsID = news_id;
    console.log('set-newsid', news_id);
    location.href = "news_single.html?"+news_id;
}

function set_id_pin(news_id){
    newsID = news_id;
    console.log('set-newsid', news_id);
    location.href = "pin.html?"+news_id;
}

function get_News_id(){
    temp = location.href.split("?");
    var temp_news_id = parseInt(temp[1]);
    console.log('get-newsid', temp_news_id);
    return temp_news_id;
};

