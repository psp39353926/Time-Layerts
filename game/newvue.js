"use strict"

function newVue() {
  return new Vue({
    el: "#app",
    data: {
      EN: EN,
      tab: 1,
      layertab: 1,
      layersubtab: [1,1,1,1,1,1,1,1,1,1],
      game: {},
      tempCompCost: "strangers",
      tempCompEffect: "love",
      timeFoamSpeed: "you",
      overallSpeed: EN(1),
      timeLayerMult: [1,1,1,1,1,1,1,1,1,1],
      timeLayerSpeed: [1,1,1,1,1,1,1,1,1,1],
      row1SpaceTimeUpgrade: [["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],
      spaceCompCost: 0,
      spaceCompEffect: 0,
      spaceCompBase: 0,
      timeCompBase: 0,
      showSpaceTime: false,
      spacetime: {
        rate: 0,
        cost: 0,
        effect: 0,
      },
      getPrestige: getPrestige,
      canPrestige: canPrestige,
      row2SEU: ["","","","","","","","","","","","","","","",""],
      achieveData: achieveData,
      zeroSeven: [0,1,2,3,4,5,6,7],
      spaceEnergyTimeMult: getSpaceEnergyTimeMult,
      normalEnergyTimeMult: getNormalEnergyTimeMult,
      nucleoLength: getNucleoLength,
      spaceEnergyRow1Mult: getSpaceEnergyRow1Mult,
      normalEnergyRow2Mult: getNormalEnergyRow2Mult,
      nucleoUp: ["","","",""],
      getNucleoEffect: getNucleoEffect,
      getStarTypeCost: getStarTypeCost,
      row2NEU: ["","","",""],
      getTempCompBase: getTempCompBase,
      starMile: starMile,
      row4PEU: ["","","","","","","","","","","","","","","",""],
      getSpacetimeCompEffect: getSpacetimeCompEffect,
      getSuperNovaEffect: getSuperNovaEffect,
      row4Supercomp: [["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],
      superComp: {
        tempCost: getSuperTempCompCost
      },
      inAnyGalChal: inAnyGalChal,
      getPerspectiveRate: getPerspectiveRate,
      PERSPECTIVE_REQ: [16,20,24,26,28,30,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,52,55,57,60,64,65,70,75,80,85,90,95,100,110,200,375,500,750,1000,2500,5000,10000,1e5,1e6,1e7,1e8,1e9,1e10,1e15,1e20,1e25,1e50,1e75,1e100,1e200,1e250,1e300,1e303,1.8e308],
      getStarEffect: getStarEffect,
      toRoman: toRoman,
      stellarpedia: stellarpedia,
      onOff: onOff,
      move: 0
    }
  })
}
