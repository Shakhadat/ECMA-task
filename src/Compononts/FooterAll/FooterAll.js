import React from "react";
import styled from "styled-components";

const FooterAll=()=>{
    return(
        <>
        <FooterAllContent>
            <AllBtns>

                <DegreeBtn>
                    <Input type="checkbox"/>
                    <Label>No Degree</Label>
                    <What>?</What>
                </DegreeBtn>

                <ActiveBtn>
                    <Input type="checkbox"/>
                    <Label>Active</Label>
                    <What>?</What>
                </ActiveBtn>

                <CanselBtn>Cancel</CanselBtn>
                <Savebtn>Save</Savebtn>


            </AllBtns>
        </FooterAllContent>
        </>
    );
}

export default FooterAll;
//styling

const CanselBtn=styled.button`
width: 83px;
height: 40px;
background: rgba(239, 70, 111, 0.1);
border-radius: 8px;
color:#EF466F;
border:none;
outline: none;
`
const Savebtn=styled.button`
width: 67px;
height: 40px;
background: #45B36B;
border-radius: 8px;
color:#FCFCFD;
outline: none;
border:none;
`


const Label=styled.label`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
text-align: center;
`

const What=styled.span`
display: block;
background: #777E91;
width: 10px;
height: 10px;
border-radius: 50%;
font-size: 10px;
color:white;
display:flex;
align-items:center;
justify-content:center;
padding: 3px;
`
const Input=styled.input`
width: 10.5px;
height: 10.5px;
border: 1px solid black;
border-radius: 3px;
`
const FooterAllContent=styled.div`
width:100%;
height:80px;
background: #FAFBFC;
display: flex;
justify-content: flex-end;
`
const AllBtns=styled.div`
display: flex;
/* background-color: violet; */
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 35%;
`

const DegreeBtn=styled.div`
width: 129px;
height: 40px;
background: #FCFCFD;
border: 1px solid #E6E8EC;
box-sizing: border-box;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: space-around;
`

const ActiveBtn=styled.div`
width: 129px;
height: 40px;
background: #FCFCFD;
border: 1px solid #E6E8EC;
box-sizing: border-box;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: space-around;`