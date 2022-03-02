import React from 'react';
import styled from 'styled-components';




const Addmodal=()=>{
    return(
        <>
        <Container>
        <Tabnavbar>

                <Tabbutton>Lessons <span><ion-icon name="close-outline"></ion-icon></span></Tabbutton>
                <Tabline/>
                <Tabbutton>Timetable <span><ion-icon name="close-outline"></ion-icon></span></Tabbutton>
                <Tabline/>
                <Tabbutton>Add Cource <span><ion-icon name="close-outline"></ion-icon></span></Tabbutton>
                <Tabline/>
                <Tabbutton>Add Group <span><ion-icon name="close-outline"></ion-icon></span></Tabbutton>
                <Tabline/>
                <Tabbutton>Specialization <span><ion-icon name="close-outline"></ion-icon></span></Tabbutton>
                <Tabline/>
                <Tabbutton>Leads <span><ion-icon name="close-outline"></ion-icon></span></Tabbutton>
                <Tabline/>
                <Tabbutton>HRM <span><ion-icon name="close-outline"></ion-icon></span></Tabbutton>
                <Tabline/>
                <UserTab><ion-icon name="person"></ion-icon>User</UserTab>
</Tabnavbar>

<TabPanel>
    <TabSerch>
        <Icon><ion-icon name="search"></ion-icon></Icon>

        <Input placeholder='Search...'>
            <Option value="">Search...</Option>
            <Option value="AL">Alabama</Option>
            <Option value="AK">Alaska</Option>
            <Option value="AZ">Arizona</Option>
        
        </Input>
        
    </TabSerch>

    <AddspetsBtnGruops>
            <AddSpecialition>+ ADD SPECIALIZATION</AddSpecialition>
            <Allopen>
                <Cube></Cube>
                <Cube></Cube>
                <Cube></Cube>
                <Cube></Cube>
            </Allopen>
            <MinNavCollapse>
                <Btnspan/>
                <Btnspan/>
            </MinNavCollapse>
    </AddspetsBtnGruops>
    
</TabPanel>
        </Container>
       

    </>
    );
    
}

// styling

const Container=styled.div`
box-sizing: border-box;
width: 100%;
`

const MinNavCollapse=styled.button`
width: 27px;
height: 24px;
background-color: transparent;
border: none;
outline: none;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

const Btnspan=styled.span`
display: block;
background-color: #777E90;
width: 7.5px;
height: 16.67px;
transform: rotate(90deg);
border-radius: 5px;


`
const Allopen=styled.div`
width: 34px;
height: 34px;
background: rgba(69, 179, 107, 0.1);
border-radius: 7px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: center;
margin: 0 1rem;
`
const Cube=styled.div`
background-color: #45B26B;
width: 7.5px;
margin: 3px;
height: 7.5px;
border-radius: 2.5px;

`
const AddSpecialition=styled.button`
width: 169px;
height: 34px;
background-color: #45B36B;
border: none;
border-radius: 8px;
color:#FCFCFD;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 14px;
`
const Tabnavbar=styled.div`
background-color: #EFF1F3;
/* width:1822px; */
width: 100%;
height:75px;
display:flex;
flex-direction:row;
align-items: center;
`
const Tabline=styled.div`
width: 16px;
height: 0px;
border: 1px solid #B1B5C3;
transform: rotate(90deg);
`
const Tabbutton=styled.button`
color:#353945;
margin:1rem;
box-sizing: border-box;
background-color:transparent;
border: none;
width: 140px;
cursor: pointer;
/* border-right: 1px solid #cccc; */
font-family: 'Poppins', sans-serif;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;

`

const UserTab=styled.button`
width: 91px;
height: 30px;
color: #F4F5F6;
text-transform: uppercase;
background-color:#353945;
border-radius: 6px;
border:none;
display: flex;
justify-content:space-around;
align-items: center;
`

const TabPanel=styled.div`
width: 100%;
/* background-color: red; */
left:0;
/* box-sizing:border-box; */
background-color: #FCFCFD;
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
`
const Input=styled.select`
border:none;
width: 200px;
outline: none;
background-color: transparent;
margin: 1rem 0;
height: 26px;
border-right:1px solid #E6E8EC;
padding-left: 2rem;
display: flex;
justify-content: center;
align-items: center;
font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 20px;
position: relative;
`

const TabSerch=styled.div`
/* background-color: pink; */
/* display: flex; */
position: relative;
/* left: 20px; */
/* width: 50%; */
box-sizing: border-box;
padding: 0 1rem;
/* overflow: hidden; */


`

const Icon=styled.div`
position: absolute;
color:#353945;
z-index: 1;
font-size: 16px;
/* background-color: red; */
top:18px;


`
const Option=styled.option`

font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 20px;
color:#777E90;


`
const AddspetsBtnGruops=styled.div`

/* width: 36%; */
height: 40px;
position: relative;
display: flex;
align-items: center;
/* justify-content: space-evenly; */
/* background-color: yellow; */
`







export default Addmodal;