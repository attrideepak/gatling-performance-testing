var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "61",
        "ok": "61",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "900",
        "ok": "900",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "460",
        "ok": "460",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "383",
        "ok": "383",
        "ko": "-"
    },
    "percentiles1": {
        "total": "469",
        "ok": "469",
        "ko": "-"
    },
    "percentiles2": {
        "total": "823",
        "ok": "823",
        "ko": "-"
    },
    "percentiles3": {
        "total": "890",
        "ok": "890",
        "ko": "-"
    },
    "percentiles4": {
        "total": "898",
        "ok": "898",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10,
    "percentage": 50
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
        "total": "4",
        "ok": "4",
        "ko": "-"
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
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "822",
        "ok": "822",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "900",
        "ok": "900",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "842",
        "ok": "842",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "30",
        "ok": "30",
        "ko": "-"
    },
    "percentiles1": {
        "total": "823",
        "ok": "823",
        "ko": "-"
    },
    "percentiles2": {
        "total": "859",
        "ok": "859",
        "ko": "-"
    },
    "percentiles3": {
        "total": "895",
        "ok": "895",
        "ko": "-"
    },
    "percentiles4": {
        "total": "899",
        "ok": "899",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10,
    "percentage": 100
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
        "total": "2",
        "ok": "2",
        "ko": "-"
    }
}
    },"req_get-user-f0d4f": {
        type: "REQUEST",
        name: "get user",
path: "get user",
pathFormatted: "req_get-user-f0d4f",
stats: {
    "name": "get user",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "61",
        "ok": "61",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "115",
        "ok": "115",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "percentiles1": {
        "total": "65",
        "ok": "65",
        "ko": "-"
    },
    "percentiles2": {
        "total": "94",
        "ok": "94",
        "ko": "-"
    },
    "percentiles3": {
        "total": "107",
        "ok": "107",
        "ko": "-"
    },
    "percentiles4": {
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
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
        "total": "2",
        "ok": "2",
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
