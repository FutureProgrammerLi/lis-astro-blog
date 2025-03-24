/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly BLOB_READ_WRITE_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}