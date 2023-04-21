import './index.css';

const VideoPlayer = () => {
    return (
        <div className="video-player">
            <video controls>
                <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoPlayer