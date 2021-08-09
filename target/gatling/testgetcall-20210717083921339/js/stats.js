var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9489",
        "ok": "9489",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14753",
        "ok": "14753",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "10035",
        "ok": "10035",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1573",
        "ok": "1573",
        "ko": "-"
    },
    "percentiles1": {
        "total": "9514",
        "ok": "9514",
        "ko": "-"
    },
    "percentiles2": {
        "total": "9521",
        "ok": "9521",
        "ko": "-"
    },
    "percentiles3": {
        "total": "12403",
        "ok": "12403",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14283",
        "ok": "14283",
        "ko": "-"
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
    "count": 10,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.667",
        "ok": "0.667",
        "ko": "-"
    }
},
contents: {
"req_get-menu-items-2586a": {
        type: "REQUEST",
        name: "Get menu items",
path: "Get menu items",
pathFormatted: "req_get-menu-items-2586a",
stats: {
    "name": "Get menu items",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9489",
        "ok": "9489",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14753",
        "ok": "14753",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "10035",
        "ok": "10035",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1573",
        "ok": "1573",
        "ko": "-"
    },
    "percentiles1": {
        "total": "9514",
        "ok": "9514",
        "ko": "-"
    },
    "percentiles2": {
        "total": "9521",
        "ok": "9521",
        "ko": "-"
    },
    "percentiles3": {
        "total": "12403",
        "ok": "12403",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14283",
        "ok": "14283",
        "ko": "-"
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
    "count": 10,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.667",
        "ok": "0.667",
        "ko": "-"
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
