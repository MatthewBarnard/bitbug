var dom = {}
var  counter = 0;
var previous_action = null

dom.add_marker = function (element) {
    element.attr('bitbug_picker_id',counter++)
    previous_action =  element;
    element.addClass('bitbig-hovered-element')
}

dom.show_create_issue = function (element) {
    selected_has_attr = element.attr('bitbug_picker_id')

    if (typeof selected_has_attr !== typeof undefined && selected_has_attr !== false){
        dom.hide_create_issue();
    } else {
        $('body').append(html.load_create_issue());
        $('#bitbug_create_issue').addClass('animated fadeInRight')
    }

}

dom.hide_create_issue = function () {
    $('#bitbug_create_issue').removeClass('animated fadeInRight')
    $('#bitbug_create_issue').addClass('animated fadeOutRight')
    setTimeout(function () {
        $('#bitbug_create_issue').remove();
    }, 700);

}

dom.undo_previous = function () {
    previous_action.removeAttr('bitbug_picker_id')
    previous_action.removeClass('bitbig-hovered-element')
}