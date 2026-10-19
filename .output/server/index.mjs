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
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-09-05T09:19:56.838Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/arrow-left-CCpFZgyO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a1-W6b3iZvLBRsoYyBm3me2EA51ols\"",
		"mtime": "2026-10-19T17:08:18.874Z",
		"size": 161,
		"path": "../public/assets/arrow-left-CCpFZgyO.js"
	},
	"/assets/arrow-right-BmShJ4iq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a1-AiBlIMQtI+eo+fYIHy1SRk/w4FU\"",
		"mtime": "2026-10-19T17:08:18.874Z",
		"size": 161,
		"path": "../public/assets/arrow-right-BmShJ4iq.js"
	},
	"/assets/AreaChart-BOm7iMO_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6714d-sI7QcMiGRMsOSUbFjzZ6AFsz9jU\"",
		"mtime": "2026-10-19T17:08:18.869Z",
		"size": 422221,
		"path": "../public/assets/AreaChart-BOm7iMO_.js"
	},
	"/assets/chevron-right-BD9cei6C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7e-sHRS3zP2hmljOQaR8Jmq2y/WQHY\"",
		"mtime": "2026-10-19T17:08:18.876Z",
		"size": 126,
		"path": "../public/assets/chevron-right-BD9cei6C.js"
	},
	"/assets/circle-check-CdTyBGPC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-95Q2rJH99AJT3Cm4iMxG8i/3Poc\"",
		"mtime": "2026-10-19T17:08:18.876Z",
		"size": 174,
		"path": "../public/assets/circle-check-CdTyBGPC.js"
	},
	"/assets/AuthShell-CxwNT6rL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"202d-sEd4rJ3fR1AoniWC/nQ6WkBvf7g\"",
		"mtime": "2026-10-19T17:08:18.869Z",
		"size": 8237,
		"path": "../public/assets/AuthShell-CxwNT6rL.js"
	},
	"/assets/circle-x-CGSnGtZc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-m6yD2hDiQG7v4+Y5iYI0BVDR6cs\"",
		"mtime": "2026-10-19T17:08:18.876Z",
		"size": 203,
		"path": "../public/assets/circle-x-CGSnGtZc.js"
	},
	"/assets/clock-CYmgpp1_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-LiKDqmA0kCe9Q3azgC0VvEalVDU\"",
		"mtime": "2026-10-19T17:08:18.877Z",
		"size": 165,
		"path": "../public/assets/clock-CYmgpp1_.js"
	},
	"/assets/copy-BjnpaF5d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e8-hpWsMkiWdTGQnQofKnAEKRTYJFY\"",
		"mtime": "2026-10-19T17:08:18.877Z",
		"size": 232,
		"path": "../public/assets/copy-BjnpaF5d.js"
	},
	"/assets/dashboard-C2s703Lh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"487-VO+hb4V+uAu0mKfh4udGbRkTQuw\"",
		"mtime": "2026-10-19T17:08:18.877Z",
		"size": 1159,
		"path": "../public/assets/dashboard-C2s703Lh.js"
	},
	"/assets/dashboard.ai-processing-CfrGk2kL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24d2-z9MNMgd7svxzLdlVvJkOPtn42PQ\"",
		"mtime": "2026-10-19T17:08:18.879Z",
		"size": 9426,
		"path": "../public/assets/dashboard.ai-processing-CfrGk2kL.js"
	},
	"/assets/cloud-upload-BFg1wjMQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f7-aPtPFf+atZwKRTsgKG7fCiClyBc\"",
		"mtime": "2026-10-19T17:08:18.877Z",
		"size": 247,
		"path": "../public/assets/cloud-upload-BFg1wjMQ.js"
	},
	"/assets/dashboard.document._docId-BGgG08rI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28d2-uOxktH+I+74bl7/KaXC2SgMZZ3s\"",
		"mtime": "2026-10-19T17:08:18.879Z",
		"size": 10450,
		"path": "../public/assets/dashboard.document._docId-BGgG08rI.js"
	},
	"/assets/dashboard.document._docId-CUOgV-BJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3bb-2BrV9YIkYDKVNG6wCnv/BQRB3Bc\"",
		"mtime": "2026-10-19T17:08:18.906Z",
		"size": 955,
		"path": "../public/assets/dashboard.document._docId-CUOgV-BJ.js"
	},
	"/assets/dashboard.documents-D5v1uk72.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25cd-mvZWxvLqbqjLLKSu4fdrbh2kWNg\"",
		"mtime": "2026-10-19T17:08:18.917Z",
		"size": 9677,
		"path": "../public/assets/dashboard.documents-D5v1uk72.js"
	},
	"/assets/dashboard.folders-C329BYR1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14cf-sh5DZNNk+2GFc7sjcD5PO6kwKMM\"",
		"mtime": "2026-10-19T17:08:18.917Z",
		"size": 5327,
		"path": "../public/assets/dashboard.folders-C329BYR1.js"
	},
	"/assets/dashboard.notifications-2ZJst6FC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bdf-dmiYaE6NFDUN9enT+5CZQZG0WVg\"",
		"mtime": "2026-10-19T17:08:18.920Z",
		"size": 3039,
		"path": "../public/assets/dashboard.notifications-2ZJst6FC.js"
	},
	"/assets/dashboard.index-Bsdl9YTn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3483-QCbjOsNlqjrgeD+puZAayGdWOWk\"",
		"mtime": "2026-10-19T17:08:18.919Z",
		"size": 13443,
		"path": "../public/assets/dashboard.index-Bsdl9YTn.js"
	},
	"/assets/dashboard.reports-3GxWTkvf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4b5a-8UNLyF6dynh3Nj0cwgvbwxSmz0Q\"",
		"mtime": "2026-10-19T17:08:18.920Z",
		"size": 19290,
		"path": "../public/assets/dashboard.reports-3GxWTkvf.js"
	},
	"/assets/dashboard.settings-BtPEDxuX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7b5d-i1nHhDJVLBML5HDK9U6/bNMCCFw\"",
		"mtime": "2026-10-19T17:08:18.922Z",
		"size": 31581,
		"path": "../public/assets/dashboard.settings-BtPEDxuX.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ae-hLVBrSrDdpIw3Xl0dJPRkupPepQ\"",
		"mtime": "2026-09-05T09:19:56.838Z",
		"size": 174,
		"path": "../public/robots.txt"
	},
	"/assets/dashboard.upload-B-_cOrCN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3b57-0Vcn56alR/zZQtJtZ0PlH2dSP9I\"",
		"mtime": "2026-10-19T17:08:18.933Z",
		"size": 15191,
		"path": "../public/assets/dashboard.upload-B-_cOrCN.js"
	},
	"/assets/dashboard.profile-2iqL8NHW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4342-0R0PSxWeppwz7xSUZIlrn2XS+Cs\"",
		"mtime": "2026-10-19T17:08:18.920Z",
		"size": 17218,
		"path": "../public/assets/dashboard.profile-2iqL8NHW.js"
	},
	"/assets/dashboard.validation-yhR2I1Qk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25d1-KcNPki8Q09PSnFaksBLTrrQoitg\"",
		"mtime": "2026-10-19T17:08:18.980Z",
		"size": 9681,
		"path": "../public/assets/dashboard.validation-yhR2I1Qk.js"
	},
	"/assets/DashboardShell-DOxYh7xD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5cb2-477cAzxJwdI6DKFssv8IsogDlXE\"",
		"mtime": "2026-10-19T17:08:18.874Z",
		"size": 23730,
		"path": "../public/assets/DashboardShell-DOxYh7xD.js"
	},
	"/assets/database-knRMkg2d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ef-FrXZvJJD+rkORxGFQxaSo/7bMZw\"",
		"mtime": "2026-10-19T17:08:19.009Z",
		"size": 239,
		"path": "../public/assets/database-knRMkg2d.js"
	},
	"/assets/download-rxlI_bSd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e4-4XZBu9TIpgcMOXpqzmHgQgiv2qM\"",
		"mtime": "2026-10-19T17:08:19.011Z",
		"size": 228,
		"path": "../public/assets/download-rxlI_bSd.js"
	},
	"/assets/external-link-CJp9eld5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f7-5U3urX4OKoO16xm4XxQl+N6uCcM\"",
		"mtime": "2026-10-19T17:08:19.035Z",
		"size": 247,
		"path": "../public/assets/external-link-CJp9eld5.js"
	},
	"/assets/file-text-BPsx_qJF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17d-Wj+DCQbCof5VVsdPvgNPIby6AIw\"",
		"mtime": "2026-10-19T17:08:19.036Z",
		"size": 381,
		"path": "../public/assets/file-text-BPsx_qJF.js"
	},
	"/assets/forgot-password-C9Xq3Rn-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a74-uRR01tvGx9saslKkhFdE/EmHHv0\"",
		"mtime": "2026-10-19T17:08:19.036Z",
		"size": 2676,
		"path": "../public/assets/forgot-password-C9Xq3Rn-.js"
	},
	"/assets/hard-drive-DLsgOSL1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"180-MZNlWgBVknpYhX0LA0b6OOnzVVo\"",
		"mtime": "2026-10-19T17:08:19.038Z",
		"size": 384,
		"path": "../public/assets/hard-drive-DLsgOSL1.js"
	},
	"/assets/key-round-YahbrTDd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15f-Th0Ay6KtoV/qLwJJhGylWR1vRzY\"",
		"mtime": "2026-10-19T17:08:19.038Z",
		"size": 351,
		"path": "../public/assets/key-round-YahbrTDd.js"
	},
	"/assets/loader-circle-TdzfntAu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c-lyT8U+/67E0IGGD8WVMXwXwmTcQ\"",
		"mtime": "2026-10-19T17:08:19.040Z",
		"size": 140,
		"path": "../public/assets/loader-circle-TdzfntAu.js"
	},
	"/assets/link-CXJXNSVl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c0e9-0MGh7mlyF8K9DY2Lx1CceAiDi3M\"",
		"mtime": "2026-10-19T17:08:19.038Z",
		"size": 49385,
		"path": "../public/assets/link-CXJXNSVl.js"
	},
	"/assets/login-e4aPAPHQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d4b-dXPnLZowPMOPvMDKtfcbXuBtcgE\"",
		"mtime": "2026-10-19T17:08:19.040Z",
		"size": 3403,
		"path": "../public/assets/login-e4aPAPHQ.js"
	},
	"/assets/mail-check-DNODgWnv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"118-JYwKfFWTd6nC+JZvSg7Ca6s5cVI\"",
		"mtime": "2026-10-19T17:08:19.041Z",
		"size": 280,
		"path": "../public/assets/mail-check-DNODgWnv.js"
	},
	"/assets/mail-7Rq3ZqrU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d1-+gnNzHEGfLHVLVUolqJPKn1mcz0\"",
		"mtime": "2026-10-19T17:08:19.041Z",
		"size": 209,
		"path": "../public/assets/mail-7Rq3ZqrU.js"
	},
	"/assets/refresh-cw-BO7dzGmn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13d-dJ5Kutl3/pENAcwTqDghIuXgw+Q\"",
		"mtime": "2026-10-19T17:08:19.043Z",
		"size": 317,
		"path": "../public/assets/refresh-cw-BO7dzGmn.js"
	},
	"/assets/play-BXFJ4NxC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ba-0dRfQziMW54M5mhsT0n+3C8GJ5g\"",
		"mtime": "2026-10-19T17:08:19.043Z",
		"size": 186,
		"path": "../public/assets/play-BXFJ4NxC.js"
	},
	"/assets/reset-password-CY9LThs5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7b7-bmBOjm6Vq+ilxNvRJtMTmNkc0Eg\"",
		"mtime": "2026-10-19T17:08:19.044Z",
		"size": 1975,
		"path": "../public/assets/reset-password-CY9LThs5.js"
	},
	"/assets/rotate-ccw-BE7hah2x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c4-q+2exPuMFewbOZ0X1yOA7kOjzbE\"",
		"mtime": "2026-10-19T17:08:19.044Z",
		"size": 196,
		"path": "../public/assets/rotate-ccw-BE7hah2x.js"
	},
	"/assets/routes-D_uQarep.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"87f9-RfTCqjVouE/MdSQFkHXv7rVc9cs\"",
		"mtime": "2026-10-19T17:08:19.045Z",
		"size": 34809,
		"path": "../public/assets/routes-D_uQarep.js"
	},
	"/assets/scan-text-CYmuLBEq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18e-/q/yn9q95hrtLQ9otBFoLWQgsts\"",
		"mtime": "2026-10-19T17:08:19.045Z",
		"size": 398,
		"path": "../public/assets/scan-text-CYmuLBEq.js"
	},
	"/assets/signup-Dr3i0AgK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1405-c84VHed8UNq57/O0Jr3NAS0TEBs\"",
		"mtime": "2026-10-19T17:08:19.046Z",
		"size": 5125,
		"path": "../public/assets/signup-Dr3i0AgK.js"
	},
	"/assets/sparkles-DFh3KR9i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ea-2hv3SC6vHIp80izI91T9plMtI6c\"",
		"mtime": "2026-10-19T17:08:19.049Z",
		"size": 490,
		"path": "../public/assets/sparkles-DFh3KR9i.js"
	},
	"/assets/shield-check-n2ruel2s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1eb5f-lI8ac2OkWM6P1UKmPNiYbzboqlw\"",
		"mtime": "2026-10-19T17:08:19.046Z",
		"size": 125791,
		"path": "../public/assets/shield-check-n2ruel2s.js"
	},
	"/assets/styles-CC5IVRWH.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1c42e-k2A13zqbcWkV/DgQv/wOZKVP618\"",
		"mtime": "2026-10-19T17:08:19.054Z",
		"size": 115758,
		"path": "../public/assets/styles-CC5IVRWH.css"
	},
	"/assets/index-BSGUhuXR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bd529-FNQxbglZA0oMHoB0p/w+yGqG7e0\"",
		"mtime": "2026-10-19T17:08:18.869Z",
		"size": 775465,
		"path": "../public/assets/index-BSGUhuXR.js"
	},
	"/assets/ThemeToggle-CPM8hpPw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2335-tVcVnmGQ4ny31/1TAXRpXspcafw\"",
		"mtime": "2026-10-19T17:08:18.874Z",
		"size": 9013,
		"path": "../public/assets/ThemeToggle-CPM8hpPw.js"
	},
	"/assets/trash-2-Cafa8H14.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"144-IdbmlXyNVIL6nBxfcLKM/a3EHs4\"",
		"mtime": "2026-10-19T17:08:19.051Z",
		"size": 324,
		"path": "../public/assets/trash-2-Cafa8H14.js"
	},
	"/assets/triangle-alert-BRBbfhvz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"105-lmyL7AcZeGhxONVCnWRb+ViqmlA\"",
		"mtime": "2026-10-19T17:08:19.051Z",
		"size": 261,
		"path": "../public/assets/triangle-alert-BRBbfhvz.js"
	},
	"/assets/verify-otp-GrZ09_KE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"672-v/R7+HAMqWGnLie+3Tv+IiZuZmI\"",
		"mtime": "2026-10-19T17:08:19.051Z",
		"size": 1650,
		"path": "../public/assets/verify-otp-GrZ09_KE.js"
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
var _lazy_wLMutM = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_wLMutM
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
