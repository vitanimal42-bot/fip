import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getSocialLinks() {
    const filePath = path.join(process.cwd(), 'content', 'social.md');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return data;
}
