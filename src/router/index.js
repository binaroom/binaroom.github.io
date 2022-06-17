import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from '../pages/Intro'
import About from '../pages/About'
import Catalog from '../pages/Catalog'
import Contact from '../pages/Contact'
import Size from '../pages/Size'
// import Video from '../pages/Video'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro,
    meta: {
      title: 'binaroom.',
      metaTags: [
        {
          name: 'description',
          content: 'your favorite clothing.'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'about binaroom and logo.',
      metaTags: [
        {
          name: 'description',
          content: 'who is binaroom?'
        }
      ]
    }
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog,
    meta: {
      title: 'catalog. binaroom.',
      metaTags: [
        {
          name: 'description',
          content: 'made with love.'
        }
      ]
    }
  },
  {
    path: '/size',
    name: 'Size',
    component: Size,
    meta: {
      title: 'size chart. binaroom.',
      metaTags: [
        {
          name: 'description',
          content: 'made with love.'
        }
      ]
    }
  },
  // {
  //   path: '/video',
  //   name: 'Video',
  //   component: Video,
  //   meta: {
  //     title: 'video. binaroom.',
  //     metaTags: [
  //       {
  //         name: 'description',
  //         content: 'daily activities...'
  //       }
  //     ]
  //   }
  // },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'contact us. binaroom.',
      metaTags: [
        {
          name: 'description',
          content: 'ask me anything about product'
        }
      ]
    }
  }
]

const router = new VueRouter({
  routes
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // smooth scroll to top when page change dengan menggunakan .scroll
  // .scroll(posisi x, posisi y, behavior)
  window.scroll({
    top: to,
    left: 0,
    behavior: 'smooth'
  })
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});


export default router
