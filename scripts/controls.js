export default function controls(touchMap, stick){
    if(touchMap.hold){
        if(!stick.stretchStarted){
            stick.stretching = true;
    
            stick.stretchStarted = true;

        }
    }
    else{
        if(stick.stretchStarted){
            stick.stretching = false;
        }
    }
}