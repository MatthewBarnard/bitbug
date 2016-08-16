
$(document).ready(function () {
    //$('p, div, input, label').mouseenter(function() {
    //    $(this).addClass('bitbig-hovered-element')
    //});

    $(document).click(function(e) {
        dom.show_create_issue($(e.target));
        dom.add_marker($(e.target))
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            dom.hide_create_issue();
            dom.undo_previous();
        }
    });
})