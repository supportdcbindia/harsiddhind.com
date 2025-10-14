jQuery(document).ready(function() {

     jQuery.validator.addMethod("namenew", function (value, element) {
        if (/^[^-\s][a-zA-Z_\s-]+$/.test(value)) {
            return true;
        } else {
            return false;
        };
    }, "Please Enter atleast 2 words");

     jQuery.validator.addMethod("email", function (value, element) {
        if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(value)) {
            return true;
        } else {
            return false;
        };
    }, "Please Enter Valid Email");

    jQuery.validator.addMethod("number", function (value, element) {
        if (/^(\+\d{1,3}[- ]?)?\d{8,15}$/.test(value)) {
            return true;
        } else {
            return false;
        };
    }, "Please Enter Valid Mobile Number");
  




     jQuery('.form1').validate({
    rules: {
      name: {
        required: true,
        namenew: true,
      },
      company_name: {
        required: true,
        namenew: true,
      },
      email: {
        required: true,
        email:true,
      },
      country: {
        required: true,
      },
      city: {
        required: true,
      },
      code: {
        required: true,
        
      },
      number: {
        required: true,
        number: true,
      },
      message: {
        required: true,
        
      },
      captcha: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      company_name: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      email: {
        required: 'This Filed is required',
        email: 'Please Enter Valid Email Id',
      },
      country: {
        required: 'This Filed is required',
      },
      city: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      code: {
        required: 'This Filed is required',
      },
      number: {
        required: 'This Filed is required',
        number: 'Please Enter Valid Mobile Number',
      },
      message: {
        required: 'This Filed is required',
        
      },
      captcha: {
        required: 'This Filed is required',
      },
    },

    submitHandler: function(form) { // <- pass 'form' argument in
            jQuery(".submit").val("Please Wait...").attr("disabled", true);
            form.submit(); // <- use 'form' argument here.
        },
    
    highlight: function(element, errorClass, validClass) { 
      jQuery(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-ok').addClass('glyphicon-remove');
      jQuery(element).addClass(errorClass).removeClass(validClass);
      jQuery(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function(element) {
      jQuery(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-remove').addClass('glyphicon-ok');
   element.closest('.form-group').removeClass('has-error').addClass('has-success');
      jQuery(element).remove();
    }
  });

    jQuery('.form2').validate({
    rules: {
      name: {
        required: true,
        namenew: true,
      },
      company_name: {
        required: true,
        namenew: true,
      },
      email: {
        required: true,
        email:true,
      },
      country: {
        required: true,
      },
      city: {
        required: true,
      },
      code: {
        required: true,
        
      },
      number: {
        required: true,
        number: true,
      },
      message: {
        required: true,
        
      },
      captcha: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      company_name: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      email: {
        required: 'This Filed is required',
        email: 'Please Enter Valid Email Id',
      },
      country: {
        required: 'This Filed is required',
      },
      city: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      code: {
        required: 'This Filed is required',
      },
      number: {
        required: 'This Filed is required',
        number: 'Please Enter Valid Mobile Number',
      },
      message: {
        required: 'This Filed is required',
        
      },
      captcha: {
        required: 'This Filed is required',
      },
    },

    submitHandler: function(form) { // <- pass 'form' argument in
            jQuery(".submit").val("Please Wait...").attr("disabled", true);
            form.submit(); // <- use 'form' argument here.
        },
    
    highlight: function(element, errorClass, validClass) { 
      jQuery(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-ok').addClass('glyphicon-remove');
      jQuery(element).addClass(errorClass).removeClass(validClass);
      jQuery(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function(element) {
      jQuery(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-remove').addClass('glyphicon-ok');
   element.closest('.form-group').removeClass('has-error').addClass('has-success');
      jQuery(element).remove();
    }
  });

     jQuery('.form3').validate({
    rules: {
      name: {
        required: true,
        namenew: true,
      },
      company_name: {
        required: true,
        namenew: true,
      },
      email: {
        required: true,
        email:true,
      },
      country: {
        required: true,
      },
      city: {
        required: true,
      },
      code: {
        required: true,
        
      },
      number: {
        required: true,
        number: true,
      },
      message: {
        required: true,
        
      },
      captcha: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      company_name: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      email: {
        required: 'This Filed is required',
        email: 'Please Enter Valid Email Id',
      },
      country: {
        required: 'This Filed is required',
      },
      city: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      code: {
        required: 'This Filed is required',
      },
      number: {
        required: 'This Filed is required',
        number: 'Please Enter Valid Mobile Number',
      },
      message: {
        required: 'This Filed is required',
        
      },
      captcha: {
        required: 'This Filed is required',
      },
    },

    submitHandler: function(form) { // <- pass 'form' argument in
            jQuery(".submit").val("Please Wait...").attr("disabled", true);
            form.submit(); // <- use 'form' argument here.
        },
    
    highlight: function(element, errorClass, validClass) { 
      jQuery(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-ok').addClass('glyphicon-remove');
      jQuery(element).addClass(errorClass).removeClass(validClass);
      jQuery(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function(element) {
      jQuery(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-remove').addClass('glyphicon-ok');
   element.closest('.form-group').removeClass('has-error').addClass('has-success');
      jQuery(element).remove();
    }
  });

     jQuery('.form4').validate({
    rules: {
      name: {
        required: true,
        namenew: true,
      },
      company_name: {
        required: true,
        namenew: true,
      },
      email: {
        required: true,
        email:true,
      },
      country: {
        required: true,
      },
      city: {
        required: true,
      },
      code: {
        required: true,
        
      },
      number: {
        required: true,
        number: true,
      },
      message: {
        required: true,
        
      },
      captcha: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      company_name: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      email: {
        required: 'This Filed is required',
        email: 'Please Enter Valid Email Id',
      },
      country: {
        required: 'This Filed is required',
      },
      city: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      code: {
        required: 'This Filed is required',
      },
      number: {
        required: 'This Filed is required',
        number: 'Please Enter Valid Mobile Number',
      },
      message: {
        required: 'This Filed is required',
        
      },
      captcha: {
        required: 'This Filed is required',
      },
    },

    submitHandler: function(form) { // <- pass 'form' argument in
            jQuery(".submit").val("Please Wait...").attr("disabled", true);
            form.submit(); // <- use 'form' argument here.
        },
    
    highlight: function(element, errorClass, validClass) { 
      jQuery(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-ok').addClass('glyphicon-remove');
      jQuery(element).addClass(errorClass).removeClass(validClass);
      jQuery(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function(element) {
      jQuery(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-remove').addClass('glyphicon-ok');
   element.closest('.form-group').removeClass('has-error').addClass('has-success');
      jQuery(element).remove();
    }
  });

       jQuery('.form5').validate({
    rules: {
      name: {
        required: true,
        namenew: true,
      },
      company_name: {
        required: true,
        namenew: true,
      },
      email: {
        required: true,
        email:true,
      },
      country: {
        required: true,
      },
      city: {
        required: true,
      },
      code: {
        required: true,
        
      },
      number: {
        required: true,
        number: true,
      },
      message: {
        required: true,
        
      },
      captcha: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      company_name: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      email: {
        required: 'This Filed is required',
        email: 'Please Enter Valid Email Id',
      },
      country: {
        required: 'This Filed is required',
      },
      city: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      code: {
        required: 'This Filed is required',
      },
      number: {
        required: 'This Filed is required',
        number: 'Please Enter Valid Mobile Number',
      },
      message: {
        required: 'This Filed is required',
        
      },
      captcha: {
        required: 'This Filed is required',
      },
    },

    submitHandler: function(form) { // <- pass 'form' argument in
            jQuery(".submit").val("Please Wait...").attr("disabled", true);
            form.submit(); // <- use 'form' argument here.
        },
    
    highlight: function(element, errorClass, validClass) { 
      jQuery(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-ok').addClass('glyphicon-remove');
      jQuery(element).addClass(errorClass).removeClass(validClass);
      jQuery(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function(element) {
      jQuery(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-remove').addClass('glyphicon-ok');
   element.closest('.form-group').removeClass('has-error').addClass('has-success');
      jQuery(element).remove();
    }
  });

       jQuery('.form6').validate({
    rules: {
      name: {
        required: true,
        namenew: true,
      },
      company_name: {
        required: true,
        namenew: true,
      },
      email: {
        required: true,
        email:true,
      },
      country: {
        required: true,
      },
      city: {
        required: true,
      },
      code: {
        required: true,
        
      },
      number: {
        required: true,
        number: true,
      },
      message: {
        required: true,
        
      },
      captcha: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      company_name: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      email: {
        required: 'This Filed is required',
        email: 'Please Enter Valid Email Id',
      },
      country: {
        required: 'This Filed is required',
      },
      city: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      code: {
        required: 'This Filed is required',
      },
      number: {
        required: 'This Filed is required',
        number: 'Please Enter Valid Mobile Number',
      },
      message: {
        required: 'This Filed is required',
        
      },
      captcha: {
        required: 'This Filed is required',
      },
    },

    submitHandler: function(form) { // <- pass 'form' argument in
            jQuery(".submit").val("Please Wait...").attr("disabled", true);
            form.submit(); // <- use 'form' argument here.
        },
    
    highlight: function(element, errorClass, validClass) { 
      jQuery(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-ok').addClass('glyphicon-remove');
      jQuery(element).addClass(errorClass).removeClass(validClass);
      jQuery(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function(element) {
      jQuery(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-remove').addClass('glyphicon-ok');
   element.closest('.form-group').removeClass('has-error').addClass('has-success');
      jQuery(element).remove();
    }
  });

  jQuery('.form7').validate({
    rules: {
      name: {
        required: true,
        namenew: true,
      },
      company_name: {
        required: true,
        namenew: true,
      },
      email: {
        required: true,
        email:true,
      },
      country: {
        required: true,
      },
      city: {
        required: true,
      },
      code: {
        required: true,
        
      },
      number: {
        required: true,
        number: true,
      },
      message: {
        required: true,
        
      },
      captcha: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      company_name: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      email: {
        required: 'This Filed is required',
        email: 'Please Enter Valid Email Id',
      },
      country: {
        required: 'This Filed is required',
      },
      city: {
        required: 'This Filed is required',
        namenew: 'Please Enter atleast 2 words',
      },
      code: {
        required: 'This Filed is required',
      },
      number: {
        required: 'This Filed is required',
        number: 'Please Enter Valid Mobile Number',
      },
      message: {
        required: 'This Filed is required',
        
      },
      captcha: {
        required: 'This Filed is required',
      },
    },

    submitHandler: function(form) { // <- pass 'form' argument in
            jQuery(".submit").val("Please Wait...").attr("disabled", true);
            form.submit(); // <- use 'form' argument here.
        },
    
    highlight: function(element, errorClass, validClass) { 
      jQuery(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-ok').addClass('glyphicon-remove');
      jQuery(element).addClass(errorClass).removeClass(validClass);
      jQuery(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function(element) {
      jQuery(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-remove').addClass('glyphicon-ok');
   element.closest('.form-group').removeClass('has-error').addClass('has-success');
      jQuery(element).remove();
    }
  });

});

