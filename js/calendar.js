

let today = null; // 準備拿來裝當下日期物件
let list = document.querySelector('.list');
let year = document.getElementById('year_month');

// get current month
const init = () => {
    today = new Date(); // 當下日期物件
    renderCurrentMonth();
}

const renderCurrentMonth = () => {
    console.log('yy')

    let days = new Date(today.getFullYear(), today.getMonth(), 1); // 當月第一天日期物件
    year.textContent = today.getFullYear()+ '/' + (today.getMonth()+1) ;

    const renderDates = (date) => {
        let cell = document.createElement("div");
        cell.className = 'date'
        cell.textContent = date.getDate();
        list.append(cell);
    }

    // 取得當月不足的前月幾個天數 推算到星期天
    let formerDate = new Date(days.getFullYear(), days.getMonth(), 1); // 另個當月第一天日期物件 用來處理上月剩餘天數
    formerDate.setDate(formerDate.getDate()-days.getDay()) // 7.1減去四天 會回推到6.27 剩餘天數的第一天

    while(formerDate<days){  // 日期可以直接比較
        renderDates(formerDate)
        formerDate.setDate(formerDate.getDate()+1)
    }


    // 取得當月所有日期
    while(days.getMonth()===today.getMonth()){ //跟當下月份不同就停止
        renderDates(days)
        days.setDate(days.getDate()+1)
    }

    // 取得當月不足的後幾天數
    while(days.getDay()>0){
        renderDates(days)
        days.setDate(days.getDate()+1)
    }


}


init();
