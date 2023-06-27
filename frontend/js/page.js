//url
var api_url = url.url_backend;
const url_endpoint = api_url + '/form/recommend_index'

fetch(url_endpoint)
    .then(function (response) {
       return response.json()
    })
    .then(function (myData) {
        appendData(myData)
   })
   .catch(function (err) {
       console.log('error: ' + err)
    })
    console.log("fetch success")

const page = localStorage.getItem('page_no');
console.log(page)

function appendData(myData) {
    var mainContainer = document.getElementById("main");
    console.log(myData)

    var div = document.createElement("div");

        //tree data

    document.getElementById("name1").innerHTML = myData.t1.tree[0].Trees.name;
    document.getElementById("name2").innerHTML = myData.t2.tree[0].Trees.name;
    document.getElementById("name3").innerHTML = myData.t3.tree[0].Trees.name;
    //const name_tree = myData.t1.tree[0].Trees.name
    document.getElementById('image1').src = myData.t1.tree[0].Trees.url_picture;
    document.getElementById('image2').src = myData.t2.tree[0].Trees.url_picture;
    document.getElementById('image3').src = myData.t3.tree[0].Trees.url_picture;
    //const picture = myData.t1.tree[0].Trees.url_picture

    document.getElementById("credit_img1").innerHTML = '<b>ที่มา : </b>' + myData.t1.tree[0].Trees.c_picture;
    document.getElementById("credit_img2").innerHTML = '<b>ที่มา : </b>' + myData.t2.tree[0].Trees.c_picture;
    document.getElementById("credit_img3").innerHTML = '<b>ที่มา : </b>' + myData.t3.tree[0].Trees.c_picture;
    //const cradit_pic = myData.t1.tree[0].Trees.c_picture

    document.getElementById("sci_name1").innerHTML = '<b>ชื่อวิทยาศาสตร์ : </b>' + myData.t1.tree[0].Trees.sci_name;
    document.getElementById("sci_name2").innerHTML = '<b>ชื่อวิทยาศาสตร์ : </b>' + myData.t2.tree[0].Trees.sci_name;
    document.getElementById("sci_name3").innerHTML = '<b>ชื่อวิทยาศาสตร์ : </b>' + myData.t3.tree[0].Trees.sci_name;
    //const sci_tree = myData.t1.tree[0].Trees.sci_name

    //empty check
    //another name
    if(myData.t1.tree[0].Trees.another_name != null && myData.t1.tree[0].Trees.another_name != undefined) {
    document.getElementById("another_name1").innerHTML = '<b>ชื่ออื่น ๆ : </b>' +  myData.t1.tree[0].Trees.another_name;
    } 
    if(myData.t2.tree[0].Trees.another_name != null && myData.t2.tree[0].Trees.another_name != undefined) {
        document.getElementById("another_name2").innerHTML = '<b>ชื่ออื่น ๆ : </b>' +  myData.t2.tree[0].Trees.another_name;
    } 
    if(myData.t3.tree[0].Trees.another_name != null && myData.t3.tree[0].Trees.another_name != undefined) {
        document.getElementById("another_name3").innerHTML = '<b>ชื่ออื่น ๆ : </b>' +  myData.t3.tree[0].Trees.another_name;
    } 
    

    document.getElementById("family1").innerHTML = '<b>วงศ์ : </b>' + myData.t1.tree[0].Trees.family;
    document.getElementById("family2").innerHTML = '<b>วงศ์ : </b>' + myData.t2.tree[0].Trees.family;
    document.getElementById("family3").innerHTML = '<b>วงศ์ : </b>' + myData.t3.tree[0].Trees.family;
    //const family = myData.t1.tree[0].Trees.family

    document.getElementById("size1").innerHTML = '<b>ขนาด : </b>' + myData.t1.tree[0].Trees.size;
    document.getElementById("size2").innerHTML = '<b>ขนาด : </b>' + myData.t2.tree[0].Trees.size;
    document.getElementById("size3").innerHTML = '<b>ขนาด : </b>' + myData.t3.tree[0].Trees.size;
    //const size = myData.t1.tree[0].Trees.size

    document.getElementById("height1").innerHTML = '<b>ช่วงความสูงของต้น : </b>' + myData.t1.tree[0].Trees.hieght;
    document.getElementById("height2").innerHTML = '<b>ช่วงความสูงของต้น : </b>' + myData.t2.tree[0].Trees.hieght;
    document.getElementById("height3").innerHTML = '<b>ช่วงความสูงของต้น : </b>' + myData.t3.tree[0].Trees.hieght;
    //const h = myData.t1.tree[0].Trees.hieght
    
    //empty
    //grow rate
    if(myData.t1.tree[0].Trees.grow_rate != null && myData.t1.tree[0].Trees.grow_rate != undefined) {
        document.getElementById("grow_rate1").innerHTML = '<b>อัตราการเจริญเติบโต : </b>' +  myData.t1.tree[0].Trees.grow_rate;
    } 
    if(myData.t2.tree[0].Trees.grow_rate != null && myData.t2.tree[0].Trees.grow_rate != undefined) {
        document.getElementById("grow_rate2").innerHTML = '<b>อัตราการเจริญเติบโต : </b>' +  myData.t2.tree[0].Trees.grow_rate;
    } 
    if(myData.t3.tree[0].Trees.grow_rate != null && myData.t3.tree[0].Trees.grow_rate != undefined) {
        document.getElementById("grow_rate3").innerHTML = '<b>อัตราการเจริญเติบโต : </b>' +  myData.t3.tree[0].Trees.grow_rate;
    } 
    //document.getElementById("grow_rate1").innerHTML = 'อัตราการเจริญเติบโต : ' + myData.t1.tree[0].Trees.grow_rate;
    //document.getElementById("grow_rate2").innerHTML = 'อัตราการเจริญเติบโต : ' + myData.t2.tree[0].Trees.grow_rate;
    //document.getElementById("grow_rate3").innerHTML = 'อัตราการเจริญเติบโต : ' + myData.t3.tree[0].Trees.grow_rate;
    //const grow_rate = myData.t1.tree[0].Trees.grow_rate

    //empty
    //additional care
    if(myData.t1.tree[0].Trees.additional_care != null && myData.t1.tree[0].Trees.additional_care != undefined) {
        document.getElementById("addition_care1").innerHTML = '<b>ข้อมูลการดูแลเพิ่มเติม : </b>' +  myData.t1.tree[0].Trees.additional_care;
    } 
    if(myData.t2.tree[0].Trees.additional_care != null && myData.t2.tree[0].Trees.additional_care != undefined) {
        document.getElementById("addition_care2").innerHTML = '<b>ข้อมูลการดูแลเพิ่มเติม : </b>' +  myData.t2.tree[0].Trees.additional_care;
    } 
    if(myData.t3.tree[0].Trees.additional_care != null && myData.t3.tree[0].Trees.additional_care != undefined) {
        document.getElementById("addition_care3").innerHTML = '<b>ข้อมูลการดูแลเพิ่มเติม : </b>' +  myData.t3.tree[0].Trees.additional_care;
    } 
    //
    //document.getElementById("addition_care1").innerHTML = 'ข้อมูลการดูแลเพิ่มเติม : ' + myData.t1.tree[0].Trees.additional_care;
    //document.getElementById("addition_care2").innerHTML = 'ข้อมูลการดูแลเพิ่มเติม : ' + myData.t2.tree[0].Trees.additional_care;
    //document.getElementById("addition_care3").innerHTML = 'ข้อมูลการดูแลเพิ่มเติม : ' + myData.t3.tree[0].Trees.additional_care;
    //const add_care = myData.t1.tree[0].Trees.additional_care

    //empty
    //note data
    if(myData.t1.tree[0].Trees.note_nature != null && myData.t1.tree[0].Trees.note_nature != undefined) {
        document.getElementById("note1").innerHTML = '<b>ข้อมูลต้นไม้เพิ่มเติม : </b>' +  myData.t1.tree[0].Trees.note_nature;
    } 
    if(myData.t2.tree[0].Trees.note_nature != null && myData.t2.tree[0].Trees.note_nature != undefined) {
        document.getElementById("note2").innerHTML = '<b>ข้อมูลต้นไม้เพิ่มเติม : </b>' +  myData.t2.tree[0].Trees.note_nature;
    } 
    if(myData.t3.tree[0].Trees.note_nature != null && myData.t3.tree[0].Trees.note_nature != undefined) {
        document.getElementById("note3").innerHTML = '<b>ข้อมูลต้นไม้เพิ่มเติม : </b>' +  myData.t3.tree[0].Trees.note_nature;
    } 
    //
    //document.getElementById("note1").innerHTML = 'ข้อมูลต้นไม้เพิ่มเติม : ' + myData.t1.tree[0].Trees.note_nature;
    //document.getElementById("note2").innerHTML = 'ข้อมูลต้นไม้เพิ่มเติม : ' + myData.t2.tree[0].Trees.note_nature;
    //document.getElementById("note3").innerHTML = 'ข้อมูลต้นไม้เพิ่มเติม : ' + myData.t3.tree[0].Trees.note_nature;
    //const note = myData.t1.tree[0].Trees.note_nature

    document.getElementById("nature1").innerHTML = '<b>ข้อมูลทั่วไป : </b>' + myData.t1.tree[0].Trees.nature;
    document.getElementById("nature2").innerHTML = '<b>ข้อมูลทั่วไป : </b>' + myData.t2.tree[0].Trees.nature;
    document.getElementById("nature3").innerHTML = '<b>ข้อมูลทั่วไป : </b>' + myData.t3.tree[0].Trees.nature;
    //const nature = myData.t1.tree[0].Trees.nature

    document.getElementById("flower1").innerHTML = '<b>ดอก : </b>' + myData.t1.tree[0].Trees.flower;
    document.getElementById("flower2").innerHTML = '<b>ดอก : </b>' + myData.t2.tree[0].Trees.flower;
    document.getElementById("flower3").innerHTML = '<b>ดอก : </b>' + myData.t3.tree[0].Trees.flower;
    //const flower = myData.t1.tree[0].Trees.flower

    document.getElementById("leaf1").innerHTML = '<b>ใบ : </b>' + myData.t1.tree[0].Trees.leaf;
    document.getElementById("leaf2").innerHTML = '<b>ใบ : </b>' + myData.t2.tree[0].Trees.leaf;
    document.getElementById("leaf3").innerHTML = '<b>ใบ : </b>' + myData.t3.tree[0].Trees.leaf;
    //const leaf = myData.t1.tree[0].Trees.leaf

    document.getElementById("water1").innerHTML = '<b>การรดน้ำ : </b>' + myData.t1.tree[0].Trees.watering;
    document.getElementById("water2").innerHTML = '<b>การรดน้ำ : </b>' + myData.t2.tree[0].Trees.watering;
    document.getElementById("water3").innerHTML = '<b>การรดน้ำ : </b>' + myData.t3.tree[0].Trees.watering;
    //const water = myData.t1.tree[0].Trees.watering

    document.getElementById("sun1").innerHTML = '<b>ความต้องการแสงแดด : </b>' + myData.t1.tree[0].Trees.sunrise;
    document.getElementById("sun2").innerHTML = '<b>ความต้องการแสงแดด : </b>' + myData.t2.tree[0].Trees.sunrise;
    document.getElementById("sun3").innerHTML = '<b>ความต้องการแสงแดด : </b>' + myData.t3.tree[0].Trees.sunrise;
    //const sun = myData.t1.tree[0].Trees.sunrise

    document.getElementById("soil1").innerHTML = '<b>ดินที่เหมาะสม : </b>' + myData.t1.tree[0].Trees.soil;
    document.getElementById("soil2").innerHTML = '<b>ดินที่เหมาะสม : </b>' + myData.t2.tree[0].Trees.soil;
    document.getElementById("soil3").innerHTML = '<b>ดินที่เหมาะสม : </b>' + myData.t3.tree[0].Trees.soil;
    //const soil = myData.t1.tree[0].Trees.soil

    document.getElementById("breed1").innerHTML = '<b>การขยายพันธุ์ : </b>' + myData.t1.tree[0].Trees.breed;
    document.getElementById("breed2").innerHTML = '<b>การขยายพันธุ์ : </b>' + myData.t2.tree[0].Trees.breed;
    document.getElementById("breed3").innerHTML = '<b>การขยายพันธุ์ : </b>' + myData.t3.tree[0].Trees.breed;
    //const breed = myData.t1.tree[0].Trees.breed

    //empty
    //sapecial feature
    if(myData.t1.tree[0].Trees.specail_feature != null && myData.t1.tree[0].Trees.specail_feature != undefined) {
        document.getElementById("feature1").innerHTML = '<b>คุณสมบัติเพิ่มเติม : </b>' +  myData.t1.tree[0].Trees.specail_feature;
    } 
    if(myData.t2.tree[0].Trees.specail_feature != null && myData.t2.tree[0].Trees.specail_feature != undefined) {
        document.getElementById("feature2").innerHTML = '<b>คุณสมบัติเพิ่มเติม : </b>' +  myData.t2.tree[0].Trees.specail_feature;
    } 
    if(myData.t3.tree[0].Trees.specail_feature != null && myData.t3.tree[0].Trees.specail_feature != undefined) {
        document.getElementById("feature3").innerHTML = '<b>คุณสมบัติเพิ่มเติม : </b>' +  myData.t3.tree[0].Trees.specail_feature;
    } 
    //
    //document.getElementById("feature1").innerHTML = 'คุณสมบัติเพิ่มเติม : ' + myData.t1.tree[0].Trees.specail_feature;
    //document.getElementById("feature2").innerHTML = 'คุณสมบัติเพิ่มเติม : ' + myData.t2.tree[0].Trees.specail_feature;
    //document.getElementById("feature3").innerHTML = 'คุณสมบัติเพิ่มเติม : ' + myData.t3.tree[0].Trees.specail_feature;
    //const feature = myData.t1.tree[0].Trees.specail_feature
    
    //empty
    //auspicious
    if(myData.t1.tree[0].Trees.auspicious != null && myData.t1.tree[0].Trees.auspicious != undefined) {
        document.getElementById("aus1").innerHTML = '<b>การเสริมสิริมงคล : </b>' +  myData.t1.tree[0].Trees.auspicious;
    } 
    if(myData.t2.tree[0].Trees.auspicious != null && myData.t2.tree[0].Trees.auspicious != undefined) {
        document.getElementById("aus2").innerHTML = '<b>การเสริมสิริมงคล : </b>' +  myData.t2.tree[0].Trees.auspicious;
    } 
    if(myData.t3.tree[0].Trees.auspicious != null && myData.t3.tree[0].Trees.auspicious != undefined) {
        document.getElementById("aus3").innerHTML = '<b>การเสริมสิริมงคล : </b>' +  myData.t3.tree[0].Trees.auspicious;
    }
    //
    //document.getElementById("aus1").innerHTML = 'การเสริมสิริมงคล : ' +  myData.t1.tree[0].Trees.auspicious;
    //document.getElementById("aus2").innerHTML = 'การเสริมสิริมงคล : ' +  myData.t2.tree[0].Trees.auspicious;
    //document.getElementById("aus3").innerHTML = 'การเสริมสิริมงคล : ' +  myData.t3.tree[0].Trees.auspicious;
    //const aus = myData.t1.tree[0].Trees.auspicious


    ///price
     
    document.getElementById("min1").innerHTML = '<b>ราคา(ถูก) : </b>' + myData.t1.price[0].ListPrices.price + ' บาท' ;
    document.getElementById("min2").innerHTML = '<b>ราคา(ถูก) : </b>' + myData.t2.price[0].ListPrices.price + ' บาท' ;
    document.getElementById("min3").innerHTML = '<b>ราคา(ถูก) : </b>' + myData.t3.price[0].ListPrices.price + ' บาท';
    //const min_price = myData.t1.price[0].ListPrices.price
    document.getElementById('link_min1').href = myData.t1.price[0].ListPrices.url_link;
    document.getElementById('link_min2').href = myData.t2.price[0].ListPrices.url_link;
    document.getElementById('link_min3').href = myData.t3.price[0].ListPrices.url_link;
    //const min_url = myData.t1.price[0].ListPrices.url_link

        
    ///purify
    console.log(myData.t1.purify.length)
    if(myData.t1.purify.length > 0) {
        console.log(myData.t1.purify.length)
        document.getElementById('puri1').innerHTML = '<b>ความสามารถในการฟอกอากาศ : </b>' +  myData.t1.purify[0].desc;
    } else {
        hide(document.getElementById('puri1'));
    }

    console.log(myData.t2.purify.length)
    if(myData.t2.purify.length > 0) {
        console.log(myData.t2.purify.length)
        document.getElementById('puri2').innerHTML = '<b>ความสามารถในการฟอกอากาศ : </b>' +  myData.t2.purify[0].desc;
    } else {
        hide(document.getElementById('puri2'));
    }

    console.log(myData.t3.purify.length)
    if(myData.t3.purify.length > 0) {
        console.log(myData.t3.purify.length)
        document.getElementById('puri3').innerHTML = '<b>ความสามารถในการฟอกอากาศ : </b>' +  myData.t3.purify[0].desc;
    } else {
        hide(document.getElementById('puri3'));
    }


    //prices
    document.getElementById("mid1").innerHTML = '<b>ราคา(กลาง) : </b>' + myData.t1.price[1].ListPrices.price + ' บาท';
    document.getElementById("mid2").innerHTML = '<b>ราคา(กลาง) : </b>' + myData.t2.price[1].ListPrices.price + ' บาท';
    document.getElementById("mid3").innerHTML = '<b>ราคา(กลาง) : </b>' + myData.t3.price[1].ListPrices.price + ' บาท';
    //const med_price = myData.t1.price[1].ListPrices.price

    document.getElementById('link_mid1').href = myData.t1.price[1].ListPrices.url_link;
    document.getElementById('link_mid2').href = myData.t2.price[1].ListPrices.url_link;
    document.getElementById('link_mid3').href = myData.t3.price[1].ListPrices.url_link;
    //const med_url = myData.t1.price[1].ListPrices.url_link
    
    document.getElementById("high1").innerHTML = '<b>ราคา(สูง) : </b>' + myData.t1.price[2].ListPrices.price + ' บาท';
    document.getElementById("high2").innerHTML = '<b>ราคา(สูง) : </b>' + myData.t2.price[2].ListPrices.price + ' บาท';
    document.getElementById("high3").innerHTML = '<b>ราคา(สูง) : </b>' + myData.t3.price[2].ListPrices.price + ' บาท';
    //const high_price = myData.t1.price[2].ListPrices.price

    document.getElementById('link_high1').href = myData.t1.price[2].ListPrices.url_link;
    document.getElementById('link_high2').href = myData.t2.price[2].ListPrices.url_link;
    document.getElementById('link_high3').href = myData.t3.price[2].ListPrices.url_link;
    //const high_url = myData.t1.price[2].ListPrices.url_link
  
}   

