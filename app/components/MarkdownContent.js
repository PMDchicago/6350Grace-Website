export default function MarkdownContent({ html }) {
  if (!html) return null;
  return <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />;
}
