// vite.config.js
import { defineConfig } from "file:///home/elias/dev-projects/frontend-projects/mf-apps/mf-with-vite/remote/node_modules/.pnpm/vite@4.4.5/node_modules/vite/dist/node/index.js";
import react from "file:///home/elias/dev-projects/frontend-projects/mf-apps/mf-with-vite/remote/node_modules/.pnpm/@vitejs+plugin-react@4.0.3_vite@4.4.5/node_modules/@vitejs/plugin-react/dist/index.mjs";
import federation from "file:///home/elias/dev-projects/frontend-projects/mf-apps/mf-with-vite/remote/node_modules/.pnpm/@originjs+vite-plugin-federation@1.3.2/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./components/Button": "./src/Button"
      },
      shared: ["react", "react-dom"]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9lbGlhcy9kZXYtcHJvamVjdHMvZnJvbnRlbmQtcHJvamVjdHMvbWYtYXBwcy9tZi13aXRoLXZpdGUvcmVtb3RlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9lbGlhcy9kZXYtcHJvamVjdHMvZnJvbnRlbmQtcHJvamVjdHMvbWYtYXBwcy9tZi13aXRoLXZpdGUvcmVtb3RlL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2VsaWFzL2Rldi1wcm9qZWN0cy9mcm9udGVuZC1wcm9qZWN0cy9tZi1hcHBzL21mLXdpdGgtdml0ZS9yZW1vdGUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IGZlZGVyYXRpb24gZnJvbSBcIkBvcmlnaW5qcy92aXRlLXBsdWdpbi1mZWRlcmF0aW9uXCJcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLFxuICBmZWRlcmF0aW9uKHtcbiAgICBuYW1lOiBcInJlbW90ZV9hcHBcIixcbiAgICBmaWxlbmFtZTogXCJyZW1vdGVFbnRyeS5qc1wiLFxuICAgIGV4cG9zZXM6IHtcbiAgICAgIFwiLi9jb21wb25lbnRzL0J1dHRvblwiOiBcIi4vc3JjL0J1dHRvblwiXG4gICAgfSxcbiAgICBzaGFyZWQ6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCJdXG4gIH0pXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9ZLFNBQVMsb0JBQW9CO0FBQ2phLE9BQU8sV0FBVztBQUNsQixPQUFPLGdCQUFnQjtBQUd2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFBQyxNQUFNO0FBQUEsSUFDaEIsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLFFBQ1AsdUJBQXVCO0FBQUEsTUFDekI7QUFBQSxNQUNBLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFBQSxJQUMvQixDQUFDO0FBQUEsRUFBQztBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
