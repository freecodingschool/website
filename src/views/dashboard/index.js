import React from "react";
import Page from 'src/components/Page';
import Courses from './components/Courses';
import Introduction from './components/Introduction'
const Dashboard = () => {
    return(
        <Page title="Freecoding School - Dashbaord"> 
            <Introduction/>
            <Courses/>
        </Page>
    )
}
export default Dashboard;
