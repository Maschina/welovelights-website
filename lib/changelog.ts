import fs from "fs";
import path from "path";

export type ChangelogEntry = {
    version: string;
    build?: number;
    date?: Date;
    features?: string[];
    bugfixes?: string[];
};

/**
 * Fetches and parses the changelog from the filesystem.
 * The changelog.json file is a JSON file in the assets folder.
 * 
 * @returns Array of changelog entries
 */
export function getChangelogEntries(): ChangelogEntry[] {
    try {
        // changelog.json is a JSON file in the assets folder
        const filePath = path.join(process.cwd(), 'assets', 'changelog.json');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const rawData = JSON.parse(fileContents) as Array<Omit<ChangelogEntry, 'date'> & { date?: string }>;
        
        return rawData.map(({ date, ...entry }) => ({
            ...entry,
            date: date ? new Date(date) : undefined
        }));
    } catch (error) {
        console.error('Error reading changelog:', error);
        return [];
    }
}

/**
 * Gets the latest version from the changelog by parsing dates
 * @returns The latest version string (e.g., "3.6.5")
 */
export function getLatestVersion(): string {
    try {
        const data = getChangelogEntries();
        
        if (data.length > 0) {
            const sorted = data.sort((a, b) => {
                if (a.date && b.date) {
                    return b.date.getTime() - a.date.getTime();
                }
                if (a.build && b.build) {
                    return b.build - a.build;
                }
                return 0;
            });
            return sorted[0].version;
        }
        return "0.0.0"; // Fallback
    } catch (error) {
        console.error('Error getting latest version:', error);
        return "0.0.0"; // Fallback
    }
}

/**
 * Gets a specific changelog entry by version
 * @param version - The version to find (e.g., "3.6.5")
 * @returns The changelog entry or undefined if not found
 */
export function getChangelogByVersion(version: string): ChangelogEntry | undefined {
    return getChangelogEntries().find(entry => entry.version === version);
}

/**
 * Gets a specific changelog entry by build
 * @param build - The build to find (e.g., 1087)
 * @returns The changelog entry or undefined if not found
 */
export function getChangelogByBuild(build: number): ChangelogEntry | undefined {
    return getChangelogEntries().find(entry => entry.build === build);
}