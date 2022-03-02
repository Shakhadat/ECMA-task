import React from "react";
import styled from "styled-components";
import HeaderCource from "../../Microcomponents/CourseHeader";
import SpectCource from "../../Microcomponents/CourseTypes";



const Courcesection =()=>{
    return(
        <>x
        <Courcecontainer>
       <HeaderCource></HeaderCource>

        <SpectCource></SpectCource>
        <SpectCource></SpectCource>
        <SpectCource></SpectCource>
        <SpectCource></SpectCource>
        </Courcecontainer>
        </>
    );
}

export default Courcesection;


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
const Li=styled.li`
color:white;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
color: #F4F5F6;

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
const Headercource=styled.div`
width: 822px;
height: 40px;
background-color: #353945;
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
const Courcecontainer = styled.div`
/* width:862px; */
width: 100%;
padding: 1rem;
margin: 1rem;
height: 100vh;
/* height: 880px; */
border-radius: 10px;
background-color: #FFFFFF;
box-shadow: 0px 8px 16px -8px rgba(15, 15, 15, 0.2);
`