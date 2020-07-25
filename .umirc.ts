import { defineConfig } from 'umi';

export default defineConfig({
  base: '/notebook',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/note/:index', component: '@/pages/NoteEdict' },
  ],
});
