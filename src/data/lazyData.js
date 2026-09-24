// Lazy-loaded data modules to reduce initial bundle size

export const loadLocations = () => import('./locations.js');
export const loadServices = () => import('./services.js');
export const loadArticles = () => import('./articles.js');
export const loadIndustries = () => import('./industries.js');
export const loadRouteEngine = () => import('./routeCalculationEngine.js');