var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7",
        "ok": "6",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "60",
        "ok": "60",
        "ko": "204"
    },
    "maxResponseTime": {
        "total": "204",
        "ok": "111",
        "ko": "204"
    },
    "meanResponseTime": {
        "total": "90",
        "ok": "71",
        "ko": "204"
    },
    "standardDeviation": {
        "total": "50",
        "ok": "18",
        "ko": "0"
    },
    "percentiles1": {
        "total": "65",
        "ok": "63",
        "ko": "204"
    },
    "percentiles2": {
        "total": "89",
        "ok": "67",
        "ko": "204"
    },
    "percentiles3": {
        "total": "176",
        "ok": "100",
        "ko": "204"
    },
    "percentiles4": {
        "total": "198",
        "ok": "109",
        "ko": "204"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6,
    "percentage": 86
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
    "count": 1,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.333",
        "ok": "2",
        "ko": "0.333"
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
        "ok": "6",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "60",
        "ok": "60",
        "ko": "204"
    },
    "maxResponseTime": {
        "total": "204",
        "ok": "111",
        "ko": "204"
    },
    "meanResponseTime": {
        "total": "90",
        "ok": "71",
        "ko": "204"
    },
    "standardDeviation": {
        "total": "50",
        "ok": "18",
        "ko": "0"
    },
    "percentiles1": {
        "total": "65",
        "ok": "63",
        "ko": "204"
    },
    "percentiles2": {
        "total": "89",
        "ok": "67",
        "ko": "204"
    },
    "percentiles3": {
        "total": "176",
        "ok": "100",
        "ko": "204"
    },
    "percentiles4": {
        "total": "198",
        "ok": "109",
        "ko": "204"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6,
    "percentage": 86
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
    "count": 1,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.333",
        "ok": "2",
        "ko": "0.333"
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
