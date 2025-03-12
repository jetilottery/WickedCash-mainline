define((require) => {
  const PIXI = require('com/pixijs/pixi');
  const prizeData = require('skbJet/componentManchester/standardIW/prizeData');
  const SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');
  const textStyles = require('skbJet/componentManchester/standardIW/textStyles');
  const gameConfig = require('skbJet/componentManchester/standardIW/gameConfig');
  const resources = require('skbJet/component/pixiResourceLoader/pixiResourceLoader');
  let prizeTableValuesWin;
  
  function init(row, index) {
    row.prizeDescription = Object.keys(prizeData.prizeTable)[index];

    var winSymbol = new PIXI.Sprite();
    winSymbol.texture = PIXI.Texture.fromFrame('symbolWinSmall');
    winSymbol.x -= winSymbol.getLocalBounds().width/2;

    var prizeText = resources.i18n.Game.prizeText.split('{img}');

    var prefixText = prizeText[0];
    if (prefixText.indexOf('{0}') > -1){
      prefixText = prefixText.replace('{0}', row.prizeDescription.slice(1));
    }
    row.prizeTextPrefix = new PIXI.Text(prefixText, textStyles.prizeTableValues);
    row.prizeTextPrefix.style.align = 'right';
    row.prizeTextPrefix.x = winSymbol.x - row.prizeTextPrefix.getLocalBounds().width - gameConfig.findColumnSymbolSpacing;

    var postfixText = prizeText[1];    
    if (postfixText.indexOf('{0}') > -1){
      postfixText = postfixText.replace('{0}', row.prizeDescription.slice(1));
    }
    row.prizeTextPostfix = new PIXI.Text(postfixText, textStyles.prizeTableValues);
    row.prizeTextPostfix.x += winSymbol.x + winSymbol.getLocalBounds().width + gameConfig.findColumnSymbolSpacing;
    
    row.Highlight.visible = false;
    row.Column01.addChild(row.prizeTextPrefix, winSymbol, row.prizeTextPostfix);    
    
    updatePrizeValue(row);

    prizeTableValuesWin = textStyles.parse('prizeTableValuesWin');
  }

  function updatePrizeValue(row) {
    var prizeValue = prizeData.prizeTable[row.prizeDescription];
    row.Column02.text = SKBeInstant.formatCurrency(prizeValue).formattedAmount;
  }

  function highlight(row) {
    row.Highlight.visible = true;
    row.prizeTextPrefix.style = prizeTableValuesWin;
    row.prizeTextPostfix.style = prizeTableValuesWin;
    row.Column02.style = prizeTableValuesWin;
  }

  function resetHighlight(row) {
    row.Highlight.visible = false;
    row.prizeTextPrefix.style = textStyles.prizeTableValues;
    row.prizeTextPostfix.style = textStyles.prizeTableValues;
    row.Column02.style = textStyles.prizeTableValues;
  }

  return {
    init,
    updatePrizeValue,
    highlight,
    resetHighlight,
  };
});
