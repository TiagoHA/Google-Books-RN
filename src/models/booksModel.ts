// To parse this data:
//
//   import { Convert } from "./file";
//
//   const getBooks = Convert.toGetBooks(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface GetBook {
  data: Data;
  status: number;
  headers: LowerCaseResponseHeadersClass;
  config: Config;
  request: Request;
}

export interface Config {
  adapter: string;
  transformRequest: TransformRe;
  transformResponse: TransformRe;
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  validateStatus: string;
  headers: ConfigHeaders;
  method: string;
  baseURL: string;
  url: string;
}

export interface ConfigHeaders {
  accept: string;
}

export interface TransformRe {
  the0: string;
}

export interface Data {
  kind: string;
  totalItems: number;
  items: Item[];
}

export interface Item {
  kind: Kind;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
}

export interface AccessInfo {
  country: Country;
  viewability: Viewability;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: TextToSpeechPermission;
  epub: Epub;
  pdf: PDF;
  webReaderLink: string;
  accessViewStatus: AccessViewStatus;
  quoteSharingAllowed: boolean;
}

export enum AccessViewStatus {
  FullPublicDomain = "FULL_PUBLIC_DOMAIN",
  None = "NONE",
  Sample = "SAMPLE"
}

export enum Country {
  Br = "BR"
}

export interface Epub {
  isAvailable: boolean;
  acsTokenLink?: string;
}

export interface PDF {
  isAvailable: boolean;
  acsTokenLink?: string;
  downloadLink?: string;
}

export enum TextToSpeechPermission {
  Allowed = "ALLOWED",
  AllowedForAccessibility = "ALLOWED_FOR_ACCESSIBILITY"
}

export enum Viewability {
  AllPages = "ALL_PAGES",
  NoPages = "NO_PAGES",
  Partial = "PARTIAL"
}

export enum Kind {
  BooksVolume = "books#volume"
}

export interface SaleInfo {
  country: Country;
  saleability: Saleability;
  isEbook: boolean;
  listPrice?: SaleInfoListPrice;
  retailPrice?: SaleInfoListPrice;
  buyLink?: string;
  offers?: Offer[];
}

export interface SaleInfoListPrice {
  amount: number;
  currencyCode: CurrencyCode;
}

export enum CurrencyCode {
  Brl = "BRL"
}

export interface Offer {
  finskyOfferType: number;
  listPrice: OfferListPrice;
  retailPrice: OfferListPrice;
  giftable: boolean;
}

export interface OfferListPrice {
  amountInMicros: number;
  currencyCode: CurrencyCode;
}

export enum Saleability {
  ForSale = "FOR_SALE",
  Free = "FREE",
  NotForSale = "NOT_FOR_SALE"
}

export interface SearchInfo {
  textSnippet: string;
}

export interface VolumeInfo {
  title: string;
  subtitle?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount?: number;
  printType: PrintType;
  categories?: string[];
  maturityRating: MaturityRating;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary?: PanelizationSummary;
  imageLinks?: ImageLinks;
  language: Language;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  averageRating?: number;
  ratingsCount?: number;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface IndustryIdentifier {
  type: Type;
  identifier: string;
}

export enum Type {
  Isbn10 = "ISBN_10",
  Isbn13 = "ISBN_13",
  Other = "OTHER"
}

export enum Language {
  En = "en"
}

export enum MaturityRating {
  NotMature = "NOT_MATURE"
}

export interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

export enum PrintType {
  Book = "BOOK"
}

export interface ReadingModes {
  text: boolean;
  image: boolean;
}

export interface LowerCaseResponseHeadersClass {
  expires: string;
  contentType: string;
  xXSSProtection: string;
  altSVC: string;
  cacheControl: string;
  server: string;
  etag: string;
  date: string;
  vary: string;
  xContentTypeOptions: string;
  xFrameOptions: string;
}

export interface Request {
  unsent: number;
  opened: number;
  headersReceived: number;
  loading: number;
  done: number;
  readyState: number;
  status: number;
  timeout: number;
  withCredentials: boolean;
  upload: Upload;
  aborted: boolean;
  hasError: boolean;
  method: string;
  response: string;
  url: string;
  timedOut: boolean;
  trackingName: number;
  incrementalEvents: boolean;
  responseHeaders: LowerCaseResponseHeadersClass;
  requestID: null;
  headers: Headers;
  responseType: string;
  sent: boolean;
  lowerCaseResponseHeaders: LowerCaseResponseHeadersClass;
  subscriptions: any[];
  responseURL: string;
}

export interface Headers {
  accept: string;
}

export interface Upload {}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export namespace Convert {
  export function toGetBooks(json: string): Array<GetBook | string> {
    return cast(JSON.parse(json), a(u(r("GetBook"), "")));
  }

