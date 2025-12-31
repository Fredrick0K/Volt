import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const links = opts?.links ?? []

    // Inject hit counter script
    if (typeof document !== "undefined") {
      const script = document.createElement("script")
      script.innerHTML = `document.write("<script type='text/javascript' src='https://visitorshitcounter.com/js/hitCounter.js?v="+Date.now()+"'><\\/script>");`
      document.body.appendChild(script)
    }

    return (
      <footer class={`${displayClass ?? ""}`}>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        <a class="hitCounter" href="https://visitorshitcounter.com/" target="_blank" title="Hit counter" data-name="cd7a1edd5a19a1e489e1af4e5a0f7229|5|external|1|#0099cc|#f5f5f5|small|s-hit">Hit Counter</a>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
