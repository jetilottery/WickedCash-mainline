define(require => {
  const PIXI = require('com/pixijs/pixi');
  const utils = require('skbJet/componentManchester/standardIW/layout/utils');

  const NumberCard = require('./NumberCard');

  class PlayerNumber extends NumberCard {
    constructor() {
      super();

      // Set background and cover textures
      if (PIXI.utils.TextureCache.symbolBackground !== undefined) {
        this.background.texture = PIXI.Texture.fromFrame('symbolBackground');
      }
      const revealFrames = utils.findFrameSequence('symbolCover');
      this.revealAnim.textures = revealFrames.map(PIXI.Texture.from);
      const idleFrames = utils.findFrameSequence('symbolIdle');
      if (idleFrames.length > 0) {
        this.idleAnim.textures = idleFrames.map(PIXI.Texture.from);
      }

      this.reset();
    }

    populate([number]) {
      this.number = number;
      this.value = number;
      super.populate(number);
    }

    reset() {
      super.reset();
    }

    static fromContainer(container) {
      const card = new PlayerNumber();
      container.addChild(card);
      return card;
    }
  }

  return PlayerNumber;
});
