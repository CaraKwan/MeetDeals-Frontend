import React, { useRef, useState, useEffect } from 'react'
import {
    ChatEngine,
    ChatList, ChatCard, NewChatForm,
    ChatFeed, ChatHeader, IceBreaker, MessageBubble, IsTyping, ConnectionBar, NewMessageForm,
    ChatSettings, ChatSettingsTop, PeopleSettings, PhotosSettings, OptionsSettings, getOrCreateChat
} from 'react-chat-engine'

import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { useAuth } from '../Messenger/AuthContexts';
import { chatPK, chatProjID } from '../constants';
import axios from 'axios'
import { Typography } from 'antd';
import '../index.css';

function Chats() {
    const { Title } = Typography;
    const [username, setUsername] = useState('')
    const didMountRef = useRef(false)
    const naviagte = useNavigate();
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const getFile = async (url) => {
        const res = await fetch(url);
        const data = await res.blob();

        return new File([data], 'userPhoto.jpg', { type: 'image/jpg' })
    }


    const logout = async () => {
        await auth.signOut();
        naviagte('/');
    }
    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true

            if (!user || user === null) {
                naviagte.push("/")
                return
            }
            axios.get(
                'https://api.chatengine.io/users/me/',
                {
                    headers: {
                        "project-id": "f4cafe91-a555-4f1c-bff9-20550ecf8f47",
                        "user-name": user.email,
                        "user-secret": user.uid
                    }
                }
            )

                .then(() => setLoading(false))

                .catch(e => {
                    let formdata = new FormData()
                    formdata.append('email', user.email)
                    formdata.append('username', user.email)
                    formdata.append('secret', user.uid)

                    getFile(user.photoURL)
                        .then(avatar => {
                            formdata.append('avatar', avatar, avatar.name)

                            axios.post(
                                'https://api.chatengine.io/users/',
                                formdata,
                                { headers: { "private-key": chatPK } }
                            )
                                .then(() => setLoading(false))
                                .catch(e => console.log('e', e.response))
                        })
                })


        }
    }, [user, naviagte])

    if (!user || loading) {
        return 'Loading!';
    }


    function createDirectChat(creds) {
        getOrCreateChat(
            creds,
            { is_direct_chat: true, usernames: [username] },
            () => setUsername('')
        )
    }

    function renderChatForm(creds) {
        return (
            <div>
                <input
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={() => createDirectChat(creds)}>
                    Create
                </button>
            </div>
        )
    }


    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <Title style={{ fontSize: "25px" }}> MeetDeals </Title>
            </div>
            {/* <div onClick={logout}>Logout</div> */}




            <ChatEngine
                height='100vh'
                projectID={chatProjID}
                userName={user.email}
                userSecret={user.uid}
                renderChatList={(chatAppState) => <ChatList {...chatAppState} />}
                renderChatCard={(chat, index) => <ChatCard key={`${index}`} chat={chat} />}
                renderNewChatForm={(creds) => renderChatForm(creds)}
                renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
                renderChatHeader={(chat) => <ChatHeader />}
                renderIceBreaker={(chat) => <IceBreaker />}
                renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => <MessageBubble lastMessage={lastMessage} message={message} nextMessage={nextMessage} chat={chat} />}
                renderIsTyping={(typers) => <IsTyping />}
                renderConnectionBar={(chat) => <ConnectionBar />}
                renderNewMessageForm={(creds, chatID) => <NewMessageForm />}
                renderChatSettings={(chatAppState) => <ChatSettings {...chatAppState} />}
                renderChatSettingsTop={(creds, chat) => <ChatSettingsTop />}
                renderPeopleSettings={(creds, chat) => <PeopleSettings />}
                renderPhotosSettings={(chat) => <PhotosSettings />}
                renderOptionsSettings={(creds, chat) => <OptionsSettings />}
            />
        </div>

    )
}

export default Chats