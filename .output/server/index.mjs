globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/arrow-left-DW1BFiJe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a1-tUXYpkz2K0ruxTmUNs5glGufNUQ\"",
		"mtime": "2026-10-08T16:22:48.080Z",
		"size": 161,
		"path": "../public/assets/arrow-left-DW1BFiJe.js"
	},
	"/assets/arrow-right-xANH7iRY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a1-Ym18yZbgHw/YVZgU/p+y+KNOcQs\"",
		"mtime": "2026-10-08T16:22:48.080Z",
		"size": 161,
		"path": "../public/assets/arrow-right-xANH7iRY.js"
	},
	"/assets/chevron-right-DxUSG16S.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7e-7NvUuIBzLGsGYY/w/5B0x4qS54A\"",
		"mtime": "2026-10-08T16:22:48.080Z",
		"size": 126,
		"path": "../public/assets/chevron-right-DxUSG16S.js"
	},
	"/assets/circle-check-DC1gT5vC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-/DnQ2jFKpcKgxzShU4oVb/OvTz0\"",
		"mtime": "2026-10-08T16:22:48.081Z",
		"size": 174,
		"path": "../public/assets/circle-check-DC1gT5vC.js"
	},
	"/assets/AuthShell-BQlg6w0p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"166e-K5GVYh7jC1jpjBGZDvhFXKF3Pt8\"",
		"mtime": "2026-10-08T16:22:48.076Z",
		"size": 5742,
		"path": "../public/assets/AuthShell-BQlg6w0p.js"
	},
	"/assets/circle-x-IPGg3RdE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-gWMDyikllmjPa+wEx4a+lKJ/Ofg\"",
		"mtime": "2026-10-08T16:22:48.081Z",
		"size": 203,
		"path": "../public/assets/circle-x-IPGg3RdE.js"
	},
	"/assets/clock-D60NNZZ_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-vhq2DlzR6Lu+TabQsHg8CB1uAOk\"",
		"mtime": "2026-10-08T16:22:48.081Z",
		"size": 165,
		"path": "../public/assets/clock-D60NNZZ_.js"
	},
	"/assets/dashboard-DC0jO7Lz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"288-X6RJSFW5pzC2guGdW3hoyBeJgbE\"",
		"mtime": "2026-10-08T16:22:48.081Z",
		"size": 648,
		"path": "../public/assets/dashboard-DC0jO7Lz.js"
	},
	"/assets/dashboard.ai-processing-DPdgGUZZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b10-rIIX0blg6W1kQ3fvKiakToj/GXA\"",
		"mtime": "2026-10-08T16:22:48.081Z",
		"size": 6928,
		"path": "../public/assets/dashboard.ai-processing-DPdgGUZZ.js"
	},
	"/assets/dashboard.document._docId-C0s3YC8h.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1679-US7k6m4c/zok45me0BEXmjkdJ2Q\"",
		"mtime": "2026-10-08T16:22:48.081Z",
		"size": 5753,
		"path": "../public/assets/dashboard.document._docId-C0s3YC8h.js"
	},
	"/assets/dashboard.document._docId-CNSWsmEt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"268-Q+1knC0FR37EvRXOdqAo+V8zJwc\"",
		"mtime": "2026-10-08T16:22:48.082Z",
		"size": 616,
		"path": "../public/assets/dashboard.document._docId-CNSWsmEt.js"
	},
	"/assets/dashboard.documents-DFCdY_Xk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1278-XlNior41oFojoPpuk9GYw4WPfqk\"",
		"mtime": "2026-10-08T16:22:48.082Z",
		"size": 4728,
		"path": "../public/assets/dashboard.documents-DFCdY_Xk.js"
	},
	"/assets/dashboard.folders-CQXYCDTl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f36-+9u7I+fjNhRldGKHiQjJMGkHMcI\"",
		"mtime": "2026-10-08T16:22:48.082Z",
		"size": 3894,
		"path": "../public/assets/dashboard.folders-CQXYCDTl.js"
	},
	"/assets/dashboard.index-DheUIqO_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23c1-mb9vp+P8pn8Ri97gW6ia2lT0D0w\"",
		"mtime": "2026-10-08T16:22:48.082Z",
		"size": 9153,
		"path": "../public/assets/dashboard.index-DheUIqO_.js"
	},
	"/assets/dashboard.notifications-rh1CndRz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90c-BltTlrEUpLZ7QL4oAM8aeygIVS4\"",
		"mtime": "2026-10-08T16:22:48.082Z",
		"size": 2316,
		"path": "../public/assets/dashboard.notifications-rh1CndRz.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-03T14:02:24.328Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/dashboard.profile-C8VKak2c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f42-imeuvi6mDyBb4CwPtb7MZqjwD3M\"",
		"mtime": "2026-10-08T16:22:48.083Z",
		"size": 12098,
		"path": "../public/assets/dashboard.profile-C8VKak2c.js"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-09-03T14:02:20.121Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/dashboard.reports-6jEKO2kJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"401f-905G1bGv0n1aNsH2UqMAqdx0eVA\"",
		"mtime": "2026-10-08T16:22:48.083Z",
		"size": 16415,
		"path": "../public/assets/dashboard.reports-6jEKO2kJ.js"
	},
	"/assets/dashboard.settings-DMsa70IZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"584f-132D9D3Kr7erxZXOZqTq1gdaw1k\"",
		"mtime": "2026-10-08T16:22:48.083Z",
		"size": 22607,
		"path": "../public/assets/dashboard.settings-DMsa70IZ.js"
	},
	"/assets/dashboard.upload-B3PphKpd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1046-nHA0WisacXbIJjYLuET5uVsdooY\"",
		"mtime": "2026-10-08T16:22:48.084Z",
		"size": 4166,
		"path": "../public/assets/dashboard.upload-B3PphKpd.js"
	},
	"/assets/dashboard.validation-CYokSIhX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19c2-4mHacvzoNwecmts+LYMPfQ+KPO4\"",
		"mtime": "2026-10-08T16:22:48.084Z",
		"size": 6594,
		"path": "../public/assets/dashboard.validation-CYokSIhX.js"
	},
	"/assets/DashboardShell-BpWXBRSo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"447c-+7uOpyQkx7nG5LanEcESHGHy2Ww\"",
		"mtime": "2026-10-08T16:22:48.076Z",
		"size": 17532,
		"path": "../public/assets/DashboardShell-BpWXBRSo.js"
	},
	"/assets/AreaChart-tMaRvPA4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"63250-PECDz9DrNkoeHrwz2/weIHxRSTI\"",
		"mtime": "2026-10-08T16:22:48.076Z",
		"size": 406096,
		"path": "../public/assets/AreaChart-tMaRvPA4.js"
	},
	"/assets/download-CnE_X9lv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e4-d7WEtUZIpdJo860lI/h9VsrdURE\"",
		"mtime": "2026-10-08T16:22:48.085Z",
		"size": 228,
		"path": "../public/assets/download-CnE_X9lv.js"
	},
	"/assets/file-text-Ch5ZUaY5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17d-BWoMo7P4OMS/WqjHXJvzxob4svA\"",
		"mtime": "2026-10-08T16:22:48.085Z",
		"size": 381,
		"path": "../public/assets/file-text-Ch5ZUaY5.js"
	},
	"/assets/forgot-password-CdWcaTRW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b9-/igQW210P/A009HRhjMXiZE8gKo\"",
		"mtime": "2026-10-08T16:22:48.085Z",
		"size": 697,
		"path": "../public/assets/forgot-password-CdWcaTRW.js"
	},
	"/assets/hard-drive-CXIC_bHM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"180-kv/V/NlWUvGrbpVGKBn3xLkB4jw\"",
		"mtime": "2026-10-08T16:22:48.085Z",
		"size": 384,
		"path": "../public/assets/hard-drive-CXIC_bHM.js"
	},
	"/assets/key-round-hcw5l9Vs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15f-AwvEWHzutwaeRPBEsUp5LoTOw84\"",
		"mtime": "2026-10-08T16:22:48.085Z",
		"size": 351,
		"path": "../public/assets/key-round-hcw5l9Vs.js"
	},
	"/assets/loader-circle-B2_Ywk_a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c-l/KwaiGLyb4OeUfle0tA+Z3M6W4\"",
		"mtime": "2026-10-08T16:22:48.112Z",
		"size": 140,
		"path": "../public/assets/loader-circle-B2_Ywk_a.js"
	},
	"/assets/link-BB7x10lQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"764c-9J/PwCrFYR619eFo1h1rNfMaGM4\"",
		"mtime": "2026-10-08T16:22:48.085Z",
		"size": 30284,
		"path": "../public/assets/link-BB7x10lQ.js"
	},
	"/assets/login-CCQX11ks.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9ab-iHrVl8Q/byLEQEmeWXey6R7+Cn8\"",
		"mtime": "2026-10-08T16:22:48.112Z",
		"size": 2475,
		"path": "../public/assets/login-CCQX11ks.js"
	},
	"/assets/lovable-mu4kp80u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f49-Oh7DXukapaV6gknQ+Bb9q6fQMN0\"",
		"mtime": "2026-10-08T16:22:48.112Z",
		"size": 3913,
		"path": "../public/assets/lovable-mu4kp80u.js"
	},
	"/assets/play-Cx0hswBg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ba-FnMtCVa+hZCGCGmN7Klk763jvCM\"",
		"mtime": "2026-10-08T16:22:48.112Z",
		"size": 186,
		"path": "../public/assets/play-Cx0hswBg.js"
	},
	"/assets/mail-BlzUNYHh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d1-GbxIK2X69XHbIkaIx1RHUGXGLOo\"",
		"mtime": "2026-10-08T16:22:48.112Z",
		"size": 209,
		"path": "../public/assets/mail-BlzUNYHh.js"
	},
	"/assets/reset-password-DDEkJAUw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e3-hZlJ+ZHDalf2awucVOrCZEi1QPc\"",
		"mtime": "2026-10-08T16:22:48.113Z",
		"size": 739,
		"path": "../public/assets/reset-password-DDEkJAUw.js"
	},
	"/assets/rotate-ccw-CmBzFWGQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c4-lyIhJLtafKduJQJDjKo5eP0iByA\"",
		"mtime": "2026-10-08T16:22:48.113Z",
		"size": 196,
		"path": "../public/assets/rotate-ccw-CmBzFWGQ.js"
	},
	"/assets/routes-BQJfMnVj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6d1d-KNAXTOGz3UmZF+qsuO/T6Zo3tf4\"",
		"mtime": "2026-10-08T16:22:48.114Z",
		"size": 27933,
		"path": "../public/assets/routes-BQJfMnVj.js"
	},
	"/assets/scan-text-B9sPS7Nc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24c-7dVwgZSN/zIh4GLZg+eZTQ3PEgA\"",
		"mtime": "2026-10-08T16:22:48.114Z",
		"size": 588,
		"path": "../public/assets/scan-text-B9sPS7Nc.js"
	},
	"/assets/signup-BjeJsoba.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c53-S9yrnhO70a1UgCBgttX0yxoF+M8\"",
		"mtime": "2026-10-08T16:22:48.114Z",
		"size": 3155,
		"path": "../public/assets/signup-BjeJsoba.js"
	},
	"/assets/shield-check-CrikeTlB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e2ac-5mUV2ZJZ7iSTSwkSoijAYOO6gA4\"",
		"mtime": "2026-10-08T16:22:48.114Z",
		"size": 123564,
		"path": "../public/assets/shield-check-CrikeTlB.js"
	},
	"/assets/sparkles-x0Xr9-ve.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ea-0zEnHvYHD8gS8jeJ+ma/q1OyzZQ\"",
		"mtime": "2026-10-08T16:22:48.114Z",
		"size": 490,
		"path": "../public/assets/sparkles-x0Xr9-ve.js"
	},
	"/assets/ThemeToggle-BJw-rz0k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e6d-IZA36mGDitT57mNixzM6rqlifi8\"",
		"mtime": "2026-10-08T16:22:48.076Z",
		"size": 7789,
		"path": "../public/assets/ThemeToggle-BJw-rz0k.js"
	},
	"/assets/trash-2-L8ZHRupW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"144-f32YvU+8iLvxGGVD50pFhNhOFKg\"",
		"mtime": "2026-10-08T16:22:48.115Z",
		"size": 324,
		"path": "../public/assets/trash-2-L8ZHRupW.js"
	},
	"/assets/triangle-alert-Z9ULdvBb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"105-wiw+nNtbqFvVSKx70mVsgIWxFhw\"",
		"mtime": "2026-10-08T16:22:48.115Z",
		"size": 261,
		"path": "../public/assets/triangle-alert-Z9ULdvBb.js"
	},
	"/assets/verify-otp-B9cuJfg1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"504-ZJmgjMCn7mPMmEqn3Mp164fsooU\"",
		"mtime": "2026-10-08T16:22:48.115Z",
		"size": 1284,
		"path": "../public/assets/verify-otp-B9cuJfg1.js"
	},
	"/assets/styles-BpbzNnpf.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1b9ce-zp1M4nAwH03i2dzVJf/3sm9a55I\"",
		"mtime": "2026-10-08T16:22:48.115Z",
		"size": 113102,
		"path": "../public/assets/styles-BpbzNnpf.css"
	},
	"/assets/index-Bbd5hd5U.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8dec8-fn+L1bhnXqMIde7BmA2th1RwwIo\"",
		"mtime": "2026-10-08T16:22:48.076Z",
		"size": 581320,
		"path": "../public/assets/index-Bbd5hd5U.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_yYMQGq = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_yYMQGq
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
