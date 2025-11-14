import { describe, it, expect, beforeAll, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

// HTMLファイルのパス
const htmlPath = path.resolve(__dirname, '../problem/index.html');
const html = fs.readFileSync(htmlPath, 'utf-8');

// スクリプトファイルのパス
const scriptPath = path.resolve(__dirname, '../problem/script.js');
const script = fs.readFileSync(scriptPath, 'utf-8');

describe('カウンター機能', () => {
  let dom;
  let window;
  let document;
  let countElement;
  let incrementBtn;
  let decrementBtn;
  let resetBtn;

  beforeEach(() => {
    // JSDOMでDOM環境をセットアップ
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    window = dom.window;
    document = window.document;

    // script.jsを実行
    const scriptEl = document.createElement('script');
    scriptEl.textContent = script;
    document.body.appendChild(scriptEl);

    // 要素を取得
    countElement = document.getElementById('count');
    incrementBtn = document.getElementById('increment-btn');
    decrementBtn = document.getElementById('decrement-btn');
    resetBtn = document.getElementById('reset-btn');
  });

  it('初期状態ではカウンターは0であるべき', () => {
    expect(countElement.textContent).toBe('0');
  });

  it('+ボタンをクリックするとカウンターが1増えるべき', () => {
    incrementBtn.click();
    expect(countElement.textContent).toBe('1');
  });

  it('-ボタンをクリックするとカウンターが1減るべき', () => {
    // まずは1増やしておく
    incrementBtn.click(); 
    decrementBtn.click();
    expect(countElement.textContent).toBe('0');
  });

  it('リセットボタンをクリックするとカウンターが0になるべき', () => {
    // 何度か増やしておく
    incrementBtn.click();
    incrementBtn.click();
    incrementBtn.click();
    
    resetBtn.click();
    expect(countElement.textContent).toBe('0');
  });

  it('複数回のクリックが正しく反映されるべき', () => {
    incrementBtn.click();
    incrementBtn.click();
    decrementBtn.click();
    incrementBtn.click();
    expect(countElement.textContent).toBe('2');
  });
});
