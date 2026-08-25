global.IS_REACT_ACT_ENVIRONMENT = true;
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import TestDatePicker from '../TestDatePicker';

function mount(el) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(el); });
  return { container, unmount: () => act(() => root.unmount()) };
}
const TODAY = new Date(2026, 7, 24, 12);

describe('TestDatePicker', () => {
  it('lists the next official sittings with registration state and selects one', () => {
    const onSelect = jest.fn();
    const { container, unmount } = mount(<TestDatePicker value="2026-08-22" today={TODAY} onSelect={onSelect} />);
    const chips = Array.from(container.querySelectorAll('.tdp-chip'));
    expect(chips.map((c) => c.querySelector('.tdp-chip-date').textContent)).toEqual(['Sep 12', 'Oct 3', 'Nov 7', 'Dec 5', 'Mar 6', 'May 1']);
    expect(chips[0].querySelector('.tdp-chip-sub').textContent).toBe('Register by Aug 28');
    act(() => { chips[1].click(); });
    expect(onSelect).toHaveBeenCalledWith('2026-10-03');
    unmount();
  });
  it('closed-registration dates say so; a custom date must be today or later', () => {
    const onSelect = jest.fn();
    const { container, unmount } = mount(<TestDatePicker value={null} today={new Date(2026, 8, 5)} onSelect={onSelect} allowClear onCancel={() => {}} />);
    const first = container.querySelector('.tdp-chip');
    expect(first.querySelector('.tdp-chip-date').textContent).toBe('Sep 12');
    expect(first.querySelector('.tdp-chip-sub').textContent).toBe('Registration closed');
    const input = container.querySelector('input[type=date]');
    const use = Array.from(container.querySelectorAll('button')).find((b) => b.textContent === 'Use this date');
    expect(use.disabled).toBe(true);
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    act(() => { setter.call(input, '2026-09-30'); input.dispatchEvent(new Event('input', { bubbles: true })); });
    expect(use.disabled).toBe(false);
    act(() => { use.click(); });
    expect(onSelect).toHaveBeenLastCalledWith('2026-09-30');
    const clear = Array.from(container.querySelectorAll('button')).find((b) => b.textContent.includes('clear my date'));
    act(() => { clear.click(); });
    expect(onSelect).toHaveBeenLastCalledWith(null);
    unmount();
  });
});
