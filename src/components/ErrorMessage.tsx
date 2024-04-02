interface ErrorMessageProps {
  message: string;
  iconWidth: string;
  iconHeight: string;
}
const ErrorMessage = ({
  iconHeight,
  iconWidth,
  message,
}: ErrorMessageProps) => {
  return (
    message.trim().length > 0 && (
      <p className="text-[#c13b2f] text-sm leading-[1.5] pt-2 pb-[6px] flex items-center justify-start gap-x-[5px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconHeight}
          height={iconWidth}
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM8 2.8L7.8 8.2H6.2L6 2.8H8ZM7 11.4C7.66274 11.4 8.2 10.8627 8.2 10.2C8.2 9.53726 7.66274 9 7 9C6.33726 9 5.8 9.53726 5.8 10.2C5.8 10.8627 6.33726 11.4 7 11.4Z"
            fill="#E34843"
          />
        </svg>
        {message}
      </p>
    )
  );
};

export default ErrorMessage;
