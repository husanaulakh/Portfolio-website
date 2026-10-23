import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
const projectSource = readFileSync(new URL('../../src/data/projects.ts', import.meta.url), 'utf8');
const projectSlugs = [...projectSource.matchAll(/slug:\s*'([a-z0-9-]+)'/g)].map((match) => match[1]);

test('home page has engineering identity and an accessible navigation', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Husan');
  await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Download résumé (PDF)' })).toHaveAttribute('href', '/resume.pdf');
});

for (const slug of projectSlugs) {
  test(`project detail exists: ${slug}`, async ({ page }) => {
    const response = await page.goto(`/projects/${slug}`);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });
}

test('unknown project gives a real 404', async ({ page }) => {
  const response = await page.goto('/projects/not-a-real-project-404-test');
  expect(response?.status()).toBe(404);
});

test('mobile navigation remains usable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Work Experience' }).click();
  await expect(page.getByRole('heading', { name: 'Work Experience' })).toBeVisible();
});

test('featured carousel keeps inactive links out of keyboard focus', async ({ page }) => {
  await page.goto('/projects');
  const region = page.getByRole('region', { name: 'Featured Projects' });
  await expect(region.locator('[aria-hidden="true"] a').first()).toHaveAttribute('tabindex', '-1');
  await region.focus();
  await page.keyboard.press('ArrowRight');
  await expect(region.locator('[aria-live="polite"]')).toContainText('2 of');
});

test('empty contact form validates before a network submission', async ({ page }) => {
  await page.goto('/contact');
  await page.getByRole('button', { name: 'Send Message' }).click();
  await expect(page.getByText('Name must be at least 2 characters.')).toBeVisible();
});

test('published sitemap and résumé download are accessible', async ({ request }) => {
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain('https://husanaulakh.vercel.app');
  const pdf = await request.get('/resume.pdf');
  expect(pdf.status()).toBe(200);
  expect(pdf.headers()['content-type']).toMatch(/application\/pdf/);
});
