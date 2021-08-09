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
        "total": "64",
        "ok": "64",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "842",
        "ok": "842",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "421",
        "ok": "421",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "330",
        "ok": "330",
        "ko": "-"
    },
    "percentiles1": {
        "total": "397",
        "ok": "397",
        "ko": "-"
    },
    "percentiles2": {
        "total": "710",
        "ok": "710",
        "ko": "-"
    },
    "percentiles3": {
        "total": "842",
        "ok": "842",
        "ko": "-"
    },
    "percentiles4": {
        "total": "842",
        "ok": "842",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 17,
    "percentage": 85
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 15
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
        "total": "5",
        "ok": "5",
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
        "total": "670",
        "ok": "670",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "842",
        "ok": "842",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "747",
        "ok": "747",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "65",
        "ok": "65",
        "ko": "-"
    },
    "percentiles1": {
        "total": "712",
        "ok": "712",
        "ko": "-"
    },
    "percentiles2": {
        "total": "818",
        "ok": "818",
        "ko": "-"
    },
    "percentiles3": {
        "total": "842",
        "ok": "842",
        "ko": "-"
    },
    "percentiles4": {
        "total": "842",
        "ok": "842",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7,
    "percentage": 70
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 30
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
        "total": "2.5",
        "ok": "2.5",
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
        "total": "64",
        "ok": "64",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "124",
        "ok": "124",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "percentiles1": {
        "total": "97",
        "ok": "97",
        "ko": "-"
    },
    "percentiles2": {
        "total": "101",
        "ok": "101",
        "ko": "-"
    },
    "percentiles3": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "percentiles4": {
        "total": "122",
        "ok": "122",
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
        "total": "2.5",
        "ok": "2.5",
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
