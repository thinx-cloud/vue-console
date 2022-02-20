import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Typography from '@/pages/Typography/Typography';
import Tables from '@/pages/Tables/Tables';
import Notifications from '@/pages/Notifications/Notifications';
import Icons from '@/pages/Icons/Icons';
import Maps from '@/pages/Maps/Maps';
import Charts from '@/pages/Charts/Charts';
import Dashboard from '@/pages/Visits/Visits';
import Login from '@/pages/Login/Login';
import ErrorPage from '@/pages/Error/Error';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
        },
        // THINX
        {
          path: 'devices',
          name: 'Devices',
          component: ErrorPage,
        },
        {
          path: 'apikeys',
          name: 'API Keys',
          component: ErrorPage,
        },
        {
          path: 'sources',
          name: 'Sources',
          component: ErrorPage,
        },
        {
          path: 'history',
          name: 'History',
          component: ErrorPage,
        },
        {
          path: 'components/deploykeys',
          name: 'Deploy Keys',
          component: ErrorPage,
        },
        {
          path: 'components/transformers',
          name: 'Transformers',
          component: ErrorPage,
        },
        {
          path: 'components/enviros',
          name: 'Environmental GLobals',
          component: ErrorPage,
        },
        {
          path: 'components/channels',
          name: 'Mesh Channels',
          component: ErrorPage,
        },
        // THEME
        {
          path: 'typography',
          name: 'Typography',
          component: Typography,
        },
        {
          path: 'tables',
          name: 'Tables',
          component: Tables,
        },
        {
          path: 'notifications',
          name: 'Notifications',
          component: Notifications,
        },
        {
          path: 'components/icons',
          name: 'Icons',
          component: Icons,
        },
        {
          path: 'components/maps',
          name: 'Maps',
          component: Maps,
        },
        {
          path: 'components/charts',
          name: 'Charts',
          component: Charts,
        },
      ],
    },
    {
      path: '*',
      name: 'Unknown',
      component: ErrorPage,
    }
  ],
});
