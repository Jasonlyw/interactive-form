// Set focus to the first text field
$('#name').focus();

// Job role section
$('.basic-info').append('<input type="text" id="other-title" placeholder="Your Job Role" name="other-title">');
$('#other-title').hide();

$('#title').change(function() {
  if ($('#title option:selected').val() === "other") {
    $('#other-title').show();
  } else {
    $('#other-title').hide();
  }
});

// T-shirt info section
$('#colors-js-puns').hide();
var optionSelected = false;
$('#design').change(function() {
  if ($('#design option:selected').val() === "js puns"){
    $('#colors-js-puns').show();
    $('#color').html('<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option><option value="gold">Gold (JS Puns shirt only)</option>');
    optionSelected = true;
    return optionSelected
  } else if ($('#design option:selected').val() === "heart js") {
    $('#colors-js-puns').show();
    $('#color').html('<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option><option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>');
    optionSelected = true;
    return optionSelected;
  } else {
    return optionSelected;
  }
});

// Register for activities section
var all = $('input[name="all"]');
var jsFrameworks = $('input[name="js-frameworks"]');
var jsLibs = $('input[name="js-libs"]');
var express = $('input[name="express"]');
var node = $('input[name="node"]');
var buildTools = $('input[name="build-tools"]');
var npm = $('input[name="npm"]');

var totalCost = 0;
$('.activities').append('<div id="total-cost"></div>');

var updateTotalCost = function(cost) {
  totalCost += cost;
  $('#total-cost')[0].innerHTML = "Total: $" + totalCost;
};

// Main Conference
all.change(function() {
  if ($(this).prop("checked")) {
    updateTotalCost(200);
  } else {
    updateTotalCost(-200);
  }
});

// JS Frameworks Workshop
jsFrameworks.change(function() {
  if ($(this).prop("checked")) {
    express.prop("disabled", true);
    express.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
    $('.unavailable')[0].style.color = "grey";
    updateTotalCost(100);
  } else {
    express.prop("disabled", false);
    express.parent().find('.unavailable').remove();
    updateTotalCost(-100);
  }
});

// JS Libraries Workshop
jsLibs.change(function() {
  if ($(this).prop("checked")) {
    node.prop("disabled", true);
    node.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
    $('.unavailable')[0].style.color = "grey";
    updateTotalCost(100);
  } else {
    node.prop("disabled", false);
    node.parent().find('.unavailable').remove();
    updateTotalCost(-100);
  }
});

// Express Workshop
express.change(function() {
  if ($(this).prop("checked")) {
    jsFrameworks.prop("disabled", true);
    jsFrameworks.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
    $('.unavailable')[0].style.color = "grey";
    updateTotalCost(100);
  } else {
    jsFrameworks.prop("disabled", false);
    jsFrameworks.parent().find('.unavailable').remove();
    updateTotalCost(-100);
  }
});

// Node Workshop
node.change(function() {
  if ($(this).prop("checked")) {
    jsLibs.prop("disabled", true);
    jsLibs.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
    $('.unavailable')[0].style.color = "grey";
    updateTotalCost(100);
  } else {
    jsLibs.prop("disabled", false);
    jsLibs.parent().find('.unavailable').remove();
    updateTotalCost(-100);
  }
});

// Build Tool Workshop
buildTools.change(function() {
  if ($(this).prop("checked")) {
    updateTotalCost(100);
  } else {
    updateTotalCost(-100);
  }
});

// npm Workshop
npm.change(function() {
  if ($(this).prop("checked")) {
    updateTotalCost(100);
  } else {
    updateTotalCost(-100);
  }
});


// Payment Method
$('#paypal, #bitcoin').hide();
$('#payment').val("credit card");

$('#payment').change(function () {
  if ($('#payment option:selected').val() === "credit card") {
    $('#paypal, #bitcoin').hide();
    $('#credit-card').show();
  } else if ($('#payment option:selected').val() === "paypal") {
    $('#credit-card, #bitcoin').hide();
    $('#paypal').show();
  } else {
    $('#credit-card, #paypal').hide();
    $('#bitcoin').show();
  }
});

// Form Validation
$('#name, #mail, #cc-num, #zip, #cvv, #other-field').keyup(function (){
	if ( $(this).val() === "")  {
		$(this).removeClass('success');
		$(this).addClass('error');
	} else {
		$(this).removeClass('error');
		$(this).addClass('success');
	}
});

var email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var creditCard = /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b/g;
var zipCode = /[0-9]{5}/;
var errorMessage = '';

$('form').prepend('<p id="error-message"></p>')
$('#error-message').hide();
$('form').submit(function(e) {
  e.preventDefault();

  if ( $('#name').val() === "" ) {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2> Please ensure you have entered all required fields.";
		$('#name').addClass('error');
	  $('#name').focus();
	} else if ( !email.test($('#mail').val()) ) {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2> Please enter a valid email.";
		$('#mail').focus();
	} else if ( $(".activities > label > input:checked").length === 0 ) {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2> Please select at least one activity.";
		$('.activities').focus();
	} else if ( $("#payment").val() === "select_method" )  {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2>Please select a payment method.";
		$('#payment').focus();
	} else if ( $("#payment").val() === "credit card" && !creditCard.test($("#cc-num").val()) )  {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2>Please enter a valid credit card number.";
		$('#cc-num').focus();
	} else if ( $("#payment").val() === "credit card" && !zipCode.test($("#zip").val()) )  {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2>Please enter your zip code.";
		$('#zip').focus();
	} else if ( $("#payment").val() === "credit card" && $("#cvv").val().length < 3)  {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2>Please enter a 3 digit CVV";
		$('#cvv').focus();
	} else {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "";
		alert("Thanks for registering! We'll see you at the Con!");
	}
	document.getElementById('error-message').innerHTML = errorMessage;
  $('#error-message')[0].style.color = 'red';
  $('#error-message').show();
});
