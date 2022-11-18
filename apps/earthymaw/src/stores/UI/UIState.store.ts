import { makeObservable, action, observable } from "mobx";
import { IMachineTypeSlug } from "stores/Machines/MachineTypes/IMachineType";

export default class UIStateStore {
  objectEditIsOpen: boolean = false;
  objectEditing: string | undefined = "";
  objectEditType: IMachineTypeSlug | undefined = undefined;
  objectEditTrack: string | "musicFeature" | undefined;

  machineBrowserOpen: boolean = false;
  machinesBrowsing: IMachineTypeSlug | undefined = undefined;

  trackEditIsOpen: boolean = false;
  trackEditID?: string = undefined;

  closeMachineBrowser() {
    this.machineBrowserOpen = false;
    this.machinesBrowsing = undefined;
  }

  setMachinesBrowsing(machineType: IMachineTypeSlug) {
    this.machinesBrowsing = machineType;
  }

  browseMachines(
    machineType: IMachineTypeSlug | undefined,
    machineBrowserOpen?: boolean
  ) {
    if (machineType === undefined) {
      machineBrowserOpen = false;
    }
    this.machineBrowserOpen = true;
    if (machineBrowserOpen === false) {
      this.machineBrowserOpen = false;
    }
    this.machinesBrowsing = machineType;
  }

  toggleTrackEdit(open: boolean, machineTrack?: string | "musicFeature") {
    console.log("Toggling Track Edit");
    if (!open) {
      this.trackEditIsOpen = false;
      this.trackEditID = undefined;
      return;
    }

    this.trackEditID = machineTrack;
    this.trackEditIsOpen = !this.trackEditIsOpen;
  }

  toggleObjectEdit(
    open: boolean,
    machineTrack?: string | "musicFeature",
    machineType?: IMachineTypeSlug,
    machineSlug?: string
  ) {
    if (!open) {
      this.objectEditIsOpen = false;
      return;
    }

    this.objectEditTrack = machineTrack;
    this.objectEditing = machineSlug;
    this.objectEditType = machineType;

    this.objectEditIsOpen = !this.objectEditIsOpen;
  }

  constructor() {
    makeObservable(this, {
      objectEditIsOpen: observable,
      objectEditing: observable,
      trackEditID: observable,
      trackEditIsOpen: observable,
      machineBrowserOpen: observable,
      machinesBrowsing: observable,
      browseMachines: action.bound,
      closeMachineBrowser: action.bound,
      toggleObjectEdit: action.bound,
      toggleTrackEdit: action.bound,
      setMachinesBrowsing: action.bound,
    });
  }
}
