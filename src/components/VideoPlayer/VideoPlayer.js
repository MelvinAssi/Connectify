import  "./VideoPlayer.css"

function VideoPlayer(){
    return(
        <>
            <div>
                <video id="background-video" autoPlay loop muted>
                    <source src={require("../../assets/video/fd_accueil.mp4")} type="video/mp4" />
                </video>
            </div>        
        </>
    );
}export default VideoPlayer;


