var xhr = new XMLHttpRequest();
xhr.open('GET', 'navbar2.html', true);
xhr.onreadystatechange = function() {
    if (this.readyState !== 4) return;
    if (this.status !== 200) return; // or handle error
    document.getElementById('navbar-setup').innerHTML = this.responseText;
};
xhr.send();
