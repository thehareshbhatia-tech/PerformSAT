/**
 * Avatar image helpers — client-side resize for profile photos.
 *
 * Photos are stored inline on the Firestore user doc as a small data-URL
 * JPEG (no Storage bucket needed), so the resize step is what keeps the doc
 * far under Firestore's 1MB limit. A 256px JPEG at q=0.85 lands ~10-40KB.
 */

/** Hard ceiling for the stored data URL (bytes of the base64 string). */
export const MAX_AVATAR_BYTES = 200 * 1024;

/**
 * True when a data URL is small enough to store on the user doc.
 * Pure — unit-testable without a DOM.
 *
 * @param {string} dataUrl
 * @param {number} [maxBytes]
 * @returns {boolean}
 */
export function isDataUrlSizeOk(dataUrl, maxBytes = MAX_AVATAR_BYTES) {
  return typeof dataUrl === 'string'
    && dataUrl.startsWith('data:image/')
    && dataUrl.length <= maxBytes;
}

/**
 * Resize an image File to a centered-square JPEG data URL.
 * Browser-only (canvas). Rejects on unreadable/non-image files.
 *
 * @param {File} file - image file from an <input type="file">
 * @param {number} [size] - output square dimension in px
 * @param {number} [quality] - JPEG quality 0-1
 * @returns {Promise<string>} data URL
 */
export function fileToAvatarDataUrl(file, size = 256, quality = 0.85) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type || !file.type.startsWith('image/')) {
      reject(new Error('Please choose an image file.'));
      return;
    }
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      try {
        const side = Math.min(img.naturalWidth, img.naturalHeight);
        const sx = (img.naturalWidth - side) / 2;
        const sy = (img.naturalHeight - side) / 2;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, sx, sy, side, side, 0, 0, size, size);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        if (!isDataUrlSizeOk(dataUrl)) {
          reject(new Error('That image could not be compressed enough — try a different one.'));
          return;
        }
        resolve(dataUrl);
      } catch (err) {
        reject(err);
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Could not read that image — try a different file.'));
    };
    img.src = url;
  });
}
