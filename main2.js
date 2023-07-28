window.onload = function () {
    window.scrollTo(0, 0);
};

function closeWindow() {
    window.close();
    navLinks.forEach(function (link) {
        link.classList.remove('active');
    });

}

window.addEventListener('beforeunload', function () {
    // Get all the nav links
    var navLinks = document.querySelectorAll('.site-navigation .main-menu .nav-link');

    // Remove the active class from each nav link
    navLinks.forEach(function (link) {
        link.classList.remove('active');
    });
});

// *********** Remove Selected OPtion ************ //


// *************************** NAV Disabler *************************** //

$(document).ready(function () {
    $('.site-navbar .site-navigation .site-menu>li>a').click(function () {
        // Remove the 'active' class from all navigation items
        $('.site-navbar .site-navigation .site-menu>li>a').removeClass('active');
        // Add the 'active' class to the clicked navigation item
        $(this).addClass('active');
    });
});





// *************** Age calculator in Home Page ***************************** //

$(document).ready(function () {
    // Initialize Flatpickr datepicker
    flatpickr("#dob40", {
        dateFormat: "d/m/Y",
        maxDate: "-2y",
        onClose: function (selectedDates, dateStr, instance) {
            calculateAge(dateStr);
        }
    });

    // Function to calculate age based on date of birth
    function calculateAge(dob) {
        var parts = dob.split('/');
        var selectedDate = new Date(parts[2], parts[1] - 1, parts[0]);
        var today = new Date();
        var age = today.getFullYear() - selectedDate.getFullYear();
        var monthDiff = today.getMonth() - selectedDate.getMonth();
        var dayDiff = today.getDate() - selectedDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        var month = (monthDiff < 0) ? monthDiff + 12 : monthDiff;
        var day = (dayDiff < 0) ? dayDiff + 30 : dayDiff;

        var ageString = age + ' years, ' + month + ' months, and ' + day + ' days old';
        $('#ageof40').val(ageString);
    }
});




$(document).ready(function () {
    // Initialize datepicker
    $('.dtp').datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
    });

    // Calculate age on button click
    $('.calculate-age').click(function () {
        var dob = $('#dob').datepicker('getDate');
        if (dob != null) {
            // Check if the selected date is at least 2 years back from today
            var today = new Date();
            var minDate = new Date(today.getFullYear() - 2, today.getMonth(), today.getDate());
            if (dob < minDate) {
                var age = calculateAge(dob);
                $('#ageResult').text('Your age is: ' + age);
            } else {
                $('#ageResult').text('Please select a date of birth at least 2 years back from today');
            }
        } else {
            $('#ageResult').text('Please select a valid date of birth');
        }
    });


    // Function to calculate age based on date of birth
    // Function to calculate age based on date of birth
    function calculateAge(dob) {
        var today = new Date();
        var birthDate = new Date(dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        var monthDiff = today.getMonth() - birthDate.getMonth();
        var dayDiff = today.getDate() - birthDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
            monthDiff += 12;
        }

        if (dayDiff < 0) {
            var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
            dayDiff += lastMonth.getDate();
            monthDiff--;
        }

        return age + " years, " + monthDiff + " months, and " + dayDiff + " days old.";
    }

});


// ************************************ Instruction page *******************************************//


$(document).ready(function () {

    $('#nextBtn').hide();

    $('#agreeCheckbox').change(function () {

        $('#divSubmit').hide();

        if ($('#agreeCheckbox').is(":checked")) {
            $('#nextBtn').show();
        } else {
            $('#nextBtn').hide();
        }

    })

})



// ********************************************** Secure window for new application from instruction page ********************************//



