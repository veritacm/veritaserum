import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const ContributionDialog: QuartzComponentConstructor = () => {
  const Comp = ({ fileData }: QuartzComponentProps) => {
    // Pas sur la home + désactivable note par note via frontmatter: contribute: false
    if (fileData.slug === "index") return null
    const fm = (fileData.frontmatter ?? {}) as Record<string, any>
    if (fm.contribute === false) return null

    return (
      <div class="vs-contrib">
        <button class="vs-contrib-btn" data-open-contrib>
          Proposer un apport
        </button>

        <dialog class="vs-contrib-dialog" data-contrib-dialog>
          <form action="https://formspree.io/f/maqnrvdr" method="POST">
            <h3>Proposer un apport</h3>

            {/* Métadonnées auto-remplies pour l’admin */}
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
                rows={8}
                placeholder="Décrivez le fait, la source, et ce que vous proposez d’ajouter/modifier."
              ></textarea>
            </label>

            <div class="vs-contrib-actions">
              <button type="submit">Envoyer</button>
              <button type="button" data-close-contrib>Fermer</button>
            </div>
          </form>
        </dialog>

        <script
          dangerouslySetInnerHTML={{
            __html: `
(() => {
  const btn = document.querySelector('[data-open-contrib]');
  const dlg = document.querySelector('[data-contrib-dialog]');
  if (!btn || !dlg) return;

  const urlEl = dlg.querySelector('[data-page-url]');
  const pathEl = dlg.querySelector('[data-page-path]');
  const titleEl = dlg.querySelector('[data-page-title]');

  btn.addEventListener('click', () => {
    if (urlEl) urlEl.value = window.location.href;
    if (pathEl) pathEl.value = window.location.pathname;
    if (titleEl) titleEl.value = document.title;
    dlg.showModal();
  });

  const closeBtn = dlg.querySelector('[data-close-contrib]');
  if (closeBtn) closeBtn.addEventListener('click', () => dlg.close());
})();
            `,
          }}
        />
      </div>
    )
  }

  return Comp
}

export default ContributionDialog