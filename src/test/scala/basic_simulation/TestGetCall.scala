package basic_simulation

import com.google.gson.Gson
import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import org.bouncycastle.util.test.TestFailedException
import org.slf4j.LoggerFactory
import org.scalatest.Assertions._

class TestGetCall extends Simulation{

  private val logger = LoggerFactory.getLogger(classOf[TestGetCall])
  var response:String=" "




  //create request
  val request = http.baseUrl("https://api.zoomcar.com")

  //scenario
  val scn = scenario("Get Menu")
    .exec(http("Get menu items")
    .get("/v4/menus")
        .queryParam("platform",value = "android")
        .queryParam("version",value = "4.3.9")
        .queryParam("device_id",value = "adfsfa232")
        .queryParam("city",value = "bangalore")
        .queryParam("device_name",value = "asd")
    .check(status is 200)
    .check(bodyString.saveAs("response"))
    ).exec(
      session => {
        response = session("response").as[String]
        val dummy = new Gson().fromJson(response, classOf[GetMenuPojo])
        logger.info("***************************")
        logger.info("List your car url: " + dummy.menu.listYourCarUrl)
        logger.info("Policy url: " + dummy.menu.policyUrl)
        assert(dummy.status.toString == "1", "Passed")
        assert(dummy.menu.listYourCarUrl == "https://www.zoomcar.com/zap/subscribe?platform=mobileapp&auth_required=true", "Incorrect url")
        session
      }
    )


  //setup
  setUp(scn.inject(atOnceUsers(1))).protocols(request).toString

}