$(document).ready(function () {

    function showalert() {
        Swal.fire({
            title: 'Good job!',
            text: 'You clicked the button!',
            icon: 'success'
        }).then(function () {
            // Wait for 2 seconds before opening the new window
            setTimeout(function () {
                window.open('Applicationform.html', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
            }); // 2 seconds delay
        });
    }


    // pop after agreed in instruction page

    $('#nextBtn').click(function () {
        // Check if the "Agree" checkbox is checked
        if ($('#agreeCheckbox').is(':checked')) {
            window.open('Applicationform.html', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
            // Call the showalert() function
            // showalert();
        } else {
            Swal.fire({
                title: 'Please agree',
                text: 'Please agree to the terms and conditions.',
                icon: 'warning'
            });
        }
    });

    $('.login-btn').click(function () {
        window.open('https://localhost:44366/auth/login', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
    });

    $('.login-btn').click(function () {
        window.open('https://localhost:44366/auth/login', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
    });

});

$(document).ready(function () {
    $('.newapplication').on('click', function (e) {
        e.preventDefault();
        window.open('instractions.html', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
    });
    $('.applicationlogin').on('click', function (e) {
        e.preventDefault();
        window.open('login.html', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
    });
});


// ******************************* Forgot Password Field validation ********************************//

$(document).ready(function () {
    var ahdar = $("#aadharNumber");
    var ahdarMsg = $("#aadharValid");

    function validAhdar() {
        if (/^\d{12}$/.test(ahdar.val()) && ahdar.val().length === 12) {
            ahdarMsg.html("");
        } else {
            ahdarMsg.html("* Input not valid");
        }
    }

    ahdar.on("input", validAhdar);
});


$(document).ready(function () {
    $("#dateOfBirth").datepicker();
});


// ********************************* Login form ************************************//

function showalert() {
    Swal.fire({
        title: 'Good job!',
        text: 'You clicked the button!',
        icon: 'success'
    });
}

$(document).ready(function () {
    let notyf = new Notyf({
        position: {
            x: 'right',
            y: 'top'
        },
        // Your configuration options here
    });

    $('#login-submit').click(function () {
        // Get the input values
        let username = $('#username').val();
        let password = $('#dob').val();

        // Perform form validation
        if (username.length !== 12 || isNaN(username)) {
            // Display error notification for invalid username
            notyf.error('Invalid username. Please enter a 12-digit number');
            return;
        }

        // Validate password as a date in "dd-mm-yyyy" format
        let pattern = /^\d{2}-\d{2}-\d{4}$/;
        if (!pattern.test(password)) {
            // Display error notification for invalid date password format
            notyf.error('Invalid password format. Please enter a valid date in the dd-mm-yyyy format');
            return;
        }

        // Extract the day, month, and year from the password
        let parts = password.split('-');
        let day = parseInt(parts[0]);
        let month = parseInt(parts[1]) - 1; // Months are zero-based (0-11)
        let year = parseInt(parts[2]);

        // Create a new date object using the parsed values
        let parsedDate = new Date(year, month, day);

        if (isNaN(parsedDate.getTime())) {
            // Display error notification for invalid date password
            notyf.error('Invalid password. Please enter a valid date');
            return;
        }

        // Check if the conditions are met
        if (username.length === 12 && !isNaN(username) && isDesiredDate(parsedDate)) {
            // Display success notification
            showalert();
            notyf.success('Login successful');
            // Redirect to the desired page
            setTimeout(function () {
                window.location.href = 'my_application.html';
            }, 1000);
        } else {
            // Display error notification for wrong credentials
            notyf.error('Wrong credentials');
        }
    });
});

function isDesiredDate(date) {
    // Perform your desired date validation here
    // Example: Only allow dates after a specific year (e.g., 2000)
    return date.getFullYear() > 2000;
}




// ****************************************** newapplication ****************************************** //

$(document).ready(function () {
    // Hide the "Other" div initially
    $("#otherDistrict").hide();

    // Show or hide the "Other" div based on district selection
    $("#district").change(function () {
        if ($(this).val() === "other") {
            $("#otherDistrict").show();
        } else {
            $("#otherDistrict").hide();
            // Clear the input field in the "Other" div
            $("#otherDistrict input[type='text']").val("");
        }
    });
});


$(document).ready(function () {
    // Hide the "Other" div initially
    $("#permanentAddressotherdist").hide();

    // Show or hide the "Other" div based on district selection
    $("#perdistrictper").change(function () {
        if ($(this).val() === "other") {
            $("#permanentAddressotherdist").show();
        } else {
            $("#permanentAddressotherdist").hide();
            $("#permanentAddressotherdist input[type='text']").val("");
        }
    });
});

//   permanent address

$(document).ready(function () {
    // Toggle visibility of the "permanentAddressDiv" based on radio button selection
    $("input[name='addressSame']").change(function () {
        if ($(this).val() === "No") {
            $("#permanentAddressDiv").show();
        } else {
            $("#permanentAddressDiv").hide();
            // Clear all the input fields in the "permanentAddressDiv"
            $("#permanentAddressDiv input[type='text']").val("");
            $("#permanentAddressDiv textarea").val("");
            $("#permanentAddressDiv select").val("");
        }
    });
});



$(document).ready(function () {
    // Initially hide the subcastedate div
    $('#subcastedate').hide();

    // Event handler for the category select element
    $('#category').change(function () {
        var selectedCategory = $(this).val();

        // Check if the selected category is not "General"
        if (selectedCategory !== 'option1') {
            // Show the subcastedate div
            $('#subcastedate').show();
        } else {
            // Hide the subcastedate div
            $('#subcastedate').hide();
            // Clear the input fields in the subcaste and doisubcaste divs
            $('#subcaste').val("");
            $('#doisubcaste').val("");
        }
    });
});




$(document).ready(function () {
    // Initially hide the div elements
    $('#exServicemendate').hide();
    $('#exServicemenService').hide();
    $('#exServicemendischarge').hide();
    $('#exServicemenrendered').hide();
    $('#exServicemenServing').hide();

    // Event handler for the exServicemen radio buttons
    $('input[name="exServicemen"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "yes" is selected
        if (selectedValue === 'yes') {
            // Show the desired div elements
            $('#exServicemendate').show();
            $('#exServicemenService').show();
            // $('#exServicemendischarge').show();
            $('#exServicemenrendered').show();
            $('#exServicemenServing').show();
        } else {
            // Hide the div elements
            $('#exServicemendate').hide();
            $('#exServicemenService').hide();
            $('#exServicemendischarge').hide();
            $('#exServicemenrendered').hide();
            $('#exServicemenServing').hide();

            // Clear the input fields in the div elements
            $('#exServicemendate input[type="date"]').val("");
            $('#exServicemenService select').val("");
            $('#exServicemendischarge input[type="date"]').val("");
            $('#exServicemenrendered input[type="text"]').val("");
        }
    });

    $('input[name="expresentlyServing"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "yes" is selected
        if (selectedValue === 'no') {
            // Show the desired div elements
            // $('#exServicemendate').show();
            // $('#exServicemenService').show();
            $('#exServicemendischarge').show();
            // $('#exServicemenrendered').show();
            // $('#exServicemenServing').show();
        } else {
            // Hide the div elements
            // $('#exServicemendate').hide();
            // $('#exServicemenService').hide();
            $('#exServicemendischarge').hide();
            // $('#exServicemenrendered').hide();
            // $('#exServicemenServing').hide();

            // Clear the input fields in the div elements
            // $('#exServicemendate input[type="date"]').val("");
            // $('#exServicemenService select').val("");
            $('#exServicemendischarge input[type="date"]').val("");
            // $('#exServicemenrendered input[type="text"]').val("");
        }
    });
});



$(document).ready(function () {
    // Initially hide the div elements
    $('#dateOfNOCarm').hide();
    $('#dateOfDischargearm').hide();
    $('#ServiceRenderedarm').hide();
    $('#yearsOfServicearm').hide();
    $('#armid').hide();
    $('#armid2').hide();

    // Event handler for the armServicemen radio buttons
    $('input[name="presentlyServing"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'yes') {
            // Show the desired div elements
            $('#dateOfNOCarm').show();
            $('#dateOfDischargearm').show();
            $('#ServiceRenderedarm').show();
            $('#yearsOfServicearm').show();
            $('#armid').show();
            $('#armid2').show();
        } else {
            // Hide the div elements
            $('#dateOfNOCarm').hide();
            $('#dateOfDischargearm').hide();
            $('#ServiceRenderedarm').hide();
            $('#yearsOfServicearm').hide();
            $('#armid').hide();
            $('#armid2').hide();

            // Clear the input fields in the div elements
            $('#dateOfNOCarm input[type="date"]').val("");
            $('#dateOfDischargearm input[type="date"]').val("");
            $('#ServiceRenderedarm select').val("");
            $('#yearsOfServicearm input[type="text"]').val("");
            $('#armid input[type="text"]').val("");
            $('#armid2 input[type="text"]').val("");
        }
    });
});

$(document).ready(function () {
    $('#physicallyChallengeddate').hide();
    $('input[name="physicallyChallenged"]').change(function () {
        if ($(this).val() === 'yes') {
            $('#physicallyChallengeddate').show();
            // $('#physicallyChallengeddate input').prop('required', true);
        } else {
            $('#physicallyChallengeddate').hide();
            $('#physicallyChallengeddate input[type="date"]').val("")
        }
    });
});




$(document).ready(function () {
    // Initially hide the date of issue field
    $('#pdpdate').hide();

    $('#kanmed').hide();

    $('#rural').hide();

    $('#kalyani').hide();

    $('#govtdate').hide();
    $('#govtdept').hide();
    $('#govtrendered').hide();

    $('#inServicewing').hide();
    $('#inServicerendered').hide();
    $('#inServicedate').hide();

    $('#criminalcases1').hide();

    $('#deptenq').hide();

    $('#criminalcases2').hide();


    // Event handler for the pdpreservation radio buttons
    $('input[name="pdpreservation"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'yes') {
            // Show the date of issue field
            $('#pdpdate').show();
        } else {
            // Hide the date of issue field
            $('#pdpdate').hide();
            $('#pdpdate input[type="date"]').val('');
        }
    });

    $('input[name="kanmediumreservation"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'yes') {
            // Show the date of issue field
            $('#kanmed').show();
        } else {
            // Hide the date of issue field
            $('#kanmed').hide();
            $('#kanmed input[type="date"]').val('');
        }
    });

    $('input[name="ruralreservation"]').change(function () {
        var selectedValue = $(this).val();

        if (selectedValue === 'yes') {
            $('#rural').show();
        } else {
            $('#rural').hide();
            $('#rural input[type="date"]').val(''); // Clear the date input value when hiding
        }
    });


    $('input[name="kalyanakarnataka"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'yes') {
            // Show the date of issue field
            $('#kalyani').show();
        } else {
            // Hide the date of issue field
            $('#kalyani').hide();
            $('#kalyani select').val("");
        }
    });

    $('input[name="governmentemployee"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'yes') {
            // Show the date of issue field
            $('#govtdate').show();
            $('#govtdept').show();
            $('#govtrendered').show();
        } else {
            // Hide the date of issue field
            $('#govtdate').hide();
            $('#govtdept').hide();
            $('#govtrendered').hide();
            $('#govtdate input[type="date"], #govtdept input,#govtrendered input ').val('');

        }
    });

    $('input[name="inServicecandidate"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'yes') {
            // Show the date of issue field
            $('#inServicewing').show();
            $('#inServicerendered').show();
            $('#inServicedate').show();
        } else {
            // Hide the date of issue field
            $('#inServicewing').hide();
            $('#inServicerendered').hide();
            $('#inServicedate').hide();
            // Clear the values of the input fields within inServicewing, inServicerendered, and inServicedate
            $('#inServicewing select').val('');
            $('#inServicerendered input').val('');
            $('#inServicejoiningdate').val('');
        }
    });


    $('input[name="criminalcasesinvolve"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'yes') {
            // Show the date of issue field
            $('#criminalcases1').show();

        } else {
            // Hide the date of issue field
            $('#criminalcases1').hide();
            $('#criminalcases1 textarea').val('');

        }
    });

    $('input[name="departmentalenquiry"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'yes') {
            // Show the date of issue field
            $('#deptenq').show();

        } else {
            // Hide the date of issue field
            $('#deptenq').hide();
            $('#deptenq textarea').val('');
        }
    });

    $('input[name="criminalcasesconvicted"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'yes') {
            // Show the date of issue field
            $('#criminalcases2').show();

        } else {
            // Hide the date of issue field
            $('#criminalcases2').hide();
            $('#criminalcases2 textarea').val('');
        }
    });
});


