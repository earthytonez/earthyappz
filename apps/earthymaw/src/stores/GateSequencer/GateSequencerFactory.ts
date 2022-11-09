import GateSequencer from "./GateSequencer";
import GateSequencerDefinition from "./GateSequencerLoader/GateSequencerDefinition";
import GateSequencerLoader from "./GateSequencerLoader/GateSequencerLoader";

import ParameterStore from "../Parameter.store";

import TOMLLoader from "../../Util/TOMLLoader";
import MusicFeaturesStore from "stores/MusicFeatures.store";

export default class GateSequencerFactory {
  tomlLoader: TOMLLoader;
  private gateSequencerDefinition?: GateSequencerDefinition;
  private gateSequencer?: GateSequencer;
  private gateSequencerWithPlugins?: GateSequencer;
  private gateSequencerWithParameters?: GateSequencer;

  definition(slug: string) {
    return require(`./Definitions/${slug}.toml`);
  }

  constructor(
    private parameterStore: ParameterStore,
    private musicFeaturesStore: MusicFeaturesStore
  ) {
    this.tomlLoader = new TOMLLoader();
  }

  async loadTOMLIntoDefinition(sequencerTOML: string): Promise<GateSequencer> {
    const sequencerLoader = new GateSequencerLoader(sequencerTOML);
    this.gateSequencerDefinition = await sequencerLoader.load();
    return new GateSequencer(
      this.gateSequencerDefinition,
      this.musicFeaturesStore.musicSectionLength.val
    );
  }

  async loadSequencerParameters(trackID: string) {
    /* 2. Load parameters into sequencer */
    let sequencerParameters = this.parameterStore.fetchForGateSequencer(
      this.gateSequencerDefinition!,
      trackID
    );

    this.gateSequencerWithParameters =
      this.gateSequencer!.registerParameters(sequencerParameters);
  }

  loadSequencerPlugins() {
    this.gateSequencerWithPlugins = this.gateSequencerWithParameters;
  }

  async getGateSequencer(
    sequencerSlug: string,
    trackID: string
  ): Promise<GateSequencer | undefined> {
    /* 1. Create new sequencer from definition */

    let sequencerTOML = await this.tomlLoader.fetch(
      this.definition(sequencerSlug)
    );

    if (!sequencerTOML) {
      throw new Error(`sequencer TOML must be defined for load`);
    }

    this.gateSequencer = await this.loadTOMLIntoDefinition(sequencerTOML);

    if (!this.gateSequencer) {
      throw new Error(`Failure loading sequencer TOML into definition`);
    }

    this.loadSequencerParameters(trackID);
    this.loadSequencerPlugins();

    /* 2. Load plugins into sequencer */
    // console.log(`PLUGINS: ${sequencerDefinition.plugins}`);
    // if (sequencerDefinition.plugins) {
    //   sequencerWithPlugins = sequencerWithParameters.registerPlugins(
    //     pluginStore.fetch(sequencerDefinition.plugins, trackID)
    //   );
    // } else {
    //   sequencerWithPlugins = sequencerWithParameters;
    // }

    /* 3. Return Sequencer */
    return this.gateSequencerWithPlugins;

    /*********************/
    // Old way of doing it
    // const sequencer = new SYNTH_FROM_STRING[type](vol, audioContext);
  }
}
