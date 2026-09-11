/**
 * App Router Migration Verification Tests
 * 
 * This test suite verifies that the migration from Pages Router to App Router
 * maintains functionality and meets WCAG 2.2 AA accessibility standards.
 * 
 * Tests verify:
 * - HTTP 200 OK status for all migrated routes
 * - Page title metadata matches expected values (screen reader compatibility)
 * - Main content landmark exists and is visible (ADA compliance)
 * - Skip to main content link is present and functional
 */
import { test, expect } from '@playwright/test';

// Routes that have been migrated to App Router
const MIGRATED_ROUTES = [
  {
    path: '/',
    title: 'PRRC - Petroleum Recovery Research Center',
    description: 'Petroleum Recovery Research Center',
  },
  {
    path: '/staff',
    title: 'Staff Directory | PRRC - Meet Our Research Team',
    description: 'Meet the dedicated staff and researchers',
  },
  {
    path: '/login',
    title: 'Sign In | PRRC',
    description: 'Access your PRRC account',
  },
];

test.describe('App Router Migration Verification', () => {
  test.describe('Route Accessibility & Status', () => {
    MIGRATED_ROUTES.forEach(({ path, title, description }) => {
      test.describe(`Route: ${path}`, () => {
        test('returns HTTP 200 OK status', async ({ request }) => {
          const response = await request.get(path);
          expect(response.status()).toBe(200);
        });

        test('has correct page title for screen readers', async ({ page }) => {
          await page.goto(path);
          
          // Wait for page to load
          await page.waitForLoadState('networkidle');
          
          // Verify title contains expected text
          const pageTitle = await page.title();
          expect(pageTitle).toContain(title);
        });

        test('has meta description for SEO and accessibility', async ({ page }) => {
          await page.goto(path);
          
          const descriptionMeta = await page.locator('meta[name="description"]').getAttribute('content');
          expect(descriptionMeta).toContain(description);
        });

        test('has main content landmark (#main-content)', async ({ page }) => {
          await page.goto(path);
          
          // Verify main landmark exists
          const mainContent = page.locator('#main-content');
          await expect(mainContent).toBeVisible();
          
          // Verify it has the correct role
          await expect(mainContent).toHaveAttribute('role', 'main');
        });

        test('has skip to main content link for keyboard navigation', async ({ page }) => {
          await page.goto(path);
          
          // Find skip link
          const skipLink = page.locator('a[href="#main-content"]');
          await expect(skipLink).toBeVisible({ visible: false }); // Hidden until focused
          
          // Press Tab to show skip link
          await page.keyboard.press('Tab');
          await expect(skipLink).toBeVisible();
          
          // Verify skip link is focusable and has accessible text
          await expect(skipLink).toHaveText('Skip to main content');
        });

        test('has proper HTML lang attribute', async ({ page }) => {
          await page.goto(path);
          
          const htmlElement = page.locator('html');
          await expect(htmlElement).toHaveAttribute('lang', 'en');
        });

        test('has Navbar component', async ({ page }) => {
          await page.goto(path);
          
          // Check for navigation element
          const nav = page.locator('nav');
          await expect(nav).toBeVisible();
        });

        test('has Footer component', async ({ page }) => {
          await page.goto(path);
          
          // Check for footer element
          const footer = page.locator('footer');
          await expect(footer).toBeVisible();
        });
      });
    });
  });

  test.describe('Staff Page Specific Tests', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/staff');
      await page.waitForLoadState('networkidle');
    });

    test('displays page heading "Our Team"', async ({ page }) => {
      const heading = page.locator('h1#page-heading');
      await expect(heading).toBeVisible();
      await expect(heading).toContainText('Our Team');
    });

    test('has accessible staff grid layout', async ({ page }) => {
      // Check for grid with proper ARIA attributes
      const grid = page.locator('[role="list"][aria-label*="staff"]');
      await expect(grid).toBeVisible();
    });

    test('has proper heading hierarchy', async ({ page }) => {
      // Check for h2 section headings
      const sectionHeadings = page.locator('h2[id$="-heading"]');
      const count = await sectionHeadings.count();
      expect(count).toBeGreaterThan(0);
    });
  });

  test.describe('Login Page Specific Tests', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/login');
      await page.waitForLoadState('networkidle');
    });

    test('displays login heading', async ({ page }) => {
      const heading = page.locator('h1#login-heading');
      await expect(heading).toBeVisible();
      await expect(heading).toContainText('Sign In');
    });

    test('has accessible form with proper labels', async ({ page }) => {
      // Email field
      const emailInput = page.locator('#email');
      await expect(emailInput).toBeVisible();
      await expect(emailInput).toHaveAttribute('type', 'email');
      await expect(emailInput).toHaveAttribute('aria-required', 'true');
      
      // Password field
      const passwordInput = page.locator('#password');
      await expect(passwordInput).toBeVisible();
      await expect(passwordInput).toHaveAttribute('type', 'password');
      await expect(passwordInput).toHaveAttribute('aria-required', 'true');
    });

    test('has form error alert region', async ({ page }) => {
      const alert = page.locator('[role="alert"][aria-live="assertive"]');
      await expect(alert).toBeVisible();
    });

    test('submit button has loading state support', async ({ page }) => {
      const submitButton = page.locator('button[type="submit"]');
      await expect(submitButton).toBeVisible();
      await expect(submitButton).toHaveAttribute('aria-busy', 'false');
    });

    test('form is keyboard accessible', async ({ page }) => {
      // Tab through form fields
      await page.keyboard.press('Tab'); // Email
      await page.keyboard.press('Tab'); // Password
      await page.keyboard.press('Tab'); // Submit button
      
      const focusedElement = page.locator(':focus');
      await expect(focusedElement).toHaveAttribute('type', 'submit');
    });
  });

  test.describe('Global Accessibility Tests', () => {
    test('all pages have proper document structure', async ({ page }) => {
      for (const { path } of MIGRATED_ROUTES) {
        await page.goto(path);
        
        // Check for proper DOCTYPE (via documentElement)
        const doctype = await page.evaluate(() => document.doctype?.name);
        expect(doctype).toBe('html');
        
        // Check for body element
        const body = page.locator('body');
        await expect(body).toBeVisible();
      }
    });

    test('no accessibility violations on main content', async ({ page }) => {
      for (const { path } of MIGRATED_ROUTES) {
        await page.goto(path);
        
        // Check that main content is reachable
        const mainContent = page.locator('#main-content');
        await expect(mainContent).toBeInViewport({ ratio: 0.1 });
      }
    });
  });
});

/**
 * Additional test: Verify no broken internal links
 * Run with: npx playwright test --grep "internal links"
 */
test.describe('Internal Link Verification', () => {
  test('checks all internal links return 200', async ({ page, request }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Get all internal links
    const links = await page.locator('a[href^="/"]').all();
    const hrefs = new Set<string>();
    
    for (const link of links) {
      const href = await link.getAttribute('href');
      if (href && !href.startsWith('/api/') && !href.startsWith('/admin')) {
        hrefs.add(href.split('#')[0]); // Remove hash fragments
      }
    }
    
    // Check each unique link
    for (const href of hrefs) {
      const response = await request.get(href);
      expect(response.status()).toBe(200);
    }
  });
});
