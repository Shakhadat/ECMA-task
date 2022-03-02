import React from "react";
import styled from "styled-components";

const Courseoption=()=>{
    return(
        <>
        <CourseBtn>
            <Titlecourse>
                Java Backend
            </Titlecourse>

            <AddorRemove>+</AddorRemove>

        </CourseBtn>
        </>
        );
}

const TotalCourses3=()=>{
    return(
        <>
        <TotalContainer3>
       <Courseoption/>
       <Courseoption/>
       <Courseoption/>

       <Courseoption/>
       <Courseoption/>
       <Courseoption/>

       <Courseoption/>
       <Courseoption/>
       <Courseoption/>

       <Courseoption/>
       <Courseoption/>
       <Courseoption/>


        {/* <Nofoundtext>INFO NO FOUND</Nofoundtext> */}
        </TotalContainer3>
        </>
    );
}

export default TotalCourses3;

//styling
const TotalContainer3=styled.div`
box-sizing: border-box;
position: relative;
width: 100%;
height: 100vh;
background-color:#FFFFFF;
margin: 1rem;
padding: 1rem;
box-shadow: 0px 8px 16px -8px rgba(15, 15, 15, 0.2);
border-radius: 10px;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
flex-wrap: wrap;
`

const CourseBtn=styled.div`
/* width: 264px; */
width: 30%;
height: 87px;
background-color: #23262F;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 5px 0 1rem;
box-sizing: border-box;
margin: 0 5px 5px 5px;

`

const AddorRemove=styled.button`
width: 41px;
height: 70px;
background-color: #45B36B;
border-top-left-radius: 70px;
border-bottom-left-radius: 70px;
color:white;
font-size: 20px;
border:none;
cursor: pointer;
`
const Titlecourse=styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
color: #FFFFFF;
`
    
