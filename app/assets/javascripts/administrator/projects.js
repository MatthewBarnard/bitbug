// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on('turbolinks:load', function () {
    //alert('s')
    $('#projects_table').DataTable();
    $('[data-toggle="tooltip"]').tooltip();

});