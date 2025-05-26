let result = document.getElementById('result');
result.style.display = 'none';

function calculateAge() {
    const dob = new Date(document.getElementById("birthDate").value);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }
    document.getElementById('res_year').innerText = years;
    document.getElementById('res_month').innerText = months;
    document.getElementById('res_day').innerText = days;
result.style.removeProperty('display');
}


