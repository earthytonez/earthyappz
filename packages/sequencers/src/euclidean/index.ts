// References:
//
// https://medium.com/code-music-noise/euclidean-rhythms-391d879494df
// http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf
// Figure 1: (a) The Euclidean rhythm E(3, 8) is the Cuban tresillo, (b) The Euclidean rhythm E(5, 8) is the

export default class Euclidean {
  constructor(
    private pulses: number,
    private steps: number,
    private offset: number = 0
  ) {}

  initialArray(): boolean[] {
    let retVal = [];
    for (let i = 0; i < this.steps; i++) {
      if (i < this.pulses) {
        retVal.push(true);
        continue;
      }
      retVal.push(false);
    }
    return retVal;
  }

  applyOffset(array: boolean[]): boolean[] {
    if (this.offset == 0) return array;

    for (let i = 0; i < this.offset; i++) {
      let el = array.pop();
      array.unshift(el!);
    }
    return array;
  }

  borklundRecursive(
    frontArray: boolean[][],
    backArray: boolean[][]
  ): boolean[] {
    if (backArray.length <= 1) {
      return frontArray.concat(backArray).flat();
    }

    let newFrontArray = [];
    while (frontArray.length > 0 && backArray.length > 0) {
      let frontPop = frontArray.pop();
      let backPop = backArray.pop();
      if (frontPop && backPop) {
        newFrontArray.push(frontPop?.concat(backPop));
      }
    }
    return this.borklundRecursive(newFrontArray, frontArray.concat(backArray));
  }

  applyBorklund(array: boolean[]): boolean[] {
    let frontArray = array
      .filter((a: boolean) => a == true)
      .map((a: boolean) => [a]);
    let backArray = array
      .filter((a: boolean) => a == false)
      .map((a: boolean) => [a]);

    return this.borklundRecursive(frontArray, backArray);
  }

  gates(): boolean[] {
    return this.applyOffset(this.applyBorklund(this.initialArray()));
  }

  gate(step: number): boolean {
    return this.gates()[step]!;
  }
}
