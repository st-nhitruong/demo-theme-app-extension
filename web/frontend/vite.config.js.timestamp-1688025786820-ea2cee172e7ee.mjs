// vite.config.js
import { defineConfig } from "file:///Users/nhitruongt.h./Project/new-app-demo/node_modules/vite/dist/node/index.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import react from "file:///Users/nhitruongt.h./Project/new-app-demo/node_modules/@vitejs/plugin-react/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///Users/nhitruongt.h./Project/new-app-demo/web/frontend/vite.config.js";
if (process.env.npm_lifecycle_event === "build" && !process.env.CI && !process.env.SHOPIFY_API_KEY) {
  console.warn(
    "\nBuilding the frontend app without an API key. The frontend build will not run without an API key. Set the SHOPIFY_API_KEY environment variable when running the build command.\n"
  );
}
var proxyOptions = {
  target: `http://127.0.0.1:${process.env.BACKEND_PORT}`,
  changeOrigin: false,
  secure: true,
  ws: false
};
var host = process.env.HOST ? process.env.HOST.replace(/https?:\/\//, "") : "localhost";
var hmrConfig;
if (host === "localhost") {
  hmrConfig = {
    protocol: "ws",
    host: "localhost",
    port: 64999,
    clientPort: 64999
  };
} else {
  hmrConfig = {
    protocol: "wss",
    host,
    port: process.env.FRONTEND_PORT,
    clientPort: 443
  };
}
var vite_config_default = defineConfig({
  root: dirname(fileURLToPath(__vite_injected_original_import_meta_url)),
  plugins: [react()],
  define: {
    "process.env.SHOPIFY_API_KEY": JSON.stringify(process.env.SHOPIFY_API_KEY)
  },
  resolve: {
    preserveSymlinks: true
  },
  server: {
    host: "localhost",
    port: process.env.FRONTEND_PORT,
    hmr: hmrConfig,
    proxy: {
      "^/(\\?.*)?$": proxyOptions,
      "^/api(/|(\\?.*)?$)": proxyOptions
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbmhpdHJ1b25ndC5oLi9Qcm9qZWN0L25ldy1hcHAtZGVtby93ZWIvZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9uaGl0cnVvbmd0LmguL1Byb2plY3QvbmV3LWFwcC1kZW1vL3dlYi9mcm9udGVuZC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbmhpdHJ1b25ndC5oLi9Qcm9qZWN0L25ldy1hcHAtZGVtby93ZWIvZnJvbnRlbmQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgZGlybmFtZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSBcInVybFwiO1xuaW1wb3J0IGh0dHBzIGZyb20gXCJodHRwc1wiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuXG5pZiAoXG4gIHByb2Nlc3MuZW52Lm5wbV9saWZlY3ljbGVfZXZlbnQgPT09IFwiYnVpbGRcIiAmJlxuICAhcHJvY2Vzcy5lbnYuQ0kgJiZcbiAgIXByb2Nlc3MuZW52LlNIT1BJRllfQVBJX0tFWVxuKSB7XG4gIGNvbnNvbGUud2FybihcbiAgICBcIlxcbkJ1aWxkaW5nIHRoZSBmcm9udGVuZCBhcHAgd2l0aG91dCBhbiBBUEkga2V5LiBUaGUgZnJvbnRlbmQgYnVpbGQgd2lsbCBub3QgcnVuIHdpdGhvdXQgYW4gQVBJIGtleS4gU2V0IHRoZSBTSE9QSUZZX0FQSV9LRVkgZW52aXJvbm1lbnQgdmFyaWFibGUgd2hlbiBydW5uaW5nIHRoZSBidWlsZCBjb21tYW5kLlxcblwiXG4gICk7XG59XG5cbmNvbnN0IHByb3h5T3B0aW9ucyA9IHtcbiAgdGFyZ2V0OiBgaHR0cDovLzEyNy4wLjAuMToke3Byb2Nlc3MuZW52LkJBQ0tFTkRfUE9SVH1gLFxuICBjaGFuZ2VPcmlnaW46IGZhbHNlLFxuICBzZWN1cmU6IHRydWUsXG4gIHdzOiBmYWxzZSxcbn07XG5cbmNvbnN0IGhvc3QgPSBwcm9jZXNzLmVudi5IT1NUXG4gID8gcHJvY2Vzcy5lbnYuSE9TVC5yZXBsYWNlKC9odHRwcz86XFwvXFwvLywgXCJcIilcbiAgOiBcImxvY2FsaG9zdFwiO1xuXG5sZXQgaG1yQ29uZmlnO1xuaWYgKGhvc3QgPT09IFwibG9jYWxob3N0XCIpIHtcbiAgaG1yQ29uZmlnID0ge1xuICAgIHByb3RvY29sOiBcIndzXCIsXG4gICAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgICBwb3J0OiA2NDk5OSxcbiAgICBjbGllbnRQb3J0OiA2NDk5OSxcbiAgfTtcbn0gZWxzZSB7XG4gIGhtckNvbmZpZyA9IHtcbiAgICBwcm90b2NvbDogXCJ3c3NcIixcbiAgICBob3N0OiBob3N0LFxuICAgIHBvcnQ6IHByb2Nlc3MuZW52LkZST05URU5EX1BPUlQsXG4gICAgY2xpZW50UG9ydDogNDQzLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByb290OiBkaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgZGVmaW5lOiB7XG4gICAgXCJwcm9jZXNzLmVudi5TSE9QSUZZX0FQSV9LRVlcIjogSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuU0hPUElGWV9BUElfS0VZKSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIHByZXNlcnZlU3ltbGlua3M6IHRydWUsXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IFwibG9jYWxob3N0XCIsXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYuRlJPTlRFTkRfUE9SVCxcbiAgICBobXI6IGhtckNvbmZpZyxcbiAgICBwcm94eToge1xuICAgICAgXCJeLyhcXFxcPy4qKT8kXCI6IHByb3h5T3B0aW9ucyxcbiAgICAgIFwiXi9hcGkoL3woXFxcXD8uKik/JClcIjogcHJveHlPcHRpb25zLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1YsU0FBUyxvQkFBb0I7QUFDalgsU0FBUyxlQUFlO0FBQ3hCLFNBQVMscUJBQXFCO0FBRTlCLE9BQU8sV0FBVztBQUprTSxJQUFNLDJDQUEyQztBQU1yUSxJQUNFLFFBQVEsSUFBSSx3QkFBd0IsV0FDcEMsQ0FBQyxRQUFRLElBQUksTUFDYixDQUFDLFFBQVEsSUFBSSxpQkFDYjtBQUNBLFVBQVE7QUFBQSxJQUNOO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTSxlQUFlO0FBQUEsRUFDbkIsUUFBUSxvQkFBb0IsUUFBUSxJQUFJO0FBQUEsRUFDeEMsY0FBYztBQUFBLEVBQ2QsUUFBUTtBQUFBLEVBQ1IsSUFBSTtBQUNOO0FBRUEsSUFBTSxPQUFPLFFBQVEsSUFBSSxPQUNyQixRQUFRLElBQUksS0FBSyxRQUFRLGVBQWUsRUFBRSxJQUMxQztBQUVKLElBQUk7QUFDSixJQUFJLFNBQVMsYUFBYTtBQUN4QixjQUFZO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsRUFDZDtBQUNGLE9BQU87QUFDTCxjQUFZO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVjtBQUFBLElBQ0EsTUFBTSxRQUFRLElBQUk7QUFBQSxJQUNsQixZQUFZO0FBQUEsRUFDZDtBQUNGO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTSxRQUFRLGNBQWMsd0NBQWUsQ0FBQztBQUFBLEVBQzVDLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixRQUFRO0FBQUEsSUFDTiwrQkFBK0IsS0FBSyxVQUFVLFFBQVEsSUFBSSxlQUFlO0FBQUEsRUFDM0U7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLGtCQUFrQjtBQUFBLEVBQ3BCO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNLFFBQVEsSUFBSTtBQUFBLElBQ2xCLEtBQUs7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNMLGVBQWU7QUFBQSxNQUNmLHNCQUFzQjtBQUFBLElBQ3hCO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
