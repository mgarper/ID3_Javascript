// Create a Warrior class
// It must support level, rank, experience, achievements, training(event), and battle(enemy_level) methods
class Warrior {
  constructor() {
    this._level = 1;
    this._rank = "Pushover";
    this._experience = 100;
    this._achievements = [];
  }

  level() {
    this._level = Math.floor(this._experience / 100);
    return this._level;
  }

  experience() {
    return this._experience;
  }

  rank() {
    let ranks = [
      "Pushover",
      "Novice",
      "Fighter",
      "Warrior",
      "Veteran",
      "Sage",
      "Elite",
      "Conqueror",
      "Champion",
      "Master",
      "Greatest",
    ];
    this.level();
    this._rank = ranks[Math.floor(this._level / 10)];
    return this._rank;
  }

  achievements() {
    return this._achievements;
  }

  battle(num) {
    if (num >= 1 && num <= 100) {
      this._level = Math.floor(this._experience / 100);
      let diff = Math.abs(num - this._level);
      if (num < this._level) {
        if (diff === 1) {
          this._experience += 5;
          return "A good fight";
        } else {
          return "Easy fight";
        }
      } else if (num > this._level) {
        if (diff >= 5) {
          if (Math.floor(this._level / 10) !== Math.floor(num / 10)) {
            return "You've been defeated";
          } else {
            this._experience += 20 * diff * diff;
            return "An intense fight";
          }
        } else {
          this._experience += 20 * diff * diff;
          return "An intense fight";
        }
      } else {
        this._experience += 10;
        return "A good fight";
      }
    } else {
      return "Invalid level";
    }
  }

  training(trainList) {
    this.level();
    if (trainList[2] <= this._level) {
      this._experience += trainList[1];
      if (this._experience > 10000) {
        this._experience = 10000;
      }
      this._achievements.push(trainList[0]);
      return trainList[0];
    } else {
      return "Not strong enough";
    }
  }
}
