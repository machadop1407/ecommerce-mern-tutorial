import { Cookie, CookieChangeListener, CookieGetOptions, CookieSetOptions } from './types';
export default class Cookies {
    private cookies;
    private defaultSetOptions;
    private changeListeners;
    private pollingInterval?;
    private HAS_DOCUMENT_COOKIE;
    constructor(cookies?: string | object | null, defaultSetOptions?: CookieSetOptions);
    private _emitChange;
    private _checkChanges;
    private _startPolling;
    private _stopPolling;
    get(name: string, options?: CookieGetOptions): any;
    get<T>(name: string, options?: CookieGetOptions): T;
    getAll(options?: CookieGetOptions): any;
    getAll<T>(options?: CookieGetOptions): T;
    set(name: string, value: Cookie, options?: CookieSetOptions): void;
    remove(name: string, options?: CookieSetOptions): void;
    update: () => void;
    addChangeListener(callback: CookieChangeListener): void;
    removeChangeListener(callback: CookieChangeListener): void;
}
