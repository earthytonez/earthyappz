export type PlayerStatusID =
  | "starving"
  | "dehydrated"
  | "drowning"
  | "exhausted"
  | undefined;

class PlayerStatus {
  get status() {
    return this._status;
  }

  set(status: PlayerStatusID) {
    this._status = status;
  }

  overridesTask(): boolean {
    return this._status != undefined;
  }

  notDrowning() {
    if (this._status === "drowning") {
      this._status = undefined;
    }
  }

  isDrowning(): boolean {
    return this._status === "drowning";
  }

  constructor(private _status: PlayerStatusID = undefined) {}
}

export default PlayerStatus;
