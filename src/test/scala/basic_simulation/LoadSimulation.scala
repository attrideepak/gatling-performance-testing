package basic_simulation

import com.sun.org.slf4j.internal.LoggerFactory
import io.gatling.core.Predef.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class LoadSimulation extends Simulation{
  //private val logger = LoggerFactory.getLogger(classOf[DataFeeder])
  //http.proxy(Proxy("localhost",8888))  : proxy requests to fiddler
  val httpConf = http.baseUrl("https://gorest.co.in/")
    .header("Authorization","Bearer f229bd7e670feb12815bd524e987d259580aedf05b1f6a813fab43be5e2f7f36")

  val csvFeeder = csv("userdata.csv").circular



  def getAUserRequest()={
    repeat(1){
      feed(csvFeeder)
        .exec(http("get a user")
          .get("public-api/users/${userid}")
          .check(status in (200,304))
          .check(jsonPath("$.data.name").is("${name}"))
        )
    }
  }

  val scn = scenario("load simulation scenario")
    .exec(getAUserRequest())
    .pause(2)


  setUp(
    scn.inject(
      nothingFor(5),  //do nthing for 5 seconds
      atOnceUsers(5),  //start with 5 users
      rampUsers(10)   //add 10 users in 10 seconds
      during(d = 10)
    )
  ).protocols(httpConf)
}