$(document).ready(function () {
    // Event handler for the passedsslc radio buttons
    $('input[name="passedsslc"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "No" is selected
        if (selectedValue === 'no') {
            // Show SweetAlert notification
            Swal.fire({
                title: "Not Eligible",
                text: "You are not eligible for this post.",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            });
            $('#preview-btn').addClass('disabled'); // Add the 'disabled' class
        } else {
            $('#preview-btn').removeClass('disabled'); // Remove the 'disabled' class
        }
    });
});






$(document).ready(function () {
    $('#yoppuc, #markspuc, #gradeobtained, #pucPercentage, #puceducation, #manualpercentage').hide();

    // Event handler for the passed radio buttons
    $('input[name="passedpuc"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'yes') {
            // Show the fields
            $('#yoppuc, #pucPercentage, #puceducation').show();
        } else {
            // Hide the fields
            $('#yoppuc, #markspuc, #gradeobtained, #pucPercentage, #puceducation').hide();
            $('#yoppuc input[type="text"], #yoppuc select, #markspuc input[type="text"], #markspuc input[type="radio"], #gradeobtained input[type="text"], #pucPercentage input[type="text"]').val('');
            $('#puceducation #marksyespuc').prop('checked', false);
            $('#puceducation #marksnopuc').prop('checked', false);
        }
    });

    // Event handler for the marks radio buttons
    $('input[name="marksinpuc"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Marks" is selected
        if (selectedValue === 'yes') {
            // Show the "Max Marks" and "Marks Obtained" fields
            $('#markspuc').show();
            // Hide the "Grade Obtained" field
            $('#gradeobtained').hide();
            $('#manualpercentage').hide();
            $('#autopercentage').show();
            $('#gradeobtained input[type="text"]').val('');
            $('#manualpercentage input[type="text"]').val('');
        } else if (selectedValue === 'no') {
            // Show the "Grade Obtained" field
            $('#gradeobtained').show();
            $('#autopercentage').hide();
            $('#manualpercentage').show();
            $('#autopercentage input[type="text"]').val('');
            // Hide the "Max Marks" and "Marks Obtained" fields
            $('#markspuc').hide();
            $('#markspuc input[type="text"]').val('');
        }
    });
});





