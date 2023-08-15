import Main from '../components/Main.vue';
import Index from '../components/Index.vue';
import section1 from '../components/Section1.vue';
import section2 from '../components/Section2.vue';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/Index',
    component: Index,
  },
  {
  path: '/section1',
  component: section1,
},
{
  path: '/section2',
  component: section2,
},
];

export default routes;
