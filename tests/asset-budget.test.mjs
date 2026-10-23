import test from 'node:test';
import assert from 'node:assert/strict';
import { statSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

test('homepage source collage remains within a 3 MB size budget', () => {
  const bytes = statSync(resolve('public/images/husan-mind-collage.png')).size;
  assert.ok(bytes <= 3_000_000, `Homepage collage source exceeds budget: ${bytes} bytes`);
});

test('downloadable résumé is a real PDF', () => {
  const path = resolve('public/resume.pdf');
  assert.ok(statSync(path).size > 1000);
  assert.equal(readFileSync(path).subarray(0, 5).toString('ascii'), '%PDF-');
});
