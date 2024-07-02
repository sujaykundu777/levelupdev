const JoinCommunityWidget = ({
  src,
  width = "100%",
  height = "500px",
}: {
  src: string;
  width?: string;
  height?: string;
}) => {
  return (
    <iframe
      title="LEVEL_UP_6 checkout widget"
      allowFullScreen
      src={src}
      width={"100%"}
      height="320"
      referrerPolicy="no-referrer"
      style={{ border: "none" }}
    ></iframe>
  );
};

export default JoinCommunityWidget;
