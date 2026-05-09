import React, { useEffect, useState } from 'react';
import './Toaster.css';

/**
 * Toaster — non-modal transient notifications.
 *
 * Mount <Toaster /> ONCE at the app root. From anywhere in the tree (or a
 * non-component module like a service file), call:
 *
 *     import { showToast } from '@/components/ui/Toaster';
 *     showToast({ type: 'error', message: 'Could not load.', duration: 5000 });
 *
 * The Toaster component holds the visible queue in a single `useState`. A
 * module-level pubsub bridges callers to that state so we don't need a
 * <ToasterProvider> wrapping App.jsx (which is 11k lines and not the hill
 * to die on for one transient-notification surface).
 *
 * Toast shape:
 *   { id?, type?: 'info'|'success'|'warn'|'error', message: string,
 *     duration?: number (ms; 0 disables auto-dismiss; default 4000) }
 *
 * Accessibility:
 *   The region uses aria-live="polite" + role="status" + aria-atomic="false",
 *   so screen readers announce new toasts without preempting the user.
 *
 * When to use it:
 *   Surface non-blocking failures or one-shot confirmations the user should
 *   know about but doesn't need to dismiss to keep working (e.g.,
 *   "Couldn't generate a similar question — try again in a moment.").
 *   For decisions/prompts, use Modal instead.
 */

const DEFAULT_DURATION_MS = 4000;

let toastIdCounter = 0;
let queue = [];
const listeners = new Set();

function notify() {
  for (const listener of listeners) listener(queue);
}

/**
 * Push a toast onto the queue. Returns the toast id (useful for early dismiss).
 *
 * @param {{ type?: string, message: string, duration?: number }} toast
 * @returns {number} the toast id
 */
export function showToast(toast) {
  if (!toast || typeof toast.message !== 'string' || toast.message.length === 0) {
    return -1;
  }
  const id = ++toastIdCounter;
  const full = {
    id,
    type: toast.type || 'info',
    message: toast.message,
    duration: typeof toast.duration === 'number' ? toast.duration : DEFAULT_DURATION_MS,
  };
  queue = [...queue, full];
  notify();
  if (full.duration > 0) {
    setTimeout(() => dismissToast(id), full.duration);
  }
  return id;
}

/**
 * Dismiss a toast by id (or no-op if it's already gone).
 * @param {number} id
 */
export function dismissToast(id) {
  const before = queue.length;
  queue = queue.filter(t => t.id !== id);
  if (queue.length !== before) notify();
}

/**
 * Test-only: clear the queue between tests so module-level state doesn't leak.
 * Production code should not call this.
 */
export function __resetToasterForTests() {
  queue = [];
  toastIdCounter = 0;
  notify();
}

export function Toaster() {
  const [items, setItems] = useState(queue);
  useEffect(() => {
    listeners.add(setItems);
    // Sync once on mount in case toasts were enqueued before mount.
    setItems(queue);
    return () => {
      listeners.delete(setItems);
    };
  }, []);

  if (items.length === 0) return null;

  return (
    <div
      className="toaster"
      role="status"
      aria-live="polite"
      aria-atomic="false"
    >
      {items.map(toast => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
}

function ToastItem({ toast }) {
  return (
    <div className={`toast toast-${toast.type}`}>
      <span className="toast-msg">{toast.message}</span>
      <button
        className="toast-close"
        type="button"
        onClick={() => dismissToast(toast.id)}
        aria-label="Dismiss notification"
      >
        ×
      </button>
    </div>
  );
}

export default Toaster;
