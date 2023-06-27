const xhr = new XMLHttpRequest();
let main = document.querySelector('#main');

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE){
        const res = JSON.parse(xhr.responseText);
        //const res1 = JSON.parse(res[0]);
        //i = 0;
        console.log(res[0].Trees.name)
        console.log(res.length);
        let main = document.querySelector('#main');
        var htmls = `<div class="card-content">`;
        for (var i = 0; i < res.length; i++){
            var object = res[i].Trees
            //
            for (const key in object) {
                if (object.hasOwnProperty(key)) {
                    if (key == 'name') {
                        console.log(`${object[key]}`);
                        var name = object.name;
                    }
                    if (key == 'url_picture') {
                        console.log(`${object[key]}`);
                        var url = object.url_picture;
                    }
                    if (key == 'indexTree') {
                        console.log(`${object[key]}`);
                        var indexTree = object.indexTree;
                    }
                }
            }
            htmls += `
                    <div class="card">
                        <div class="card-image"><img src="${url}" alt=""></div>
                        <div class="card-info">
                        <div class="info">
                            <h3>${name}</h3>
                            
                            <button class="button button1" onclick="call_page('${indexTree}');">ข้อมูลเพิ่มเติม</button>
                           
                            </div>
                        </div>
                    </div>
                `
        }
        htmls += `</div> <div class="pagination"> 
        </div>`
        htmls += `</div>`
        $("#main").html(htmls)
    }
}

var api_url = url.url_backend;
var url_front = url.url_frontend;

//url link api back-end from hosting
const url_endpoint = api_url + '/tree_data/all_data/flower'
xhr.open('GET', url_endpoint, true);
xhr.setRequestHeader('Accept', 'application/json');
xhr.send(null);

function call_page(index){
    localStorage.clear();
    localStorage.setItem('indexTree', index);
    window.open(url_front + '/template/all_data/data_page.html');
}

