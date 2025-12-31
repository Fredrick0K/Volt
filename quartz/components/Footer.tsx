import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const links = opts?.links ?? []

    return (
      <footer class={`${displayClass ?? ""}`}>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        <a href="https://visitorbadge.io/status?path=https%3A%2F%2Ffredrick0k.github.io%2FobsdnVault%2F">
          <img src="https://api.visitorbadge.io/api/daily?path=https%3A%2F%2Ffredrick0k.github.io%2FobsdnVault%2F&label=Visitors&countColor=%23263759&style=plastic&labelStyle=none" alt="Visitor count" />
        </a>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
