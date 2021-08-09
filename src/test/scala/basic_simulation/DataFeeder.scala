package basic_simulation

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import org.slf4j.LoggerFactory

class DataFeeder extends Simulation{
  private val logger = LoggerFactory.getLogger(classOf[DataFeeder])
  val httpConf = http.baseUrl("https://gorest.co.in/")
    .header("Authorization","Bearer f229bd7e670feb12815bd524e987d259580aedf05b1f6a813fab43be5e2f7f36")

  val csvFeeder = csv("userdata.csv").circular



  def getAUserRequest()={
    repeat(7){
      feed(csvFeeder)
      .exec(http("get a user")
        .get("public-api/users/${userid}")
        .check(status in (200,304))
          .check(jsonPath("$.data.name").is("${name}"))
      )
    }
  }

  val scn = scenario("user request scenario")
    .exec(getAUserRequest())
    .pause(2)


  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

}
