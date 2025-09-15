interface ImportMetaEnv {
  readonly AUTHOR_URL: string;
  readonly OG_IMAGE_URL: string;
  readonly RADIO_PLAYER_URL: string;
  readonly MC_FILES_CDN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
