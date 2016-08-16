var html = {}
html.load_create_issue = function () {
    return '<div id="bitbug_create_issue" class="bitbug_create_issue">' +
        '<img src="https://cdn2.iconfinder.com/data/icons/bitsies/128/EditDocument-32.png" /> Create Issue' +
        '<input type="text" class="form-control" placeholder="Issue Title..." />' +
        '<textarea class="form-control" placeholder="Give a detailed description of the issue..." />' +
        '<select class="form-control">' +
        '<option value="0">Assignee...</option>' +
        '</select>' +
        '<button class="btn btn-primary"><i class="fa fa-check"></i>Create Issue</button>' +
        '' +
        '' +
        '' +
        '</div>'

}