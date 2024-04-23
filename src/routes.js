// import { Route } from 'react-router-dom';
import Feedback from './components/Feedback';
import Froms from './components/Forms';
import TriggerRule from './components/TriggerRule';
import NotificationRule from './components/NotificationRule';
import AuditEvent from './components/AuditEvent';
import Dashboard from './components/Dashboard';

const routes = [
    {path: '/feedback', element: <Feedback/>, exact: true},
    {path: '/forms', element: <Froms/>, exact: true},
    {path: '/trigger-rule', element: <TriggerRule/>, exact: true},
    {path: '/notification-rule', element: <NotificationRule/>, exact: true},
    {path: '/audit-event', element: <AuditEvent/>, exact: true},
    {path: '/dashboard', element: <Dashboard/>, exact: true},
]

// const renderRoutes = () => routes.map((route, index) => (
//     <Route
//       key={index}
//       path={route.path}
//       component={route.component}
//       exact={route.exact}
//     />
// ));

export default routes;