package basic_simulation

import io.gatling.core.Predef.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.language.postfixOps

class RampUpUserSimulation extends Simulation{

  val httpConf = http.baseUrl("https://gorest.co.in/")
    .header("Authorization","Bearer f229bd7e670feb12815bd524e987d259580aedf05b1f6a813fab43be5e2f7f36")

  val csvFeeder = csv("userdata.csv").circular



  def getAUserRequest()={
    repeat(1){
      feed(csvFeeder)
        .exec(http("get a user")
          .get("public-api/users/${userid}")
          .check(status in (200,304))
        )
    }
  }

  val scn = scenario("Raamp up simulation scenario")
    .exec(getAUserRequest())



  setUp(
    scn.inject(
      nothingFor(5 seconds),  //do nthing for 5 seconds
      constantUsersPerSec(10)during(10),
      rampUsersPerSec(1)to(5) during(20)
    )
  ).protocols(httpConf)

}
