import Controller from "./controller";
import Pilot from "./pilot";
import Prefile from "./prefile";

export default interface ApiResponse {
  pilots: Pilot[];
  controllers: Controller[];
  atis: Controller[];
  prefiles: Prefile[];
}
