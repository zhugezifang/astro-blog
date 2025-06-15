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
import cloudflare from '@astrojs/cloudflare'; // 静态部署适配器

export default defineConfig({
  output: 'static', // 配置为静态输出
  adapter: cloudflare(), // 使用 Cloudflare 静态适配器
});

