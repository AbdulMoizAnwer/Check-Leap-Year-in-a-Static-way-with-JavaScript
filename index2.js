// write a program that works out whether if a given year is a leap year or not?

var year = 2003;
debugger;
if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log('It is a leap year.');
        }else{
            console.log('It is not a leap year.');
        }
    }else{
        console.log('It is a leap year.');
    }
}else{
    console.log('It is not a leap year.');
}
