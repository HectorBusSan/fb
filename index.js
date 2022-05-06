const Reader = require('./lib/utils/Reader')
const ExplorerServices = require('./lib/services/ExplorerService');

const explorers= Reader.readJsonFile("explorer.json");
// console.log(explorers);

// aplicación  del Explorer Services sobre la lista del explorer
console.log(ExplorerServices.filterByMission(explorers,"node"));
// console.log(ExplorerServices.getAmountOfExplorersByMission(explorers,"node"));
// console.log(ExplorerServices.getExplorersUsernamesByMission(explorers,"node"));

