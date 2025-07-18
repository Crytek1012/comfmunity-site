import { IRawBanshare } from "@/types/database";
import { CollectionManager, defaultFetchOptions } from "./collection-manager";

export default class BanshareManager extends CollectionManager<IRawBanshare> {

    /**
     * Fetch a banshare
     * @param id 
     * @returns 
     */
    async fetch(id: string, options = defaultFetchOptions) {
        const opt = { ...defaultFetchOptions, ...options };

        const cached = this.cache.get(id);
        if (cached && opt.checkCache) return cached;

        const rawData = await this.collection.findOne({ id });
        if (!rawData) return null;

        this.cache.set(rawData.id, rawData)
        return rawData;
    }

}