$(document).ready(function () {

    $('#bridgecource').hide();
    // Event handler for the ksoubridgecourse radio buttons
    $('input[name="ksoubridgecourse"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'yes') {
            // Show the div with id "bridgecource"
            $('#bridgecource').show();
        } else {
            // Hide the entire div including the question and inputs
            $('#bridgecource').hide();
            $('#bridgecource input').val('');
            // $('#bridgecourcehead').hide();
        }
    });
});

// Function to calculate percentage
function calculatePercentage() {
    const maxMarks = parseFloat($('#maxMarks').val());
    const marksObtained = parseFloat($('#marksObtained').val());

    if (maxMarks && marksObtained) {
        const percentage = (marksObtained / maxMarks) * 100;
        $('#percentageCGPA').val(percentage.toFixed(2));
    }
}

// Attach the event listener to the inputs
$('#maxMarks, #marksObtained').on('input', calculatePercentage);

// Function to calculate Degree percentage
function calculateDegreePercentage() {
    const maxMarksDegree = parseFloat($('#degmarks').val());
    const marksObtainedDegree = parseFloat($('#degmarksobtained').val());

    if (maxMarksDegree && marksObtainedDegree) {
        const percentageDegree = (marksObtainedDegree / maxMarksDegree) * 100;
        $('#degpercentageobtained').val(percentageDegree.toFixed(2));
    }
}

