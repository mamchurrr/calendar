let d = (date.getDate() < 10)? '0' + date.getDate() : date.getDate();									
    let m = ((date.getMonth() + 1) < 10)? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    // Порядок вывода даты (День, Месяц, Год)
    let defDate = d + '.' + m + '.' + date.getFullYear();
    
    let dateSelect = myForm.selectedD;
    
    let inputBegin = document.getElementById('date-begin');
    let inputFinal = document.getElementById('date-final');

    function apply(){
        if(inputBegin.value == inputFinal.value) {
            document.getElementById('form-header').innerHTML = inputBegin.value;
            dateSelect.options[0].selected = true; 
            date = new Date(); 
        }else {
            document.getElementById('form-header').innerHTML = inputBegin.value + ' - ' + inputFinal.value;
            dateSelect.options[0].selected = true; 
            date = new Date(); 
        }  
    };

    function cancel(){
        document.getElementById('form-header').innerHTML = defDate; 
        dateSelect.options[1].selected = true;   
        inputBegin.value = defDate;
        inputFinal.value = defDate;
        date = new Date();
    };
    
    function defaultDate(){
        document.getElementById('form-header').innerHTML = defDate;
        inputBegin.value = defDate;
        inputFinal.value = defDate;   
    };
    
    defaultDate();
    
    function selectPeriod(){
        if(dateSelect.options[2].selected){
            let yesterdayMs = date.getTime() - 1000*60*60*24*1; // Offset by one day;
            let time = date.setTime( yesterdayMs );

            let thetoday = (date.getDate() < 10)? '0' + date.getDate() : date.getDate();									
            let themonth = ((date.getMonth() + 1) < 10)? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
            let ystrd = thetoday + '.' + themonth + '.' + date.getFullYear();

            document.getElementById('form-header').innerHTML = ystrd;
            inputBegin.value = ystrd;
            inputFinal.value = ystrd;
            date = new Date();
        }else if(dateSelect.options[3].selected){
            let sevenDaysMs = date.getTime() - 1000*60*60*24*7; // Offset by seven days;
            let time = date.setTime( sevenDaysMs );

            let thetoday = (date.getDate() < 10)? '0' + date.getDate() : date.getDate();									
            let themonth = ((date.getMonth() + 1) < 10)? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
            let sevenDays = thetoday + '.' + themonth + '.' + date.getFullYear();

            document.getElementById('form-header').innerHTML = sevenDays + ' - ' + defDate;
            inputBegin.value = sevenDays;
            inputFinal.value = defDate;
            date = new Date();
        }else if(dateSelect.options[4].selected){
            let thirtyDaysMs = date.getTime() - 1000*60*60*24*30; // Offset by seven days;
            let time = date.setTime( thirtyDaysMs );

            let thetoday = (date.getDate() < 10)? '0' + date.getDate() : date.getDate();									
            let themonth = ((date.getMonth() + 1) < 10)? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
            let thirtyDays = thetoday + '.' + themonth + '.' + date.getFullYear();

            document.getElementById('form-header').innerHTML = thirtyDays + ' - ' + defDate;
            inputBegin.value = thirtyDays;
            inputFinal.value = defDate;
            date = new Date();
        }else if(dateSelect.options[5].selected){
            let ninetyDaysMs = date.getTime() - 1000*60*60*24*90; // Offset by seven days;
            let time = date.setTime( ninetyDaysMs );

            let thetoday = (date.getDate() < 10)? '0' + date.getDate() : date.getDate();									
            let themonth = ((date.getMonth() + 1) < 10)? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
            let ninetyDays = thetoday + '.' + themonth + '.' + date.getFullYear();

            document.getElementById('form-header').innerHTML = ninetyDays + ' - ' + defDate;
            inputBegin.value = ninetyDays;
            inputFinal.value = defDate;
            date = new Date();
        }else {
            defaultDate();
        }
    };
    
    dateSelect.addEventListener("change", selectPeriod);
