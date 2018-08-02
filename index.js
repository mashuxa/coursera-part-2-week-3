var actionsArray = [
    function (next) {
            setTimeout(function () {
                next(null, '5000ms'); 
                console.log('5000ms');
            }, 5000); 
            
        },
    function (next) {
            setTimeout(function () {
                next(null, '500ms'); 
                console.log('500ms');
            }, 500);
        },
    function (next) {
            setTimeout(function () {
                next(null, '1000ms'); 
                console.log('1000ms');
            }, 1000);
        }
    ];

function completeTest() {  
        console.info('OK!');  
}

function next(){
    
}

var result = [];
function parallel(arr, callback) {
//    var result = [];
    arr.forEach(function (action, index){
        try {
            var actionResult = action(next);
//когда функция выполнится записать результат в массив результатов и вызвать функцию next(null, actionResult)
            result[index] = actionResult;
        } catch(error) {
            console.log(error);
//когда функция выполнится с ошибкой вызвать функцию next(error);   
        }         
    });
    console.log(result);

}















parallel(actionsArray, completeTest);