import BaseParameter from "../ParameterTypes/Base";
import UserParameterStore from "stores/UserParameter.store";

export interface IHash {
  [details: string]: (
    trackID: string,
    userParameterStore: UserParameterStore,
    options: { [key: string]: number | string }
  ) => BaseParameter;
}
