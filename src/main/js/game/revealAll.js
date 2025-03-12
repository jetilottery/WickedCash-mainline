define(require => {
  const Timeline = require('com/gsap/TimelineLite');
  const gameConfig = require('skbJet/componentManchester/standardIW/gameConfig');
  const displayList = require('skbJet/componentManchester/standardIW/displayList');

  const playerNumbers = require('game/components/playerNumbers');

  let revealAllTimeline;

  function start() {
    const revealPlayer = playerNumbers.revealAll();

    revealAllTimeline = new Timeline();
    displayList.playerNumbers.interactiveChildren = false;

    //Then the player numbers
    revealAllTimeline.add(
      new Timeline({ tweens: revealPlayer, stagger: gameConfig.autoPlayPlayerNumberInterval })
    );

    return revealAllTimeline;
  }

  function stop() {
    // re-enable all interaction at the parent container level
    displayList.playerNumbers.interactiveChildren = true;
    // kill the revealAll timeline if active
    if (revealAllTimeline) {
      revealAllTimeline.kill();
      revealAllTimeline = undefined;
    }
  }

  return {
    start,
    stop,
  };
});
