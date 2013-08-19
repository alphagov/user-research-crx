$( function() {

    var ulTag = "<ul class=\"social-wrapper\"><li class=\"social email\"><a  href=\"#\"onclick=\"window.open('mailto:?subject='+encodeURIComponent(document.title)+'&body='+encodeURIComponent(location.href),'email-share-dialog','width=800,height=600');return false;\"><span>Send by Email</span></a></li><li class=\"social facebook\"><a  href=\"#\"onclick=\"window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href),'facebook-share-dialog','width=626,height=436');return false;\"><span>Share on Facebook</span></a></li><li class=\"social twitter\"><a  href=\"#\"onclick=\"window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(document.title)+'&url='+encodeURIComponent(location.href),'twitter-share-dialog','width=626,height=436');return false;\"><span>Share on Twitter</span></a></li></ul>";

    $("div#wrapper.guide main#content.group.multi-page div.article-container.group aside").append(ulTag);
    $("#whitehall-wrapper .document-page .meta").append(ulTag);
    $("div#wrapper.answer main#content div.article-container.group article.group div.inner").append(ulTag);

});