function hide (elements) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
      elements[index].style.display = 'none';
    }
}

function getPageList(totalPages, page, maxLength){
    function range(start, end){
        return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    var sideWidth = maxLength < 2 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rigthWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if(totalPages <= maxLength){
        return range(1, totalPages);
    }

    if(page <= maxLength - sideWidth - 1 - rigthWidth){
        return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }

    if(page >= totalPages - sideWidth - 1 - rigthWidth){
        return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rigthWidth - leftWidth, totalPages));
    }

    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rigthWidth), 0, range(totalPages - sideWidth + 1, totalPages));
}

$(function(){
    var numberOfItems = 3;
    var limitPerPage = 1;
    var totalPages = 3;
    var paginationSize = 3;
    var currentPage;
    var page_call = page;

    function showPage(whichPage){

        if(whichPage < 1 || whichPage > totalPages) return false;
        
        currentPage = whichPage;

        $(".crad-content .card").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

        $(".pagination li").slice(1, -1).remove();

        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
            $("<li>").addClass("page-item").addClass("current-page").toggleClass("active", item === currentPage).append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text(item)).insertBefore(".next-page");
        });

        $(".previous-page").toggleClass("disable", currentPage === 1);
        $(".next-page").toggleClass("disable", currentPage === 3);
        return true;
    }

    $(".pagination").append(
        $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("ต้นก่อนหน้า")),
        $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("ต้นถัดไป"))
        );

    $(".crad-content").show();
    showPage(1);

    $(document).on("click", ".pagination li.current-page:not(.active)", function(){
        return showPage(+$(this).text());
    });

    $(".next-page").on("click", function(){
        return showPage(currentPage + 1);
    });

    $(".previous-page").on("click", function(){
        return showPage(currentPage - 1);
    });

    if (page == 1){
        showPage(1);
    }
    if (page == 2){
        showPage(2);
    }
    if (page == 3){
        showPage(3);
    }
});

console.log(page);
localStorage.clear();
console.log(page);