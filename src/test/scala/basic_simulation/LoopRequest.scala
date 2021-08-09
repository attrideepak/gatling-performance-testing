package basic_simulation

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class LoopRequest extends Simulation{

  val httpConf = http.baseUrl("http://reqres.in")

  def getAllUsersRequest()={
    repeat(2){
      exec(http("get all users")
       .get("/api/users?page=2")
      .check(status is 200)
      )
    }
  }

  def getAUserRequest()={
    repeat(2){
      exec(http("get a user")
      .get("/api/users/2")
      .check(status is 200)
      )
    }
  }

  def addUser()={
    repeat(2){
      exec(http("add a user")
        .post("/api/users")
        .body(RawFileBody("postRequestBody.json")).asJson
        .check(status is 201)
      )
    }
  }

  val scn = scenario("user request scenario")
    .exec(getAllUsersRequest())
    .pause(2)
    .exec(getAUserRequest())
    .pause(2)
    .exec(addUser())

  setUp(scn.inject(atOnceUsers(10))).protocols(httpConf)

}
