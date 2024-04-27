export interface Players {
  _id: string;
  name: string;
  role: string;
  ranking: string;
  image: string;
  url: string;
  route: string;
  runsScored: string;
  ballsFaced: string;
  wicketsTaken: string;
  lastFour: string;
  scores: {
    runs: [string];
    wickets: [string];
    balls: [string];
    lastfour: [string];
    career: {
      runs: [string];
      wickets: [string];
      balls: [string];
    };
  };
}
export interface Mom {
  id: number;
  name: string;
  text: string;
  image: string;
}
