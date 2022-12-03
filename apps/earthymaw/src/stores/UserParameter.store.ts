import { info } from "../Util/logger";

export default class UserParameterStore {
  _userParameters: Map<
    string,
    string | number | Array<string | number> | boolean
  > = new Map();

  get(
    key: string
  ): string | number | Array<string | number> | undefined | boolean {
    return this._userParameters.get(key);
  }

  // `track.1.synthesizer.${parameterName}`
  get parameterKeyRegex() {
    return /(track|global)+\.[0-9]+\.(synthesizer|sequencer|arranger|track|global)+\.[a-z]+/;
  }
  get globalParameterKeyRegex() {
    return /(track|global)+\.[a-z]+/;
  }

  has(key: string) {
    console.log(this._userParameters);
    info(
      "UserParameter.store",
      `Checking to load key: ${key} -- ${this._userParameters.has(key)}`
    );

    return this._userParameters.has(key);
  }

  async remove(key: string) {
    this._userParameters.delete(key);
    localStorage.removeItem(key);
  }

  set(
    key: string,
    value: string | number | Array<string | number> | boolean
  ): boolean {
    if (
      key.match(this.parameterKeyRegex) ||
      key.match(this.globalParameterKeyRegex)
    ) {
      this._userParameters.set(key, value);
      localStorage.setItem(
        "user_parameters",
        JSON.stringify(Object.fromEntries(this._userParameters))
      );
      return true;
    }
    return false;
  }

  constructor() {
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    let _user_parameters = localStorage.getItem("user_parameters");
    let user_parameters: any;
    if (_user_parameters && _user_parameters !== "undefined") {
      user_parameters = JSON.parse(_user_parameters!);
      Object.keys(user_parameters).forEach((key: string) => {
        this.set(key, user_parameters[key]);
      });
    }
  }
}
