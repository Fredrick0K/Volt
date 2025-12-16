import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
      <h1>404</h1>
      <h3>Check URL then maybe you misstyped the path</h3>
      {/*<p>{i18n(cfg.locale).pages.error.notFound}</p>*/}
      <a href={baseDir}>Return to a safe place</a>
      <h2>¯\_(ツ)_/¯</h2>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
