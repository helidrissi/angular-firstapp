"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock_pockemons_1 = require("./pokemons/mock-pockemons");
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var pokemons = mock_pockemons_1.POKEMONS;
        return { pokemons: pokemons };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map