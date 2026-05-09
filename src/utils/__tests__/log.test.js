/**
 * Tests for the log utility. We're already in NODE_ENV === 'test' (CRA
 * sets it for Jest), so the default behavior is "silent" unless the
 * verbose localStorage flag is set. We exercise both modes.
 */

import { logError, logWarn, logInfo, logDebug, makeLogger } from '../log';

describe('log — scoped console wrappers', () => {
  let errorSpy;
  let warnSpy;
  let logSpy;
  let debugSpy;

  beforeEach(() => {
    errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    warnSpy  = jest.spyOn(console, 'warn').mockImplementation(() => {});
    logSpy   = jest.spyOn(console, 'log').mockImplementation(() => {});
    debugSpy = jest.spyOn(console, 'debug').mockImplementation(() => {});
    // Default: tests are silent unless explicitly opted in via the verbose flag.
    try { window.localStorage.removeItem('performsat:logVerbose'); } catch { /* noop */ }
  });

  afterEach(() => {
    errorSpy.mockRestore();
    warnSpy.mockRestore();
    logSpy.mockRestore();
    debugSpy.mockRestore();
    try { window.localStorage.removeItem('performsat:logVerbose'); } catch { /* noop */ }
  });

  describe('default (test) mode — silent', () => {
    it('logError is suppressed', () => {
      logError('mod', 'oops');
      expect(errorSpy).not.toHaveBeenCalled();
    });
    it('logWarn is suppressed', () => {
      logWarn('mod', 'mild');
      expect(warnSpy).not.toHaveBeenCalled();
    });
    it('logInfo is suppressed', () => {
      logInfo('mod', 'lifecycle');
      expect(logSpy).not.toHaveBeenCalled();
    });
    it('logDebug is suppressed', () => {
      logDebug('mod', 'detail');
      expect(debugSpy).not.toHaveBeenCalled();
    });
  });

  describe('verbose flag — emit with prefix', () => {
    beforeEach(() => {
      window.localStorage.setItem('performsat:logVerbose', '1');
    });

    it('logError emits with [performsat:scope] prefix', () => {
      logError('myModule', 'oops', { code: 500 });
      expect(errorSpy).toHaveBeenCalledTimes(1);
      const [prefix, msg, payload] = errorSpy.mock.calls[0];
      expect(prefix).toBe('[performsat:myModule]');
      expect(msg).toBe('oops');
      expect(payload).toEqual({ code: 500 });
    });

    it('logWarn emits with prefix', () => {
      logWarn('myModule', 'mild');
      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy.mock.calls[0][0]).toBe('[performsat:myModule]');
    });

    it('logInfo emits with prefix', () => {
      logInfo('myModule', 'lifecycle');
      expect(logSpy).toHaveBeenCalledTimes(1);
      expect(logSpy.mock.calls[0][0]).toBe('[performsat:myModule]');
    });

    it('logDebug emits with prefix', () => {
      logDebug('myModule', 'detail');
      expect(debugSpy).toHaveBeenCalledTimes(1);
      expect(debugSpy.mock.calls[0][0]).toBe('[performsat:myModule]');
    });
  });

  describe('makeLogger', () => {
    beforeEach(() => {
      window.localStorage.setItem('performsat:logVerbose', '1');
    });

    it('binds scope so every method emits the same prefix', () => {
      const log = makeLogger('boundScope');
      log.error('a');
      log.warn('b');
      log.info('c');
      log.debug('d');
      expect(errorSpy.mock.calls[0][0]).toBe('[performsat:boundScope]');
      expect(warnSpy.mock.calls[0][0]).toBe('[performsat:boundScope]');
      expect(logSpy.mock.calls[0][0]).toBe('[performsat:boundScope]');
      expect(debugSpy.mock.calls[0][0]).toBe('[performsat:boundScope]');
    });
  });

  describe('localStorage failures don\'t crash the loggers', () => {
    it('returns false from isVerboseRuntime when getItem throws', () => {
      const original = window.localStorage.getItem;
      window.localStorage.getItem = () => { throw new Error('private mode'); };
      // No-throw is the contract.
      expect(() => logError('mod', 'msg')).not.toThrow();
      expect(() => logInfo('mod', 'msg')).not.toThrow();
      window.localStorage.getItem = original;
    });
  });
});
