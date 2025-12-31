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
      ? `https://api.countapi.xyz/hit/${opts.githubRepo}/visits`
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
          <div class="visitor-counter" id="visitor-count">
            <span>Visitors: </span>
            <span id="count-value">Loading...</span>
          </div>
        )}
        {visitorBadgeUrl && (
          <script>
            {`
              fetch('${visitorBadgeUrl}')
                .then(response => response.json())
                .then(data => {
                  const countElement = document.getElementById('count-value');
                  if (countElement) {
                    countElement.textContent = data.value || '0';
                  }
                })
                .catch(error => {
                  console.error('Error loading visitor count:', error);
                  const countElement = document.getElementById('count-value');
                  if (countElement) {
                    countElement.textContent = 'N/A';
                  }
                });
            `}
          </script>
        )}
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
