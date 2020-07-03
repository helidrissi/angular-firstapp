"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var PokemonsService = /** @class */ (function () {
    function PokemonsService(http, router) {
        this.http = http;
        this.router = router;
        this.pokemonsUrl = 'api/pokemon/all';
    }
    PokemonsService.prototype.log = function (log) {
        console.info(log);
    };
    PokemonsService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(error);
            console.log(operation + " failed: " + error.message);
            return rxjs_1.of(result);
        };
    };
    // Retourne tous les pokémons
    PokemonsService.prototype.getPokemons = function () {
        var _this = this;
        return this.http.get(this.pokemonsUrl).pipe(operators_1.tap(function (_) { return _this.log('fetched pokemon'); }), operators_1.catchError(this.handleError('getPokemons', [])));
    };
    PokemonsService.prototype.getPokemonTypes = function () {
        return ['Plante', 'Feu', 'Eau', 'Electric', 'isecte', 'Poison', 'Fée', 'Normal', 'Vol'];
    };
    PokemonsService.prototype.updatePokemon = function (p) {
        var _this = this;
        var httpOptions = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.put(this.pokemonsUrl, p, httpOptions).pipe(operators_1.tap(function (_) { return _this.log("update pokemon id=" + p.id); }), operators_1.catchError(this.handleError("updatedPokemon")));
    };
    PokemonsService.prototype.deletePokemon = function (p) {
        var _this = this;
        var url = this.pokemonsUrl + "/" + p.id;
        var httpOptions = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.delete(url, httpOptions).pipe(operators_1.tap(function (_) { return _this.log("deleted pokemon id=" + p.id); }), operators_1.catchError(this.handleError("deleted pokemon")));
    };
    PokemonsService.prototype.goBack = function () {
        this.router.navigate(['/pokemons']);
    };
    // Retourne le pokémon avec l'identifiant passé en paramètre
    PokemonsService.prototype.getPokemon = function (id) {
        var _this = this;
        var url = this.pokemonsUrl + "/" + id;
        return this.http.get(url).pipe(operators_1.tap(function (_) { return _this.log("fetched pokemon id=" + id); }), operators_1.catchError(this.handleError("getPokemons id=" + id)));
    };
    PokemonsService.prototype.searchPokemon = function (term) {
        var _this = this;
        if (!term.trim()) {
            return rxjs_1.of([]);
        }
        return this.http.get(this.pokemonsUrl + "/?name=" + term).pipe(operators_1.tap(function (_) { return _this.log("found Pokemon matching \"" + term + "\""); }), operators_1.catchError(this.handleError("'search Pokemon',[]")));
    };
    PokemonsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], PokemonsService);
    return PokemonsService;
}());
exports.PokemonsService = PokemonsService;
//# sourceMappingURL=pokemons.service.js.map