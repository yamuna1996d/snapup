
import { AttachFile, Close, Create, Crop, MusicNote, Note, Send, TextFields, Timer } from '@material-ui/icons';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resetcameraImage, selectcameraImage } from './features/cameraSlice';
import  "./Preview.css";
import { v4 as uuid } from "uuid";
import { db,storage } from './firebase';
import firebase from 'firebase';

function Preview() {
    const cameraImage = useSelector(selectcameraImage);
    const history = useHistory();
    const dispatch = useDispatch();

    
    useEffect(()=>{
        if(!cameraImage){
            history.replace('/');
        }
    },[cameraImage,history]);
    const closePreview=() =>{
        dispatch(resetcameraImage());
    }

    const sendPost =() =>{
        const id = uuid();
        const uploadTask = storage.ref(`posts/${id}`).putString(cameraImage,"data_url");
        uploadTask.on('state_changed',null,(error)=>{
            console.log(error);
        },()=>{
            storage.ref('posts').child(id).getDownloadURL().then((url)=>{
                db.collection('posts').add({
                    imageUrl:url,
                    username:'hi',
                    read:false,
                    timestamp:firebase.firestore.FieldValue.serverTimestamp()
                });
                history.replace('/Chats');
            });
        });
    }

    return (
        <div className="preview">
            <Close className="preclose" onClick={closePreview} />
            <div className="toolbar" >
                <TextFields/>
                <Create/>
                <Note/>
                <MusicNote/>
                <AttachFile/>
                <Crop/>
                <Timer/>
            </div>
            <img src={cameraImage} />
            <div onClick={sendPost} className="footer">
                <h2>send</h2>
                <Send className="presend" fontSize="small" />
            </div>
        </div>
    )
}

export default Preview
