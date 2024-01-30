
// 1st

const year = +prompt("Whats year is now?", 2024);
const result = year % 400 === 0 || year % 4 === 0 && year % 100 !== 0 ? "Leap year" : "Not leap year";
alert(result);

// 2nd

const y = +prompt("Whats year is now?", 2024);

if (y % 400 === 0) {
    alert("Leap year");
}

    else if (y % 4 === 0 && y % 100 !== 0) {
        alert("Leap year");
    }

    else {
        alert("Not leap year")
    };