// Attach the event listener to the inputs
$('#degmarks, #degmarksobtained').on('input', calculateDegreePercentage);



$(document).ready(function () {


    $('#deducation, #dmarks, #dgrade, #dgradeobtained, #degpercentage, #degmanualpercentage').hide();

    // Event handler for the passed radio buttons
    $('input[name="degpassed"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'yes') {
            // Show the fields
            $('#deducation, #dmarks, #degpercentage').show();
        } else {
            // Hide the fields
            $('#deducation, #dmarks, #dgrade, #dgradeobtained, #degpercentage').hide();
            $('#deducation input[type="text"], #deducation select, #dmarks, #dgrade input[type="text"], #dgradeobtained input[type="text"], #degpercentage input[type="text"]').val('');
            $('#dmarks #degmarksyes1').prop('checked', false);
            $('#dmarks #degmarksno1').prop('checked', false);
        }
    });

    // Event handler for the marks radio buttons
    $('input[name="makdeg"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Marks" is selected
        if (selectedValue === 'yes') {
            // Show the "Max Marks" and "Marks Obtained" fields
            $('#dgrade').show();
            $('#degautopercentage').show();
            $('#degmanualpercentage').hide();
            $('#degmanualpercentage input[type="text"]').val('');
            // Hide the "Grade Obtained" field
            $('#dgradeobtained').hide();
            $('#dgradeobtained input[type="text"]').val('');
        } else if (selectedValue === 'no') {
            // Show the "Grade Obtained" field
            $('#dgradeobtained').show();
            $('#degmanualpercentage').show();
            $('#degautopercentage').hide();
            $('#degautopercentage input[type="text"]').val('');
            // Hide the "Max Marks" and "Marks Obtained" fields
            $('#dgrade').hide();
            $('#dgrade input[type="text"]').val('');
        }
    });
});

