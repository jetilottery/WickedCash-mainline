define(require => {
  const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
  const displayList = require('skbJet/componentManchester/standardIW/displayList');
  const PrizeTableRow = require('game/components/PrizeTableRow');
  const meterData = require('skbJet/componentManchester/standardIW/meterData');
  const prizeData = require('skbJet/componentManchester/standardIW/prizeData');

  let prizeTableRows;
  let winSymbolCount = 0;
  let instantWinTriggered = false;

  function init() {
    prizeTableRows = [
      {Column01: displayList.row01Column01, Column02: displayList.row01Column02, Highlight: displayList.row01Highlight },
      {Column01: displayList.row02Column01, Column02: displayList.row02Column02, Highlight: displayList.row02Highlight },
      {Column01: displayList.row03Column01, Column02: displayList.row03Column02, Highlight: displayList.row03Highlight },
      {Column01: displayList.row04Column01, Column02: displayList.row04Column02, Highlight: displayList.row04Highlight },
      {Column01: displayList.row05Column01, Column02: displayList.row05Column02, Highlight: displayList.row05Highlight },
      {Column01: displayList.row06Column01, Column02: displayList.row06Column02, Highlight: displayList.row06Highlight },
      {Column01: displayList.row07Column01, Column02: displayList.row07Column02, Highlight: displayList.row07Highlight },
      {Column01: displayList.row08Column01, Column02: displayList.row08Column02, Highlight: displayList.row08Highlight },
      {Column01: displayList.row09Column01, Column02: displayList.row09Column02, Highlight: displayList.row09Highlight }
    ];

    prizeTableRows.forEach(function(row, index){
      PrizeTableRow.init(row, index);
    });
  }

  function reset() {
    winSymbolCount = 0;
    instantWinTriggered = false;
    prizeTableRows.forEach(function(row){
      PrizeTableRow.resetHighlight(row);
    }); 
  }

  function updatePrizeValues(){
    if (prizeTableRows){
      prizeTableRows.forEach(function(row){
        PrizeTableRow.updatePrizeValue(row);
      });
    }
  }

  function updateWinSymbolCount(){
    winSymbolCount = winSymbolCount+1;
    updateWinMeter();

    if (winSymbolCount > 2){
      highlightRow(winSymbolCount);
    }
  }

  function highlightRow(winSymbolCount){
    var arrayIndex = 11 - winSymbolCount;

    if (arrayIndex === 8){
      PrizeTableRow.highlight(prizeTableRows[arrayIndex]);
    }
    else{
      PrizeTableRow.resetHighlight(prizeTableRows[arrayIndex+1]);
      PrizeTableRow.highlight(prizeTableRows[arrayIndex]);
    }
  }

  function instantWin(){
    instantWinTriggered = true;
    updateWinMeter();  
  }

  function updateWinMeter(){
    var winValue = 0;

    if (instantWinTriggered){
      winValue = prizeData.prizeTable['IW'];
    }

    if (winSymbolCount > 2){
      winValue += prizeData.prizeTable['M' + winSymbolCount];
    }

    if (winValue){
      meterData.win = winValue;
    }
  }

  msgBus.subscribe('PrizeData.PrizeStructure', updatePrizeValues);
  msgBus.subscribe('Game.WinSymbol', updateWinSymbolCount);
  msgBus.subscribe('Game.InstantWin', instantWin);

  return {
    init,
    reset
  };
});
