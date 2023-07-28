// ********** MODAL PREVIEW *************** //

$(document).ready(function () {
    $("#preview-btn").on("click", function () {
        var candidateType = $("#candidate-type").val();
        var unitName = $("#unit-name").val();
        var candidateName = $("#name").val();
        var FatherName = $("#fname").val();
        var MotherName = $("#mname").val();
        var MobileNumber = $("#mobNumber").val();
        var Emailid = $("#email").val();
        var AddharNo = $("#aadhar").val();
        var gender = $("input[name='gender']:checked").val();
        var HeightofCandidate = $("#height").val();

        var DoorNo = $("#door").val();
        var StreetName = $("#street").val();
        var Landmark = $("#landmark").val();
        var Taluk = $("#taluk").val();
        var City = $("#city").val();
        var District = $("#district").val();
        var OtherDistrict = $("#otherdistrict").val();
        var NativeDistrict = $("#nativeDistrict").val();
        var State = $("#state").val();
        var PinCode = $("#pincode").val();
        var postaladdress = $("input[name='addressSame']:checked").val();

        var PerDoorNo = $("#peradddoor").val(); //20a
        var PerStreet = $("#peraddstreet").val(); //20b
        var NearbyLandmark = $("#peraddlandmark").val(); //20c
        var PerTaluk = $("#peraddtaluk").val(); //20d
        var PerCity = $("#peraddcity").val(); //20e var District = $("perdistrictper").val(); //20f
        var PerDistrict = $("#perdistrictper").val(); //20g
        var PerOtherDist = $("#otherdistper").val(); //20g
        var PerState = $("#perstate").val(); //20g
        var PerPinCode = $("#perpincode").val(); //20h =

        var Category = $("#category").val(); //21 var SubCaste $("subcaste").val(); //21a =
        var Subcaste = $("#Subcaste").val(); //21 var SubCaste $("subcaste").val(); //21a =
        var DateofSubcaste = $("doisubcaste").val(); //21b

        var ClaimingRuralMedium = $("input[name='ruralreservation']:checked").val(); //22 DateofIssue = $("dateofissueofruralmedium").val(); //22a
        var ClaimingRuralMediumDate = $("ruralreservationdate").val(); //22 DateofIssue = $("dateofissueofruralmedium").val(); //22a

        var ExServicemen = $("input[name='exServicemen']:checked").val(); //23
        var presentlyExServicemen = $("input[name='expresentlyServin']:checked").val(); //23
        var DateofJoiningExServicemen = $("#dateofjoiningexser").val(); //23b
        var DateofNocExServicemen = $("#dateofnocexser").val(); //23b
        var ExServicemenServiceRendered = $("#ServiceRenderedexser").val(); //23d
        var DateofDischargeExServicemen = $("#dateofdisexser").val(); //23e
        var yearsOfExServicemen = $("#exyearsOfService").val(); //23f
        var MonthsOfExServicemen = $("#exMonthsOfService").val(); //23f
        var DaysOfExServicemen = $("#exdaysOfService").val(); //23f

        var ExServicemenRelation = $("input[name='exServicemenChild']").val(); //24
        var RelationShipwithExServicemen = $("#famrelation").val(); //24a
        var ExServicemenDiedinAction = $("input[name='exServicemenfamded']:checked").val();   //24b
        var ExServicemenDisabled = $("input[name='exServicemendis']:checked").val(); //24c

        var PDPReservation = $("input[name='pdpreservation']:checked").val(); //25
        var PDPCertificate = $("#issueofpdpcer").val(); //25a

        var KannadaMediumReservation = $("input[name='kanmediumreservation']:checked").val(); //26
        var KannadaMediuCertificate = $("#kannadamediumcertificate").val(); //26a

        var TransgenderReservation = $("input[name='transgenderreservation']:checked").val(); //27
        var TransgenderReservationCertificate = $("#transgender-certificate-date").val(); //27a

        var KalyanaKarnataka = $("input[name='kalyanakarnataka']:checked").val(); //28
        var KalyanaKarnatakaDistrict = $("#kalyanaKarnatakadistrict").val(); //28a

        var GovernmentEmployee = $("input[name='governmentemployee']:checked").val(); //29
        var GovtDateofJoining = $("#dojoigovt").val(); //29A
        var GovtDepartment = $("#GovtDept").val(); //29B
        var GovtYears = $("#GovtyearsOfService").val(); //29C
        var GovtMonth = $("#GovtMonthsOfService").val(); //29C
        var GovtDays = $("#GovtdaysOfService").val(); //29C
        var GovtDateofNoc = $("#dateofnocgovtdept").val(); //29d

        var CriminalCases = $("input[name='criminalcasesinvolve']:checked").val();  //31
        var CriminalCasesdetails = $("#criminalcasestext").val(); //31a
        var DepartmentalEnquiry = $("input[name='departmentalenquiry']:checked").val();  //32
        var Deptenqdetails = $("#deptenqcariminalcases2").val(); //32a
        var ConvictedinaCriminal = $("input[name='criminalcasesconvicted']:checked").val(); //33
        var ConvictedCriminalDetails = $("#convictedcriminalcases3").val(); //33a

        var PassedSSLC = $("input[name='passedsslc']:checked").val();  //31
        var KannadaLanguage = $("#kanEducation").val(); //31a
        var YearofPassingSSLC = $("#yearofpassingsslc").val();  //32
        var BoardofSslc = $("#sslcboard").val(); //32a
        var OtherSslcBoard = $("#othersslcboard").val(); //33
        var SSLCRegistrationNo = $("#sslcregistrationNumber").val(); //33a

        var PassedPUC = $("input[name='passedpuc']:checked").val();  //31
        var PassedPucBoard = $("#passedpucboard").val(); //31a
        var YearofPassingPUC = $("#pucyearofpassing").val();  //32
        var MarksorGradePUC = $("input[name='marksinpuc']").val(); //32a
        var MaxMarksPUC = $("#maxMarks").val(); //33
        var MarksobtainedPUC = $("#marksObtained").val(); //33a
        var GradesObtainedPUC = $("#pucgradesobtained").val(); //33a
        var CGPAPUC = $("#puccgpa").val(); //33a
        var PercentagePUC = $("#percentageCGPA").val(); //33a
        var PUCRegistrationsno = $("#pucregistrationNumber").val(); //33a

        var BridgeCource = $("input[name='ksoubridgecourse']:checked").val(); //33a
        var BridgeCourceRegistrationsno = $("#bridgecourceregistrationno").val(); //33a

        var DegHolder = $("input[name='degpassed']:checked").val();  //31
        var DegreeRegNo = $("#DegRegNo").val(); //31a
        var YearofPassingDegree = $("#DegPassingYear").val();  //32
        var MarksorGradeDeg = $("input[name='makdeg']").val(); //32a
        var MaxMarksDegree = $("#degmarks").val(); //33
        var MarksobtainedDeg = $("#degmarksobtained").val(); //33a
        var GradesObtainedDeg = $("#deggradessobtained").val(); //33a
        var AutoDegPercentage = $("#degpercentageobtained").val(); //33a
        var ManualDegPercentage = $("#degpercentageobtained").val(); //33a

        var DateofBirth = $("#dob40").val(); //33a
        var DateofBirthason = $("#ageof40").val(); //33a

        var IDCardSelected = $("#idcardselector").val(); //33a
        var SelectedIDCardNo = $("#idcardnumber").val(); //33a


        $("#candidateTypePreview").text(candidateType);
        $("#unitNamePreview").text(unitName);
        $("#candidatenameTypePreview").text(candidateName);
        $("#fatherNamePreview").text(FatherName);
        $("#MotherNamePreview").text(MotherName);
        $("#MobileNoPreview").text(MobileNumber);
        $("#emailPreview").text(Emailid);
        $("#aadharPreview").text(AddharNo);
        $("#genderPreview").text(gender);
        $("#HeightPreview").text(HeightofCandidate);

        $("#DoorPreview").text(DoorNo);
        $("#StreetPreview").text(StreetName);
        $("#landmarkPreview").text(Landmark);
        $("#talukPreview").text(Taluk);
        $("#cityPreview").text(City);
        $("#districtPreview").text(District);
        $("#otherdistrictPreview").text(OtherDistrict);
        $("#nativeDistrictPreview").text(NativeDistrict);
        $("#statePreview").text(State);
        $("#pincodePreview").text(PinCode);
        $("#postaladdressPreview").text(postaladdress);

        $("#PerDoorNoPreview").text(PerDoorNo);
        $("#PerStreetPreview").text(PerStreet);
        $("#NearbyLandmarkPreview").text(NearbyLandmark);
        $("#PerTalukPreview").text(PerTaluk);
        $("#PerCityPreview").text(PerCity);
        $("#PerDistrictPreview").text(PerDistrict);
        $("#PerotherDistrictPreview").text(PerOtherDist);
        $("#perstatePreview").text(PerState);
        $("#PerPincodePreview").text(PerPinCode);

        $("#CategoryPreview").text(Category);
        $("#SubcastePreview").text(Subcaste);
        $("#DateofSubcastePreview").text(DateofSubcaste);

        $("#ClaimingRuralMediumPreview").text(ClaimingRuralMedium);
        $("#ClaimingRuralMediumDatePreview").text(ClaimingRuralMediumDate);

        $("#exServicemenPreview").text(ExServicemen);
        $("#presentlyExServicemenPreview").text(presentlyExServicemen);
        $("#dateofjoiningexserPreview").text(DateofJoiningExServicemen);
        $("#dateofNocexserPreview").text(DateofNocExServicemen);
        $("#ExServicemenServiceRenderedPreview").text(ExServicemenServiceRendered);
        $("#ExServicemendateofdisexserPreview").text(DateofDischargeExServicemen);
        $("#yearsOfExServicemenPreview").text(yearsOfExServicemen);
        $("#MonthsOfExServicemenPreview").text(MonthsOfExServicemen);
        $("#DaysOfExServicemenPreview").text(DaysOfExServicemen);

        $("#ExServicemenRelationPreview").text(ExServicemenRelation);
        $("#RelationShipwithExServicemenPreview").text(RelationShipwithExServicemen);
        $("#ExServicemenDiedinActionPreview").text(ExServicemenDiedinAction);
        $("#ExServicemenDisabledPreview").text(ExServicemenDisabled);

        $("#PDPReservationPreview").text(PDPReservation);
        $("#PDPCertificatePreview").text(PDPCertificate);

        $("#KannadaMediumReservationPreview").text(KannadaMediumReservation);
        $("#KannadaMediuCertificatePreview").text(KannadaMediuCertificate);

        $("#TransgenderReservationPreview").text(TransgenderReservation);
        $("#TransgenderReservationCertificatePreview").text(TransgenderReservationCertificate);

        $("#KalyanaKarnatakaPreview").text(KalyanaKarnataka);
        $("#KalyanaKarnatakaDistrictPreview").text(KalyanaKarnatakaDistrict);

        $("#GovernmentEmployeePreview").text(GovernmentEmployee);
        $("#GovtDateofJoiningPreview").text(GovtDateofJoining);
        $("#GovtDepartmentPreview").text(GovtDepartment);
        $("#GovtYearsPreview").text(GovtYears);
        $("#GovtMonthPreview").text(GovtMonth);
        $("#GovtDaysPreview").text(GovtDays);
        $("#GovtDateofNocPreview").text(GovtDateofNoc);

        $("#CriminalCasesPreview").text(CriminalCases);
        $("#CriminalCasesdetailsPreview").text(CriminalCasesdetails);
        $("#DepartmentalEnquirPreview").text(DepartmentalEnquiry);
        $("#DeptenqdetailsPreview").text(Deptenqdetails);
        $("#ConvictedinaCriminalPreview").text(ConvictedinaCriminal);
        $("#ConvictedCriminalDetailsPreview").text(ConvictedCriminalDetails);

        $("#PassedSSLCPreview").text(PassedSSLC);
        $("#KannadaLanguagePreview").text(KannadaLanguage);
        $("#YearofPassingSSLCPreview").text(YearofPassingSSLC);
        $("#BoardofSslcPreview").text(BoardofSslc);
        $("#OtherSslcBoarPreview").text(OtherSslcBoard);
        $("#SSLCRegistrationNoPreview").text(SSLCRegistrationNo);

        $("#PassedPUCPreview").text(PassedPUC);
        $("#PassedPucBoardPreview").text(PassedPucBoard);
        $("#YearofPassingPUCPreview").text(YearofPassingPUC);
        $("#MarksorGradePUCPreview").text(MarksorGradePUC);
        $("#MaxMarksPUCPreview").text(MaxMarksPUC);
        $("#MarksobtainedPUCPreview").text(MarksobtainedPUC);
        $("#GradesObtainedPUCPreview").text(GradesObtainedPUC);
        $("#CGPAPUCPreview").text(CGPAPUC);
        $("#PercentagePUCPreview").text(PercentagePUC);
        $("#PUCRegistrationsnoPreview").text(PUCRegistrationsno);

        $("#BridgeCourcePreview").text(BridgeCource);
        $("#BridgeCourceRegistrationsnoPreview").text(BridgeCourceRegistrationsno);

        $("#DegHolderPreview").text(DegHolder);
        $("#DegreeRegNoPreview").text(DegreeRegNo);
        $("#YearofPassingDegreePreview").text(YearofPassingDegree);
        $("#MarksorGradeDegPreview").text(MarksorGradeDeg);
        $("#MaxMarksDegreePreview").text(MaxMarksDegree);
        $("#MarksobtainedDegPreview").text(MarksobtainedDeg);
        $("#GradesObtainedDegPreview").text(GradesObtainedDeg);
        $("#AutoDegPercentagePreview").text(AutoDegPercentage);
        $("#ManualDegPercentagePreview").text(ManualDegPercentage);

        $("#DateofBirthPreview").text(DateofBirth);
        $("#DateofBirthasonPreview").text(DateofBirthason);

        $("#IDCardSelectedPreview").text(IDCardSelected);
        $("#SelectedIDCardNoPreview").text(SelectedIDCardNo);


        var previewModal = new bootstrap.Modal($("#previewModal"));
        previewModal.show();
    });
});