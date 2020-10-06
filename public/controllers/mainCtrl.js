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
            lang: app.languages[app.langIndex].code,

        }
        $http.post('/run', code).then(function(data){
            data = data.data;
            console.log(data)
            if(data.errno == 'ENOENT'){
                app.cmsg = "Please check your internet connection.";
                app.error = true;
            }
            else if(data.errors){
                if(data.message === 'ArgumentMissingError: source is needed!'){
                    app.cmsg = "Source code can not be empty.";
                }else{
                    app.cmsg = "Something went wrong.";
                }
                app.error = true;
            }
            else if(data.compile_status !== "OK"){
                app.cmsg = data.compile_status;
                app.error = true;
            }
            else if(data.run_status.status === 'AC'){
                app.output = data.run_status.output;
                app.error = false;
            }
            else if(data.run_status.stderr){
                app.cmsg = data.run_status.stderr;
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
