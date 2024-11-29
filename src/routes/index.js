import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import { HeaderOnlyLayout } from '../Components/Layout'


// Public routes
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/following', component: Following},
    { path: '/:nickname', component: Profile }, //Thêm @ nhưng không được
    { path: '/upload', component: Upload, layout: HeaderOnlyLayout}
];


// Private routes
const privateRoutes = [
    
];

export {publicRoutes, privateRoutes }
