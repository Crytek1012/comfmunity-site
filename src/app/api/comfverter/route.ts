// app/api/comfverter/route.ts
import { exec } from 'child_process';
import { readFile, unlink, writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';
import { promisify } from 'util';
const asyncExec = promisify(exec);
import { mkdir } from 'fs/promises';

export async function POST(req: Request) {
    const token = req.headers.get('authorization');
    if (!token || token !== process.env.COMFVERTER_TOKEN) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    const { query } = await req.json();
    let buffer: ArrayBuffer | null = query instanceof ArrayBuffer ? query : null;

    if (typeof query === 'string') {
        if (query.endsWith('.gif')) throw new Error('This URL already is a GIF.');

        try {
            const response = await fetch(query);
            buffer = await response.arrayBuffer()
        }
        catch (err) {
            return NextResponse.json({ data: null, message: (err as Error).message });
        }
    }

    if (!buffer) return NextResponse.json({ data: null, message: 'Failed to retrieve buffer.' });

    const name = `sticker_${Math.floor(Math.random() * (1000000 - 100000) + 100000)}`;
    const tempDir = path.join(process.cwd(), 'temp');
    const downloadPath = path.join(tempDir, `${name}.png`);
    const resultPath = path.join(tempDir, `${name}.gif`);

    // create directory
    await mkdir(tempDir, { recursive: true });

    // save for apng2gif conversion
    await writeFile(downloadPath, Buffer.from(buffer));

    // Convert APNG to GIF using apng2gif command
    await asyncExec(`apng2gif ${downloadPath} ${resultPath}`);

    // Read converted GIF into buffer
    const imageBuffer = await readFile(resultPath);

    // // Clean up temporary files
    await unlink(downloadPath);
    await unlink(resultPath);

    return new NextResponse(imageBuffer, {
        headers: { 'Content-Type': 'image/gif' }
    });
}
