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
    // Initialize datepicker
    $('.dtp').datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
    });

    // Calculate age on button click
    $('.calculate-age').click(function () {
        var dob = $('#dob').datepicker('getDate');
        if (dob != null) {
            var age = calculateAge(dob);
            $('#ageResult').text('Your age is: ' + age + ' years');
        } else {
            $('#ageResult').text('Please select a valid date of birth');
        }
    });

    // Function to calculate age based on date of birth
    function calculateAge(dob) {
        var today = new Date();
        var birthDate = new Date(dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        var monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
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

    $('#nextBtn').click(function () {
        // Check if the "Agree" checkbox is checked
        if ($('#agreeCheckbox').is(':checked')) {
            showalert(); // Call the showalert() function
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
        }
    });
});

$(document).ready(function () {
    // Hide the "Other" div initially
    $("#potherDistrict").hide();

    // Show or hide the "Other" div based on district selection
    $("#pdistrict").change(function () {
        if ($(this).val() === "other") {
            $("#potherDistrict").show();
        } else {
            $("#potherDistrict").hide();
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
        }
    });
});

$(document).ready(function () {
    // Initially hide the subcaste div
    $('#subcasteDiv').hide();
    $('#subcastedate').hide();

    // Event handler for the category select element
    $('#category').change(function () {
        var selectedCategory = $(this).val();

        // Check if the selected category is not "General"
        if (selectedCategory !== 'option1') {
            // Show the subcaste div
            $('#subcasteDiv').show();
            $('#subcastedate').show();
        } else {
            // Hide the subcaste div
            $('#subcasteDiv').hide();
            $('#subcastedate').hide();
        }
    });
});



$(document).ready(function () {
    // Initially hide the div elements
    $('#exServicemandate').hide();
    $('#exServicemanService').hide();
    $('#exServicemandischarge').hide();
    $('#exServicemanrendered').hide();

    // Event handler for the exServiceman radio buttons
    $('input[name="exServiceman"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "yes" is selected
        if (selectedValue === 'yes') {
            // Show the desired div elements
            $('#exServicemandate').show();
            $('#exServicemanService').show();
            $('#exServicemandischarge').show();
            $('#exServicemanrendered').show();
        } else {
            // Hide the div elements
            $('#exServicemandate').hide();
            $('#exServicemanService').hide();
            $('#exServicemandischarge').hide();
            $('#exServicemanrendered').hide();
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

    // Event handler for the armServiceman radio buttons
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
        }
    });

    $('input[name="ruralreservation"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'yes') {
            // Show the date of issue field
            $('#rural').show();
        } else {
            // Hide the date of issue field
            $('#rural').hide();
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
        }
    });
});


$(document).ready(function () {


    $('#yoppuc, #puceducation, #markspuc, #gradeobtained, #pucPercentage').hide();

    // Event handler for the passed radio buttons
    $('input[name="passedpuc"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'yes') {
            // Show the fields
            $('#yoppuc, #puceducation, #markspuc, #pucPercentage').show();
        } else {
            // Hide the fields
            $('#yoppuc, #puceducation, #markspuc, #gradeobtained, #pucPercentage').hide();
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
        } else if (selectedValue === 'no') {
            // Show the "Grade Obtained" field
            $('#gradeobtained').show();
            // Hide the "Max Marks" and "Marks Obtained" fields
            $('#markspuc').hide();
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
            $('#bridgecourcehead').hide();
        }
    });
});


$(document).ready(function () {


    $('#deducation, #dmarks, #dgrade, #dgradeobtained, #degpercentage').hide();

    // Event handler for the passed radio buttons
    $('input[name="degpassed"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'yes') {
            // Show the fields
            $('#deducation, #dmarks, #dgrade, #degpercentage').show();
        } else {
            // Hide the fields
            $('#deducation, #dmarks, #dgrade, #dgradeobtained, #degpercentage').hide();
        }
    });

    // Event handler for the marks radio buttons
    $('input[name="makdeg"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Marks" is selected
        if (selectedValue === 'yes') {
            // Show the "Max Marks" and "Marks Obtained" fields
            $('#dgrade').show();
            // Hide the "Grade Obtained" field
            $('#dgradeobtained').hide();
        } else if (selectedValue === 'no') {
            // Show the "Grade Obtained" field
            $('#dgradeobtained').show();
            // Hide the "Max Marks" and "Marks Obtained" fields
            $('#dgrade').hide();
        }
    });
});


$(document).ready(function () {
    // Hide the second group initially
    $(".group-2").hide();

    // Event handler for radio button change
    $("input[name='exServicemanChild']").change(function () {
        if ($(this).val() === "yes") {
            $(".group-2").show();
        } else {
            $(".group-2").hide();
        }
    });
});

$(document).ready(function () {
    $('input[name="exServicemanfamded"]').change(function () {
        if ($(this).val() === 'yes') {
            $('.group-2e').show(); // Show the "Relationship with the Serviceman" field
        } else {
            $('.group-2e').hide(); // Hide the "Relationship with the Serviceman" field
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
        }
    });
});




