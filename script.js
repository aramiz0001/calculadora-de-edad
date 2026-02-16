document.getElementById('btn-calculate').addEventListener('click', () => {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    if (!day || !month || !year) return alert("Completa todos los campos");

    const birthday = new Date(year, month - 1, day);
    const today = new Date();

    let diffYears = today.getFullYear() - birthday.getFullYear();
    let diffMonths = today.getMonth() - birthday.getMonth();
    let diffDays = today.getDate() - birthday.getDate();

   
    if (diffDays < 0) {
        diffMonths--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        diffDays += lastMonth.getDate();
    }

    if (diffMonths < 0) {
        diffYears--;
        diffMonths += 12;
    }

    document.getElementById('res-years').innerText = diffYears;
    document.getElementById('res-months').innerText = diffMonths;
    document.getElementById('res-days').innerText = diffDays;
});