// Attach the event listener to the inputs
$('#maxMarks, #marksObtained').on('input', calculatePercentage);

// Function to calculate Degree percentage
function calculateDegreePercentage() {
    const maxMarksDegree = parseFloat($('#degmarks').val());
    const marksObtainedDegree = parseFloat($('#degmarksobtained').val());

    if (maxMarksDegree && marksObtainedDegree) {
        const percentageDegree = (marksObtainedDegree / maxMarksDegree) * 100;
        $('#degpercentageobtained').val(percentageDegree.toFixed(2));
    }
}

// Attach the event listener to the inputs
$('#degmarks, #degmarksobtained').on('input', calculateDegreePercentage);




$(document).ready(function () {


    $('#sslcgrade, #sslcgradeobtained, #sslcpercentage, #sslcmanualpercentage').hide();

    // Event handler for the marks radio buttons
    $('input[name="maksslc"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Marks" is selected
        if (selectedValue === 'yes') {
            // Show the "Max Marks" and "Marks Obtained" fields
            $('#sslcgrade').show();
            $('#sslcpercentage').show();
            $('#sslcmanualpercentage').hide();
            $('#sslcmanualpercentage input[type="text"]').val('');
            $('#sslcautopercentage').show();
            // Hide the "Grade Obtained" field
            $('#sslcgradeobtained').hide();
            $('#sslcgradeobtained input[type="text"]').val('');
        } else if (selectedValue === 'no') {
            // Show the "Grade Obtained" field
            $('#sslcgradeobtained').show();
            $('#sslcmanualpercentage').show();
            $('#sslcautopercentage').hide();
            // $('#sslcpercentage').hide();
            // $('#degautopercentage input[type="text"]').val('');
            // Hide the "Max Marks" and "Marks Obtained" fields
            $('#sslcgrade').hide();
            $('#sslcgrade input[type="text"]').val('');
            $('#sslcautopercentage input[type="text"]').val('');
        }
    });
});

// Function to calculate SSLC percentage
function calculateSSLCPercentage() {
    const maxMarksSSLC = parseFloat($('#sslcmaxmarks').val());
    const marksObtainedSSLC = parseFloat($('#sslcmarksobtained').val());

    if (maxMarksSSLC && marksObtainedSSLC) {
        const percentageSSLC = (marksObtainedSSLC / maxMarksSSLC) * 100;
        $('#sslcpercentageobtained').val(percentageSSLC.toFixed(2));
    }
}

// Attach the event listener to the inputs
$('#sslcmaxmarks, #sslcmarksobtained').on('input', calculateSSLCPercentage);



$(document).ready(function () {
    // Hide the second group initially
    $(".group-2").hide();

    // Event handler for radio button change
    $("input[name='exServicemenChild']").change(function () {
        if ($(this).val() === "yes") {
            $(".group-2").show();
            $(".group-2b").show();
        } else {
            $(".group-2").hide();
            $(".group-2b").hide();
            $('.group-2e').hide();
            // Clear the values of the input fields within group-2
            // $(".group-2 input[type='text']").val("");
            $(".group-2 input[type='radio']").prop("checked", false);
            $('.group-2e select').val("");
        }
    });
});