$(document).ready(function () {
    $('#candidate-type').change(function () {
        if ($(this).val() === 'option1') {
            $('#inService-section').show();
            $('#exservice-section').show();
            $('#inService-no').prop('checked', true).prop('disabled', true);
            $('#inService-yes').prop('checked', false).prop('disabled', true);
            $('#exservice-no').prop('checked', true).prop('disabled', true);
            $('#exservice-yes').prop('checked', false).prop('disabled', true);
        } else {
            $('#inService-section').show();
            $('#exservice-section').show();
        }
    });

    $('#candidate-type').change(function () {
        if ($(this).val() === 'option2') {
            // $('#inService-section').show();
            // $('#exService-section').hide();
            $('#exservice-no').prop('checked', true).prop('disabled', true);
            $('#exService-yes').prop('disabled', true);
        } else {
            $('#inService-section').show();
            $('#exService-section').show();
        }
    });

    $('#candidate-type').change(function () {
        if ($(this).val() === 'option3') {
            // $('#inService-section').show();
            // $('#exService-section').hide();
            $('#inService-no').prop('checked', true).prop('disabled', true);
            $('#inService-yes').prop('checked', false).prop('disabled', true);
        } else {
            $('#inService-section').show();
            $('#exService-section').show();
        }
    });
});





// *************************************** Image preview ***************************************** //

function previewFile(inputId, previewId) {
    var preview = document.getElementById(previewId);
    var file = document.getElementById(inputId).files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
        preview.style.display = "block";
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
        preview.style.display = "none";
    }
}

// *************************************** Form Validation ***************************************** //


//******************************** Application num validation *****************************//


// get validation message element and appnum
var appNum = document.getElementById("application-number");
var appMsg = document.getElementById("appValid");

function validApplication() {
    if (/^\d{7}$/.test(appNum.value) && appNum.value.length === 7) {
        appMsg.innerHTML = "";
    } else {
        appMsg.innerHTML = "* Input not valid";
    }
}

appNum.addEventListener("input", validApplication);

//*********************************** Unit Name Validation ********************************//

// get validation message element and unitname

var unitName = document.getElementById("unit-name");
var unitMsg = document.getElementById("unitValid");

function validUnit() {
    if (/^[a-zA-Z0-9.,/-;()#]{3,80}/.test(unitName.value) && unitName.value.length <= 80) {
        unitMsg.innerHTML = "";
    } else {
        unitMsg.innerHTML = "* Input not valid";
    }
}

unitName.addEventListener("input", validUnit);


//******************************** Candidate Name Validation *******************************//

// get validation message element and candidatename

var candidateName = document.getElementById("name");
var candidateMsg = document.getElementById("nameValid");

function validName() {
    if (/^[a-zA-Z\s]+$/.test(candidateName.value) && candidateName.value.length <= 80) {
        candidateMsg.innerHTML = "";
    } else {
        candidateMsg.innerHTML = "* Input not valid";
    }
}

candidateName.addEventListener("input", validName);

//**************************** Aadhar Number Validation ********************************/

// get validation message element and aadhar

var ahdar = document.getElementById("aadhar");
var ahdarMsg = document.getElementById("aadharValid");

function validAhdar() {
    if (/^\d{12}$/.test(ahdar.value) && ahdar.value.length === 12) {
        ahdarMsg.innerHTML = "";
    } else {
        ahdarMsg.innerHTML = "* Input not valid";
    }
}

ahdar.addEventListener("input", validAhdar);


//**************************** Father Name Validation ********************************/

// get validation message element and Father Name

var fname = document.getElementById("fname");
var fnameMsg = document.getElementById("fnameValid");

function validFname() {
    if (/^[a-zA-Z\s]+$/.test(fname.value) && fname.value.length <= 80) {
        fnameMsg.innerHTML = "";
    } else {
        fnameMsg.innerHTML = "* Input not valid";
    }
}

fname.addEventListener("input", validFname);

//**************************** Mother Name Validation ********************************/

// get validation message element and Mother Name

var mname = document.getElementById("mname");
var mnameMsg = document.getElementById("mnameValid");

function validMname() {
    if (/^[a-zA-Z\s]+$/.test(mname.value) && mname.value.length <= 80) {
        mnameMsg.innerHTML = "";
    } else {
        mnameMsg.innerHTML = "* Input not valid";
    }
}

mname.addEventListener("input", validMname);

//**************************** EmailID Validation ********************************/

// get validation message element and EmailID

var email = document.getElementById("email");
var emailMsg = document.getElementById("emailValid");

function validEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) && email.value.length <= 80) {
        emailMsg.innerHTML = "";
    } else {
        emailMsg.innerHTML = "* Input not valid";
    }
}

email.addEventListener("input", validEmail);

//**************************** Permanent Address Toggle ********************************/

// get validation present address (YES/NO) element permanent address

var paddress = document.getElementById("paddress");
var addYes = document.getElementById("addresssame1");
var addNo = document.getElementById("addresssame2");

