import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Bo8unefw.mjs';
import 'es-module-lexer';
import { f as decodeKey } from './chunks/astro/server_C3gtFaSK.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Inbook%20Air/.gemini/antigravity/scratch/aqs-website/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"checkout/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/checkout","isIndex":false,"type":"page","pattern":"^\\/checkout\\/?$","segments":[[{"content":"checkout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/checkout.astro","pathname":"/checkout","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"faq/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"order-success/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/order-success","isIndex":false,"type":"page","pattern":"^\\/order-success\\/?$","segments":[[{"content":"order-success","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/order-success.astro","pathname":"/order-success","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"payment/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/payment","isIndex":false,"type":"page","pattern":"^\\/payment\\/?$","segments":[[{"content":"payment","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/payment.astro","pathname":"/payment","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"products/soe-bag-1/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/products/soe-bag-1","isIndex":false,"type":"page","pattern":"^\\/products\\/soe-bag-1\\/?$","segments":[[{"content":"products","dynamic":false,"spread":false}],[{"content":"soe-bag-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/products/soe-bag-1.astro","pathname":"/products/soe-bag-1","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"products/soe-bag-2/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/products/soe-bag-2","isIndex":false,"type":"page","pattern":"^\\/products\\/soe-bag-2\\/?$","segments":[[{"content":"products","dynamic":false,"spread":false}],[{"content":"soe-bag-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/products/soe-bag-2.astro","pathname":"/products/soe-bag-2","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"returns-exchanges/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/returns-exchanges","isIndex":false,"type":"page","pattern":"^\\/returns-exchanges\\/?$","segments":[[{"content":"returns-exchanges","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/returns-exchanges.astro","pathname":"/returns-exchanges","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"shipping-policy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/shipping-policy","isIndex":false,"type":"page","pattern":"^\\/shipping-policy\\/?$","segments":[[{"content":"shipping-policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/shipping-policy.astro","pathname":"/shipping-policy","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/shipping/rates","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/shipping\\/rates\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"shipping","dynamic":false,"spread":false}],[{"content":"rates","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/shipping/rates.ts","pathname":"/api/shipping/rates","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://aquietspace.id","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Inbook Air/.gemini/antigravity/scratch/aqs-website/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/Inbook Air/.gemini/antigravity/scratch/aqs-website/src/pages/checkout.astro",{"propagation":"none","containsHead":true}],["C:/Users/Inbook Air/.gemini/antigravity/scratch/aqs-website/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["C:/Users/Inbook Air/.gemini/antigravity/scratch/aqs-website/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Inbook Air/.gemini/antigravity/scratch/aqs-website/src/pages/order-success.astro",{"propagation":"none","containsHead":true}],["C:/Users/Inbook Air/.gemini/antigravity/scratch/aqs-website/src/pages/payment.astro",{"propagation":"none","containsHead":true}],["C:/Users/Inbook Air/.gemini/antigravity/scratch/aqs-website/src/pages/products/soe-bag-1.astro",{"propagation":"none","containsHead":true}],["C:/Users/Inbook Air/.gemini/antigravity/scratch/aqs-website/src/pages/products/soe-bag-2.astro",{"propagation":"none","containsHead":true}],["C:/Users/Inbook Air/.gemini/antigravity/scratch/aqs-website/src/pages/returns-exchanges.astro",{"propagation":"none","containsHead":true}],["C:/Users/Inbook Air/.gemini/antigravity/scratch/aqs-website/src/pages/shipping-policy.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/shipping/rates@_@ts":"pages/api/shipping/rates.astro.mjs","\u0000@astro-page:src/pages/checkout@_@astro":"pages/checkout.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/order-success@_@astro":"pages/order-success.astro.mjs","\u0000@astro-page:src/pages/payment@_@astro":"pages/payment.astro.mjs","\u0000@astro-page:src/pages/products/soe-bag-1@_@astro":"pages/products/soe-bag-1.astro.mjs","\u0000@astro-page:src/pages/products/soe-bag-2@_@astro":"pages/products/soe-bag-2.astro.mjs","\u0000@astro-page:src/pages/returns-exchanges@_@astro":"pages/returns-exchanges.astro.mjs","\u0000@astro-page:src/pages/shipping-policy@_@astro":"pages/shipping-policy.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Inbook Air/.gemini/antigravity/scratch/aqs-website/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_DXH9XIZT.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.CBK99Y88.js","/astro/hoisted.js?q=2":"_astro/hoisted.BLUndxaz.js","/astro/hoisted.js?q=3":"_astro/hoisted.GDh3ESpy.js","/astro/hoisted.js?q=1":"_astro/hoisted.r_KDnBJz.js","/astro/hoisted.js?q=4":"_astro/hoisted.BrPGR3Ql.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.BAziOTu4.css","/_astro/checkout.Do2hmF4H.css","/_astro/order-success.ZRRD588l.css","/_astro/payment.CqVLp73l.css","/_astro/soe-bag-1.DBzWirCM.css","/_astro/soe-bag-1.CPOQXqk1.css","/_astro/soe-bag-2.CcTWDtlg.css","/logo.svg","/images/backpack.jpg","/images/bag-2-front.jpg","/images/bag-2-gallery-1.jpg","/images/bag-2-gallery-2.jpg","/images/bag-2-gallery-3.jpg","/images/bag-2-gallery-4.jpg","/images/bottle.jpg","/images/construction.jpg","/images/front.jpg","/images/hero-desktop-bag-2.jpg","/images/hero-desktop.jpg","/images/hero-editorial.jpg","/images/hero-mobile-bag-2.jpg","/images/hero-mobile.jpg","/images/interior.jpg","/images/laptop.jpg","/images/logo.png","/images/sling.jpg","/images/straps.jpg","/images/teaser.jpg","/images/texture.jpg","/images/tote.jpg","/images/zipper.jpg","/_astro/FeatureGallery.astro_astro_type_script_index_0_lang.DnHSBz7v.js","/_astro/hoisted.BLUndxaz.js","/_astro/hoisted.BrPGR3Ql.js","/_astro/hoisted.CBK99Y88.js","/_astro/hoisted.GDh3ESpy.js","/_astro/hoisted.r_KDnBJz.js","/fonts/satoshi/Satoshi-Bold.woff2","/fonts/satoshi/Satoshi-Medium.woff2","/fonts/satoshi/Satoshi-Regular.woff2","/fonts/sentient/Sentient-Italic.woff2","/fonts/sentient/Sentient-Regular.woff2","/about/index.html","/checkout/index.html","/faq/index.html","/order-success/index.html","/payment/index.html","/products/soe-bag-1/index.html","/products/soe-bag-2/index.html","/returns-exchanges/index.html","/shipping-policy/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"EgSEmkcsXWLzClc24KXPwyvRzw61tk7vGe40hh+rcMs=","experimentalEnvGetSecretEnabled":false});

export { manifest };
