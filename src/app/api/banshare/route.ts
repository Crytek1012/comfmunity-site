// app/api/banshare/route.ts
import { NextResponse } from 'next/server';
import { database } from '@/lib/database';

export async function POST(req: Request) {
    const { id } = await req.json();
    const db = await database();
    const result = await db.banshares.fetch(id);
    return NextResponse.json({ found: !!result, data: result ?? null });
}
