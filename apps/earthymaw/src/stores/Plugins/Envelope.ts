import BasePlugin from "./Base";
import NumericParameter from "../Parameter/ParameterTypes/NumericParameter";
import UserParameterStore from "../UserParameter.store";
import BaseParameter from "stores/Parameter/ParameterTypes/Base";

export default class FilterPlugin extends BasePlugin {
  public name: string = "Filter";
  public slug: string = "filter";
  filterType: "highpass" | "lowpass";

  constructor(
    trackID: string,
    userParameterStore: UserParameterStore,
    options: any
  ) {
    super(trackID, userParameterStore, options);

    this.filterType = options.subType || "highpass";
  }

  parameterKey(parameterName: string): string {
    return `track.${this._trackID}.synthesizer.${this.slug}.${parameterName}`;
  }

  get parameters(): Map<string, BaseParameter> {
    let parameterMap = new Map<string, BaseParameter>();
    parameterMap.set(
      "attack",
      new NumericParameter({
        userParameterStore: this._userParameterStore,
        name: "Envelope Attack",
        title: "Att",
        key: this.parameterKey("attack"),
        default: 0.001,
        plugin: "Envelope",
        description: "type of filter",
        min: 0,
        max: 2,
        style: {
          orientation: "vertical",
        },
      })
    );

    // Attack Curve
    // "linear";
    // "exponential";
    // "sine";
    // "cosine";
    // "bounce";
    // "ripple";
    // "step";

    parameterMap.set(
      "decay",
      new NumericParameter({
        userParameterStore: this._userParameterStore,
        name: "Envelope Decay",
        title: "Dec",
        key: this.parameterKey("decay"),
        default: 0.4,
        plugin: "Envelope",
        description: "decay of envelope",
        min: 0,
        max: 2,
        style: {
          orientation: "vertical",
        },
      })
    );

    parameterMap.set(
      "sustain",
      new NumericParameter({
        userParameterStore: this._userParameterStore,
        name: "Envelope Sustain",
        title: "Sus",
        key: this.parameterKey("sustain"),
        default: 0.01,
        plugin: "Envelope",
        description: "type of filter",
        min: 0,
        max: 1,
        style: {
          orientation: "vertical",
        },
      })
    );

    parameterMap.set(
      "release",
      new NumericParameter({
        userParameterStore: this._userParameterStore,
        name: "Envelope Release",
        title: "Rel",
        key: this.parameterKey("release"),
        default: 1.4,
        plugin: "Envelope",
        description: "release envelope",
        min: 0,
        max: 5,
        style: {
          orientation: "vertical",
        },
      })
    );

    return parameterMap;
  }

  node() {
    return undefined;
  }
}
