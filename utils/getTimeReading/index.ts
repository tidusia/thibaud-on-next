export default function getTimeReading(content: string): string {
  const words = content.split(" ");
  const minutes = Math.floor(words.length / 200);
  return `${minutes} minute${minutes > 1 ? "s" : ""}`;
}
