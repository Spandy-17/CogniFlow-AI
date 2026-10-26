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
		"mtime": "2026-10-26T19:36:03.147Z",
		"size": 161,
		"path": "../public/assets/arrow-left-DW1BFiJe.js"
	},
	"/assets/AuthShell-DGLI74RD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1692-XomEax7pG/RJXZxzSLv3J+9LPUw\"",
		"mtime": "2026-10-26T19:36:03.113Z",
		"size": 5778,
		"path": "../public/assets/AuthShell-DGLI74RD.js"
	},
	"/assets/arrow-right-xANH7iRY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a1-Ym18yZbgHw/YVZgU/p+y+KNOcQs\"",
		"mtime": "2026-10-26T19:36:03.150Z",
		"size": 161,
		"path": "../public/assets/arrow-right-xANH7iRY.js"
	},
	"/assets/circle-alert-_p3S04OK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f6-lTP/aXJwSJW6olZckRViny675xI\"",
		"mtime": "2026-10-26T19:36:03.150Z",
		"size": 246,
		"path": "../public/assets/circle-alert-_p3S04OK.js"
	},
	"/assets/circle-check-DC1gT5vC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-/DnQ2jFKpcKgxzShU4oVb/OvTz0\"",
		"mtime": "2026-10-26T19:36:03.150Z",
		"size": 174,
		"path": "../public/assets/circle-check-DC1gT5vC.js"
	},
	"/assets/circle-x-IPGg3RdE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-gWMDyikllmjPa+wEx4a+lKJ/Ofg\"",
		"mtime": "2026-10-26T19:36:03.151Z",
		"size": 203,
		"path": "../public/assets/circle-x-IPGg3RdE.js"
	},
	"/assets/clock-D60NNZZ_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-vhq2DlzR6Lu+TabQsHg8CB1uAOk\"",
		"mtime": "2026-10-26T19:36:03.151Z",
		"size": 165,
		"path": "../public/assets/clock-D60NNZZ_.js"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-09-03T14:02:20.121Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/cloud-upload-B2R2v9dh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f7-5F7UlYSmx4V596rok79dJVF2yXU\"",
		"mtime": "2026-10-26T19:36:03.151Z",
		"size": 247,
		"path": "../public/assets/cloud-upload-B2R2v9dh.js"
	},
	"/assets/copy-Bwia2g7S.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e8-SFXYfxdqxlTTU7CONeFatwNuPLw\"",
		"mtime": "2026-10-26T19:36:03.151Z",
		"size": 232,
		"path": "../public/assets/copy-Bwia2g7S.js"
	},
	"/assets/dashboard-CZaZIDe5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ba-GEwAjo43/mX5lUyFpzh/raSUglY\"",
		"mtime": "2026-10-26T19:36:03.151Z",
		"size": 954,
		"path": "../public/assets/dashboard-CZaZIDe5.js"
	},
	"/assets/dashboard.ai-processing-D7g-aPGr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2fa6-eOfhQiTkFToVpLDwgpbFdGF815c\"",
		"mtime": "2026-10-26T19:36:03.151Z",
		"size": 12198,
		"path": "../public/assets/dashboard.ai-processing-D7g-aPGr.js"
	},
	"/assets/dashboard.document._docId-DTFUEqM7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18a3-U3GvtNyMsryiKTDbKrg9fuwvAQ8\"",
		"mtime": "2026-10-26T19:36:03.151Z",
		"size": 6307,
		"path": "../public/assets/dashboard.document._docId-DTFUEqM7.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-03T14:02:24.328Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/dashboard.document._docId-p9sOUNgd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"268-q1UG92r4PMyLFz+WichDCFeUEL4\"",
		"mtime": "2026-10-26T19:36:03.151Z",
		"size": 616,
		"path": "../public/assets/dashboard.document._docId-p9sOUNgd.js"
	},
	"/assets/dashboard.documents-CUCE5HVn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ca2-V+EUef7oKvG4eviiRkm/sD+sxAA\"",
		"mtime": "2026-10-26T19:36:03.151Z",
		"size": 7330,
		"path": "../public/assets/dashboard.documents-CUCE5HVn.js"
	},
	"/assets/dashboard.folders-DKH2vPka.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14bc-y8Von/OhXtlxq1BoVR2gQtisth8\"",
		"mtime": "2026-10-26T19:36:03.151Z",
		"size": 5308,
		"path": "../public/assets/dashboard.folders-DKH2vPka.js"
	},
	"/assets/dashboard.index-7bssc65o.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a17-VwvWgMuTIotjKDBsGuuoxIX5Ruc\"",
		"mtime": "2026-10-26T19:36:03.157Z",
		"size": 6679,
		"path": "../public/assets/dashboard.index-7bssc65o.js"
	},
	"/assets/dashboard.notifications-P0zkywQV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cff-6CwAQv479Nbg0asLO+dyvuLUPYM\"",
		"mtime": "2026-10-26T19:36:03.157Z",
		"size": 3327,
		"path": "../public/assets/dashboard.notifications-P0zkywQV.js"
	},
	"/assets/dashboard.profile-CPLfIbpo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"31f1-oxlz1RPzaF9PR3NrBr4DXh1sLDA\"",
		"mtime": "2026-10-26T19:36:03.158Z",
		"size": 12785,
		"path": "../public/assets/dashboard.profile-CPLfIbpo.js"
	},
	"/assets/dashboard.reports-QB3PYLL1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7538-Y+rKCTSdfe6oi6Z44isk2mFqbqQ\"",
		"mtime": "2026-10-26T19:36:03.158Z",
		"size": 30008,
		"path": "../public/assets/dashboard.reports-QB3PYLL1.js"
	},
	"/assets/dashboard.settings-BBAj7l2o.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5746-gumBLt27M1vA/EF4ri/cn1+OKEs\"",
		"mtime": "2026-10-26T19:36:03.158Z",
		"size": 22342,
		"path": "../public/assets/dashboard.settings-BBAj7l2o.js"
	},
	"/assets/dashboard.upload-Cwr-02HY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3bdc-R63vzPx72LYiCfv8PihLsDkxXJY\"",
		"mtime": "2026-10-26T19:36:03.158Z",
		"size": 15324,
		"path": "../public/assets/dashboard.upload-Cwr-02HY.js"
	},
	"/assets/dashboard.validation-BaBYICmn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f49-h/+3nbhUWXH3Hw7NxH2PuPm1PYA\"",
		"mtime": "2026-10-26T19:36:03.159Z",
		"size": 8009,
		"path": "../public/assets/dashboard.validation-BaBYICmn.js"
	},
	"/assets/DashboardShell-Ck2OumRg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5071-Xw6uOPTHSL/3ZD9OxoA7UVf3wE4\"",
		"mtime": "2026-10-26T19:36:03.113Z",
		"size": 20593,
		"path": "../public/assets/DashboardShell-Ck2OumRg.js"
	},
	"/assets/database-H8rxe0Rd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ef-7lM7EEYviqlYEPS+df+XAoIlsPw\"",
		"mtime": "2026-10-26T19:36:03.159Z",
		"size": 239,
		"path": "../public/assets/database-H8rxe0Rd.js"
	},
	"/assets/external-link-CaUA-VDZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f7-d9W8FUZ4PU8P8jZLWZDtYVjzLOg\"",
		"mtime": "2026-10-26T19:36:03.159Z",
		"size": 247,
		"path": "../public/assets/external-link-CaUA-VDZ.js"
	},
	"/assets/file-check-corner-GQRqMCsJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"137-//AE05kMzaCkN9fvEHweGdUKftM\"",
		"mtime": "2026-10-26T19:36:03.159Z",
		"size": 311,
		"path": "../public/assets/file-check-corner-GQRqMCsJ.js"
	},
	"/assets/file-text-Ch5ZUaY5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17d-BWoMo7P4OMS/WqjHXJvzxob4svA\"",
		"mtime": "2026-10-26T19:36:03.256Z",
		"size": 381,
		"path": "../public/assets/file-text-Ch5ZUaY5.js"
	},
	"/assets/file-x-corner-DdiqRviw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"154-rQjt/UlNPu9pPpb5ZaR+0XE7J9Y\"",
		"mtime": "2026-10-26T19:36:03.276Z",
		"size": 340,
		"path": "../public/assets/file-x-corner-DdiqRviw.js"
	},
	"/assets/forgot-password-Cjj22Pcn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c3-lqprLNVtU2SaU1HoeewrtVGkdzM\"",
		"mtime": "2026-10-26T19:36:03.277Z",
		"size": 1987,
		"path": "../public/assets/forgot-password-Cjj22Pcn.js"
	},
	"/assets/hard-drive-M3BkT2nr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"233-n0xxZJMKUKEvJTxQPQnhMa0rXPI\"",
		"mtime": "2026-10-26T19:36:03.277Z",
		"size": 563,
		"path": "../public/assets/hard-drive-M3BkT2nr.js"
	},
	"/assets/key-round-hcw5l9Vs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15f-AwvEWHzutwaeRPBEsUp5LoTOw84\"",
		"mtime": "2026-10-26T19:36:03.277Z",
		"size": 351,
		"path": "../public/assets/key-round-hcw5l9Vs.js"
	},
	"/assets/link-BB7x10lQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"764c-9J/PwCrFYR619eFo1h1rNfMaGM4\"",
		"mtime": "2026-10-26T19:36:03.278Z",
		"size": 30284,
		"path": "../public/assets/link-BB7x10lQ.js"
	},
	"/assets/loader-circle-B2_Ywk_a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c-l/KwaiGLyb4OeUfle0tA+Z3M6W4\"",
		"mtime": "2026-10-26T19:36:03.278Z",
		"size": 140,
		"path": "../public/assets/loader-circle-B2_Ywk_a.js"
	},
	"/assets/login-DhERN_wO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"adb-Wkf8xdjDgVp7PpDoTXSoAC98nPM\"",
		"mtime": "2026-10-26T19:36:03.279Z",
		"size": 2779,
		"path": "../public/assets/login-DhERN_wO.js"
	},
	"/assets/mail-BlzUNYHh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d1-GbxIK2X69XHbIkaIx1RHUGXGLOo\"",
		"mtime": "2026-10-26T19:36:03.279Z",
		"size": 209,
		"path": "../public/assets/mail-BlzUNYHh.js"
	},
	"/assets/mail-check-DpqemlZt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"118-1IYBmiV8Yv+Fy/WDxoiDfmhRlEI\"",
		"mtime": "2026-10-26T19:36:03.280Z",
		"size": 280,
		"path": "../public/assets/mail-check-DpqemlZt.js"
	},
	"/assets/refresh-cw-BeuCVgTU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13d-llPmRf15YGXPjH1x0HPwv25w9vs\"",
		"mtime": "2026-10-26T19:36:03.280Z",
		"size": 317,
		"path": "../public/assets/refresh-cw-BeuCVgTU.js"
	},
	"/assets/reset-password-ChbaPQe3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"62e-pvKkpXzYJ+LwxbdKjdi53WHIRoo\"",
		"mtime": "2026-10-26T19:36:03.282Z",
		"size": 1582,
		"path": "../public/assets/reset-password-ChbaPQe3.js"
	},
	"/assets/routes-BES0KNRN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6d07-7hB3RAQ0Bq78xVdVa6PjkfFZUWU\"",
		"mtime": "2026-10-26T19:36:03.283Z",
		"size": 27911,
		"path": "../public/assets/routes-BES0KNRN.js"
	},
	"/assets/scan-text-abBWJe-q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18e-grfmXhbL7agYBCKmoensYh9P1lY\"",
		"mtime": "2026-10-26T19:36:03.283Z",
		"size": 398,
		"path": "../public/assets/scan-text-abBWJe-q.js"
	},
	"/assets/sparkles-x0Xr9-ve.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ea-0zEnHvYHD8gS8jeJ+ma/q1OyzZQ\"",
		"mtime": "2026-10-26T19:36:03.309Z",
		"size": 490,
		"path": "../public/assets/sparkles-x0Xr9-ve.js"
	},
	"/assets/signup-Boz8-YQP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fc5-tkZg/LvwW/oAoFYxqFyPB0c3hcQ\"",
		"mtime": "2026-10-26T19:36:03.285Z",
		"size": 4037,
		"path": "../public/assets/signup-Boz8-YQP.js"
	},
	"/assets/shield-check-CrikeTlB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e2ac-5mUV2ZJZ7iSTSwkSoijAYOO6gA4\"",
		"mtime": "2026-10-26T19:36:03.284Z",
		"size": 123564,
		"path": "../public/assets/shield-check-CrikeTlB.js"
	},
	"/assets/ThemeToggle-4obFQfja.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e6d-f4yBT/vT2VwIKBnqzKYNcI1+XSk\"",
		"mtime": "2026-10-26T19:36:03.113Z",
		"size": 7789,
		"path": "../public/assets/ThemeToggle-4obFQfja.js"
	},
	"/assets/PieChart-DirUHJx8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5a79c-ZKEiEbpb57dNqYz98Gmxz0K9b2M\"",
		"mtime": "2026-10-26T19:36:03.113Z",
		"size": 370588,
		"path": "../public/assets/PieChart-DirUHJx8.js"
	},
	"/assets/trash-2-L8ZHRupW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"144-f32YvU+8iLvxGGVD50pFhNhOFKg\"",
		"mtime": "2026-10-26T19:36:03.310Z",
		"size": 324,
		"path": "../public/assets/trash-2-L8ZHRupW.js"
	},
	"/assets/styles-BVdwHESc.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1b744-YCLk5uW1Bjmc6HA3eAQg/mxwzBU\"",
		"mtime": "2026-10-26T19:36:03.315Z",
		"size": 112452,
		"path": "../public/assets/styles-BVdwHESc.css"
	},
	"/assets/index-BrmIRlUx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8db4b-UXyxJt3ZkrxIb0KZJ5wRZ0B9Pco\"",
		"mtime": "2026-10-26T19:36:03.113Z",
		"size": 580427,
		"path": "../public/assets/index-BrmIRlUx.js"
	},
	"/assets/triangle-alert-Z9ULdvBb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"105-wiw+nNtbqFvVSKx70mVsgIWxFhw\"",
		"mtime": "2026-10-26T19:36:03.312Z",
		"size": 261,
		"path": "../public/assets/triangle-alert-Z9ULdvBb.js"
	},
	"/assets/verify-otp-YNP52txX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"504-eS+gP3IbenUUabrHav1Y5ZvUamg\"",
		"mtime": "2026-10-26T19:36:03.314Z",
		"size": 1284,
		"path": "../public/assets/verify-otp-YNP52txX.js"
	},
	"/assets/zap-CVJ8hH2h.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"102-C4Fkibd6gFuhxEsuzmGXCBM0wU0\"",
		"mtime": "2026-10-26T19:36:03.315Z",
		"size": 258,
		"path": "../public/assets/zap-CVJ8hH2h.js"
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
