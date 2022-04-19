jQuery(document).ready(function() {
$(".video").click(function() {
$.fancybox({
'padding' : 0,
'autoScale' : false,
'transitionIn' : '950',
'transitionOut' : '534',
'title' : this.title,
'width' : auto,
'height' : auto,
'href' : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
'type' : 'swf',
'swf' : {
'wmode' : 'transparent',
'allowfullscreen' : 'true'
}
});
return false;
});
});
