package basic_simulation

import com.google.gson.annotations.Expose
import com.google.gson.annotations.SerializedName

class MenuPojo {

  @SerializedName("show_deals")
  @Expose var showDeals = false
  @SerializedName("show_commute")
  @Expose var showCommute = false
  @SerializedName("show_contact_us")
  @Expose var showContactUs = false
  @SerializedName("show_pedl_subscription")
  @Expose var showPedlSubscription = false
  @SerializedName("policy_url")
  @Expose var policyUrl: String = null
  @SerializedName("show_loyalty")
  @Expose var showLoyalty = false
  @SerializedName("show_referral")
  @Expose var showReferral = false
  @SerializedName("list_your_car_url")
  @Expose var listYourCarUrl: String = null
//  @SerializedName("policies")
//  @Expose var policies: Nothing = null

}
