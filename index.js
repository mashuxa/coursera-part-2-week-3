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
        },
    function (next) {
            setTimeout(function () {
                next('ERROR');
            }, 2000);
        },
    function (next) {
            setTimeout(function () {
                next('ERROR');
            }, 3000);
        }
    ];

function completeTest() {  
        console.info('OK!');  
}



 
function parallel(arr, callback) {
    var result = [];


    arr.forEach(function (action, index) {
        function next(obj, data) {
            if (obj === null) {
                result[index] = data;
                console.log(result);
            } else {
                console.log(obj);
                //вызвать один раз callback(error) с первой ошибкой
                //callback(error);
            }
        }
        action(next);
    });



    //когда ВСЕ операции завершились 
    //callback(null, result);




}















parallel(actionsArray, completeTest);