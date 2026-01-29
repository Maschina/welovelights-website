import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { ChangelogEntry } from '@/lib/changelog';

export async function GET() {
  try {
    // Read the JSON file from public/assets
    const filePath = path.join(process.cwd(), 'assets', 'changelog.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // Parse and validate JSON
    const jsonData: ChangelogEntry[] = JSON.parse(fileContents);

    // Sort by date (most recent first) and get the first element
    const sortedData = jsonData.sort((a, b) => {
      const dateA = new Date(a.date || '').getTime();
      const dateB = new Date(b.date || '').getTime();
      return dateB - dateA;
    });
    
    const latestChangelog = sortedData[0];

    // Return the most recent changelog element with proper headers
    return NextResponse.json(latestChangelog, {
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
