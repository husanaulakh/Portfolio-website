import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { projectsData } from '../src/data/projects.ts';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

test('project slugs are unique and URL-friendly', () => {
  const slugs = projectsData.map(project => project.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  for (const slug of slugs) assert.match(slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
});
test('projects include human-readable case studies', () => {
  assert.ok(projectsData.length >= 5);
  for (const project of projectsData) {
    assert.ok(project.title && project.tagline && project.overview);
    assert.ok(project.highlights.length > 0);
    assert.ok(project.technologies.length > 0);
    for (const url of [project.repoUrl, project.liveUrl]) if (url) assert.match(url, /^https:\/\//);
  }
});
test('all portfolio image paths resolve to tracked assets', () => {
  for (const project of projectsData) {
    for (const asset of [project.imageUrl, project.detailsImageUrl]) {
      if (!asset) continue;
      assert.ok(asset.startsWith('/images/'), asset);
      assert.ok(existsSync(resolve(root, 'public', asset.slice(1))), asset);
    }
  }
});
