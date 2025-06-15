/*import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel()
});
*/

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare'; // ✅ 使用 Cloudflare 适配器

export default defineConfig({
  integrations: [tailwind()],
  output: 'server', // Cloudflare SSR 需要使用 server 输出
  adapter: cloudflare(),
});
