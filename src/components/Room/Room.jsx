
import React from 'react'
import {useParams} from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const Room = () => {

    const { roomId } = useParams()

    const myLiveStream = async (element) => {

        const appID = 541670763;
        const serverSecret = "9f7d794b7309eb22e6856617093066d4";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  Date.now().toString(),  "Hindu mandir");
    
        const zc = ZegoUIKitPrebuilt.create(kitToken)

        zc.joinRoom({
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.LiveStreaming
            },
            showScreenSharingButton:true
        })
    }

  return (
    <div>
        <div ref={myLiveStream} />
    </div>
  )
}

export default Room