import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import { HeaderOnlyLayout } from '../Components/layouts'
import config from '../Config';
import Live from '../pages/Live/Live';


// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home},
    { path: config.routes.following, component: Following},
    { path: config.routes.live, component: Live},
    { path: config.routes.profile, component: Profile }, //Thêm @ nhưng không được
    { path: config.routes.upload, component: Upload, layout: HeaderOnlyLayout}
];


// Private routes
const privateRoutes = [
    
];

export {publicRoutes, privateRoutes }
