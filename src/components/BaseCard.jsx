import Header from "./Header";
import NotificationContainer from "./NotificationContainer";
export default function BaseCard() {
  return (
    <div className="flex items-center justify-center w-full my-[10%]">
      <div className="bg-white p-6 w-full max-w-3xl rounded-md shadow-sm shadow-light-200">
        <Header />
        <NotificationContainer />
      </div>
    </div>
  );
}
