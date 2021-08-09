package basic_simulation

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import org.slf4j.LoggerFactory

class CheckResponseAndExtractData extends Simulation{

  private val logger = LoggerFactory.getLogger(classOf[CheckResponseAndExtractData])

  val httpConf = http.baseUrl("https://gorest.co.in/")
    .header("Authorization","Bearer f229bd7e670feb12815bd524e987d259580aedf05b1f6a813fab43be5e2f7f36")


  val scn = scenario("Check corelation and extract data")

    .exec(http("Get all users")
    .get("public-api/users")
    .check(jsonPath("$.data[0].id").saveAs("userId"))
    .check(bodyString.saveAs("response")))


// Logging response using SLF4j
//    .exec(session => {
//      val response = session("response").as[String]
//      logger.info("***************************")
//      logger.debug(s"Response body: \n$response")
//      logger.info("***************************")
//      session
//    })

    .exec(http("Get Specific user")
        .get("public-api/users/${userId}")
        .check(jsonPath("$.data[0].id").is("2"))
        .check(jsonPath("$.data[0].id").is("Anasuya Chopra")))

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)




}
