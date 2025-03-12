define({
  _BASE_APP: {
    children: ['background', 'logo', 'winUpTo', 'prizeTable', 'playerNumbers', 'infoBar'],
  },

  /*
   * BACKGROUND
   */
  background: {
    type: 'sprite',
    children: ['selectionBackgrounds'],
    landscape: {
      texture: 'landscape_background',
    },
    portrait: {
      texture: 'portrait_background',
    },
  },

  selectionBackgrounds: {
    type: 'sprite',
    landscape: {
      texture: 'landscape_selectionBackground',
    },
    portrait: {
      texture: 'portrait_selectionBackground',
    },
  },

  /*
   * LOGO
   */
  logo: {
    type: 'sprite',
    anchor: 0.5,
    landscape: {
      texture: 'landscape_gameLogo',
      x: 266,
      y: 118
      
    },
    portrait: {
      texture: 'portrait_gameLogo',
      x: 405,
      y: 109
    },
  },

  /*
   * WIN UP TO
   */
  winUpTo: {
    type: 'container',
    children: ['winUpToIn', 'winUpToOut'],
    landscape: { x: 266, y: 248 },
    portrait: { x: 405, y: 240 },
  },
  winUpToIn: {
    type: 'container',
    children: ['winUpToInText'],
  },
  winUpToInText: {
    type: 'text',
    style: 'winUpTo',
    string: 'winUpTo',
    anchor: 0.5,
    maxWidth: 400,
  },
  winUpToOut: {
    type: 'container',
    children: ['winUpToOutText'],
  },
  winUpToOutText: {
    type: 'text',
    style: 'winUpTo',
    string: 'winUpTo',
    anchor: 0.5,
    maxWidth: 400,
  },

  /*
   * PRIZE TABLE
   */
  prizeTable: {
    type: 'container',
    children: [
      'prizeTableBackground',
      'column01Header',
      'column02Header',
      'column03Header',
      'column04Header',
      'row01Highlight',
      'row01Column01',
      'row01Column02', 
      'row02Highlight',     
      'row02Column01',
      'row02Column02',
      'row03Highlight',
      'row03Column01',
      'row03Column02',
      'row04Highlight',
      'row04Column01',
      'row04Column02',
      'row05Highlight',
      'row05Column01',
      'row05Column02',
      'row06Highlight',
      'row06Column01',
      'row06Column02',
      'row07Highlight',
      'row07Column01',
      'row07Column02',
      'row08Highlight',
      'row08Column01',
      'row08Column02',
      'row09Highlight',
      'row09Column01',
      'row09Column02',
    ],
    landscape: { x: 42, y: 282 },
    portrait:  { x: 37, y: 276 },
  },
  prizeTableBackground: {
    type: 'sprite',
    landscape: {
      texture: 'landscape_tableBackground',
    },
    portrait: {
      texture: 'portrait_tableBackground',
    },
  },
  column01Header: {
    type: 'text',
    style: 'prizeTableColHeader',
    string: 'column01Header',
    anchor: 0.5,
    maxWidth: 400,
    landscape: { x: 112, y: 20 },
    portrait: { x: 89, y: 20 }
  }, 
  column02Header: {
    type: 'text',
    style: 'prizeTableColHeader',
    string: 'column02Header',
    anchor: 0.5,
    maxWidth: 400,
    landscape: { x: 336, y: 20 },
    portrait: { x: 273, y: 20 }
  },

  column03Header: {
    type: 'text',
    style: 'prizeTableColHeader',
    string: 'column01Header',
    anchor: 0.5,
    maxWidth: 400,
    landscape: { visible: false },
    portrait: { x: 463, y: 20, visible: true }
  }, 
  column04Header: {
    type: 'text',
    style: 'prizeTableColHeader',
    string: 'column02Header',
    anchor: 0.5,
    maxWidth: 400,
    landscape: { visible: false },
    portrait: { x: 647, y: 20, visible: true }
  },

  row01Column01: {
    type: 'container',
    landscape: { x: 112, y: 41 },
    portrait: { x: 90.5, y: 41 }
  },
  row01Column02: {
    type: 'text',
    style: 'prizeTableValues',
    anchor: 0.5,
    maxWidth: 400,
    landscape: { x: 336, y: 56 },
    portrait: { x: 273, y: 56 },
  },
  row01Highlight: {
    type: 'sprite',
    landscape: {
      texture: 'landscape_tableHighlight',
      x: 0, 
      y: 38 
    },
    portrait: { 
      texture: 'portrait_tableHighlight',
      x: 0,
      y: 38
    }
  },

  row02Column01: {
    type: 'container',
    landscape: { x: 112, y: 77 },
    portrait: { x: 90.5, y: 77 }
  },
  row02Column02: {
    type: 'text',
    style: 'prizeTableValues',
    anchor: 0.5,
    maxWidth: 400,
    landscape: { x: 336, y: 92 },
    portrait: { x: 273, y: 92 }
  },
  row02Highlight: {
    type: 'sprite',
    landscape: {
      texture: 'landscape_tableHighlight',
      x: 0, 
      y: 74 
    },
    portrait: { 
      texture: 'portrait_tableHighlight',
      x: 0,
      y: 74
    }
  },

  row03Column01: {
    type: 'container',
    landscape: { x: 112, y: 113 },
    portrait: { x: 90.5, y: 113 }
  },
  row03Column02: {
    type: 'text',
    style: 'prizeTableValues',
    anchor: 0.5,
    maxWidth: 400,
    landscape: { x: 336, y: 128 },
    portrait: { x: 273, y: 128 }
  },
  row03Highlight: {
    type: 'sprite',
    landscape: {
      texture: 'landscape_tableHighlight',
      x: 0, 
      y: 110 
    },
    portrait: { 
      texture: 'portrait_tableHighlight',
      x: 0,
      y: 110
    }
  },

  row04Column01: {
    type: 'container',
    landscape: { x: 112, y: 149 },
    portrait: { x: 90.5, y: 149 }
  },
  row04Column02: {
    type: 'text',
    style: 'prizeTableValues',
    anchor: 0.5,
    maxWidth: 400,
    landscape: { x: 336, y: 164 },
    portrait: { x: 273, y: 164 }
  },
  row04Highlight: {
    type: 'sprite',
    landscape: {
      texture: 'landscape_tableHighlight',
      x: 0, 
      y: 146 
    },
    portrait: { 
      texture: 'portrait_tableHighlight',
      x: 0,
      y: 146
    }
  },

  row05Column01: {
    type: 'container',
    landscape: { x: 112, y: 185 },
    portrait: { x: 90.5, y: 185 }
  },
  row05Column02: {
    type: 'text',
    style: 'prizeTableValues',
    anchor: 0.5,
    maxWidth: 400,
    landscape: { x: 336, y: 200 },
    portrait: { x: 273, y: 200 }
  },
  row05Highlight: {
    type: 'sprite',
    landscape: {
      texture: 'landscape_tableHighlight',
      x: 0, 
      y: 182 
    },
    portrait: { 
      texture: 'portrait_tableHighlightRounded',
      x: 0,
      y: 182
    }
  },

  row06Column01: {
    type: 'container',
    landscape: { x: 112, y: 221 },
    portrait: { x: 464.5, y: 41 }
  },
  row06Column02: {
    type: 'text',
    style: 'prizeTableValues',
    anchor: 0.5,
    maxWidth: 400,
    landscape: { x: 336, y: 236 },
    portrait: { x: 647, y: 56 }
  },
  row06Highlight: {
    type: 'sprite',
    landscape: {
      texture: 'landscape_tableHighlight',
      x: 0, 
      y: 218 
    },
    portrait: { 
      texture: 'portrait_tableHighlight',
      x: 374,
      y: 38
    }
  },

  row07Column01: {
    type: 'container',
    landscape: { x: 112, y: 257 },
    portrait: { x: 464.5, y: 77 }
  },
  row07Column02: {
    type: 'text',
    style: 'prizeTableValues',
    anchor: 0.5,
    maxWidth: 400,
    landscape: { x: 336, y: 272 },
    portrait: { x: 647, y: 92 }
  },
  row07Highlight: {
    type: 'sprite',
    landscape: {
      texture: 'landscape_tableHighlight',
      x: 0, 
      y: 254 
    },
    portrait: { 
      texture: 'portrait_tableHighlight',
      x: 374,
      y: 74
    }
  },

  row08Column01: {
    type: 'container',
    landscape: { x: 112, y: 293 },
    portrait: { x: 464.5, y: 113 }
  },
  row08Column02: {
    type: 'text',
    style: 'prizeTableValues',
    anchor: 0.5,
    maxWidth: 400,
    landscape: { x: 336, y: 308 },
    portrait: { x: 647, y: 128 }
  },
  row08Highlight: {
    type: 'sprite',
    landscape: {
      texture: 'landscape_tableHighlight',
      x: 0, 
      y: 290 
    },
    portrait: { 
      texture: 'portrait_tableHighlight',
      x: 374,
      y: 110
    }
  },

  row09Column01: {
    type: 'container',
    landscape: { x: 112, y: 329 },
    portrait: { x: 464.5, y: 149 }
  },
  row09Column02: {
    type: 'text',
    style: 'prizeTableValues',
    anchor: 0.5,
    maxWidth: 400,
    landscape: { x: 336, y: 344 },
    portrait: { x: 647, y: 164 }
  },
  row09Highlight: {
    type: 'sprite',
    landscape: {
      texture: 'landscape_tableHighlightRounded',
      x: 0, 
      y: 326 
    },
    portrait: { 
      texture: 'portrait_tableHighlightRounded',
      x: 374,
      y: 146
    }
  },

  /*
   * PLAYER NUMBERS
   */
  playerNumbers: {
    type: 'container',
    children: [
      'playerNumber1',
      'playerNumber2',
      'playerNumber3',
      'playerNumber4',
      'playerNumber5',
      'playerNumber6',
      'playerNumber7',
      'playerNumber8',
      'playerNumber9',
      'playerNumber10',
      'playerNumber11',
      'playerNumber12',
      'playerNumber13',
      'playerNumber14',
      'playerNumber15',
    ],
    landscape: { x: 532, y: 68 },
    portrait: { x: 37, y: 506 },
  },
  playerNumber1: {
    type: 'container',
    landscape: { x: 109, y: 109, scale: 1 },
    portrait: { x: 88, y: 88, scale: 0.8312 },
  },
  playerNumber2: {
    type: 'container',
    landscape: { x: 271, y: 109, scale: 1 },
    portrait: { x: 228, y: 88, scale: 0.8312 },
  },
  playerNumber3: {
    type: 'container',
    landscape: { x: 433, y: 109, scale: 1 },
    portrait: { x: 368, y: 88, scale: 0.8312 },
  },
  playerNumber4: {
    type: 'container',
    landscape: { x: 595, y: 109, scale: 1 },
    portrait: { x: 508, y: 88, scale: 0.8312 },
  },
  playerNumber5: {
    type: 'container',
    landscape: { x: 757, y: 109, scale: 1 },
    portrait: { x: 648, y: 88, scale: 0.8312 },
  },
  playerNumber6: {
    type: 'container',
    landscape: { x: 109, y: 271, scale: 1 },
    portrait: { x: 88, y: 222, scale: 0.8312 },
  },
  playerNumber7: {
    type: 'container',
    landscape: { x: 271, y: 271, scale: 1 },
    portrait: { x: 228, y: 222, scale: 0.8312 },
  },
  playerNumber8: {
    type: 'container',
    landscape: { x: 433, y: 271, scale: 1 },
    portrait: { x: 368, y: 222, scale: 0.8312 },
  },
  playerNumber9: {
    type: 'container',
    landscape: { x: 595, y: 271, scale: 1 },
    portrait: { x: 508, y: 222, scale: 0.8312 },
  },
  playerNumber10: {
    type: 'container',
    landscape: { x: 757, y: 271, scale: 1 },
    portrait: { x: 648, y: 222, scale: 0.8312 },
  },
  playerNumber11: {
    type: 'container',
    landscape: { x: 109, y: 433, scale: 1 },
    portrait: { x: 88, y: 356, scale: 0.8312 },
  },
  playerNumber12: {
    type: 'container',
    landscape: { x: 271, y: 433, scale: 1 },
    portrait: { x: 228, y: 356, scale: 0.8312 },
  },
  playerNumber13: {
    type: 'container',
    landscape: { x: 433, y: 433, scale: 1 },
    portrait: { x: 368, y: 356, scale: 0.8312 },
  },
  playerNumber14: {
    type: 'container',
    landscape: { x: 595, y: 433, scale: 1 },
    portrait: { x: 508, y: 356, scale: 0.8312 },
  },
  playerNumber15: {
    type: 'container',
    landscape: { x: 757, y: 433, scale: 1 },
    portrait: { x: 648, y: 356, scale: 0.8312 },
  },

  /*
   * Info Bar
   */
  infoBar: {
    type: 'sprite',
    anchor: 0.5,
    landscape: {
      texture: 'infoBar',
      x: 965, y: 619
    },
    portrait: {
      texture: 'infoBar',
      x: 405, y: 987
    },
  },

  /*
   * How To Play
   */
  howToPlayPages: {
    type: 'container',
    children: ['howToPlayPage1'],
  },
  howToPlayPage1: {
    type: 'text',
    string: 'page1',
    style: 'howToPlayText',
    fontSize: 30,
    wordWrap: true,
    anchor: 0.5,
    align: 'center',
    landscape: { x: 720, y: 415, wordWrapWidth: 1100 },
    portrait: { x: 405, y: 550, wordWrapWidth: 560 },
  },
});
