const UNDERWEIGHT = 20;
const NORMAL = 25.0;
let weight;
weight = +prompt("nhap chi so can nang kg");
let height;
height = +prompt("nhap chi so chieu cao m");
let bmi= weight/(height*height);
if ( bmi < UNDERWEIGHT ){
    document.write("Underweight");
}else {
    if ( bmi < NORMAL) {
        document.write("Normal");
    }else if (bmi <30.0) {
        document.write("Overweight");
    }else
        document.write("Obese");
}
