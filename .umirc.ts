import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/notebook/', component: '@/pages/index' },
    { path: '/notebook/note/:index', component: '@/pages/NoteEdict' },
  ],
});
