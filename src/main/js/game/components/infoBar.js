define(require => {
    const PIXI = require('com/pixijs/pixi');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');
    const resources = require('skbJet/component/pixiResourceLoader/pixiResourceLoader');
    const displayList = require('skbJet/componentManchester/standardIW/displayList');
    const prizeData = require('skbJet/componentManchester/standardIW/prizeData');
    const textStyles = require('skbJet/componentManchester/standardIW/textStyles');

    let infoBar;
    let prefixText;
    let instantWinSymbol;
    let postfixText;

    function init() {
        infoBar = displayList.infoBar;
        prefixText = new PIXI.Text('', textStyles.parse('infoBar'));
        instantWinSymbol = new PIXI.Sprite();
        instantWinSymbol.texture = PIXI.Texture.fromFrame('symbolInstantWinSmall');
        postfixText = new PIXI.Text('', textStyles.infoBar);
        infoBar.addChild(prefixText, instantWinSymbol, postfixText);
        
        var messageYOffset = (prefixText.height/2)*-1;
        var instantWinSymbolYOffset = (instantWinSymbol.height/2)*-1;

        prefixText.y = messageYOffset;
        instantWinSymbol.y = instantWinSymbolYOffset;
        postfixText.y = messageYOffset;

        setString();
    }
  
    function setString() {
        if (prefixText === undefined)
            return;

        var winValue = prizeData.prizeTable['IW'];
        var formattedWinValue = SKBeInstant.formatCurrency(winValue).formattedAmount;
        var infoBarText = resources.i18n.Game.infoBarText.split('{img}');

        prefixText.text = infoBarText[0]; 

        if (prefixText.text.indexOf('{0}') > -1){
            prefixText.text = prefixText.text.replace('{0}', formattedWinValue);
        }

        postfixText.text = infoBarText[1];

        if (postfixText.text.indexOf('{0}') > -1){
            postfixText.text = postfixText.text.replace('{0}', formattedWinValue);
        }

        var messageWidth = 0;

        infoBar.children.forEach(function(child){
            messageWidth += child.width;
        });

        var messageXOffset = (messageWidth/2)*-1;
        prefixText.x = messageXOffset;
        instantWinSymbol.x = messageXOffset + prefixText.width;
        postfixText.x = instantWinSymbol.x + instantWinSymbol.width;
    }
  
    msgBus.subscribe('PrizeData.PrizeStructure', setString);
  
    return {
      init: init,
    };
  });
  