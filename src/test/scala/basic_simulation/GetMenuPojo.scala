package basic_simulation

import com.google.gson.annotations.Expose
import com.google.gson.annotations.SerializedName

class GetMenuPojo {



  @SerializedName("status")
  @Expose var status: Integer=0
  @SerializedName("menu")
  @Expose var menu: MenuPojo = null
  @SerializedName("show_zoom_air")
  @Expose var showZoomAir : Boolean=false



}
