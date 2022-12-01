import UserParameterStore from "stores/UserParameter.store";
import BaseParameter, {
  IBaseParameterParams,
  ParameterFieldTypes,
} from "./Base";

import { makeObservable, action, observable, computed } from "mobx";

import ParameterValue from "../ParameterValue/ParameterValue";

import { info } from "../../../Util/logger";

interface IStringEnumParameterParams extends IBaseParameterParams {
  options: string[];
  default: string;
}

export default class StringEnumParameter extends BaseParameter {
  type: string = "string_enum";
  fieldType: ParameterFieldTypes = "enumSelector";
  options: string[];
  default: string;
  userParameterStore: UserParameterStore;
  parameterValue: ParameterValue<string>;

  constructor(params: IStringEnumParameterParams) {
    super({
      userParameterStore: params.userParameterStore,
      title: params.title,
      name: params.name,
      key: params.key,
      plugin: params.plugin,
      description: params.description,
      style: params.style,
    });

    this.options = params.options;
    this.default = params.default;
    if (params.plugin) {
      this.plugin = params.plugin;
    }

    this.parameterValue = new ParameterValue<string>(
      params.userParameterStore,
      params.key,
      params.default,
      !!params.changedAtSection
    );

    this.userParameterStore = params.userParameterStore;

    this.fieldOptions = {
      options: this.options,
    };

    makeObservable(this, {
      val: computed,
      options: observable,
      setValue: action.bound,
    });
  }

  setValue(newValue: string): boolean {
    info(`STRING_ENUM_PARAMETER`, `${this.name} setValue ${newValue}`);
    if (this.options.includes(newValue)) {
      info(`STRING_ENUM_PARAMETER::setValue`, "", this.options);
      info(`STRING_ENUM_PARAMETER::setValue`, newValue);
      return this.parameterValue.setValue(newValue);
    }
    return false;
  }

  value(): string {
    return this.parameterValue.val;
  }

  get val(): string {
    return this.parameterValue.val;
  }
}
