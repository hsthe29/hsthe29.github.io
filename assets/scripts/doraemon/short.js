function navigate(route) {
    window.location.href = route;
}

const API = "../../data/short_vols.json"

function loadResource() {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let type = urlParams.get("type");
    if (type == "forward") {
        document.title = `Doraemon: 45 tập truyện ngắn đọc xuôi`;
        fetch(API)
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    let cell = document.getElementById(`cell-${i+1}`);
                    let volName = cell.querySelector("p");
                    let img = cell.querySelector("img");
                    volName.innerText = data[i]["name"];
                    img.href = data[i]["href"];
                    img.src = `../../assets/images/short/vol_${i + 1}.png`;
                    img.setAttribute('onclick', "navigate(this.href)");
                }
            })
            .catch((e) => console.error(e));
    }
    else if (type == "backward") {
        document.title = `Doraemon: 45 tập truyện ngắn đọc ngược`;
    }
}
