package basic_simulation


import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._


class TestPostCall extends Simulation{
  //create request


  val request = http.baseUrl("https://reqres.in/")
    .contentTypeHeader("application/json")
  //scenario
  val scn = scenario("Create User")
    .exec(http("Create user api")
      .post("/api/users")
        .body(RawFileBody("postRequestBody.json")).asJson
      .check(status is 201))
      .pause(3)
      .exec(http("get user")  //combining requests for e2e flows
      .get("/api/users/2")
          .check(status is 200))

  //setup
  setUp(scn.inject(atOnceUsers(10))).protocols(request)

}
