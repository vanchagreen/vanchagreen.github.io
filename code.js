window.onload = function () {
  var logo = document.getElementsByClassName('logo')[0];
  logo.style.display = 'none';
  window.onmousemove = function(e) {
    logo.style.display = 'block';
    logo.style.top = e.clientY + 'px';
    logo.style.left = e.clientX + 'px';
  }
}