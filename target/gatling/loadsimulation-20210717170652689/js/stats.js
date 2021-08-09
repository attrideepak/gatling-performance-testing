var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15",
        "ok": "0",
        "ko": "15"
    },
    "minResponseTime": {
        "total": "189",
        "ok": "-",
        "ko": "189"
    },
    "maxResponseTime": {
        "total": "545",
        "ok": "-",
        "ko": "545"
    },
    "meanResponseTime": {
        "total": "303",
        "ok": "-",
        "ko": "303"
    },
    "standardDeviation": {
        "total": "122",
        "ok": "-",
        "ko": "122"
    },
    "percentiles1": {
        "total": "234",
        "ok": "-",
        "ko": "234"
    },
    "percentiles2": {
        "total": "383",
        "ok": "-",
        "ko": "383"
    },
    "percentiles3": {
        "total": "526",
        "ok": "-",
        "ko": "526"
    },
    "percentiles4": {
        "total": "541",
        "ok": "-",
        "ko": "541"
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
    "count": 15,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.25",
        "ok": "-",
        "ko": "1.25"
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
        "total": "15",
        "ok": "0",
        "ko": "15"
    },
    "minResponseTime": {
        "total": "189",
        "ok": "-",
        "ko": "189"
    },
    "maxResponseTime": {
        "total": "545",
        "ok": "-",
        "ko": "545"
    },
    "meanResponseTime": {
        "total": "303",
        "ok": "-",
        "ko": "303"
    },
    "standardDeviation": {
        "total": "122",
        "ok": "-",
        "ko": "122"
    },
    "percentiles1": {
        "total": "234",
        "ok": "-",
        "ko": "234"
    },
    "percentiles2": {
        "total": "383",
        "ok": "-",
        "ko": "383"
    },
    "percentiles3": {
        "total": "526",
        "ok": "-",
        "ko": "526"
    },
    "percentiles4": {
        "total": "541",
        "ok": "-",
        "ko": "541"
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
    "count": 15,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.25",
        "ok": "-",
        "ko": "1.25"
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
