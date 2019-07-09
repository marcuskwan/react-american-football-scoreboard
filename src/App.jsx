//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow.jsx";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, changeHomeScore] = useState(0);
  const [awayScore, changeAwayScore] = useState(0);
  // recycler function that lessens the load when you click a button, so you can call it with whatever values you'd like
  const changeScore = (teamScore, changeTeamScore, incrementAmount) => () =>
    changeTeamScore(teamScore + incrementAmount);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            // original
            // onClick={() => {
            //   changeHomeScore(homeScore + 6);
            // }}
            onClick={changeScore(homeScore, changeHomeScore, 6)}
            className="homeButtons__touchdown">
            Home Touchdown
          </button>
          <button
            // original
            // onClick={() => {
            //   changeHomeScore(homeScore + 3);
            // }}
            complicated
            onClick={changeScore(homeScore, changeHomeScore, 3)}
            className="homeButtons__fieldGoal">
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            // original
            // onClick={() => {
            //   changeAwayScore(awayScore + 6);
            // }}
            onClick={changeScore(awayScore, changeAwayScore, 7)}
            className="awayButtons__touchdown">
            Away Touchdown
          </button>
          <button
            // original
            // onClick={() => {
            //   changeAwayScore(awayScore + 3);
            // }}
            onClick={changeScore(awayScore,changeAwayScore,3)}
            className="awayButtons__fieldGoal">
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
