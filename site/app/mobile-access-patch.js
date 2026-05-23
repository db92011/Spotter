(() => {
  const patched = "mobileInstallPatched";

  function closeAccountModal(card) {
    const modal = card.closest("ion-modal");
    if (modal && typeof modal.dismiss === "function") {
      modal.dismiss();
      return;
    }

    card.querySelector(".spotter-modal-close")?.click();
  }

  function findText(container, selector, text) {
    return Array.from(container.querySelectorAll(selector)).find((element) =>
      element.textContent.trim().includes(text)
    );
  }

  function patchAccountModal(card) {
    if (card.dataset[patched] === "true") return;
    card.dataset[patched] = "true";

    const eyebrow = card.querySelector(".eyebrow");
    if (eyebrow) eyebrow.textContent = "Mobile access";

    const heading = card.querySelector("h2");
    if (heading) heading.textContent = "Spotter mobile access";

    const intro = findText(card, "p", "Enter the email");
    if (intro) {
      intro.textContent =
        "Spotter is mobile-only. Use it on your phone. Tap Back to Spotter if you are not starting the Stripe subscription now.";
    }

    const deviceLimit = findText(card, ".spotter-account-limit p", "Use Spotter");
    if (deviceLimit) {
      deviceLimit.textContent =
        "Use Spotter on your phone and one backup device. You can return to Spotter without going into Stripe.";
    }

    const actions = card.querySelector(".spotter-share-actions");
    if (actions && !actions.querySelector("[data-spotter-bypass]")) {
      const bypass = document.createElement("button");
      bypass.type = "button";
      bypass.textContent = "Back to Spotter";
      bypass.dataset.spotterBypass = "true";
      bypass.addEventListener("click", () => closeAccountModal(card));
      actions.insertBefore(bypass, actions.firstElementChild);
    }

    const stripeLink = actions?.querySelector('a[href*="stripe.com"]');
    if (stripeLink) {
      stripeLink.textContent = "Start subscription with Stripe";
      stripeLink.setAttribute("aria-label", "Start subscription with Stripe");
    }

    const bottomBack = card.querySelector(".spotter-modal-close");
    if (bottomBack) bottomBack.textContent = "Back to Spotter";
  }

  function patch() {
    document.querySelectorAll(".spotter-account-card").forEach(patchAccountModal);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", patch, { once: true });
  } else {
    patch();
  }

  new MutationObserver(patch).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
