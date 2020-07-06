'use strict';

const express = require('express');
const router = express.Router();
const snappy = require('snappy');

const Data = require('../../models/Data');

let arrayWithAllValues = [];
let count = 0;

router.post('/bodyDB', (req, res) => {
    const newData = new Data({
        _id: count,
        bodyDB: req.body.bodyDB,
    });

    newData
        .save()
        .then(data => console.log(count))
        .catch(err => console.log(err));

    count++;
});

router.get('/bodyDB', (req, res) => {
    Data.find({ _id: { $gt: count } })
        .lean()
        .limit(2)
        .then(obj => {
            let array = obj[0].bodyDB.data;
            var buffer = Buffer.from(array);
            snappy.uncompress(buffer, { asBuffer: false }, function (err, original) {
                res.json(arrayWithAllValues.push(JSON.parse(original)))
            })
        })
        .catch(err => res.json(err));

    count = count + 2;
});


var http = require('http');
var url = 'http://localhost:5000/dataComma/bodyDB'
var completed_requests = 0;

const getLang = function (req) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < 50; i++) {
            http.get(url, function (res) {
                completed_requests++;
                if (completed_requests == 50) {
                    // All download done, process responses array
                    resolve(res);
                }
            });
        }
    })
}

router.get('/performanceGetAllDocs', (req, res) => {
    let lang = getLang(req).then(() => {
        res.json(arrayWithAllValues);
    }).catch((error) => {
        // handle error here
        throw new Error(error);
    });
})


module.exports = router;