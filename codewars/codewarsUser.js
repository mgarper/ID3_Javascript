// TODO: create the User class/object
// it must support rank, progress and the incProgress(rank) method

class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  get getRank() {
    return this.rank;
  }

  set setRank(_rank) {
    if (_rank === 0 || _rank < -8 || _rank > 8) {
      throw new Error("There is no such activity rank");
    }
    this.rank = _rank;
  }

  get getProgress() {
    return this.progress;
  }

  set setProgress(_progress) {
    if (_progress < 0 || _progress > 100) {
      throw new Error("Invalid progress value.");
    }
    this.progress = _progress;
  }

  incProgress(actRank) {
    if (actRank === 0 || actRank < -8 || actRank > 8) {
      throw new Error("There is no such activity rank");
    } else {
      if (
        (this.rank !== 1 && this.rank - 1 === actRank) ||
        (this.rank === 1 && this.rank - 2 === actRank)
      ) {
        this.progress++;
      } else if (this.rank < actRank) {
        let dif = actRank - this.rank;
        if (this.rank < 0 && actRank > 0) {
          dif--;
        }
        this.progress += 10 * dif * dif;
      } else if (this.rank !== 8 && this.rank === actRank) {
        this.progress += 3;
      }
      while (this.progress >= 100) {
        this.progress -= 100;
        this.rank++;

        if (this.rank === 0) {
          this.rank++;
        }

        if (this.rank === 8) {
          this.progress = 0;
        }
      }
    }
  }
}
