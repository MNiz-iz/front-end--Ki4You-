//url
var api_url = url.url_backend;
var url_front = url.url_frontend;
const url_endpoint = api_url + '/form/recommend_index'

fetch(url_endpoint)
    .then(function (response) {
        return response.json()
    })
    .then(function (myData) {
        top.glob = myData;
        appendData(myData)
    })
    .catch(function (err) {
        console.log('error: ' + err)
    })
    console.log("fetch success")

function appendData(myData){
    //import document from recommendation_result.html
    var mainContainer = document.getElementById("main");
    console.log(myData)

    var div = document.createElement("div");

    //fetch Name
    document.getElementById("name1").innerHTML = myData.t1.tree[0].Trees.name;
    document.getElementById("name2").innerHTML = myData.t2.tree[0].Trees.name;
    document.getElementById("name3").innerHTML = myData.t3.tree[0].Trees.name;
    //const name_tree = myData.t1.tree[0].Trees.name


    //fetch Picture
    document.getElementById('image1').src = myData.t1.tree[0].Trees.url_picture;
    document.getElementById('image2').src = myData.t2.tree[0].Trees.url_picture;
    document.getElementById('image3').src = myData.t3.tree[0].Trees.url_picture;
    //const picture = myData.t1.tree[0].Trees.url_picture
    

}

function call_item1(){
    //alert('item1 is clicked');
    localStorage.clear();
    localStorage.setItem('page_no', 1);
    window.open(url_front + '/template/recomendation_page_cactus.html');
}
function call_item2(){
    //alert('item2 is clicked');
    localStorage.clear();
    localStorage.setItem('page_no', 2);
    window.open(url_front + '/template/recomendation_page_cactus.html');
}
function call_item3(){
    //alert('item3 is clicked');
    localStorage.clear();
    localStorage.setItem('page_no', 3);
    window.open(url_front + '/template/recomendation_page_cactus.html');
}