var editor = CodeMirror(document.getElementById("codeeditor"), {
    lineNumbers: true,
    value: languages[0].defaultCode,
    mode:  languages[0].mode,
    tabSize: 4,
    indentUnit: 4,
    smartIndent: true,
    indentWithTabs: true
});
$(document).ready(function() {
    $('#lang').change(function () {
        lang = $('#lang').val();
        if (lang != undefined && lang != null && lang != '' && languages[lang] != undefined) {
            languages[prevLang].defaultCode = editor.getValue();
            editor.setOption('mode', languages[lang].mode);
            editor.setOption('value', languages[lang].defaultCode);
            prevLang = lang;
        }
    });

    $('#theme').change(function () {
        theme = $('#theme').val();
        if (theme != undefined && theme != null && theme != '' && themes[theme] != undefined) {
            editor.setOption('theme', themes[theme].value);
        }
    });

    $("#run").click(function () {
        $('html, body').animate({
            scrollTop: $("#target").offset().top
        }, 2000);
    });


    $(function(){
        var navMain = $(".navbar-collapse"); // avoid dependency on #id
        // "a:not([data-toggle])" - to avoid issues caused
        // when you have dropdown inside navbar
        navMain.on("change", "div", null, function () {
            navMain.collapse('hide');
        });
    });
});