$(document).ready(function () {
    $('input[name="exServicemenfamded"]').change(function () {
        if ($(this).val() === 'yes') {
            $("#exServicemendisno").prop('checked', true).prop('disabled', true); // Show the "Relationship with the Servicemen" field
            $("#exServicemendisyes").prop('checked', false).prop('disabled', true); // Show the "Relationship with the Servicemen" field
        } else {
            $("#exServicemendisno").prop('checked', false).prop('disabled', false);
            $("#exServicemendisyes").prop('checked', false).prop('disabled', false);
        }
    });
    $('input[name="exServicemendis"]').change(function () {
        if ($(this).val() === 'yes') {
            $("#exServicemenfamdedno").prop('checked', true).prop('disabled', true); // Show the "Relationship with the Servicemen" field
            $("#exServicemenfamdedyes").prop('checked', false).prop('disabled', true); // Show the "Relationship with the Servicemen" field
        } else {
            $("#exServicemenfamdedno").prop('checked', false).prop('disabled', false); // Show the "Relationship with the Servicemen" field
            $("#exServicemenfamdedyes").prop('checked', false).prop('disabled', false);
        }
    });
});

$(document).ready(function () {
    $('input[name="transgenderreservation"]').on('change', function () {
        var selectedValue = $(this).val();
        if (selectedValue === 'yes') {
            $('#transdate').show();
        } else {
            $('#transdate').hide();
            $('#transdate input[type="date"]').val('');
        }
    });
});




$(document).ready(function () {
    $('#candidate-type').change(function () {
        // Reset the disabled and checked properties for all options
        $('#inService-no, #inService-yes, #exservice-no, #exservice-yes').prop('disabled', false).prop('checked', false);
        $('#exServicemenChildno, #exServicemenChildyes').prop('disabled', false).prop('checked', false);

        if ($(this).val() === 'DirectCandidate') {
            $('#inService-section').show();
            $('#exservice-section').show();
            $('#exServicemendate').hide();
            $('#exServicemenService').hide();
            $('#exServicemendischarge').hide();
            $('#exServicemenrendered').hide();
            $('#exServicemenServing').hide();
            $('#inService-no').prop('checked', true).prop('disabled', true);
            $('#exservice-no').prop('checked', true).prop('disabled', true);
            $('#inService-yes').prop('checked', false).prop('disabled', true);
            $('#exservice-yes').prop('checked', false).prop('disabled', true);
            $('#inServicewing').hide();
            $('#inServicerendered').hide();
            $('#inServicedate').hide();
        }
        // else if ($(this).val() === 'InServiceCandidate') {
        //     $('#inService-section').show();
        //     $('#exservice-section').show();
        //     $('#exServicemendate').hide();
        //     $('#exServicemenService').hide();
        //     $('#exServicemendischarge').hide();
        //     $('#exServicemenrendered').hide();
        //     $('#exServicemenServing').hide();
        //     $('#exservice-no').prop('checked', true).prop('disabled', true);
        //     $('#exservice-yes').prop('checked', false).prop('disabled', true);
        // }
        else if ($(this).val() === 'ExServiceCandidate') {
            $('#inService-section').show();
            $('#exservice-section').show();
            $('#inService-no').prop('checked', true).prop('disabled', true);
            $('#inService-yes').prop('checked', false).prop('disabled', true);
            $('#exServicemenChildno').prop('checked', true).prop('disabled', true);
            $('#exServicemenChildyes').prop('checked', false).prop('disabled', true);
            $('#inServicewing').hide();
            $('#inServicerendered').hide();
            $('#inServicedate').hide();

        } else {
            $('#inService-section').hide();
            $('#exservice-section').hide();
        }
    });
});


$(document).ready(function () {
    $('input[name="gender"]').on('change', function () {
        var selectedValue = $(this).val();
        if (selectedValue === 'Male') {
            $('#transgender-yes').prop('checked', false).prop('disabled', true);
            $('#transgender-no').prop('checked', true).prop('disabled', true);
        } else {
            $('#transgender-yes').prop('checked', false).prop('disabled', false);
            $('#transgender-no').prop('checked', false).prop('disabled', false);
        }
    });
});

// ************************** Text Area Character couner ******************************** //

