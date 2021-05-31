
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

    //UC4 Calculate Wages for a month
    //Constants
    const NUM_OF_WORKING_DAYS=20;
    let totalEmpWage=0;
    
    for(let i=0;i<NUM_OF_WORKING_DAYS;i++)
    {
        let empCheck=Math.floor(Math.random()*10)%3;
        let empHr=getWorkingHrs(empCheck);
        let empWages=empHr*WAGE_PER_HR;
        totalEmpWage+=empWages;
    }
    console.log("UC4:TototalEmpWage for"+NUM_OF_WORKING_DAYS+"days:" +totalEmpWage);
    
    //UC5- Calculating wages till number of working days or total working hours per month
    //Constants
    const MAX_HRS_IN_MONTH =100;
    const NUM_OF_WORKING_DAYS =10;
    let totalEmpHrs=0;
    let totalWorkingDays=0;
    while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
    {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random()*10)%3;
        totalEmpHrs += getWorkingHrs(empCheck);
    }
    let EmpWage = totalEmpHrs*WAGE_PER_HR;
    console.log("UC5 :Total working days  : "+totalWorkingDays+"Total hours : "+totalEmpHrs+" employee wage : " + empWage);
 
    //UC6- Store the Daily Wage along with the Total Wage and storing into array
    //Constants
    const MAX_HRS_IN_MONTH =160;
    const NUM_OF_WORKING_DAYS =20;

    let totalEmpHrs=0;
    let totalWorkingDays=0;
    //Creating new array
    let empWageArray=new Array();
    function GetDailyWage(empHr)
    {
        return empHr*WAGE_PER_HR;
    }
    while(totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
    {
        let empCheck = Math.floor(Math.random()*10)%3;
        let empHrs=getWorkingHrs(empCheck);
        empWageArray.push(GetDailyWage(empHrs));
        totalEmpHrs+=empHrs;
        totalWorkingDays++;

    }
    let empWage = totalWorkingHrs*WAGE_PER_HR;
    console.log("UC6 -Total Days:" +totalWorkingDays+"Total Hrs:"+totalEmpHrs+"Emp Wage:" +empWage);
    //Array functions
     //7A - Calc Total Wage Using Array for Each or Reduce Method
    let totEmpWage = 0;
    function sum(dailyWage) 
    {
        totEmpWage += dailyWage;
    }
     empDailyWageArray.forEach(sum)
     console.log("UC7A- Total Working Days : " + totalWorkingDays + "Total Hrs : " + totalEmpHrs + "Total Employee Wage : " + totEmpWage);

    function totalWages(totalWage, dailyWage) 
    {
        return totalWage + dailyWage;
    }
    console.log("UC7A-Emp Wage with reduce:"+ empDailyWageArr.reduce(totalWages,0));
    //UC7B-show the day along with daily wage using array map helper function
    let dailyCntr=0;
    functionmapDayWithWage(dailyWage)
    {
        dailyCntr++;
        return dailyCntr +"="+dailyWage;

    }
    let mapDayWithWageArr= empDailyWageArr.map(mapDayWithWage);
    console.log("UC7B-Daily Wage Map");
    console.log(mapDayWithWageArr);
    //UC7C-Show Days when full time wage of 160 werw earned
    function fulltimeWage(dailyWage)
    {
        return dailyWage.includes("160");

    }
    let fullDayWageArr=mapDayWithWageArr.filter(fulltimeWage);
    console.log("UC7C- Daily Wage filter when fulltime wage earned");
    console.log(fullDayWageArr);
    //UC7D-Find the first occurence when full time wage was earned using find functior
    function findFulltimeWage(dailyWage)
    {
        return dailyWage.includes("160");
    }
    console.log("First time FullTime wage was Earned on a Day : " + mapWithWageArray.find(fullTimeWage));
    //E - Check if Every Element of Full Time Wage is truly holding Full time Wage
    console.log("Check All Element have Full Time Wage : " + fullDayWageArray.every(  fullTimeWage));

     //7F - Check if There is any PartTime Wage
     function isAnyPartTimeWage(dailyWage) 
     {
         return dailyWage.includes("80")
     }
      console.log("Check if Any Part Time Wage : " + mapWithWageArray.some(isAnyPartTimeWage));

    //7G - Find the Number of Days the Employee Worrked
    function totalDaysEmpWorked(numOfDays, dailyWage) 
    {
        if (dailyWage > 0) 
        {

             return numOfDays + 1;
       }
       return numOfDays;
   }
    console.log("Number of Days Employee Worked : " + empDailyWageArray.reduce(totalDaysEmpWorked, 0))

   function calulateDailyWage(empHrs) 
   {
       return empHrs * WAGE_PER_HOUR;
   }