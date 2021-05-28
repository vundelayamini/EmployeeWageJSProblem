//UC1 Ability to check Employees is present or absent.
//Constants

    console.log("Welcome To Employee Wage Problem");
    const IS_ABSENT = 0;
    //Using random function to identify employee is present or not
    let empCheck = Math.floor(Math.random()*10)%2;
    if(empCheck == IS_ABSENT)
    {
        console.log("Employee is absent");
    }
    else 
    {
        console.log("Employee is present");
    }
    //UC2 Ability to Calculate Daily Employee Wage 
    console.log("UC2:Calculta Employee Daily wage");
    //Constants
    const IS_FULL_TIME=1;
    const IS_PART_TIME=2;
    const PART_TIME_HRS=4;
    const FULL_TIME_HRs=8;
    const WAGE_PER_HR=20;
    let empHrs=0;
    switch(empCheck)
    {
         case IS_PART_TIME:
              empHrs=PART_TIME_HRS;
                 break;
        case IS_FULL_TIME:
                empHrs=FULL_TIME_HRs;
                 break;
        default:
            empHrs=0;
    }
    let empwage=empHrs*WAGE_PER_HR;
    console.log("Daily Emp Wage:"+empwage);


    //UC3-Write a function to get working hours
    //Constants
    function getWorkingHrs(empCheck)
    {
        switch(empCheck)
       {
            case IS_PART_TIME:
                return PART_TIME_HRS;
            case IS_FULL_TIME:
                return FULL_TIME_HRs;
            default:
               return 0;
       }

    }
    let empHr=getWorkingHrs(empCheck);
    let empwages=empHr*WAGE_PER_HR;
    console.log("UC3 implimented functions:Dailywage is:" +empwages);


 



