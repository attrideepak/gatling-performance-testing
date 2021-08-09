var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "890",
        "ok": "-",
        "ko": "890"
    },
    "maxResponseTime": {
        "total": "944",
        "ok": "-",
        "ko": "944"
    },
    "meanResponseTime": {
        "total": "915",
        "ok": "-",
        "ko": "915"
    },
    "standardDeviation": {
        "total": "19",
        "ok": "-",
        "ko": "19"
    },
    "percentiles1": {
        "total": "916",
        "ok": "-",
        "ko": "916"
    },
    "percentiles2": {
        "total": "933",
        "ok": "-",
        "ko": "933"
    },
    "percentiles3": {
        "total": "941",
        "ok": "-",
        "ko": "941"
    },
    "percentiles4": {
        "total": "943",
        "ok": "-",
        "ko": "943"
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
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "-",
        "ko": "10"
    }
},
contents: {
"req_create-user-api-f1614": {
        type: "REQUEST",
        name: "Create user api",
path: "Create user api",
pathFormatted: "req_create-user-api-f1614",
stats: {
    "name": "Create user api",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "890",
        "ok": "-",
        "ko": "890"
    },
    "maxResponseTime": {
        "total": "944",
        "ok": "-",
        "ko": "944"
    },
    "meanResponseTime": {
        "total": "915",
        "ok": "-",
        "ko": "915"
    },
    "standardDeviation": {
        "total": "19",
        "ok": "-",
        "ko": "19"
    },
    "percentiles1": {
        "total": "916",
        "ok": "-",
        "ko": "916"
    },
    "percentiles2": {
        "total": "933",
        "ok": "-",
        "ko": "933"
    },
    "percentiles3": {
        "total": "941",
        "ok": "-",
        "ko": "941"
    },
    "percentiles4": {
        "total": "943",
        "ok": "-",
        "ko": "943"
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
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "-",
        "ko": "10"
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
