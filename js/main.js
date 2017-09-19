$('#name').focus();
$('.basic-info').append('<input type="text" id="other-title" placeholder="Your Job Role" name="other-title">');
$('#other-title').hide();

$('#title').change(function() {
  if ($('#title option:selected').val() === "other") {
    $('#other-title').show();
  } else {
    $('#other-title').hide();
  }
});

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
