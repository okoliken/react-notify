export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <h3 className="text-2xl font-semibold">Notifications</h3>
        <span className="bg-[#0a317b] h-[23px] w-[20px] rounded-md text-white text-center">
          3
        </span>
      </div>
      <p className="text-[#5e6778] text-[16px] cursor-pointer hover:underline hover:underline-[#5e6778]">
        mark all as read
      </p>
    </div>
  );
}