$(document).ready(function () {
    var maxCharacters = 500;
    var minCharacters = 10;

    $('#charCounter').text(maxCharacters + ' characters left');
    $('#charCounter2').text(maxCharacters + ' characters left');
    $('#charCounter3').text(maxCharacters + ' characters left');

    $('#criminalcasestext').on('input', function () {
        var remainingCharacters = maxCharacters - $(this).val().length;
        $('#charCounter').text(remainingCharacters + ' characters left');

        if (remainingCharacters < minCharacters) {
            $('#charCounter').addClass('text-danger'); // Optional: Change text color when approaching the minimum limit
        } else {
            $('#charCounter').removeClass('text-danger');
        }
    });
    $('#deptenqcariminalcases2').on('input', function () {
        var remainingCharacters = maxCharacters - $(this).val().length;
        $('#charCounter2').text(remainingCharacters + ' characters left');

        if (remainingCharacters < minCharacters) {
            $('#charCounter2').addClass('text-danger'); // Optional: Change text color when approaching the minimum limit
        } else {
            $('#charCounter2').removeClass('text-danger');
        }
    });
    $('#convictedcriminalcases3').on('input', function () {
        var remainingCharacters = maxCharacters - $(this).val().length;
        $('#charCounter3').text(remainingCharacters + ' characters left');

        if (remainingCharacters < minCharacters) {
            $('#charCounter3').addClass('text-danger'); // Optional: Change text color when approaching the minimum limit
        } else {
            $('#charCounter3').removeClass('text-danger');
        }
    });
});



$(document).ready(function () {
    if ($(window).width() >= 768) {
        $('.form-group .col-sm-6').each(function () {
            var serialNumber = $(this).find('.mr-2').text().trim().replace('.', '');
            var isTwoDigitSerial = /^\d{2}$/.test(serialNumber) || /^\d{2}[a-zA-Z]$/.test(serialNumber);
            var isTwoDigitAlphaSerial = /^\d{2}[a-zA-Z]$/.test(serialNumber);

            if (isTwoDigitSerial) {
                $(this).find('input, select, input[type="date"]').css('margin-left', '+=5px');
                $(this).find('input, select, input[type="date"]').css('width', '-=5px');

                if (isTwoDigitAlphaSerial) {
                    $(this).find('input, select, input[type="date"]').css('margin-left', '+=10px');
                    $(this).find('input, select, input[type="date"]').css('width', '-=10px');
                }
            }
        });
    }
});

// ************************* SSLC Other Borad ***************************** //


$(document).ready(function () {
    $('#sslcboard').change(function () {
        // Reset the disabled and checked properties for all options

        if ($(this).val() === 'Other') {
            $('#sslcotherboard').show();
        }
        else {
            $('#sslcotherboard').hide();
        }
    });
});



// $(document).ready(function () {
//     $('#weightField').hide();
//     $('#heightField').hide();
//     $('input[name="gender"]').change(function () {
//         var selectedGender = $('input[name="gender"]:checked').val();
//         if (selectedGender === "male") {
//             $('#heightField').show();
//             $('#weightField').hide();
//             $('#weightField input').val('');
//         } else if (selectedGender === "female") {
//             $('#weightField').show();
//             $('#heightField').hide();
//             $('#heightField input').val('');
//         }
//     });
// });


//  ************************************** Cookie Banner *************************************** //

/* Javascript to show and hide cookie banner using localstorage */
/* Shows the Cookie banner */
function showCookieBanner() {
    let cookieBanner = document.getElementById("cb-cookie-banner");
    cookieBanner.style.display = "block";
}

/* Hides the Cookie banner and saves the value to localstorage */
function hideCookieBanner() {
    localStorage.setItem("cb_isCookieAccepted", "yes");
    let cookieBanner = document.getElementById("cb-cookie-banner");
    cookieBanner.style.display = "none";
}

/* Checks the localstorage and shows Cookie banner based on it. */
function initializeCookieBanner() {
    let isCookieAccepted = localStorage.getItem("cb_isCookieAccepted");
    if (isCookieAccepted === null) {
        localStorage.setItem("cb_isCookieAccepted", "no");
        showCookieBanner();
    }
    if (isCookieAccepted === "no") {
        showCookieBanner();
    }
}

// Assigning values to window object
window.onload = initializeCookieBanner();
window.cb_hideCookieBanner = hideCookieBanner;


