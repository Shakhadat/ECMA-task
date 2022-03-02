import React from "react";
import styled from "styled-components";

const HeaderCource=()=>{
    return(
        <>
         <Headercource>
            <Ul1>
                <Li>#</Li>
                <Li>Specialization</Li>
            </Ul1>

            <Ul2>
                <Li>Info</Li>
                <Li>Status</Li>
                <Li>Action</Li>
            </Ul2>
        </Headercource>
        </>
    );
}

export default HeaderCource;

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
margin: 1rem;
`