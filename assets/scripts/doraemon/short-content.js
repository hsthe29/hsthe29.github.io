const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const reservedWidth = 191;
const reservedHeight = 300;
const maxWidth = 0.9 * screenWidth;
const minWidth = 0.25 * screenWidth;
let baseWidth = 0.45 * screenWidth;
let baseHeight = reservedHeight * baseWidth / reservedWidth;
let width = baseWidth;
let height = baseHeight;

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let vol = urlParams.get("vol");
let type = urlParams.get("type");
document.title = `Doraemon Vol ${vol}`;

const API = `https://script.google.com/macros/s/AKfycbx3jIrLvHGdThMr3zxMjqlY6djw4DHxfwR8sRBzdZy1oU3FHHVlB71eSmx7jF4uEWQG/exec?len=short&type=${type}&vol=${vol}`;
const driveURL = "https://drive.google.com/uc?id=";

function openGitHub() {
    window.location.href = "https://github.com/hsthe29";
}

function load_images(totalPages, chapterPages) {
    let fragmentID = 0;
    const content_list = document.getElementById("content-list");
    fetch(API + "&pages=" + encodeURIComponent(totalPages)).then(response => response.json())
    .then(data => {
        let ids = data.ids;
        for (let i = 0; i < totalPages; i++) {
            const image = document.createElement("img");
            image.setAttribute("alt", `page-${i + 1}.jpg`);
            if (i == chapterPages[fragmentID] - 1) {
                image.setAttribute("id", `chapter-${fragmentID + 1}`);
                fragmentID++;
            }
            image.src = driveURL + ids[i];
            image.style.width = `${baseWidth}px`;
            image.style.height = `${baseHeight}px`;
            content_list.appendChild(image);
        }
    }).catch(error => console.error('Error:', error));
    
}
function loadData() {
    fetch(`../../data/short-${type}-vol-${vol}.json`)
        .then(response => response.json())
        .then(data => {
            let totalPages = data.pages;
            let chapterList = data.chapter;
            let chapterPages = chapterList.map(obj => parseInt(Object.keys(obj)[0]));
            let chapters = chapterList.map(obj => Object.values(obj)[0]);
            const link_container = document.getElementById("chapter-list");
            for (let i = 0; i < chapters.length; i++) {
                const link = document.createElement("a");
                link.setAttribute("href", `#chapter-${i + 1}`);
                link.setAttribute("onclick", "closeNav()");
                link.text = `Chapter ${i + 1}: ${chapters[i]}`
                link_container.appendChild(link);
            }
            const link = document.createElement("a");
            link.text = " "
            link_container.appendChild(link);
            load_images(totalPages, chapterPages);
        })
        .catch(error => console.error('Error:', error));
}

function zoom(percent) {
    let ratio = percent / 100;
    let oldPosition = window.pageYOffset || document.documentElement.scrollTop;
    let numPages = parseInt(oldPosition / (height + 10));

    let newWidth = baseWidth*ratio;
    
    let newHeight = baseHeight*ratio;

    var images = document.getElementById("content-list").getElementsByTagName('img');

    for (var i = 0; i < images.length; i++) {
        images[i].style.width = `${newWidth}px`;
        images[i].style.height = `${newHeight}px`;
        if (i < numPages) {
            let newPosition = oldPosition - height + newHeight;
            window.scrollTo(0, newPosition);
            oldPosition = newPosition;
        }
    }
    width = newWidth;
    height = newHeight;
}

function openNav() {
    document.getElementById('open-chapter-nav').style.display = 'none';
    document.getElementById("chapter-nav").style.width = "100%";
    document.body.classList.add('no-scroll');
    highlightChapter();
}

function closeNav() {
    document.getElementById('open-chapter-nav').style.display = 'block';
    document.getElementById("chapter-nav").style.width = "0%";
    document.body.classList.remove('no-scroll');
}

function isOverHalf(element_id) {
    let rect = document.getElementById(element_id).getBoundingClientRect();
    return rect.top < 0.5*screenHeight;
}

function highlightChapter() {
    let chapterOrder = -1;
    let parent = document.getElementById("chapter-list");
    let children = Array.from(parent.children);
    for(let i = 1; i < children.length; i++) {
        if (isOverHalf("chapter-" + i)) {
            chapterOrder += 1;
        }
        let metaChapter = children[i - 1];
        metaChapter.text = metaChapter.text.replace("➤ ", "");
        metaChapter.style.color = "#ffffff";
    }
    if (chapterOrder < 0) return;
    let metaChapter = children[chapterOrder];
    metaChapter.text = "➤ " + metaChapter.text;
    metaChapter.style.color = "#ffd500";
}

function loadResource() {
    document.getElementById('zoomSlider').addEventListener('input', function(e) {
    let zoomValue = e.target.value;
    zoom(parseInt(zoomValue));
    document.getElementById('zoomValue').innerText = zoomValue + "%";});

    document.getElementById('vol-list').setAttribute("href", `../short/?type=${type}`);
    document.getElementById('volume-name').setAttribute("value", ` Doraemon Vol.${vol}`);
    if (vol > 1) {
        document.getElementById('previous-vol').setAttribute(
            "onclick",
            `location.href="content.html?type=${type}&vol=${parseInt(vol) - 1}"`);
    }
    if (vol < 45) {
        document.getElementById('next-vol').setAttribute(
            "onclick",
            `location.href="content.html?type=${type}&vol=${parseInt(vol) + 1}"`);
    }
    loadData(vol);
}
