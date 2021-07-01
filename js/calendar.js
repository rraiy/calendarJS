

let today = null; // 準備拿來裝當下日期物件
let list = document.querySelector('.list');
let year = document.getElementById('year_month');

// get current month
const init = () => {
    today = new Date(); // 當下日期物件
    renderDays();
}

const renderDays = () => {
    let days = new Date(today.getFullYear(), today.getMonth(), 1); // 當月第一天日期物件
    year.textContent = today.getFullYear()+ '/' + (today.getMonth()+1) ;

    // 取得當月所有日期
    while(days.getMonth()===today.getMonth()){ //跟當下月份不同就停止
        let cell = document.createElement("div");
        cell.className = 'date'
        cell.textContent = days.getDate();
        list.append(cell);

        days.setDate(days.getDate()+1)
    }
}


init();
