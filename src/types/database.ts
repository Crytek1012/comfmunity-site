export interface IRawConnectionData {
    guildId: string;
    guildName: string;
    channelId: string | null;
    webhookId: string | null;
    managedBy: string;
    enabled: boolean;
    createdTimestamp: number;
}

export interface IRawBanshare {
    id: string,
    messageId: string,
    guildId: string,
    guildName: string,
    authorId: string,
    authorUsername: string,
    targets: string[],
    users: string[],
    reason: string,
    proof: string,
    createdAt: number,
    status: 'accepted' | 'rejected' | 'pending' | 'retracted',
    broadcasts: { guildId: string, id: string }[]
}