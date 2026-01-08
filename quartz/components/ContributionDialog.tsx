import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/contribution.inline"

const ContributionDialog: QuartzComponentConstructor = () => {
  const Comp: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    // Pas sur la home + désactivable note par note via frontmatter: contribute: false
    if (fileData.slug === "index") return null
    const fm = (fileData.frontmatter ?? {}) as Record<string, any>
    if (fm.contribute === false) return null

    return (
      <>
        <button class="contribution-trigger" data-open-contribution-dialog>
          💬 Proposer un apport
        </button>

        <dialog id="contribution-dialog" data-contrib-dialog>
          <h2>Proposer un apport</h2>
          <form action="https://formspree.io/f/maqnrvdr" method="POST">
            <input type="hidden" name="page_url" data-page-url />
            <input type="hidden" name="page_path" data-page-path />
            <input type="hidden" name="page_title" data-page-title />

            <label>
              Nom ou pseudo *
              <input type="text" name="name" required />
            </label>

            <label>
              Votre message
              <textarea
                name="message"
                placeholder="Décrivez le fait, la source, et ce que vous proposez d'ajouter/modifier."
              ></textarea>
            </label>

            <div class="dialog-actions">
              <button type="submit">Envoyer</button>
              <button type="button" data-close-contribution-dialog>
                Fermer
              </button>
            </div>
          </form>
        </dialog>
      </>
    )
  }

  Comp.afterDOMLoaded = script
  return Comp
}

export default ContributionDialog