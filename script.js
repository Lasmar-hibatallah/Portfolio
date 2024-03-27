let tablinks = document.getElementsByClassName("tab-links");
let tabconts = document.getElementsByClassName("tab-conts");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("act-link");
    }

    for(tabcont of tabconts) {
        tabcont.classList.remove("act-tab");
    }

    event.currentTarget.classList.add("act-link");

    document.getElementById(tabname).classList.add("act-tab");
}

document.addEventListener('DOMContentLoaded', function() {
    const viewMoreButton = document.getElementById('view-more');
    const hideButton = document.getElementById('hide');
    const secondRow = document.querySelector('.work-list-2');

    viewMoreButton.addEventListener('click', function() {
        secondRow.classList.add('show-row');
        hideButton.style.display = 'inline-block';
        viewMoreButton.style.display = 'none';
    });

    hideButton.addEventListener('click', function() {
        secondRow.classList.remove('show-row');
        hideButton.style.display = 'none';
        viewMoreButton.style.display = 'inline-block';
    });
});