function togglePresentAddress() {
    if (addYes.checked) {
        paddress.style.display = "none";
    } else {
        paddress.style.display = "inline";
    }
}

//**************************** Posatal Address Validation ********************************/

// get validation message element and Postal address

var address = document.getElementById("address");
var addressMsg = document.getElementById("addressValid");
function validAddress() {
    if (/^[a-zA-Z0-9-#.,() /;_@]*$/.test(address.value) && address.value.length <= 150) {
        addressMsg.innerHTML = "";
    } else {
        addressMsg.innerHTML = "* Input not valid";
    }
}
address.addEventListener("input", validAddress);

//**************************** Present Address Validation ********************************/

// get validation message element and present address

var paddressMsg = document.getElementById("paddressValid");
var preaddress = document.getElementById("preAddress")
function validPaddress() {
    if (/^[a-zA-Z0-9-#.,() /;_@]*$/.test(preaddress.value) && preaddress.value.length <= 80) {
        paddressMsg.innerHTML = "";
    } else {
        paddressMsg.innerHTML = "* Input not valid";
    }
}
paddress.addEventListener("input", validPaddress);

//**************************** Mobile Number Validation ********************************/

// get validation message element and Mobile Number

var mobile = document.getElementById("mobNumber");
var mobileMsg = document.getElementById("mobValid");

function validMobile() {
    if (/^[6-9]\d{9}$/.test(mobile.value) && mobile.value.length === 10) {
        mobileMsg.innerHTML = "";
    } else {
        mobileMsg.innerHTML = "* Input not valid";
    }
}

mobile.addEventListener("input", validMobile);

//**************************** Height Validation ********************************/

// get validation message element and Height

var height = document.getElementById("height");
var heightMsg = document.getElementById("heightValid");

function validHeight() {
    if (/^\d{3}$/.test(height.value) && height.value.length === 3) {
        heightMsg.innerHTML = "";
    } else {
        heightMsg.innerHTML = "* Input not valid";
    }
}

height.addEventListener("input", validHeight);

//**************************** Subcaste Validation ********************************/

// get validation message element and Subcaste

var subcaste = document.getElementById("subcaste");
var subcasteMsg = document.getElementById("subcasteValid");
function validSubcaste() {
    if (/^[a-zA-Z0-9\s]+$/.test(subcaste.value) && subcaste.value.length <= 30) {
        subcasteMsg.innerHTML = "";
    } else {
        subcasteMsg.innerHTML = "* Input not valid";
    }
}

subcaste.addEventListener("input", validSubcaste);

//**************************** ID Card Validation ********************************/

// get validation message element and ID Number

var id = document.getElementById("idcard");
var idMsg = document.getElementById("idValid");
function validId() {
    if (/^[a-zA-Z0-9\s]+$/.test(id.value) && id.value.length <= 20) {
        idMsg.innerHTML = "";
    } else {
        idMsg.innerHTML = "* Input not valid";
    }
}

id.addEventListener("input", validId);

//**************************** Transaction Number Validation ********************************/

// get validation message element and Transaction Number

var trans = document.getElementById("transaction");
var transMsg = document.getElementById("transValid");
function validTrans() {
    if (/^[a-zA-Z0-9]{1,25}$/.test(trans.value) && trans.value.length <= 25) {
        transMsg.innerHTML = "";
    } else {
        transMsg.innerHTML = "* Input not valid";
    }
}

trans.addEventListener("input", validTrans);

//**************************** PG Transaction Number Validation ********************************/

// get validation message element and PG Transaction Number

var pgtrans = document.getElementById("pgtransaction");
var pgtransMsg = document.getElementById("pgValid");
function validPgTrans() {
    if (/^[a-zA-Z0-9]{1,25}$/.test(pgtrans.value) && pgtrans.value.length <= 25) {
        pgtransMsg.innerHTML = "";
    } else {
        pgtransMsg.innerHTML = "* Input not valid";
    }
}

pgtrans.addEventListener("input", validPgTrans);

//**************************** Issuer Transaction Number Validation ********************************/

// get validation message element and Issuer Transaction Number

var issuertrans = document.getElementById("issuertransaction");
var issuertransMsg = document.getElementById("issuerValid");
function validIssuerTrans() {
    if (/^[a-zA-Z0-9]{1,25}$/.test(issuertrans.value) && issuertrans.value.length <= 25) {
        issuertransMsg.innerHTML = "";
    } else {
        issuertransMsg.innerHTML = "* Input not valid";
    }
}

issuertrans.addEventListener("input", validIssuerTrans);

//**************************** Fees Validation ********************************/

// get validation message element and Fees

var fees = document.getElementById("feespaid");
var feesMsg = document.getElementById("feesValid");
function validFees() {
    if (/^\d{3}(?:.\d{1,2})?$/.test(fees.value) && fees.value.length <= 6) {
        feesMsg.innerHTML = "";
    } else {
        feesMsg.innerHTML = "* Input not valid";
    }
}

fees.addEventListener("input", validFees);

