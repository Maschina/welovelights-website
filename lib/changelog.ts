import fs from "fs";
import path from "path";

export type ChangelogEntry = {
    version: string;
    date: string;
    features?: string[];
    bugfixes?: string[];
    image?: string;
    button?: {
        url: string;
        text: string;
    };
};

/**
 * Fetches and parses the changelog from the filesystem
 * @returns Array of changelog entries
 */
export async function getChangelogEntries(): Promise<ChangelogEntry[]> {
    try {
        const filePath = path.join(process.cwd(), 'assets', 'changelog.json');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error reading changelog:', error);
        return [];
    }
}

/**
 * Gets the latest version from the changelog by parsing dates
 * @returns The latest version string (e.g., "3.6.5")
 */
export async function getLatestVersion(): Promise<string> {
    try {
        const data = await getChangelogEntries();
        
        if (data && data.length > 0) {
            // Parse dates and sort to ensure we get the latest
            const sorted = data.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB.getTime() - dateA.getTime();
            });
            return sorted[0].version;
        }
        return "3.6.5"; // Fallback
    } catch (error) {
        console.error('Error getting latest version:', error);
        return "3.6.5"; // Fallback
    }
}

/**
 * Gets a specific changelog entry by version
 * @param version - The version to find (e.g., "3.6.5")
 * @returns The changelog entry or undefined if not found
 */
export async function getChangelogByVersion(version: string): Promise<ChangelogEntry | undefined> {
    const entries = await getChangelogEntries();
    return entries.find(entry => entry.version === version);
}
