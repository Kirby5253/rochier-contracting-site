$(window).resize(function () {
	navBoxBreakpoint();
});

$(".nav-item").on("click", function () {
	$(".navbar-collapse").removeClass("show");
});
