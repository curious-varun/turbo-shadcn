/** @type {import('postcss-load-config').Config}
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export { default } from "@repo/shadcn/postcss.config";
export { } from "@repo/shadcn/postcss.config"
*/
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

export default config;
