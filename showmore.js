function showMore() {
    var hiddenElements = document.querySelectorAll('.hidden');
    for (var i = 0; i < hiddenElements.length; i++) {
        hiddenElements[i].style.display = 'block';
    }
}
