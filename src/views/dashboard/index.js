import React from "react";
import Page from 'src/components/Page';
import Courses from 'src/components/Courses';
import Introduction from './components/Introduction'
const Dashboard = () => {
    return(
        <Page title="Freecoding School - Dashbaord"> 
            <Introduction/>
            <Courses showSection={false}/>
        </Page>
    )
}
export default Dashboard;
