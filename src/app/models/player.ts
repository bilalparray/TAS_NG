export interface Players {
  _id: string;
  name: string;
  role: string;
  birthplace: string;
  battingstyle: string;
  bowlingstyle: string;
  image: string;
  born: string;
  debut: string;
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
