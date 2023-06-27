const indexTree = localStorage.getItem('indexTree');
console.log(indexTree);

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        const res = JSON.parse(xhr.responseText);
        //console.log(typeof xhr.responseText);
        console.log(res);
        var div = document.createElement("div");

        var name = res.tree[0].Trees.name;
        document.getElementById("name1").innerHTML = name;

        var sci_name = res.tree[0].Trees.sci_name;
        document.getElementById("sci_name1").innerHTML = '<b>ชื่อวิทยาศาสตร์ : </b>' +  sci_name;

        var fam = res.tree[0].Trees.family;
        document.getElementById("family1").innerHTML = '<b>ชื่อวงศ์ : </b>' +  fam;

        var url_picture = res.tree[0].Trees.url_picture;
        document.getElementById('image1').src = url_picture;

        var credit = res.tree[0].Trees.c_picture;
        document.getElementById("credit_img1").innerHTML = '<b>ที่มา : </b>' +  credit;

        var high = res.tree[0].Trees.hieght;
        document.getElementById("height1").innerHTML = '<b>ความสูง : </b>' +  high;

        var nature = res.tree[0].Trees.nature;
        document.getElementById("nature1").innerHTML = '<b>ลักษณะทั่วไป : </b>' +  nature;

        var leaf = res.tree[0].Trees.leaf;
        document.getElementById("leaf1").innerHTML = '<b>ลักษณะใบ : </b>' +  leaf;

        var flower = res.tree[0].Trees.flower;
        document.getElementById("flower1").innerHTML = '<b>ลักษณะดอก : </b>' +  flower;

        var soil = res.tree[0].Trees.soil;
        document.getElementById("soil1").innerHTML = '<b>ดินที่เหมาะแก่การปลูก : </b>' +  soil;

        var water = res.tree[0].Trees.watering;
        document.getElementById("water1").innerHTML = '<b>การรดน้ำ : </b>' +  water;

        var sun = res.tree[0].Trees.sunrise;
        document.getElementById("sun1").innerHTML = '<b>ความต้องการแสง : </b>' +  sun;

        var breed = res.tree[0].Trees.breed;
        document.getElementById("breed1").innerHTML = '<b>การขยายพันธ์ุ : </b>' +  breed;

        //special_f
        var special_f = res.tree[0].Trees.special_feature;
        if (special_f != null && special_f != undefined) {
            document.getElementById("feature1").innerHTML = '<b>คุณสมบัติพิเศษ : </b>' +  special_f;
        }
        
        //note_nature
        var note = res.tree[0].Trees.note_nature;
        if (note != null && note != undefined) {
            document.getElementById("note1").innerHTML = '<b>ข้อมูลลักษณะทั่วไปเพิ่มเติม : </b>' +  note;
        }

        //grow_rate
        var grow = res.tree[0].Trees.grow_rate;
        if (grow != null && grow != undefined) {
            document.getElementById("grow_rate1").innerHTML = '<b>อัตราการเจริญเติบโต : </b>' +  grow;
        }

        //another_name
        var another_name = res.tree[0].Trees.another_name;
        if (another_name != null && another_name != undefined) {
            document.getElementById("another_name1").innerHTML = '<b>ชื่ออื่น ๆ : </b>' +  another_name;
        }

        //auspicious
        var aus = res.tree[0].Trees.auspicious;
        if (aus != null && aus != undefined) {
            document.getElementById("aus1").innerHTML = '<b>การเสริมสิริมงคล : </b>' +  aus;
        } 

        //additional_care
        var addi = res.tree[0].Trees.additional_care;
        if (addi != null && addi != undefined) {
            document.getElementById("addition_care1").innerHTML = '<b>ข้อมูลการดูแลเพิ่มเติม : </b>' +  addi;
        }

        //purify
        var puri = ' ';
        if (res.purify.length > 0) {
        for (var i = 0; i < res.purify.length; i++) {
            if (res.purify[i].desc != null && res.purify[i].desc != undefined) {
                puri += ' \n' + res.purify[i].desc + ' ';
            }
        }
        document.getElementById("puri1").innerHTML = '<b>ความสามารถการฟอกอากาศ : </b>' +  puri;
        } else {
            hide(document.getElementById('puri1'));
        }
        console.log(puri);

        //price
        document.getElementById("min1").innerHTML = '<b>ราคา(ถูก) : </b>' + res.price[0].ListPrices.price + ' บาท' ;
        document.getElementById('link_min1').href = res.price[0].ListPrices.url_link;

        document.getElementById("mid1").innerHTML = '<b>ราคา(กลาง) : </b>' + res.price[1].ListPrices.price + ' บาท';
        document.getElementById('link_mid1').href = res.price[1].ListPrices.url_link;

        document.getElementById("high1").innerHTML = '<b>ราคา(สูง) : </b>' + res.price[2].ListPrices.price + ' บาท';
        document.getElementById('link_high1').href = res.price[2].ListPrices.url_link;
    }
}
//link to api back-end from hosting
var api_url = url.url_backend;
const url_endpoint = api_url + `/tree_data/${indexTree}`
xhr.open('GET', url_endpoint, true);
xhr.setRequestHeader('Accept', 'application/json');
xhr.send(null);

function hide (elements) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
      elements[index].style.display = 'none';
    }
}