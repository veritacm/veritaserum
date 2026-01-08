// Script for the Contribution Dialog component
// Uses event delegation to handle clicks on the contribution button and dialog

// Use a flag to ensure we only add the click listener once
let contributionDialogInitialized = false

// Event delegation for opening and closing the dialog
function handleContributionDialogClick(e: MouseEvent) {
  const target = e.target as HTMLElement

  // Check if the clicked element or its parent has the open trigger attribute
  const openBtn = target.closest("[data-open-contribution-dialog]") || target.closest("[data-open-contrib]")
  if (openBtn) {
    e.preventDefault()

    const dialog = document.querySelector("[data-contrib-dialog]") as HTMLDialogElement | null
    if (!dialog) return

    // Fill hidden fields with page metadata
    const urlInput = dialog.querySelector("[data-page-url]") as HTMLInputElement | null
    const pathInput = dialog.querySelector("[data-page-path]") as HTMLInputElement | null
    const titleInput = dialog.querySelector("[data-page-title]") as HTMLInputElement | null

    if (urlInput) urlInput.value = window.location.href
    if (pathInput) pathInput.value = window.location.pathname
    if (titleInput) titleInput.value = document.title

    // Open the dialog (with fallback for older browsers)
    if (typeof dialog.showModal === "function") {
      dialog.showModal()
    } else {
      dialog.setAttribute("open", "")
    }
    return
  }

  // Check if the clicked element or its parent has the close trigger attribute
  const closeBtn = target.closest("[data-close-contribution-dialog]") || target.closest("[data-close-contrib]")
  if (closeBtn) {
    e.preventDefault()

    const dialog = document.querySelector("[data-contrib-dialog]") as HTMLDialogElement | null
    if (!dialog) return

    if (typeof dialog.close === "function") {
      dialog.close()
    } else {
      dialog.removeAttribute("open")
    }
    return
  }

  // Close dialog when clicking on the backdrop (clicking directly on the dialog element)
  const dialog = target as HTMLDialogElement
  if (dialog.hasAttribute("data-contrib-dialog") && e.target === dialog) {
    if (typeof dialog.close === "function") {
      dialog.close()
    } else {
      dialog.removeAttribute("open")
    }
  }
}

if (!contributionDialogInitialized) {
  document.addEventListener("click", handleContributionDialogClick)
  contributionDialogInitialized = true
}
