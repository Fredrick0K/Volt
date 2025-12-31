import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
  githubRepo?: string
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const links = opts?.links ?? []
    const visitorBadgeUrl = opts?.githubRepo 
      ? `https://visitor-badge.laobi.icu/?username=${opts.githubRepo.split('/')[0]}&repo=${opts.githubRepo.split('/')[1]}&label=visitors&style=flat&color=blue&textColor=white`
      : null

    return (
      <footer class={`${displayClass ?? ""}`}>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        {visitorBadgeUrl && (
          <div class="visitor-counter">
            <img 
              src={visitorBadgeUrl} 
              alt="visitor count"
              loading="lazy"
              style="max-height: 20px;"
            />
          </div>
        )}
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
