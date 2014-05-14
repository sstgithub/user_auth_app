$(function() {

	$.fn.validateMe = function() {
    var $form = this;
    	 $inputs = $form.find('input.more');
    var filters = {
        name: {
            regex: /^[A-Za-z]{3,}$/,
            error: 'Must be at least 3 characters long, and must only contain letters.'
        },
        password: {
            regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
            error: 'Must be at least 6 characters long, and contain at least one number, one uppercase and one lowercase letter.'
        },
        email : {
	        regex : /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/,
	        error : 'Must be a valid e-mail address (example@example.com)'
    		}
        // add password confirmation same as password filter later
    };
    var validate = function(classes, value) {
        var isValid = true,
            error = '';
        if (!value && /required/.test(classes)) {
            error = 'This field is required';
            isValid = false;
        } 
        else {
            classes = classes.split(/\s/);
            $.each(classes, function(i, k){
                if (filters[k]) {
                    if (value && !filters[k].regex.test(value)) {
                        isValid = false;
                        error = filters[k].error;
                    }
                }
            });
        }
        return {
            isValid: isValid,
            error: error
        }
    };
    var printError = function($input) {
        var classes = $input.attr('class'),
            value = $input.val(),
            test = validate(classes, value),
            $error = $('<span class="error">' + test.error + '</span>'),
            $icon = $('<i class="error-icon"></i>');

        $input.removeClass('invalid').siblings('.error, .error-icon').remove();

        if (!test.isValid) {
            $input.addClass('invalid');
            $error.add($icon).insertAfter($input);
            $icon.hover(function() {
                $(this).siblings('.error').toggle();
            });
        }
    };
    $inputs.each(function() {
        if ($(this).is('.required')) {
            printError($(this));
        }
    });
    $inputs.keyup(function() {
        printError($(this));
    });
    $form.submit(function(e) {
        if ($form.find('input.invalid').length) {
            e.preventDefault();
            alert('The form does not validate! Check again...');
        }
    });
    return this;
	};

$('form').validateMe();

});
