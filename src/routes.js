import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import DashboardLayout from 'src/layouts/DashboardLayout';
import AdminLayout from 'src/layouts/AdminLayout';
import NotFoundView from 'src/views/errors/NotFoundView';
 import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import LoginView from 'src/views/auth/LoginView';
import SchoolRegisterView from 'src/views/auth/SchoolView';
 import DashboardView from 'src/views/dashboard';
import EventsView from 'src/views/events/EventsView';
import HomeView from 'src/views/home/HomeView';
import Feedback from 'src/views/Feedback';
import AddCourseView from './views/admin/add-course';
import CourseView from './views/admin/course';
import CourseInfoView from './views/admin/view-course';
import CourseEdit from './views/admin/edit-course';
import Dashboard from 'src/views/dashboard';
 //import DashboardLayout from './views/dashboard/DashboardLayout';
import Account from './views/admin/account';


//import MyProfile from './views/dashboard/MyProfile';
const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
       { path: 'dashboard', element: <Dashboard /> },
       { path: 'account', element: <Account /> },
       { path: 'notification', element: <Notification /> },
    //   { path: 'courses', element: <Courses /> },
    //   { path: 'logout', element: <Logout /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'new-course', element: <AddCourseView /> },
      { path: 'course', element: <CourseView /> },
      { path: 'course/:courseId', element: <CourseInfoView /> },
      { path: 'edit-course/:courseId', element: <CourseEdit /> },
      { path: '404', element: <NotFoundView /> },
      //{ path: '/', element: <Navigate to="/admin/new-course" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      // { path: 'my-profile', element: <MyProfile /> },
      { path: 'school-register', element: <SchoolRegisterView /> },
      { path: 'home', element: <HomeView /> },
      { path: 'feedback', element: <Feedback /> },
      { path: 'events', element: <EventsView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/home" /> },
      // { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
