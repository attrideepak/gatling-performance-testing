var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7",
        "ok": "3",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "57",
        "ok": "65",
        "ko": "57"
    },
    "maxResponseTime": {
        "total": "219",
        "ok": "219",
        "ko": "138"
    },
    "meanResponseTime": {
        "total": "98",
        "ok": "117",
        "ko": "84"
    },
    "standardDeviation": {
        "total": "56",
        "ok": "72",
        "ko": "32"
    },
    "percentiles1": {
        "total": "67",
        "ok": "67",
        "ko": "71"
    },
    "percentiles2": {
        "total": "108",
        "ok": "143",
        "ko": "93"
    },
    "percentiles3": {
        "total": "195",
        "ok": "204",
        "ko": "129"
    },
    "percentiles4": {
        "total": "214",
        "ok": "216",
        "ko": "136"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 43
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 4,
    "percentage": 57
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.333",
        "ok": "1",
        "ko": "1.333"
    }
},
contents: {
"req_get-a-user-65d8d": {
        type: "REQUEST",
        name: "get a user",
path: "get a user",
pathFormatted: "req_get-a-user-65d8d",
stats: {
    "name": "get a user",
    "numberOfRequests": {
        "total": "7",
        "ok": "3",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "57",
        "ok": "65",
        "ko": "57"
    },
    "maxResponseTime": {
        "total": "219",
        "ok": "219",
        "ko": "138"
    },
    "meanResponseTime": {
        "total": "98",
        "ok": "117",
        "ko": "84"
    },
    "standardDeviation": {
        "total": "56",
        "ok": "72",
        "ko": "32"
    },
    "percentiles1": {
        "total": "67",
        "ok": "67",
        "ko": "71"
    },
    "percentiles2": {
        "total": "108",
        "ok": "143",
        "ko": "93"
    },
    "percentiles3": {
        "total": "195",
        "ok": "204",
        "ko": "129"
    },
    "percentiles4": {
        "total": "214",
        "ok": "216",
        "ko": "136"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 43
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 4,
    "percentage": 57
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.333",
        "ok": "1",
        "ko": "1.333"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
