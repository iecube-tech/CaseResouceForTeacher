import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    // console.log("env:", env.VITE_API_URL);
    return {
        plugins: [
            vue(),
            AutoImport({
                // 自动导入 Vue 相关函数
                imports: ["vue", "vue-router"],
                // 生成 TypeScript 声明文件
                dts: "src/auto-imports.d.ts",
                // 自动导入 Element Plus 组件
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
                dts: "src/components.d.ts",
            }),
            vueDevTools(),
        ],
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
                "@/components": fileURLToPath(
                    new URL("./src/components", import.meta.url)
                ),
                "@/utils": fileURLToPath(
                    new URL("./src/utils", import.meta.url)
                ),
            },
        },
        server: {
            host: "0.0.0.0",
            port: 5173,
            open: true,
            proxy: {
                "/dev-api": {
                    // 后台地址
                    target: env.VITE_API_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/dev-api/, ""),
                },
                "/local-resource": {
                    target: env.VITE_API_URL + "/files/",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/local-resource/, ""),
                },
                "/ai-assistant": {
                    target: env.VITE_API_URL + "/ai/server/assistant/",
                    ws: true,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/ai-assistant/, ""),
                },
            },
        },
    };
});
