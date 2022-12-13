const student = "Строев Максим Александрович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

let team5S = prompt ("Enter the real account of the first team");

let team1S = prompt ("Enter the real account of the second team");

let team5C = prompt ("Enter the estimated score of the first team");

let team1C = prompt ("Enter the estimated score of the second team");

if (team5S==team5C && team1S==team1C){
alert ("Счёт был угадан верно!");
} else if (
((team5S>team1S) && (team5C>team1C))
||
((team5S==team1S) && (team5C==team1C))
||
((team5S<team1S) && (team5C<team1C))
) {
    alert ("Счёт не угадали, но исход угадали");
 } else {
    alert ("Ни счёта, ни исхода не угадали");
 }


