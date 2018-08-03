var actionsArray = [
    function (next) {
        setTimeout(function () {
            next(null, '5000ms');
        }, 5000);

        },
    function (next) {
        setTimeout(function () {
            next(null, '500ms');
        }, 500);
        },
    function (next) {
        setTimeout(function () {
            next(null, '1000ms');
        }, 1000);
        }
//    ,
//    function (next) {
//        setTimeout(function () {
//            next('ERROR');
//        }, 2000);
//        },
//    function (next) {
//        setTimeout(function () {
//            next('ERROR');
//        }, 3000);
//        }
    ];

function completeTest() {
    console.info('OK!');
}




function parallel(arr, callback) {
    var result = [];
    var counter = 0;

    arr.forEach(function (action, index) {
        function next(obj, data) {
            if (obj === null) {
                result[index] = data;
                counter++; 
                if(counter === arr.length) {
                    callback(null, result); 
                }
            } else {
                callback(error);
            }
        }
        action(next);
    });
}









parallel(actionsArray, completeTest);
