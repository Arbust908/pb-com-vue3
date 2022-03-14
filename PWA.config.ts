import type { VitePWAOptions } from 'vite-plugin-pwa'

export const PWAconfig: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
  manifest: {
    name: 'Pancho Blanco Com',
    short_name: 'PB.com',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
}
