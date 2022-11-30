import BaseParameter from "../Parameter/ParameterTypes/Base";
import { debug } from "../../Util/logger";

export default class Parameterizable {
  _parameters: Map<string, BaseParameter> = new Map();

  incrementParameter(parameterSlug: string) {
    if (!this._parameters) {
      throw new Error("No Parameters");
    }

    let parameter = this._parameters.get(parameterSlug);
    if (parameter) {
      parameter.increment();
    }
  }

  decrementParameter(parameterSlug: string) {
    if (!this._parameters) {
      throw new Error("No Parameters");
    }

    let parameter = this._parameters.get(parameterSlug);
    if (parameter) {
      parameter.decrement();
    }

    if (!parameter) {
      throw new Error("Invalid Parameter");
    }
  }

  changeParameter(parameterSlug: string, value: any) {
    debug(
      "SEQUENCER",
      `Changing Parameter ${parameterSlug} to ${value}`,
      this._parameters
    );

    if (!this._parameters) {
      throw new Error("No Parameters");
    }

    let parameter = this._parameters.get(parameterSlug);

    if (!parameter) {
      throw new Error("Invalid Parameter");
    }

    parameter.setValue(value);
  }

  get editParameters(): BaseParameter[] {
    return Array.from(this._parameters!.values());
  }

  /* 
    Here we have parameters, how does the data get back to the plugin, or wherever it 
    is supposed to go?  I think you change the userdata and everything pulls from that.
  */
  registerParameter(parameter: BaseParameter) {
    this._parameters?.set(parameter.slug, parameter);
  }

  registerParameters(parameters: BaseParameter[]): any {
    if (!parameters) {
      return this;
    }
    parameters.forEach((parameter: BaseParameter) => {
      this.registerParameter(parameter);
    });

    return this;
  }
}
