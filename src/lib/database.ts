import BanshareManager from "@/structures/banshare-manager";
import ConnectionManager from "@/structures/connection-manager";
import { Db, MongoClient, MongoClientOptions } from "mongodb";

class Database {
    private _ready = false;
    private readonly _client: MongoClient;
    private readonly _db: Db;
    private readonly _connections: ConnectionManager;
    private readonly _banshares: BanshareManager;

    constructor(options?: MongoClientOptions) {

        const uri = process.env.MONGO_URI;
        const dbName = process.env.MONGO_DB;
        if (!uri || !dbName) throw new Error('The value of MONGO_URI and MONGO_DB must not be null.')

        this._client = new MongoClient(uri, options);
        this._db = this._client.db(dbName);

        const bansharesDb = this._client.db('Module_Banshare_System')

        this._connections = new ConnectionManager(this._db.collection('connections'));
        this._banshares = new BanshareManager(bansharesDb.collection('banshares'));
    };

    async connect() {
        await this._client.connect();

        // cache connections
        await this.connections.fetchAll();

        // periodically update
        setInterval(() => this.connections.fetchAll(), 3600000);


        this._ready = true;
    }

    isReady() {
        return this._ready;
    }

    get connections() {
        return this._connections;
    }

    get banshares() {
        return this._banshares;
    }
}

const db = new Database();


export const database = async () => {
    if (!db.isReady()) {
        await db.connect();
    }

    return db;
};
