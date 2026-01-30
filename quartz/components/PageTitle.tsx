import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (

    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img src={`${baseDir}/images/logo.png`} />
      </a>
    </h2>
  )
}
PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
  display: flex;
  justify-content: center;
  align-items: center;
}

@media all and (max-width: 768px) {
  .page-title {
    flex: 1;
    min-width: 0;
    justify-content: flex-start;
    margin-left: 0.5rem;
  }
}

.page-title img {
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease, filter 0.3s ease;
  cursor: pointer;
}

@media all and (max-width: 768px) {
  .page-title img {
    max-width: 150px;
  }
}

.page-title img:hover {
  transform: scale(1.1);
  filter: drop-shadow(0 0 15px rgba(100, 200, 255, 0.8)) drop-shadow(0 0 25px rgba(100, 200, 255, 0.5));
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
