interface IStore {

}

class Store implements IStore{
  private _openCount: number = 0;

  get openCount(): number {
    return this._openCount;
  }

  setOpenCount(value: number): void {
    this._openCount = value;
  }
}

export default new Store();
