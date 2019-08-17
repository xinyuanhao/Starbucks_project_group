$("a1.filters").click(function () {
    $("#nav").attr("style", "z-index:1006");
    $("#overlay-locator-filters").addClass("overlay-show").attr("style","z-index:1008");
})
$("#map-body #overlay-locator-filters>.container>header>.icon.close").click(function () {
    $("#nav").removeAttr("style");
    $("#overlay-locator-filters").removeClass("overlay-show").removeAttr("style");
})
$("#screen").on("click", "a", function () {
    var $tar = $(this);
    $tar.toggleClass("active");
    if ($("#screen>a").hasClass("active")) {
        $("#screen>.header>button").removeClass("my-d-none");
        $("#filter-apply-button").removeClass("my-opacity");
    } else {
        $("#screen>.header>button").addClass("my-d-none")
        $("#filter-apply-button").addClass("my-opacity")
    }
})
$("#screen>.header>button").click(function () {
    $("#screen>a").removeClass("active");
    $("#screen>.header>button").addClass("my-d-none")
    $("#filter-apply-button").addClass("my-opacity")
})
$("#mors-mobile").click(function(){
    $("#nav").attr("style", "z-index:1006");
    $("#nav-overlay").attr("style", "z-index:1008");
})
$("#nav-overlay .header .close").click(function () {
    $("#nav").removeAttr("style");
    $("#nav-overlay").removeAttr("style");
})
