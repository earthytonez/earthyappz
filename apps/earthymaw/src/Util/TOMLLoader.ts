export default class TOMLLoader {
  async fetch(requiredFile: any): Promise<string | undefined> {
    if (requiredFile === undefined) return;

    let sequencer;
    try {
      sequencer = await fetch(requiredFile);
    } catch (err) {
      console.error(`Failed to fetch: ${requiredFile}: ${err}`);
      return;
    }

    let sequencerText: string = "";
    if (sequencer) {
      sequencerText = await sequencer.text();
    }

    if (!sequencerText.startsWith("name")) {
      console.log(`${requiredFile}`);
      console.log(sequencerText);
      throw new Error("sequencerText did not start with name");
    }

    return sequencerText;
  }
}
