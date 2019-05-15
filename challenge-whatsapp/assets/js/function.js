$('path, circle').click(function (e) {
    e.preventDefault();

    var t = this.getBoundingClientRect().top,
        l = this.getBoundingClientRect().left;

    $tooltip.css({
        "top": t + "px"
        "left": l + "px"
    }).show();
});