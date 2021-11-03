export default function removeMarkdownExtension(file: string): string {
  return file.slice(0, -3);
}
