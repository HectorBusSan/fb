const ExplorerService= require('./../../lib/services/ExplorerService');
describe('Test para ExplorerServices',()=>{
    test("Requerimientos 1: Calcular todos los explorers en una misión",()=>{
        const explorers= [{mission:"node"}];
        const explorerInNode= ExplorerService.filterByMission(explorers,"node");
        expect(explorerInNode.length).toBe(11);
    })
});