  export function getBooksToJson(value: Array<GetBook | string>): string {
    return JSON.stringify(uncast(value, a(u(r("GetBook"), ""))), null, 2);
  }

  function invalidValue(typ: any, val: any): never {
    throw Error(
      `Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`
    );
  }

  function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
      var map: any = {};
      typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
      typ.jsonToJS = map;
    }
    return typ.jsonToJS;
  }

  function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
      var map: any = {};
      typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
      typ.jsToJSON = map;
    }
    return typ.jsToJSON;
  }

  function transform(val: any, typ: any, getProps: any): any {
    function transformPrimitive(typ: string, val: any): any {
      if (typeof typ === typeof val) return val;
      return invalidValue(typ, val);
    }

    function transformUnion(typs: any[], val: any): any {
      // val must validate against one typ in typs
      var l = typs.length;
      for (var i = 0; i < l; i++) {
        var typ = typs[i];
        try {
          return transform(val, typ, getProps);
        } catch (_) {}
      }
      return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
      if (cases.indexOf(val) !== -1) return val;
      return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
      // val must be an array with no invalid elements
      if (!Array.isArray(val)) return invalidValue("array", val);
      return val.map(el => transform(el, typ, getProps));
    }

    function transformObject(
      props: { [k: string]: any },
      additional: any,
      val: any
    ): any {
      if (val === null || typeof val !== "object" || Array.isArray(val)) {
        return invalidValue("object", val);
      }
      var result: any = {};
      Object.getOwnPropertyNames(props).forEach(key => {
        const prop = props[key];
        const v = Object.prototype.hasOwnProperty.call(val, key)
          ? val[key]
          : undefined;
        result[prop.key] = transform(v, prop.typ, getProps);
      });
      Object.getOwnPropertyNames(val).forEach(key => {
        if (!Object.prototype.hasOwnProperty.call(props, key)) {
          result[key] = transform(val[key], additional, getProps);
        }
      });
      return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
      if (val === null) return val;
      return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
      typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
      return typ.hasOwnProperty("unionMembers")
        ? transformUnion(typ.unionMembers, val)
        : typ.hasOwnProperty("arrayItems")
        ? transformArray(typ.arrayItems, val)
        : typ.hasOwnProperty("props")
        ? transformObject(getProps(typ), typ.additional, val)
        : invalidValue(typ, val);
    }
    return transformPrimitive(typ, val);
  }

  function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
  }

  function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
  }

  function a(typ: any) {
    return { arrayItems: typ };
  }

  function u(...typs: any[]) {
    return { unionMembers: typs };
  }

  function o(props: any[], additional: any) {
    return { props, additional };
  }

  function m(additional: any) {
    return { props: [], additional };
  }

  function r(name: string) {
    return { ref: name };
  }

  const typeMap: any = {
    GetBook: o(
      [
        { json: "data", js: "data", typ: r("Data") },
        { json: "status", js: "status", typ: 0 },
        {
          json: "headers",
          js: "headers",
          typ: r("LowerCaseResponseHeadersClass")
        },
        { json: "config", js: "config", typ: r("Config") },
        { json: "request", js: "request", typ: r("Request") }
      ],
      false
    ),
    Config: o(
      [
        { json: "adapter", js: "adapter", typ: "" },
        {
          json: "transformRequest",
          js: "transformRequest",
          typ: r("TransformRe")
        },
        {
          json: "transformResponse",
          js: "transformResponse",
          typ: r("TransformRe")
        },
        { json: "timeout", js: "timeout", typ: 0 },
        { json: "xsrfCookieName", js: "xsrfCookieName", typ: "" },
        { json: "xsrfHeaderName", js: "xsrfHeaderName", typ: "" },
        { json: "maxContentLength", js: "maxContentLength", typ: 0 },
        { json: "validateStatus", js: "validateStatus", typ: "" },
        { json: "headers", js: "headers", typ: r("ConfigHeaders") },
        { json: "method", js: "method", typ: "" },
        { json: "baseURL", js: "baseURL", typ: "" },
        { json: "url", js: "url", typ: "" }
      ],
      false
    ),
    ConfigHeaders: o([{ json: "Accept", js: "accept", typ: "" }], false),
    TransformRe: o([{ json: "0", js: "the0", typ: "" }], false),
    Data: o(
      [
        { json: "kind", js: "kind", typ: "" },
        { json: "totalItems", js: "totalItems", typ: 0 },
        { json: "items", js: "items", typ: a(r("Item")) }
      ],
      false
    ),
    Item: o(
      [
        { json: "kind", js: "kind", typ: r("Kind") },
        { json: "id", js: "id", typ: "" },
        { json: "etag", js: "etag", typ: "" },
        { json: "selfLink", js: "selfLink", typ: "" },
        { json: "volumeInfo", js: "volumeInfo", typ: r("VolumeInfo") },
        { json: "saleInfo", js: "saleInfo", typ: r("SaleInfo") },
        { json: "accessInfo", js: "accessInfo", typ: r("AccessInfo") },
        { json: "searchInfo", js: "searchInfo", typ: r("SearchInfo") }
      ],
      false
    ),
    AccessInfo: o(
      [
        { json: "country", js: "country", typ: r("Country") },
        { json: "viewability", js: "viewability", typ: r("Viewability") },
        { json: "embeddable", js: "embeddable", typ: true },
        { json: "publicDomain", js: "publicDomain", typ: true },
        {
          json: "textToSpeechPermission",
          js: "textToSpeechPermission",
          typ: r("TextToSpeechPermission")
        },
        { json: "epub", js: "epub", typ: r("Epub") },
        { json: "pdf", js: "pdf", typ: r("PDF") },
        { json: "webReaderLink", js: "webReaderLink", typ: "" },
        {
          json: "accessViewStatus",
          js: "accessViewStatus",
          typ: r("AccessViewStatus")
        },
        { json: "quoteSharingAllowed", js: "quoteSharingAllowed", typ: true }
      ],
      false
    ),
    Epub: o(
      [
        { json: "isAvailable", js: "isAvailable", typ: true },
        { json: "acsTokenLink", js: "acsTokenLink", typ: u(undefined, "") }
      ],
      false
    ),
    PDF: o(
      [
        { json: "isAvailable", js: "isAvailable", typ: true },
        { json: "acsTokenLink", js: "acsTokenLink", typ: u(undefined, "") },
        { json: "downloadLink", js: "downloadLink", typ: u(undefined, "") }
      ],
      false
    ),
    SaleInfo: o(
      [
        { json: "country", js: "country", typ: r("Country") },
        { json: "saleability", js: "saleability", typ: r("Saleability") },
        { json: "isEbook", js: "isEbook", typ: true },
        {
          json: "listPrice",
          js: "listPrice",
          typ: u(undefined, r("SaleInfoListPrice"))
        },
        {
          json: "retailPrice",
          js: "retailPrice",
          typ: u(undefined, r("SaleInfoListPrice"))
        },
        { json: "buyLink", js: "buyLink", typ: u(undefined, "") },
        { json: "offers", js: "offers", typ: u(undefined, a(r("Offer"))) }
      ],
      false
    ),
    SaleInfoListPrice: o(
      [
        { json: "amount", js: "amount", typ: 3.14 },
        { json: "currencyCode", js: "currencyCode", typ: r("CurrencyCode") }
      ],
      false
    ),
    Offer: o(
      [
        { json: "finskyOfferType", js: "finskyOfferType", typ: 0 },
        { json: "listPrice", js: "listPrice", typ: r("OfferListPrice") },
        { json: "retailPrice", js: "retailPrice", typ: r("OfferListPrice") },
        { json: "giftable", js: "giftable", typ: true }
      ],
      false
    ),
    OfferListPrice: o(
      [
        { json: "amountInMicros", js: "amountInMicros", typ: 0 },
        { json: "currencyCode", js: "currencyCode", typ: r("CurrencyCode") }
      ],
      false
    ),
    SearchInfo: o([{ json: "textSnippet", js: "textSnippet", typ: "" }], false),
    VolumeInfo: o(
      [
        { json: "title", js: "title", typ: "" },
        { json: "subtitle", js: "subtitle", typ: u(undefined, "") },
        { json: "authors", js: "authors", typ: u(undefined, a("")) },
        { json: "publisher", js: "publisher", typ: u(undefined, "") },
        { json: "publishedDate", js: "publishedDate", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        {
          json: "industryIdentifiers",
          js: "industryIdentifiers",
          typ: a(r("IndustryIdentifier"))
        },
        { json: "readingModes", js: "readingModes", typ: r("ReadingModes") },
        { json: "pageCount", js: "pageCount", typ: u(undefined, 0) },
        { json: "printType", js: "printType", typ: r("PrintType") },
        { json: "categories", js: "categories", typ: u(undefined, a("")) },
        {
          json: "maturityRating",
          js: "maturityRating",
          typ: r("MaturityRating")
        },
        { json: "allowAnonLogging", js: "allowAnonLogging", typ: true },
        { json: "contentVersion", js: "contentVersion", typ: "" },
        {
          json: "panelizationSummary",
          js: "panelizationSummary",
          typ: u(undefined, r("PanelizationSummary"))
        },
        {
          json: "imageLinks",
          js: "imageLinks",
          typ: u(undefined, r("ImageLinks"))
        },
        { json: "language", js: "language", typ: r("Language") },
        { json: "previewLink", js: "previewLink", typ: "" },
        { json: "infoLink", js: "infoLink", typ: "" },
        { json: "canonicalVolumeLink", js: "canonicalVolumeLink", typ: "" },
        { json: "averageRating", js: "averageRating", typ: u(undefined, 0) },
        { json: "ratingsCount", js: "ratingsCount", typ: u(undefined, 0) }
      ],
      false
    ),
    ImageLinks: o(
      [
        { json: "smallThumbnail", js: "smallThumbnail", typ: "" },
        { json: "thumbnail", js: "thumbnail", typ: "" }
      ],
      false
    ),
    IndustryIdentifier: o(
      [
        { json: "type", js: "type", typ: r("Type") },
        { json: "identifier", js: "identifier", typ: "" }
      ],
      false
    ),
    PanelizationSummary: o(
      [
        { json: "containsEpubBubbles", js: "containsEpubBubbles", typ: true },
        { json: "containsImageBubbles", js: "containsImageBubbles", typ: true }
      ],
      false
    ),
    ReadingModes: o(
      [
        { json: "text", js: "text", typ: true },
        { json: "image", js: "image", typ: true }
      ],
      false
    ),
    LowerCaseResponseHeadersClass: o(
      [
        { json: "expires", js: "expires", typ: "" },
        { json: "content-type", js: "contentType", typ: "" },
        { json: "x-xss-protection", js: "xXSSProtection", typ: "" },
        { json: "alt-svc", js: "altSVC", typ: "" },
        { json: "cache-control", js: "cacheControl", typ: "" },
        { json: "server", js: "server", typ: "" },
        { json: "etag", js: "etag", typ: "" },
        { json: "date", js: "date", typ: "" },
        { json: "vary", js: "vary", typ: "" },
        { json: "x-content-type-options", js: "xContentTypeOptions", typ: "" },
        { json: "x-frame-options", js: "xFrameOptions", typ: "" }
      ],
      false
    ),
    Request: o(
      [
        { json: "UNSENT", js: "unsent", typ: 0 },
        { json: "OPENED", js: "opened", typ: 0 },
        { json: "HEADERS_RECEIVED", js: "headersReceived", typ: 0 },
        { json: "LOADING", js: "loading", typ: 0 },
        { json: "DONE", js: "done", typ: 0 },
        { json: "readyState", js: "readyState", typ: 0 },
        { json: "status", js: "status", typ: 0 },
        { json: "timeout", js: "timeout", typ: 0 },
        { json: "withCredentials", js: "withCredentials", typ: true },
        { json: "upload", js: "upload", typ: r("Upload") },
        { json: "_aborted", js: "aborted", typ: true },
        { json: "_hasError", js: "hasError", typ: true },
        { json: "_method", js: "method", typ: "" },
        { json: "_response", js: "response", typ: "" },
        { json: "_url", js: "url", typ: "" },
        { json: "_timedOut", js: "timedOut", typ: true },
        { json: "_trackingName", js: "trackingName", typ: 0 },
        { json: "_incrementalEvents", js: "incrementalEvents", typ: true },
        {
          json: "responseHeaders",
          js: "responseHeaders",
          typ: r("LowerCaseResponseHeadersClass")
        },
        { json: "_requestId", js: "requestID", typ: null },
        { json: "_headers", js: "headers", typ: r("Headers") },
        { json: "_responseType", js: "responseType", typ: "" },
        { json: "_sent", js: "sent", typ: true },
        {
          json: "_lowerCaseResponseHeaders",
          js: "lowerCaseResponseHeaders",
          typ: r("LowerCaseResponseHeadersClass")
        },
        { json: "_subscriptions", js: "subscriptions", typ: a("any") },
        { json: "responseURL", js: "responseURL", typ: "" }
      ],
      false
    ),
    Headers: o([{ json: "accept", js: "accept", typ: "" }], false),
    Upload: o([], false),
    AccessViewStatus: ["FULL_PUBLIC_DOMAIN", "NONE", "SAMPLE"],
    Country: ["BR"],
    TextToSpeechPermission: ["ALLOWED", "ALLOWED_FOR_ACCESSIBILITY"],
    Viewability: ["ALL_PAGES", "NO_PAGES", "PARTIAL"],
    Kind: ["books#volume"],
    CurrencyCode: ["BRL"],
    Saleability: ["FOR_SALE", "FREE", "NOT_FOR_SALE"],
    Type: ["ISBN_10", "ISBN_13", "OTHER"],
    Language: ["en"],
    MaturityRating: ["NOT_MATURE"],
    PrintType: ["BOOK"]
  };
}
