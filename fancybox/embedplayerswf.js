jQuery(document).ready(function() {
$(".videoswf").click(function() {
$.fancybox({
'padding' : 0,
'autoScale' : false,
'transitionIn' : 'none',
'transitionOut' : 'none',
'title' : this.title,
'width' : 370,
'height' : 24,
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
