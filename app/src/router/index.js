import { homepage } from "../main.js";
import { kafe } from "../pages/muabet/muabet.js";
import { naprajKafe } from "../pages/create-muabet/create-muabet.js";
import { exploreMuabet } from "../pages/explore-muabet/explore-muabet.js";

export const navigateTo = url => {
  history.pushState(null, null, url);
};

const router = async () => {
  const routes = [
    { path: '/', component: homepage},
    { path: '/muabet', component: kafe },
    { path: '/explore-muabet', component: exploreMuabet},
    { path: '/create-muabet', component: naprajKafe }
  ];

  const matchedRoute = routes.find(route => route.path === location.pathname);
  if (matchedRoute) {
    document.querySelector('#app').innerHTML = matchedRoute.component;
  } else {
    navigateTo('/');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
      router();
    }
  });
  router();
});

export default router;