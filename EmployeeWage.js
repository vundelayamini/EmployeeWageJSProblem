//UC1 Ability to check Employees is present or absent.
//Constants
{
    console.log("Welcome to Employee Wage Problem \n")
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
   


} 



