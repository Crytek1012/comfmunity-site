import { IRawConnectionData } from "../types/database.js";
import { CollectionManager } from "@/structures/collection-manager";

export default class ConnectionManager extends CollectionManager<IRawConnectionData> {

    /**
     * Fetch all the connections
     * @returns 
     */
    async fetchAll(): Promise<IRawConnectionData[]> {
        const rawArray = await this.collection.find().toArray();

        this.cache.clear();
        rawArray.forEach(rawData => this.cache.set(rawData.guildId, rawData))
        return rawArray;
    }
}