import NestedNotification from "./NestedNotification";
import Image from "./Image";

export default function Notification() {
  return (
    <div className="p-4 bg-[#f7fafd] my-3">
      <div className="flex items-center space-x-4">
        {/* User profile img */}
        <Image url={'https://picsum.photos/350/165?random'} type={'circular'} /> 
        {/* end */}
        {/* Notification message */}
        <div>
          <p className="text-[16px] text-[#5e6778]">
            <span className="font-bold text-black mr-1">
              Okoli Jahbuchim Jeff
            </span>
            Went to get some food,
            <span className="text-slate-700 font-bold ml-1">
              From Chicken Republic Yesterday
            </span>
            <div className="w-[10px] h-[10px] bg-[#f65351] rounded-full inline-block ml-2"></div>
          </p>
          <span className="text-[#5e6778] text-[16px]">1m ago</span>
        </div>
        {/* end  */}
      </div>
      <div className="max-w-xl ml-[3.86rem]">
        <NestedNotification />
      </div>
    </div>
  );
}
