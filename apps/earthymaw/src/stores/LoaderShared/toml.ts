export async function fetchTOML(fileName: any): Promise<string | undefined> {
  if (fileName === undefined) return;
  let sequencer = await fetch(require(`./Definitions/${fileName}.toml`));
  let sequencerText = await sequencer.text();

  if (!sequencerText.startsWith("name")) {
    console.log(`./Definitions/${fileName}.toml`);
    console.log(sequencerText);
    throw new Error("sequencerText did not start with name");
  }

  return sequencerText;
}
