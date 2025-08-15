import type { Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const shareConfig = require("../../packages/ui/tailwind.config")

const config:Pick<Config, "presets" | "content"> ={
    presets: [shareConfig],

    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}"
    ]
}
export default config