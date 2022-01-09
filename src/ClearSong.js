import React,{useState} from "react";
const ClearSong  = () => {
let [song,setSong]=useState("")
    const onClearSongClick=()=>{
setSong("");
    }
    return ( 
        <>
        <button onClick={onClearSongClick}>
            {/* todo the buttomn */}
        </button>
        </>
     );
}
 
export default ClearSong ;