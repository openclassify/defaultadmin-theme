if (window.innerWidth <= 768) {
    $("#wrapper").addClass('toggled-2');
}
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass('toggled');
});
$("#menu-toggle-2").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass('toggled-2');
    $(".top-bar").toggleClass('wide-top-bar');
    $("#main, #footer").toggleClass('wide-content');
});

function flexExpended(class_name) {
    $(class_name).on('click', function () {
        if ($(this).attr('aria-expanded') === "false") {
            let opened_element = $(class_name + '[aria-expanded="true"]');

            opened_element.attr('aria-expanded', false);
            opened_element.addClass('collapsed');

            let target = opened_element.data('target');

            $(target).removeClass('in');
            $(target).attr('aria-expanded', false);
        }
    });
}

flexExpended('.sidebar-addon-link');
flexExpended('.sidebar-group-link');