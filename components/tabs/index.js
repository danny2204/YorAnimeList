import styled from '@emotion/styled'
import React from 'react'
import { ActiveTab, Tab, TabBar, TabBody } from '../template/style'

export default function Tabs(props) {
    const {
        characterTab,
        staffTab
    } = props

    const  [activeTab, setActiveTab] = React.useState(1);

    // const Tab = styled.div`
    //     display: flex;
    //     flex-direction: column;
    //     max-height: 50vh;
    //     overflow: hidden;
    //     width: 100%;
    // `;

    // function changeTab(tab) {
    // }

    function onClick(tab) {
        setActiveTab(tab);
    }

    return (
        <div>
            {/* header */}
            <TabBar>
                {activeTab == 1 ? 
                    <ActiveTab onClick={function(event) {
                        characterTab();
                        onClick(1);
                    }}>
                        Characters
                    </ActiveTab>
                : 
                    <Tab onClick={function(event) {
                        characterTab();
                        onClick(1);                        
                    }}>
                        Characters
                    </Tab>
                }
                {activeTab == 2 ?
                    <ActiveTab onClick={function(event) {
                        staffTab();
                        onClick(2);
                    }}>
                        Reviews
                    </ActiveTab>
                : 
                    <Tab onClick={function(event) {
                        staffTab();
                        onClick(2);
                    }}>
                        Reviews
                    </Tab>
                }
            </TabBar>
            <hr />
            <TabBody>
                {props.children}
            </TabBody>
        </div>
    )
}