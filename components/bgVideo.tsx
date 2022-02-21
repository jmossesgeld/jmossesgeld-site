import styled from "styled-components";

const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  filter: opacity(30%);
  z-index: -1;
`;

export default function BgVideo() {
  return (
    <Video autoPlay muted loop>
      <source src="bgHDVideo.mp4" type="video/mp4" />
    </Video>
  );
}
