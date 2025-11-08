export const ExternalLinks = ({ links }: { links: { title: string, url: string }[] }) => {
  return (
    <div className="flex gap-2">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-xs px-2 py-1 text-muted-foreground hover:text-primary rounded-md items-center gap-2 border dark:border-zinc-500 flex  border-zinc-500 hover:bg-zinc-500/10 transition-colors duration-200"
        >
          {link.title}
          <svg className="size-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4h2zM11 5H3v16h16v-8h-2v6H5V7h6V5z" fill="currentColor"></path></svg>
        </a>
      ))}
    </div>
  )
}