import Home from '../pages/home';
import Error from '../pages/erorr';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/search';
import OnlyLyaout from '../components/layout/OnlyLayout'



const publiRouter = [
    { path:'/', component: Home},

    { path:'/following', component: Following },
    { path:'/profile', component: Profile },
    { path:'/Upload', component:Upload , layout:OnlyLyaout },
    { path:'/search', component:Search , layout:null },
    { path:'*', component: Error, title: 'error'}

];

const privateRouter = [];

export { publiRouter, privateRouter };
