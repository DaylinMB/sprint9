"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("../db/connection"));
const cors_1 = __importDefault(require("cors"));
const country_1 = __importDefault(require("../routes/country"));
const faq_1 = __importDefault(require("../routes/faq"));
const process_1 = __importDefault(require("../routes/process"));
const lawyers_1 = __importDefault(require("../routes/lawyers"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env['PORT'] || '3001';
        this.midlewares();
        this.routes();
        this.listen();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicación corriendo en el puerto ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API working',
            });
        });
        this.app.use('/api/country/', country_1.default);
        this.app.use('/api/countryId/', country_1.default);
        this.app.use('/api/faq/', faq_1.default);
        this.app.use('/api/process/', process_1.default);
        this.app.use('/api/lawyers/', lawyers_1.default);
    }
    midlewares() {
        //cors
        this.app.use((0, cors_1.default)());
        //Parsear al body
        this.app.use(express_1.default.json());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Base de datos conectada');
            }
            catch (error) {
                console.log(error);
                console.log('Error al conectarse a la base de datos');
            }
        });
    }
}
exports.default = Server;
