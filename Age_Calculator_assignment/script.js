


function ageCalculator(){
    var date = parseInt(document.getElementById("date").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
   
    var dob = new Date(year,month,date);

    var mDobYear = parseInt(dob.getYear());
    var mDobMonth = parseInt(dob.getMonth());
    var mDobDate = parseInt(dob.getDate());
    // console.log(mDobYear, mDobMonth, mDobDate);

    var errString = "Please input valid data";
    var foundErr = false;
    if(isNaN(mDobDate)){
        // errString = errString + " Date Field";   
        foundErr = true;   

    }
    if(isNaN(mDobMonth)){
        // errString += " Month Field" ;
        foundErr = true;
    }
    // console.log(mDobYear);
    if(isNaN(mDobYear) ){
        // errString += " Year Field" ;
        foundErr = true;
        // console.log("mayank");
    }
    

    if(foundErr == true){
        return document.getElementById("result").innerHTML = errString;

    }else{

        var now = new Date();

        var mCurrentYear = now.getYear();
        var mCurrentMonth = now.getMonth() + 1;
        console.log(mCurrentMonth)
        var mCurrentDate = now.getDate();
    
        var age = {};
        var ageString = "";
    
        yearAge = mCurrentYear - mDobYear;
        if(mCurrentMonth >= mDobMonth){
            var monthAge = mCurrentMonth - mDobMonth;
        }else {
            yearAge--;
            var monthAge = 12 + mCurrentMonth - mDobMonth;
        }
 
        if(mCurrentDate >= mDobDate){
            var dateAge = mCurrentDate - mDobDate;
        }else{
            monthAge--;
            var dateAge = 31 + mCurrentDate - mDobDate;
            if(monthAge < 0){
                monthAge = 11;
                year--;
            }
    
        }
        
    
        age = {
            years:yearAge,
            months:monthAge,
            days:dateAge
        };
    
        ageString = "Your age is " + age.years + " years, " + age.months + " months, and " + age.days + " days old.";
    
        return document.getElementById("result").innerHTML = ageString;
                
    }

}