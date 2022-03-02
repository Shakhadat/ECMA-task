import React from "react";
import styled from "styled-components";

const TotalCourses=()=>{
    return(
        <>
        <TotalContainer>
        <Headercource>
           <H1>Foundation</H1>

           
        </Headercource>

        <Nofoundtext>INFO NO FOUND</Nofoundtext>
        </TotalContainer>
        </>
    );
}

export default TotalCourses;

const Nofoundtext=styled.h1`
width: 184px;
height: 36px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 36px;
color: #B1B5C4;
text-align: center;
position: relative;
top: 30%;
left: 40%;

/* display: flex; */

`
const Headercource=styled.div`
/* width: 822px; */
width: 100%;
height: 40px;
background: #353945;
border-radius: 6px;
display: flex;
align-items: center;
/* padding: 0 1rem; */
/* margin: 1rem; */
`
const H1=styled.h1`width: 92px;
height: 24px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #FCFCFD;
padding-left: 1rem;
text-align:center;
`
const TotalContainer=styled.div`
box-sizing: border-box;
position: relative;
/* width:862px; */
width: 100%;
height: 100vh;
/* height: 880px; */
background-color:#FFFFFF;
margin: 1rem;
padding: 1rem;
box-shadow: 0px 8px 16px -8px rgba(15, 15, 15, 0.2);
border-radius: 10px;
`