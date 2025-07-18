import { IRawConnectionData } from "../types/database.js";
import { CollectionManager, defaultFetchOptions } from "@/structures/collection-manager";

export default class ConnectionManager extends CollectionManager<IRawConnectionData> {

    /**
     * Fetch a connection
     * @param guildId the id of the connection's guild
     * @returns 
     */
    async fetch(guildId: string, options = defaultFetchOptions): Promise<IRawConnectionData | null> {
        const opt = { ...defaultFetchOptions, ...options };

        if (!guildId) throw new Error('The ID provided must be of type string.');
        const cached = this.cache.get(guildId);
        if (cached && opt.checkCache) return cached;

        const rawData = await this.collection.findOne({ guildId });
        if (!rawData) return null;

        this.cache.set(rawData.guildId, rawData)
        return rawData;
    }

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

    /**
     * Delete a connection
     * @param guildId the ID of the connection
     */
    async delete(guildId: string) {
        if (!this.cache.has(guildId)) return;

        await this.collection.deleteOne({ guildId });
        this.cache.delete(guildId);
    }

    /**
     * Enable the connection
     * @param guildId the ID of the connection
     * @returns 
     */
    async enable(guildId: string) {
        const cached = this.getCached(guildId)
        if (cached.isEnabled()) return;

        await this.collection.updateOne({ guildId }, {
            $set: {
                enabled: true
            }
        });

        cached.enable();
    }

    /**
     * Disable the connection
     * @param guildId the ID of the connection
     * @returns 
     */
    async disable(guildId: string) {
        const cached = this.getCached(guildId)
        if (!cached.isEnabled()) return;

        await this.collection.updateOne({ guildId }, {
            $set: {
                enabled: false
            }
        });

        cached.disable();
    }

    /**
     * Update a connection's manager
     * @param guildId the ID of the connection
     * @param userId the ID of the user
     */
    async updateManager(guildId: string, userId: string) {
        await this.collection.updateOne({ guildId }, {
            $set: {
                managedBy: userId
            }
        });

        this.cache.get(guildId)?.setManager(userId);
    }
}