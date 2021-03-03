import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebarItemsData} from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase'
import { useHistory } from 'react-router-dom'

function Sidebar(props) {

    const history = useHistory();

    const goToChannel = (id) => {
        if(id){
            console.log(id);
            history.push(`/room/${id}`)
        }
    }

    const addChannel = () => {
        const promptName = prompt("Enter channel name");
        if (promptName) {
            db.collection('rooms').add({
                name: promptName
            })
        }
    }

    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Gab Programmer
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon/>
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItemsData.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <NewChannel>
                        <AddIcon onClick={addChannel}/>
                    </NewChannel>
                </NewChannelContainer>
                <ChannelsList>
                    {
                        props.rooms.map(item => (
                            <Channel onClick={()=>goToChannel(item.id)}>
                                # {item.name}
                            </Channel>
                        ))
                    }
                </ChannelsList>
            </ChannelsContainer>

        </Container>
    )
}

export default Sidebar


const Container = styled.div`
  background: #121212;
`

const WorkspaceContainer = styled.div`
  color: #ffffff;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #121212;
`

const Name = styled.div``

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: #ffffff;
  color: #121212;
  fill: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`

const MainChannels = styled.div`
  padding-top: 20px;
`

const NewChannel = styled.div`
  cursor: pointer;
`

const MainChannelItem = styled.div`
  color: #b3b3b3;
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  :hover {
    background: #181818;
  }
`

const ChannelsContainer = styled.div`
  color: #b3b3b3;
  margin-top: 10px;
`

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;
`

const ChannelsList = styled.div``

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  :hover {
    background: #181818;
  }
`
