import { StationDetails } from "../../entities/product/station-details.model";
import { HrfDetails } from "./hrf-details.model";

export class ViewStationDetail extends StationDetails{
    hrfDetails !: HrfDetails;
}