import { isDataUrlSizeOk, MAX_AVATAR_BYTES } from '../avatarImage';

describe('isDataUrlSizeOk', () => {
  it('accepts a small image data URL', () => {
    expect(isDataUrlSizeOk('data:image/jpeg;base64,' + 'a'.repeat(1000))).toBe(true);
  });

  it('rejects oversized payloads', () => {
    expect(isDataUrlSizeOk('data:image/jpeg;base64,' + 'a'.repeat(MAX_AVATAR_BYTES + 1))).toBe(false);
  });

  it('rejects non-image data URLs and junk', () => {
    expect(isDataUrlSizeOk('data:text/html;base64,aaaa')).toBe(false);
    expect(isDataUrlSizeOk('https://example.com/pic.jpg')).toBe(false);
    expect(isDataUrlSizeOk(null)).toBe(false);
    expect(isDataUrlSizeOk(undefined)).toBe(false);
  });
});
