// main.js (or your entry file)
import { Router, Route } from 'svelte-routing';

import Navigation from './Navigation.svelte';
import Home from './Home.svelte';
import UserProfile from './UserProfile.svelte';
import UserDashboard from './UserDashboard.svelte';
import UserAuthentication from './UserAuthentication.svelte';

const App = {
  components: {
    Navigation,
  },
};

const layout = (component) => {
  return {
    component,
  };
};

new App({
  target: document.body,
  hydrate: true,
  props: {},
  routes: {
    '/': Home,
    '/user-profile': layout(UserProfile),
    '/user-dashboard': layout(UserDashboard),
    '/user-authentication': layout(UserAuthentication),
  },
});
