export default function Image({ url, type }) {
  return (
    <img
      src={url}
      className={[
        type == "circular"
          ? "rounded-full w-[44px] h-[44px]"
          : "rounded w-[44px] h-[44px]",
      ]}
      alt=""
    />
  );
}
