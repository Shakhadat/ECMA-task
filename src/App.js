import React from 'react';
import styled from 'styled-components';
import './App.css';
import Addmodal from './Compononts/addmodul/addmodal';
import Sidebar from './Compononts/Sidebar/Sidebar';
import Courses from './Compononts/coursesection/Courses'
import TotalCourses from './Compononts/TotalCources/TotalCources';
import TotalCourses3 from './Compononts/Coursecollection/Coursecollection';
import SpecializationAdding from './Compononts/FormSpecialist/SpecilalistAdd';
import FooterAll from './Compononts/FooterAll/FooterAll'


function App() {
  return (
    <div>
      <Container>
        <LeftContent>
        <Sidebar/>
        </LeftContent>
        
        <RightContent>
          <Row>
              <Addmodal/>
          </Row>

            <Row>
              <SpecializationAdding></SpecializationAdding>
            {/* <Courses/> */}
            <TotalCourses3 />

            </Row>

            <Row>
              <FooterAll/>
            </Row>

      
        
        </RightContent>
        
      </Container>
      
    </div>
  );
}

export default App;


const Container = styled.div`
width: 100vw;
height: 100%;
position: relative;
display: flex;
box-sizing: border-box;
position: relative;

`
const Row=styled.div`
width:100%;
display: flex;
`
const LeftContent=styled.div`
width:8%;
background-color:blue;`

const RightContent=styled.div`width:92%; 
/* background-color: green; */
`