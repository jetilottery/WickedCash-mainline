define(require => {
    const SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');
    const resources = require('skbJet/component/pixiResourceLoader/pixiResourceLoader');

    let count = [11,10,9,8,7,6,5,4,3];

    function checkPrizeLevel(pl,data) {
        let string = " ";
        if(pl === 10) {
            string = resources.i18n.Paytable.instantWin + " ("+data.description+")";
        } else {
            string = resources.i18n.Paytable.match+" "+count[data.division-1]+" "+resources.i18n.Paytable.witches+" ("+data.description+")";
        }
        return string;
    }

    return data => ({
        cells: {
            prizeLevel: data.division,
            prizeDescription: checkPrizeLevel(data.division,data),
            prizeValue: SKBeInstant.formatCurrency(data.prize).formattedAmount,
        },
    });
});
