import * as React from "react";

interface INotificationProps {
  success: boolean;
  message: string;
}

const Notification: React.FunctionComponent<INotificationProps> = ({
  success,
  message,
}) => {
  return (
    <div
      className={`mx-auto inset-x-0 top-[40px] flex items-center w-[344px] rounded-full 
  ${success ? "bg-green-50 " : "bg-red-50"}
      fixed py-1 pr-12 pl-1
    tablet:py-1.5 tablet:pr-2.5 tablet:top-10 desktop:top-[40px] tablet:w-[499px]
    `}
    >
      <div className="bg-white rounded-full py-[2px] px-[10px] flex items-center shadow">
        {success && (
          <span className="text-sm text-green-700 font-medium">Success</span>
        )}
        {!success && (
          <span className="text-sm text-red-800 font-medium">Error</span>
        )}
      </div>
      <span
        className={`text-sm ${
          success ? "text-green-700" : "text-red-600"
        } font-medium ml-3`}
      >
        {message}
      </span>
    </div>
  );
};

export default Notification;
