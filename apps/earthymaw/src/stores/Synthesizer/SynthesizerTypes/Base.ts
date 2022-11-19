import { observable, makeObservable, action } from "mobx";
import * as Tone from "tone";

import { IGatePlayAttributes } from "../../GateSequencer/IGatePlayAttributes";
import { ISequencerPlayAttributes } from "../../Sequencer/ISequencerPlayAttributes";
import ISynthDefinition from "../SynthLoader/ISynthDefinition";
import BaseParameter from "../../Parameter/Base";
import BasePlugin, { IPluginNode } from "../../Plugins/Base";
import { debug, info } from "../../../Util/logger";

import Machine from "../../Machines/Machine";

const SYNTHESIZER_PARAMS: string[] = ["pitchDecay", "oscillator_type"];

const ENVELOPE_PARAMS = [
  "envelopeattack",
  "envelopesustain",
  "envelopedecay",
  "enveloperelease",
];

export default class BaseSynthesizer extends Machine {
  name: string;
  slug: string;
  description: string;
  type: string;

  loading: boolean = true;

  synth: any;
  _parameters: Map<string, BaseParameter> = new Map();

  pluginNodes: IPluginNode[] = [];

  /*
   * I don't think the synthesizer needs to know about the userparameter store since plugins and parameters
   * are created with references to it.
   */
  constructor(SynthDefinition: ISynthDefinition) {
    super();
    this.name = SynthDefinition.name;
    this.description = SynthDefinition.description;
    this.slug = SynthDefinition.slug;
    this.type = SynthDefinition.type;

    makeObservable(this, {
      _parameters: observable,
      changeParameter: action.bound,
      parameterValue: action.bound,
      numericParameter: action.bound,
      stringParameter: action.bound,
    });
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  findParameterPlugin(pluginSlug: string) {
    return this.pluginNodes.find((plugin: any) => {
      return plugin.ToneJSNode.name === pluginSlug;
    });
  }

  changeParameter(parameterSlug: string, value: any) {
    if (!this._parameters) {
      throw new Error("No Parameters");
    }

    let parameter = this._parameters.get(parameterSlug);

    if (!parameter) {
      throw new Error("Invalid Parameter");
    }

    info(`SYNTHESIZER_BASE::changeParameter`, parameterSlug, this._parameters);
    info(`SYNTHESIZER_BASE::changeParameter`, SYNTHESIZER_PARAMS.join(" "));
    info(`SYNTHESIZER_BASE::changeParameter`, ENVELOPE_PARAMS.join(" "));

    if (SYNTHESIZER_PARAMS.includes(parameterSlug)) {
    }
    if (ENVELOPE_PARAMS.includes(parameterSlug)) {
      let paramsToSet: any = {};
      // TODO: Remove this it's just temporary.
      paramsToSet[parameterSlug.replace("envelope", "")] = value;

      this.synth.envelope.set(paramsToSet);
    }

    parameter.setValue(value);
    if (parameter && parameter.plugin) {
      let plugin = this.findParameterPlugin(parameter!.plugin);
      if (plugin) {
        let vals: any = {};
        vals[parameter.slug] = parameter.val;
        info(
          `SYNTHESIZER_BASE::changeParameter`,
          `Setting ${plugin.ToneJSNode.name} ${parameter.slug} to ${parameter.val}`
        );
        plugin.ToneJSNode.set(vals);
      }
    }
  }

  attachVolume(vol: Tone.Volume) {
    let headNode = this.synth;
    this.pluginNodes.forEach((pluginNode: IPluginNode) => {
      headNode.connect(pluginNode.ToneJSNode);
      headNode = pluginNode.ToneJSNode;
    });

    if (vol) {
      headNode.connect(vol);
    }
  }

  /* Here we have parameters, how does the data get back to the plugin, or wherever it 
     is supposed to go?  I think you change the userdata and everything pulls from that.
     */
  registerParameter(parameter: BaseParameter) {
    console.log(parameter);
    this._parameters?.set(parameter.slug, parameter);
  }

  registerParameters(parameters: BaseParameter[]): BaseSynthesizer {
    if (!parameters) {
      return this;
    }
    parameters.forEach((parameter: BaseParameter) => {
      this.registerParameter(parameter);
    });

    return this;
  }

  registerPlugins(plugins: BasePlugin[]): BaseSynthesizer {
    if (!plugins) {
      return this;
    }
    this.pluginNodes = plugins
      .map((plugin: BasePlugin): IPluginNode => {
        this.registerParameters(Array.from(plugin.parameters.values()));
        return plugin._node!;
      })
      .filter((plugin: any) => {
        return plugin !== undefined;
      });

    return this;
  }

  /*
   * calculateParameter gets the actual parameter data which should be decided based on three
   * values.
   *
   * 1. The default of the parameter.
   * 2. Any user changes to the value of the parameter.
   * 3. Any modulation changes to the value of the parameter.
   */
  parameterValue(slug: string): any {
    if (this._parameters.has(slug)) {
      return this._parameters.get(slug)!.val;
    } else {
      console.warn(
        `parameterValue slug: ${slug} does not exist in parameters: ${this._parameters}`
      );
    }
  }

  numericParameter(slug: string): number {
    return this.parameterValue(slug) as number;
  }

  stringParameter(slug: string): string {
    return this.parameterValue(slug) as string;
  }

  play(_gate: IGatePlayAttributes, params: ISequencerPlayAttributes) {
    let pitch = params.note;

    if (!pitch) {
      pitch = Tone.Frequency(this.numericParameter("pitch"), "midi");
    }

    if (this.stringParameter("oscillator_type")) {
      this.synth.set({
        oscillator: {
          type: this.stringParameter("oscillator_type"),
        },
      });
    }

    if (this.numericParameter("oscillator_pitch")) {
      pitch = Tone.Frequency(
        pitch.toMidi() + this.numericParameter("oscillator_pitch")
      );
    }

    debug(`BaseSynthesizer`, "play", {
      pitch: pitch,
      time: params.time,
      params: params,
    });

    const length = "8n";

    console.log(`TRIGGER_ATTACH_RELEASE, ${pitch}, ${length}, ${params.time}`);
    this.synth.triggerAttackRelease(pitch, length, params.time);
  }
}
