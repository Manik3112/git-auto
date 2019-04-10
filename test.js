// var mysql = require('mysql')
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "secret_spa"
// });

// con.connect(function(err) {
//     if (err) {
//         throw err
//     };

    console.log("Connected!");

    function db1(callback) {
        var first = "SELECT `stripe_key` FROM `technicians` where stripe_key <> ' ' ";
        // let x = callback(null,"first")
        // return x
        return setTimeout(function(){
            return callback(null,"first")
        },2000)
        // con.query(first, callback)
    }

    function db2(callback) {
        var second = "SELECT `access_token` FROM `technicians` where access_token <> ' ' ";
        callback(null,second)
        // con.query(second, callback);
    }

    function db3(callback) {
        var third = "SELECT `link_one_time_password` FROM `technicians` where link_one_time_password <> ' ' ";
        callback(null,third)
        // con.query(third, callback)
    }

    var taskList = [
        db1(function(err, result) {
            console.log('call from db1')
            if (err) return err
            console.log("result--->",result)
            return (result)

        }),
        db2(function(err, result) {
            console.log('call from db2')
            if (err) return (err)
            console.log("result--->",result)
            return (result)

        }),
        db3(function(err, result) {
            console.log('call from db3')
            if (err) return ({
                err
            })
            console.log("result--->",result)
            return (result)
        })
    ]

    function asyncIteration(taskList, callback) {
        let result = []
        taskList.forEach(element => {
           let x = element
           result.push(element)
        });
        callback(null,result)
    }
    asyncIteration(taskList, (err, data) => {
        if (err) {
            console.log("err:=======>", err);
        } else {
            console.log("here result:========>", data);
        }
    })
// });