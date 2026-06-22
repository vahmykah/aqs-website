import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CjMpebYe.mjs';
import { manifest } from './manifest_DXH9XIZT.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/shipping/rates.astro.mjs');
const _page3 = () => import('./pages/checkout.astro.mjs');
const _page4 = () => import('./pages/faq.astro.mjs');
const _page5 = () => import('./pages/order-success.astro.mjs');
const _page6 = () => import('./pages/payment.astro.mjs');
const _page7 = () => import('./pages/products/soe-bag-1.astro.mjs');
const _page8 = () => import('./pages/products/soe-bag-2.astro.mjs');
const _page9 = () => import('./pages/returns-exchanges.astro.mjs');
const _page10 = () => import('./pages/shipping-policy.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/shipping/rates.ts", _page2],
    ["src/pages/checkout.astro", _page3],
    ["src/pages/faq.astro", _page4],
    ["src/pages/order-success.astro", _page5],
    ["src/pages/payment.astro", _page6],
    ["src/pages/products/soe-bag-1.astro", _page7],
    ["src/pages/products/soe-bag-2.astro", _page8],
    ["src/pages/returns-exchanges.astro", _page9],
    ["src/pages/shipping-policy.astro", _page10],
    ["src/pages/index.astro", _page11]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "eb0fca80-4e39-4540-a00a-07c38263992f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
