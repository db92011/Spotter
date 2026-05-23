const params = new URLSearchParams(window.location.search);
const projectId = params.get("project");
const shouldOpenInstallGuide = params.get("source") === "circle" || params.get("install") === "1";
const appBasePath =
  window.location.protocol === "file:" ? new URL("../", window.location.href).href : "/app/";
const openAppPath = projectId
  ? `${appBasePath}?project=${encodeURIComponent(projectId)}`
  : appBasePath;

const openAppLink = document.querySelector("#openAppLink");
const installAction = document.querySelector("#installAction");
const installedState = document.querySelector("#installedState");
const installSheet = document.querySelector("#installSheet");
const closeSheet = document.querySelector("#closeSheet");
const sheetEyebrow = document.querySelector("#sheetEyebrow");
const sheetTitle = document.querySelector("#sheetTitle");
const stepOne = document.querySelector("#stepOne");
const stepTwo = document.querySelector("#stepTwo");
const stepThree = document.querySelector("#stepThree");

if (openAppLink) {
  openAppLink.setAttribute("href", openAppPath);
}

const ua = window.navigator.userAgent || "";
const vendor = window.navigator.vendor || "";
const platform = window.navigator.platform || "";
const isStandalone =
  window.matchMedia("(display-mode: standalone)").matches ||
  window.navigator.standalone === true ||
  document.referrer.startsWith("android-app://");
const isAppleTouchDevice =
  /iphone|ipad|ipod/i.test(ua) ||
  /iphone|ipad|ipod/i.test(platform) ||
  (platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
const isIOS = isAppleTouchDevice;
const isSafari =
  /Apple/i.test(vendor) &&
  /safari/i.test(ua) &&
  !/crios|fxios|edgios|opios|mercury/i.test(ua);
const isDesktopSafari = isSafari && !isIOS;
const isAndroid = /android/i.test(ua);
let deferredInstallPrompt = null;

if (isStandalone) {
  installedState.hidden = false;
  installAction.textContent = "Continue to Spotter";
} else if (isIOS && isSafari) {
  installAction.textContent = "Show iPhone install steps";
} else if (isIOS) {
  installAction.textContent = "Open this page in Safari";
} else if (isDesktopSafari) {
  installAction.textContent = "Show Mac install steps";
}

function setGuide(kind) {
  if (kind === "mac") {
    sheetEyebrow.textContent = "Mac install";
    sheetTitle.textContent = "Add Spotter to the Dock";
    stepOne.textContent = "Open this installer page in Safari on your Mac.";
    stepTwo.textContent = "Use File > Add to Dock from the Safari menu bar.";
    stepThree.textContent = "Click Add. Then launch Spotter from the Dock or Applications.";
    return;
  }

  if (kind === "android") {
    sheetEyebrow.textContent = "Android install";
    sheetTitle.textContent = "Install Spotter";
    stepOne.textContent = "Tap the browser menu or the install prompt when it appears.";
    stepTwo.textContent = "Choose Install app or Add to Home screen.";
    stepThree.textContent = "Tap Install. Then launch Spotter from the new app icon.";
    return;
  }

  if (kind === "desktop") {
    sheetEyebrow.textContent = "Desktop install";
    sheetTitle.textContent = "Install Spotter";
    stepOne.textContent = "Use the install icon in the address bar, or open the browser app menu.";
    stepTwo.textContent = "Choose Install Spotter, Install this site as an app, or Add to Dock.";
    stepThree.textContent = "Open Spotter from the new app icon. It will launch the app shell.";
    return;
  }

  sheetEyebrow.textContent = "iPhone install";
  sheetTitle.textContent = "Add Spotter to Home Screen";
  stepOne.textContent = "Open this installer page in Safari.";
  stepTwo.textContent = "Tap Share, then choose Add to Home Screen.";
  stepThree.textContent = "Tap Add. Then launch Spotter from the new Home Screen icon.";
}

function showDeviceGuide() {
  if (!installSheet?.showModal || isStandalone) return;

  if (isIOS) {
    setGuide("iphone");
  } else if (isDesktopSafari) {
    setGuide("mac");
  } else if (isAndroid) {
    setGuide("android");
  } else {
    setGuide("desktop");
  }

  installSheet.showModal();
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installAction.textContent = "Install Spotter";
});

installAction?.addEventListener("click", async () => {
  if (isStandalone) {
    window.location.href = openAppPath;
    return;
  }

  if (!deferredInstallPrompt) {
    showDeviceGuide();
    return;
  }

  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installAction.textContent = "Install requested";
});

closeSheet?.addEventListener("click", () => {
  installSheet?.close();
});

installSheet?.addEventListener("click", (event) => {
  if (event.target === installSheet) {
    installSheet.close();
  }
});

if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
  navigator.serviceWorker.register("/app/service-worker.js", { scope: "/app/" }).catch(() => {
    // Install polish should not block the app.
  });
}

if (shouldOpenInstallGuide) {
  window.setTimeout(showDeviceGuide, 250);
}
