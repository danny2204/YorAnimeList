import styled from '@emotion/styled'

export default function Tabs(props) {
    const {
        characterTab,
        staffTab
    } = props

    const Tab = styled.div`
        display: flex;
        flex-direction: column;
        max-height: 50vh;
        overflow: hidden;
        width: 100%;
    `;

    const TabBody = styled.div`
        overflow-y: scroll
    `

    return (
        <Tab>
            {/* header */}
            <div>
                <button onClick={characterTab}>
                    tab 1
                </button>
                <button onClick={staffTab}>
                    tab 2
                </button>
            </div>
            <TabBody>
                {props.children}
            </TabBody>
        </Tab>
    )
}