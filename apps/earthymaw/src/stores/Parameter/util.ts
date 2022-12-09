import SEQUENCER_PARAMETER_DEFINITIONS from "./Definitions/Sequencer";
import BaseParameter from "./ParameterTypes/Base";

export function loadSequencerParametersForTest(
  params: string[]
): Map<string, BaseParameter> {
  let retVal = new Map();
  params.forEach((param: string) => {
    retVal.set(param, SEQUENCER_PARAMETER_DEFINITIONS[param]);
  });
  return retVal;
}
