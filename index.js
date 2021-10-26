if (typeof document !== 'undefined') {
  setInterval(() => {
    if (document.querySelector(".ytp-ad-info-dialog-mute-button")) {
      document.querySelector(".ytp-ad-info-dialog-mute-button").click();
      if (
        (document.querySelector(
          ".ytp-ad-feedback-dialog-reason-input"
        ).checked = true)
      ) {
        document
          .querySelector(".ytp-ad-feedback-dialog-confirm-button")
          .click();
      }
    }
  }, 100);
}