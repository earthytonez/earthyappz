import Arranger from "./Arranger";

import RootStore from "./Root.store";
import { SynthesizerDefinition } from "./Synthesizer/SynthLoader/SynthLoader";
import BaseParameter from "./Parameter/ParameterTypes/Base";

import SequencerDefinition from "./Sequencer/SequencerLoader/SequencerDefinition";
import GateSequencerDefinition from "./GateSequencer/GateSequencerLoader/GateSequencerDefinition";

import GATE_SEQUENCER_PARAMETER_DEFINITIONS from "./Parameter/Definitions/GateSequencer";
import SEQUENCER_PARAMETER_DEFINITIONS from "./Parameter/Definitions/Sequencer";
import SYNTHESIZER_PARAMETER_DEFINITIONS from "./Parameter/Definitions/Synthesizer";

/*
 * Defines Parameters not associated with a plugin.
 */

interface ParameterSlug {
  Slug: string;
  Options: { [option: string]: string | number };
}

// interface IMachineDefinition {
//   parameters?: string[];
//   type: string;
// }

export default class ParameterStore {
  constructor(public rootStore: RootStore | undefined) {}

  makeSequencerParameterList(sequencer: SequencerDefinition): ParameterSlug[] {
    let retVal: ParameterSlug[] = [];

    if (sequencer.parameters) {
      retVal = retVal.concat(
        sequencer.parameters.map((parameter: string) => {
          return { Slug: parameter, Options: {} };
        })
      );
    }

    // if (sequencer.type === "step") {
    //   retVal.push({ Slug: "trigger_set", Options: {} });
    //   retVal.push({ Slug: "gate_set", Options: {} });
    // }

    if (sequencer.type === "arpeggiator") {
      retVal.push({ Slug: "arpeggiator_type", Options: {} });
    }

    if (sequencer.type === "drone" || sequencer.type === "randomStep") {
      retVal.push({ Slug: "min_gate", Options: {} });
      retVal.push({ Slug: "max_gate", Options: {} });
      retVal.push({ Slug: "min_interval", Options: {} });
      retVal.push({ Slug: "max_interval", Options: {} });
    }

    if (sequencer.type === "directional") {
      retVal.push({ Slug: "step_pitch_shift", Options: {} });
      retVal.push({ Slug: "step_pitch_shift_direction", Options: {} });
    }

    return retVal.filter((parameter: ParameterSlug | undefined) => {
      return parameter !== undefined;
    });
  }

  makeGateSequencerParameterList(
    gateSequencer: GateSequencerDefinition
  ): ParameterSlug[] {
    let retVal: ParameterSlug[] = [];

    if (gateSequencer.parameters) {
      retVal = retVal.concat(
        gateSequencer.parameters.map((parameter: string) => {
          return { Slug: parameter, Options: {} };
        })
      );
    }

    // if (gateSequencer.type === "step") {
    //   retVal.push({ Slug: "trigger_set", Options: {} });
    //   retVal.push({ Slug: "gate_set", Options: {} });
    // }

    if (gateSequencer.type === "drone" || gateSequencer.type === "randomStep") {
      retVal.push({ Slug: "min_gate", Options: {} });
      retVal.push({ Slug: "max_gate", Options: {} });
      retVal.push({ Slug: "min_interval", Options: {} });
      retVal.push({ Slug: "max_interval", Options: {} });
    }

    if (gateSequencer.type === "fixedStep") {
      retVal.push({
        Slug: "step_gate_array",
        Options: {
          min: 0,
          max: 100,
        },
      });
    }

    console.log(gateSequencer);
    if (
      gateSequencer.gateTrigger.parameterSets[0]?.triggerType === "stepInterval"
    ) {
      retVal.push({ Slug: "step_interval", Options: {} });
    }

    if (
      gateSequencer?.gateTrigger?.parameterSets[0]?.fillList &&
      gateSequencer?.gateTrigger?.parameterSets[0]?.fillList.length > 0
    ) {
      retVal.push({
        Slug: "selected_fill",
        Options: {
          min: 0,
          max: gateSequencer?.gateTrigger?.parameterSets[0]?.fillList.length,
        },
      });
    }
    return retVal.filter((parameter: ParameterSlug | undefined) => {
      return parameter !== undefined;
    });
  }

  makeSynthParameterList(synthesizer: SynthesizerDefinition): ParameterSlug[] {
    let retVal: ParameterSlug[] = [];

    if (synthesizer.parameters) {
      retVal = retVal.concat(
        synthesizer.parameters.map((parameter: string) => {
          return { Slug: parameter, Options: {} };
        })
      );
    }
    return retVal.filter((parameter: ParameterSlug | undefined) => {
      return parameter !== undefined;
    });
  }

  fetchForSequencer(
    sequencer: SequencerDefinition,
    trackID: string
  ): BaseParameter[] {
    let parametersToGet = this.makeSequencerParameterList(sequencer);

    let parameters = parametersToGet.map((parameter: ParameterSlug) => {
      let p = SEQUENCER_PARAMETER_DEFINITIONS[parameter.Slug];
      if (p) {
        return p!(
          trackID,
          this.rootStore?.userParameterStore!,
          parameter.Options
        );
      } else {
        console.error(`p is undefined parameter.Slug = ${parameter.Slug}`);
        return undefined;
      }
    });
    return parameters.filter((p) => p !== undefined)! as BaseParameter[];
  }

  fetchForGateSequencer(
    gateSequencer: GateSequencerDefinition,
    trackID: string
  ): BaseParameter[] {
    let parametersToGet = this.makeGateSequencerParameterList(gateSequencer);

    let parameters = parametersToGet.map((parameter: ParameterSlug) => {
      let p = GATE_SEQUENCER_PARAMETER_DEFINITIONS[parameter.Slug];
      if (p) {
        return p!(
          trackID,
          this.rootStore?.userParameterStore!,
          parameter.Options
        );
      } else {
        console.error(`p is undefined parameter.Slug = ${parameter.Slug}`);
        return undefined;
      }
    });
    return parameters.filter((p) => p !== undefined)! as BaseParameter[];
  }

  fetchForSynth(
    synthesizer: SynthesizerDefinition,
    trackID: string
  ): BaseParameter[] {
    let parametersToGet = this.makeSynthParameterList(synthesizer);

    let parameters = parametersToGet.map((parameter: ParameterSlug) => {
      return SYNTHESIZER_PARAMETER_DEFINITIONS[parameter.Slug]!(
        trackID,
        this.rootStore?.userParameterStore!,
        parameter.Options
      );
    });
    return parameters!;
  }

  fetchForArranger(arranger: Arranger): BaseParameter[] {
    console.log(arranger);
    return [];
  }
}
