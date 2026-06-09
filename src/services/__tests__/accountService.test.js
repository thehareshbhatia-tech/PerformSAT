/**
 * Tests for accountService.deleteAccount — the client side of permanent
 * account deletion. The Cloud Function requires the literal string
 * confirmation {confirm: 'DELETE'} (string, NOT boolean); these tests pin
 * that contract plus the friendly-error behavior on non-OK responses.
 */

jest.mock('../authFetch', () => ({ authFetch: jest.fn() }));

import { authFetch } from '../authFetch';
import { deleteAccount } from '../accountService';

// CRA's jest config sets resetMocks: true, so implementations are set
// per-test below rather than in the mock factory.

describe('deleteAccount', () => {
  it('POSTs {confirm: "DELETE"} (string, not boolean) to the delete-account URL', async () => {
    authFetch.mockResolvedValue({ ok: true });

    await deleteAccount();

    expect(authFetch).toHaveBeenCalledTimes(1);
    const [url, options] = authFetch.mock.calls[0];
    expect(url).toBe('https://us-central1-performsat-production.cloudfunctions.net/deleteAccount');
    expect(options.method).toBe('POST');
    expect(JSON.parse(options.body)).toEqual({ confirm: 'DELETE' });
  });

  it('resolves without parsing the body on a 2xx response', async () => {
    const json = jest.fn();
    authFetch.mockResolvedValue({ ok: true, json });

    await expect(deleteAccount()).resolves.toBeUndefined();
    expect(json).not.toHaveBeenCalled();
  });

  it('surfaces the server-provided error message on !ok', async () => {
    authFetch.mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => ({ error: 'Missing confirmation' }),
    });

    await expect(deleteAccount()).rejects.toThrow('Missing confirmation');
  });

  it('throws a friendly fallback when the error body is empty or not JSON', async () => {
    authFetch.mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => { throw new Error('unexpected end of input'); },
    });

    await expect(deleteAccount()).rejects.toThrow(
      'Could not delete your account. Please try again.'
    );
  });

  it('propagates authFetch failures (e.g. not authenticated)', async () => {
    authFetch.mockRejectedValue(new Error('Not authenticated'));

    await expect(deleteAccount()).rejects.toThrow('Not authenticated');
  });
});
