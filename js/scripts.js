/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/

// Load Header Component
fetch('components/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data)
    .catch(error => console.log('Error loading header:', error));

// Load Footer Component
fetch('components/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data)
    .catch(error => console.log('Error loading footer:', error));