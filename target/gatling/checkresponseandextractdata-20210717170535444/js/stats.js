var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "60",
        "ok": "215",
        "ko": "60"
    },
    "maxResponseTime": {
        "total": "215",
        "ok": "215",
        "ko": "60"
    },
    "meanResponseTime": {
        "total": "138",
        "ok": "215",
        "ko": "60"
    },
    "standardDeviation": {
        "total": "78",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "138",
        "ok": "215",
        "ko": "60"
    },
    "percentiles2": {
        "total": "176",
        "ok": "215",
        "ko": "60"
    },
    "percentiles3": {
        "total": "207",
        "ok": "215",
        "ko": "60"
    },
    "percentiles4": {
        "total": "213",
        "ok": "215",
        "ko": "60"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
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
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    }
},
contents: {
"req_get-all-users-fe8c4": {
        type: "REQUEST",
        name: "Get all users",
path: "Get all users",
pathFormatted: "req_get-all-users-fe8c4",
stats: {
    "name": "Get all users",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "215",
        "ok": "215",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "215",
        "ok": "215",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "215",
        "ok": "215",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "215",
        "ok": "215",
        "ko": "-"
    },
    "percentiles2": {
        "total": "215",
        "ok": "215",
        "ko": "-"
    },
    "percentiles3": {
        "total": "215",
        "ok": "215",
        "ko": "-"
    },
    "percentiles4": {
        "total": "215",
        "ok": "215",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    },"req_get-specific-us-a8e32": {
        type: "REQUEST",
        name: "Get Specific user",
path: "Get Specific user",
pathFormatted: "req_get-specific-us-a8e32",
stats: {
    "name": "Get Specific user",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "60",
        "ok": "-",
        "ko": "60"
    },
    "maxResponseTime": {
        "total": "60",
        "ok": "-",
        "ko": "60"
    },
    "meanResponseTime": {
        "total": "60",
        "ok": "-",
        "ko": "60"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "60",
        "ok": "-",
        "ko": "60"
    },
    "percentiles2": {
        "total": "60",
        "ok": "-",
        "ko": "60"
    },
    "percentiles3": {
        "total": "60",
        "ok": "-",
        "ko": "60"
    },
    "percentiles4": {
        "total": "60",
        "ok": "-",
        "ko": "60"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
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
