import React from "react";
import styled from "styled-components";

const SpectCource=()=>{
         
    return(
        <>
           <CourseType>
           <Ul1>
                    <Li2>1</Li2>
                    <Li2>Foundation</Li2>
                </Ul1>
    
                <Ul2>
                    <Li2>Degree</Li2>
                    <Li2>
                        <StatusBtn>ACTIVE</StatusBtn>
                    </Li2>
                    <Li2>...</Li2>
                </Ul2>
            </CourseType>     
        </>
    );
    
    }

    export default SpectCource;

    const StatusBtn=styled.button`width:70;
height:24px;
border-radius:6px;
color: #FCFCFD;
background-color: #45B36B;
outline: none;
cursor: pointer;
border: none;
`
const Li2=styled.li`
color:#353945;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
`
const Ul2=styled.ul`
display:flex;
margin:0;
padding: 0;
justify-content: space-between;
width:315px;
list-style-type: none;
`
const Ul1=styled.ul`
display:flex;
margin:0;
padding: 0;
justify-content: space-between;
width:118px;
list-style-type: none;
`

const CourseType=styled.div`
margin: 1rem;
width: 822px;
height: 40px;
background-color: #FCFCFD;
color:white;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
border-radius: 6px;
display: flex;
padding: 0 1rem;
justify-content: space-between;
align-items: center;
`