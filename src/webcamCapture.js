import React, {useCallback, useRef } from 'react';
import Webcam from "react-webcam";
import { RadioButtonChecked } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { setcameraImage } from './features/cameraSlice';
import { useHistory } from 'react-router';
import './WebcamCapture.css';
const videoConstraints = {
    width : 250,
    height : 400,
    facingMode : "user",
};


function WebcamCapture() {
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();

    const capture = useCallback(() =>{
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setcameraImage(imageSrc));
        history.push('/preview');
    },[webcamRef]);


    return (
        <div className = "webcamCapture">
            <Webcam
            audio = {false}
            height = {videoConstraints.height}
            ref = {webcamRef}
            screenshotFormat = "image/jpeg"
            width = {videoConstraints.width}
            videoConstraints = {videoConstraints}
            />
            <RadioButtonChecked className ="webcambutton"
            onClick = {capture}
            />
           
        </div>
    )
}

export default WebcamCapture
