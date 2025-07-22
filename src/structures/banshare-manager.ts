import { IRawBanshare } from "@/types/database";
import { CollectionManager, defaultFetchOptions, FetchOptions } from "./collection-manager";

export interface IBanshare extends IRawBanshare {
    cachedAt: number;
}

export interface IBanshareFetchOptions extends FetchOptions {
    /**
     * Force fetch if the cache is older than the provided value
     */
    fetchIfOlderThan: number;
}

export const banshareFetchOptions: IBanshareFetchOptions = {
    ...defaultFetchOptions,
    fetchIfOlderThan: 0
}

export default class BanshareManager extends CollectionManager<IRawBanshare, IBanshare> {

    /**
     * Fetch a banshare
     * @param id 
     * @returns 
     */
    async fetch(id: string, options = banshareFetchOptions) {
        const opt = { ...banshareFetchOptions, ...options };

        const cached = this.cache.get(id);
        if (cached && opt.checkCache && (cached.cachedAt + opt.fetchIfOlderThan) > Date.now()) return cached;

        const rawData = await this.collection.findOne({ id });
        if (!rawData) return null;

        const cache: IBanshare = { ...rawData, cachedAt: Date.now() };

        this.cache.set(rawData.id, cache)
        return rawData;
    }

}