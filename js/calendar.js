// calendar.js

let state = null; // 準備拿來裝當下日期物件
let list = document.querySelector('.list');
let year = document.getElementById('year_month');

const init = () => {
    state={
        today:new Date()
    }
    renderData();
}

const getPreMonth = () => {
    
    state.today.setMonth(state.today.getMonth() - 1);
    renderData();
}

const getNextMonth = () => {
    
    state.today.setMonth(state.today.getMonth() + 1);
    renderData();
}

const showData = (day) => {
    let cell = document.createElement('div');
    cell.className = day.getMonth()===state.today.getMonth()? 'date':'other';
    cell.textContent = day.getDate();
    list.append(cell)
}

const renderData = () => {
    let firstDay = new Date(state.today.getFullYear(), state.today.getMonth(), 1);
    year.textContent = firstDay.getFullYear()+'/'+(firstDay.getMonth()+1);
    list.textContent = '';
    // get premonth last days
    let date = new Date(firstDay.getFullYear(), firstDay.getMonth(), 1);
    date.setDate(date.getDate()-firstDay.getDay()); // pre first day

    // render 6/27~6/30
    while(date < firstDay) {
        showData(date);
        date.setDate(date.getDate() + 1);
    }
    
    // get current month render 7/1~7/31
    while(date.getMonth() === state.today.getMonth()) {
        showData(date);
        date.setDate(date.getDate() + 1);
    }

    // get last week 因為7/31剛好禮拜六...
    while(date.getDay()>0){
        showData(date);
        date.setDate(date.getDate() + 1);
    }

}


init();
