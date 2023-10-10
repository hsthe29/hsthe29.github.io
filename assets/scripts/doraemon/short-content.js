const screenWidth = window.innerWidth;
const initWidth = 191;
const initHeight = 300;
const maxWidth = 0.9 * screenWidth;
const minWidth = 0.25 * screenWidth;
let width = 0.45 * screenWidth;
let height = initHeight * width / initWidth;

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
            image.style.width = `${width}px`;
            image.style.height = `${height}px`;
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

function resize(deltaWidth) {
    let oldPosition = window.pageYOffset || document.documentElement.scrollTop;
    let numPages = parseInt(oldPosition / (height + 10));

    let newWidth = width + deltaWidth;
    if (newWidth > maxWidth || newWidth < minWidth)
        return;
    let newHeight = newWidth * height / width;

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

function zoom_in() {
    resize(10);
}
function zoom_out() {
    resize(-10);
}

function openNav() {
    document.getElementById('open-chapter-nav').style.display = 'none';
    document.getElementById("chapter-nav").style.width = "100%";
    document.body.classList.add('no-scroll');
}

function closeNav() {
    document.getElementById('open-chapter-nav').style.display = 'block';
    document.getElementById("chapter-nav").style.width = "0%";
    document.body.classList.remove('no-scroll');
}

function loadResource() {
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
    document.getElementById('zoom-in').addEventListener('mousedown', function() {
        zoomInterval = setInterval(zoom_in, 20); // Thực hiện hàm zoomIn mỗi 100ms
    });

    document.getElementById('zoom-out').addEventListener('mousedown', function() {
        zoomInterval = setInterval(zoom_out, 20); // Thực hiện hàm zoomOut mỗi 100ms
    });

    document.getElementById('zoom-in').addEventListener('mouseup', function() {
        clearInterval(zoomInterval); // Dừng lại khi người dùng ngừng nhấn nút
    });

    document.getElementById('zoom-out').addEventListener('mouseup', function() {
        clearInterval(zoomInterval); // Dừng lại khi người dùng ngừng nhấn nút
    });

    document.getElementById('zoom-in').addEventListener('mouseleave', function() {
        clearInterval(zoomInterval); // Dừng lại khi con trỏ chuột rời khỏi nút
    });

    document.getElementById('zoom-out').addEventListener('mouseleave', function() {
        clearInterval(zoomInterval); // Dừng lại khi con trỏ chuột rời khỏi nút
    });
}
