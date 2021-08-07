const team = {
  _players: [
    {
      firstName: 'Mark',
      lastName: 'Walhberg',
      age: 11
    },
    {
      firstName: 'Bruce',
      lastName: 'Willis',
      age: 12
    },
    {
      firstName: 'Jhonny',
      lastName: 'Depp',
      age: 13
    }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'RedSkins',
      teamPoints: 30,
      opponentPoints: 42
    },
    {
      opponent: 'Dolphins',
      teamPoints: 27,
      opponentPoints: 30
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame(opp, myPts, oppPts) {
    const game =  {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Titans', 100, 98);
team.addGame('Orioles', 120, 100);
team.addGame('Worms', 200, 20);

console.log(team.players);
console.log(team.games);
