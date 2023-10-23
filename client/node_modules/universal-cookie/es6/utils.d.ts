import { Cookie, CookieGetOptions } from './types';
export declare function hasDocumentCookie(): boolean;
export declare function cleanCookies(): void;
export declare function parseCookies(cookies?: string | object | null): object;
export declare function readCookie(value: Cookie, options?: CookieGetOptions): any;
