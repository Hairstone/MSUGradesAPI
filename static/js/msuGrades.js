const msuGrades = function(){
    console.log('here');
    jQuery('.hello').css('color', 'white');

    var code = "jQuery.ajax({\n" +
        "    url: https://msu-grades-api.herokuapp.com/grades/CSE_325,\n" +
        "    method: 'GET'," +
        "    dataType: 'text'," +
        "    success: function (data) {\n" +
        "        console.log(data) // The data received from the api\n" +
        "    },\n" +
        "    error: function(xhr, status, error){\n" +
        "        console.log('error');\n" +
        "    }\n" +
        "});";
    console.log(here);
    jQuery('#ajaxrequest').html(code);
    jQuery()
};


function Interactive() {
    var gradeButton = jQuery('#getGrades');

    var that = this;
    that.installListener(gradeButton);
    // jQuery('#results').hide();

};

Interactive.prototype.installListener = function(gradeButton){
    var that = this;
    gradeButton.click(function (event) {
        event.preventDefault();
        console.log('Hello from Interactive');
        that.communicate();
    });
};

Interactive.prototype.communicate = function () {

    var that = this;
    var course = jQuery('#courseName').val();
    var courseNumber = jQuery('#courseNumber').val();
    var link = 'https://msu-grades-api.herokuapp.com/grades/' + course +'_' + courseNumber;
    // https://cors-anywhere.herokuapp.com/
    // msu-grades-api.herokuapp.com

    console.log('here');
    // Make ajax call here
    jQuery.ajax({
        url: link,
        method: "GET",
        dataType: 'text',
        success: function (data) {
            // debugger;
            jQuery('#apiresults').html(data);
            console.log(data)
        },
        error: function(xhr, status, error){
            console.log('error');
        }
    });
    console.log('here');
};

const parse_json = function(json) {
    try {
        var data = JSON.parse(json);
    } catch(err) {
        throw "JSON parse error: " + json;
    }

    return data;
}