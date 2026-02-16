import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const versionPath = path.join(process.cwd(), 'public', 'version.json');
    
    if (fs.existsSync(versionPath)) {
      const versionData = fs.readFileSync(versionPath, 'utf8');
      return NextResponse.json(JSON.parse(versionData));
    }
    
    // Default version if file doesn't exist
    return NextResponse.json({
      version: 'v1.0.0',
      commit: 'local',
      buildDate: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch version' },
      { status: 500 }
    );
  }
}
