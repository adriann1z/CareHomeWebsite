/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_ENQUIRY_FORM_ENDPOINT?: string;
  readonly VITE_ALLOW_INDEXING?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
