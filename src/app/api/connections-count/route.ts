// app/api/connections-count/route.ts
import { NextResponse } from 'next/server';
import { database } from '@/lib/database';

export async function GET() {
    const db = await database();
    const count = await db.connections.collection.countDocuments();
    return NextResponse.json({ count }, {
        headers: { 'Cache-Control': 's-maxage=120' }
    });
}
