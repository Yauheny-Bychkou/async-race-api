class RequestWinners {
  async createWinner(id: number, time: number) {
    const wins = 1;
    await fetch("http://127.0.0.1:3000/winners", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, wins: wins, time: time }),
    });
  }
}
export default RequestWinners;
