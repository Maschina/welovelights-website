import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the JSON file from public/assets
    const filePath = path.join(process.cwd(), 'assets', 'changelog.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // Parse and validate JSON
    const jsonData = JSON.parse(fileContents);

    // Return the JSON with proper headers
    return NextResponse.json(jsonData, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
      },
    });
  } catch (error) {
    console.error('Error reading changelog.json:', error);
    return NextResponse.json(
      { error: 'Failed to load changelog data' },
      { status: 500 }
    );
  }
}
