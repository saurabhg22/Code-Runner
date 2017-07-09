angular.module('mainController', [])

.controller('mainCtrl', function($rootScope, $timeout, $http) {
    var app = this;
    app.error = false;
    app.loaded = false;
    app.languages = languages;
    app.themes = themes;
    app.currentThemeIndex = "0";
    app.langIndex = "0";
    app.cmsg = "";
    app.output = "";
    app.compiling = false;
    app.input = "";



    app.run = function () {
        app.compiling = true;
        app.cmsg = "";
        app.output = "";
        code = {
            source: editor.getValue(),
            testcases: "['" + app.input + "']",
            api_key: 'hackerrank|321272-1482|f581bd9edba11acd361c6365880918eb4a440b73',
            lang: app.languages[app.langIndex].code,

        }
        $http.post('/run', code).then(function(data){
            data = data.data;
            if(data.errno == 'ENOENT'){
                app.cmsg = "Please check your internet connection.";
                app.error = true;
            }
            else if(data.errors){
                if(data.errors.source){
                    app.cmsg = "Source code can not be empty.";
                }else{
                    app.cmsg = "Something went wrong.";
                }
                app.error = true;
            }
            else if(data.message != null && data.message != undefined){
                if(data.message[0] == "Success"){
                    app.output = decodeURIComponent(escape(data.stdout[0]));
                    app.error = false;
                }
                else{
                    app.cmsg = decodeURIComponent(escape(data.stderr[0]));
                    app.error = true;
                }
            }
            else if(data.compilemessage != "" && data.compilemessage != null && data.compilemessage != undefined){
                app.cmsg = decodeURIComponent(escape(data.compilemessage));
                app.error = true;
            }
            else{
                app.error = true;
                app.cmsg = "Something went wrong.";
            }
            app.compiling = false;
        });
    }








    app.loaded = true;
    runner = document.getElementsByClassName('runner');
    runner[0].style.visibility = 'visible';
});
