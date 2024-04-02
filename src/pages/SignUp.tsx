import { useState } from "react";
import leftImg from "/auth-left-img.jpg";
import ErrorMessage from "../components/ErrorMessage";
import RadioWithLabel from "../components/RadioWithLabel";

interface FormValues {
  email: string;
  password: string;
  terms: boolean;
}

const SignUp = () => {
  return (
    <>
      <div className="flex h-[100svh] overflow-hidden">
        <section className="relative lg:flex hidden flex-col w-full bg-[#191919] min-h-[90svh] auth-left ">
          <div className="flex flex-col items-center h-full w-full justify-center">
            <h1 className="text-white text-4xl mb-[35px] w-[366px] leading-[44px] text-center">
              Sign up
              <br />
              and come on in
            </h1>
            <div>
              <img
                src={leftImg}
                alt="leftImg"
                className="lg:max-w-[432px] max-w-[366px] w-full"
              />
            </div>
            <p className="absolute bottom-6 text-sm mb-5 text-white">
              © Typeform
            </p>
          </div>
        </section>
        <LeftSide />
      </div>
    </>
  );
};

export default SignUp;

const LeftSide = () => {
  const [openOption, setOpenOption] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showLanguages, setShowLanguages] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: "",
    terms: false,
  });
  const [errors, setErrors] = useState<{
    email: string;
    password: string;
    terms: string;
  }>({
    email: "",
    password: "",
    terms: "",
  });
  const [optionValues, setOptionValues] = useState<{
    first: string;
    second: string;
    third: string;
  }>({
    first: "",
    second: "",
    third: "",
  });

  const handleValidate = (data: FormValues) => {
    const { email, password } = data;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim().length <= 0) {
      setErrors((prev) => ({
        ...prev,
        email: "This field cannot be left blank",
      }));
    } else if (!emailRegex.test(email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Enter a valid email address",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        email: "",
      }));
    }

    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

    if (password.trim().length <= 0) {
      setErrors((prev) => ({
        ...prev,
        password: "This field cannot be left blank",
      }));
    } else if (!passwordRegex.test(password)) {
      setErrors((prev) => ({
        ...prev,
        password:
          "Use 8 or more characters with a mix of letters, numbers and symbols",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        password: "",
      }));
    }
  };

  let validateTimeout: NodeJS.Timeout | undefined = undefined;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validateTimeout) clearTimeout(validateTimeout);
    const { value, name } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateTimeout = setTimeout(() => {
      handleValidate({ ...formValues, [name]: value });
    }, 300);
  };

  const handleClickSubmit = () => {
    handleValidate(formValues);
    if (!formValues.terms) {
      setErrors((prev) => ({
        ...prev,
        terms: "Please accept the terms and conditions to finish the signup",
      }));
    }
  };

  const handleChangeRadioButton = (name: string, value: string) => {
    setOptionValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="lg:ml-[-16px] h-full min-h-[90svh] auth-right relative bg-transparent overflow-hidden">
      <div className="bg-white w-full h-full overflow-y-auto">
        <div className="flex items-center justify-between py-2 px-6 flex-wrap h-[52px]">
          <div>
            <button
              className="language-button"
              onClick={() => setShowLanguages(!showLanguages)}
            >
              <div className="world-icon">
                <svg
                  height={17}
                  viewBox="0 0 20 20"
                  width={17}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z"
                    fill="#5E5E5E"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <span className="language-value">English</span>
              <div className="down-arrow-icon">
                <svg
                  fill="none"
                  height={5}
                  viewBox="0 0 9 5"
                  width={9}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M4.35156 2.80708L2.33394 0.789472C1.78653 0.24205 0.898985 0.242052 0.351563 0.789472L4.35156 4.78946L8.35156 0.789472C7.80411 0.242052 6.91658 0.242052 6.36917 0.789472L4.35156 2.80708Z"
                    fill="#5E5E5E"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </button>
            <div
              role="menu"
              className={`${showLanguages ? "dd-open" : "dd-close"}`}
            >
              <a
                href="js:"
                role="menuitem"
                data-testid="language-item"
                className="dd-option"
              >
                <span className="dd-option-link">English</span>
              </a>
              <a
                href="js:"
                role="menuitem"
                data-testid="language-item"
                className="dd-option"
              >
                <span className="dd-option-link">Español</span>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <p className="text-sm mr-2">Already have an account?</p>
            <div className="min-w-16 flex items-center justify-center">
              <a
                href="js:"
                className="border border-[#191919] rounded-md text-xs py-[3px] px-[10px] w-full text-center font-medium leading-[1.5]"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-[542px] flex flex-col items-center justify-center min-h-[90svh] mx-auto overflow-y-auto">
          <div className="flex items-center justify-center h-20">
            <a href="js:" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="22"
                fill="none"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="108"
                height="24"
                fill="none"
                className="ml-[10.21px]"
              >
                <path
                  fill="currentColor"
                  d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z"
                ></path>
              </svg>
            </a>
          </div>
          <h2 className="text-[#5e5e5e] text-2xl font-extralight leading-[30px] mb-6 text-center sm:w-auto w-[256px]">
            Get better data with conversational forms, surveys, quizzes & more.
          </h2>
          <div className="w-[256px]">
            <div className="mb-[15px]">
              <div className="h-10 border border-[#c2c2c1] rounded-[3px] ">
                <input
                  type="text"
                  placeholder="Email"
                  className="h-full py-[6px] px-2 w-full"
                  value={formValues.email}
                  name="email"
                  onChange={handleInputChange}
                />
              </div>
              {errors.email.trim().length > 0 && (
                <ErrorMessage
                  iconHeight="14px"
                  iconWidth="14px"
                  message={errors.email}
                />
              )}
            </div>
            <div className="mb-[15px]">
              <div className="h-10 border border-[#c2c2c1] rounded-[3px] relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="h-full py-[6px] pl-2 pr-[35px] w-full"
                  value={formValues.password}
                  onChange={handleInputChange}
                  name="password"
                />
                <span
                  className="absolute right-0 top-[50%] translate-y-[-50%] py-[6px] pl-2 pr-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg
                      height={16}
                      width={16}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="cursor-pointer"
                    >
                      <path
                        d="M27.375 21.813 22 16.375V16c0-3.375-2.625-6-6-6h-.375L12 6.375C13.375 6.187 14.625 6 16 6c10.375 0 16 8.813 16 10 0 .625-1.625 3.375-4.625 5.813ZM20 25.625c-1.375.188-2.625.375-4 .375-10.375 0-16-8.375-16-9.813 0-.812 1.625-3.562 4.625-6L10 15.625V16c0 3.375 2.625 6 6 6h.375ZM6.375 4 28 25.625 25.625 28 4 6.375Zm0 0"
                        fill="#d2d2d2"
                      />
                    </svg>
                  ) : (
                    <svg
                      height={16}
                      width={16}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="cursor-pointer"
                    >
                      <path
                        d="M16 16c-.8125-.8125 1.1875-4 0-4-2.1875 0-4 1.8125-4 4s1.8125 4 4 4 4-1.8125 4-4c0-1-3.375.8125-4 0Zm0-10C5.625 6 0 14.8125 0 16.1875 0 17.625 5.625 26 16 26s16-8.8125 16-10S26.375 6 16 6Zm0 16c-3.375 0-6-2.625-6-6s2.625-6 6-6 6 2.625 6 6-2.625 6-6 6Zm0 0"
                        fill="#d2d2d2"
                      />
                    </svg>
                  )}
                </span>
              </div>
              {errors.password.trim().length > 0 && (
                <ErrorMessage
                  iconHeight={errors.password.length > 35 ? "24.95px" : "14px"}
                  iconWidth={errors.password.length > 35 ? "24.95px" : "14px"}
                  message={errors.password}
                />
              )}
            </div>
            <label
              className="checkbox-label checkbox-label"
              id="label-terms_and_consents"
            >
              <input
                id="terms_and_consents"
                className="checkbox-input"
                aria-labelledby="label-terms_and_consents"
                data-checked="true"
                data-field-id="terms_and_consents"
                data-testid="terms_and_consents"
                data-qa="field-terms_and_consents"
                type="checkbox"
                checked={formValues.terms}
                onChange={(e) => {
                  const { checked } = e.target;
                  setFormValues((prev) => ({
                    ...prev,
                    terms: checked,
                  }));
                  setErrors((prev) => ({
                    ...prev,
                    terms: "",
                  }));
                  if (
                    optionValues.first === "" ||
                    optionValues.second === "" ||
                    optionValues.third === ""
                  ) {
                    setOptionValues({
                      first: "yes",
                      second: "yes",
                      third: "yes",
                    });
                  }
                }}
              />
              I agree to Typeform’s{" "}
              <a rel="noopener" target="_blank" href="js:">
                Terms of Service
              </a>
              ,{" "}
              <a rel="noopener" target="_blank" href="js:">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a rel="noopener" target="_blank" href="js:">
                Data Processing Agreement
              </a>
              .
            </label>

            {errors.terms.trim().length > 0 && (
              <ErrorMessage
                iconHeight="21.5px"
                iconWidth="21.5px"
                message={errors.terms}
              />
            )}
            <div className="pl-[30px] pb-[15px] pt-2">
              <div
                className="flex text-sm cursor-pointer items-baseline justify-between m-0 h-8"
                onClick={() => setOpenOption(!openOption)}
              >
                <p className="text-sm m-0">See options</p>
                <span
                  className={`transition-all duration-200 ${
                    !openOption ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    width={12}
                    height={7}
                    viewBox="0 0 12 7"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.00008 2.94976L8.87876 5.82845C9.65981 6.6095 10.9261 6.60949 11.7072 5.82844L6.00008 0.121338L0.292969 5.82844C1.07402 6.60949 2.34035 6.60949 3.1214 5.82844L6.00008 2.94976Z"
                    />
                  </svg>
                </span>
              </div>
              <div
                className={`${
                  openOption ? "h-[312px]" : "h-0"
                } overflow-hidden transition-all duration-200 ease-linear`}
              >
                <p className="text-sm mb-2">
                  Get useful tips, inspiration, and offers via e-communication.
                </p>
                <div className="flex items-center justify-start mb-3">
                  <RadioWithLabel
                    label="Yes"
                    name="first"
                    checked={optionValues.first === "yes"}
                    onChange={() => handleChangeRadioButton("first", "yes")}
                  />
                  <RadioWithLabel
                    label="No"
                    name="first"
                    checked={optionValues.first === "no"}
                    onChange={() => handleChangeRadioButton("first", "no")}
                  />
                </div>
                <p className="text-sm mb-2">
                  Tailor Typeform to my needs based on my activity.{" "}
                  <a href="js:" className="hover:underline">
                    See Privacy Policy
                  </a>
                </p>
                <div className="flex items-center justify-start mb-3">
                  <RadioWithLabel
                    label="Yes"
                    name="second"
                    checked={optionValues.second === "yes"}
                    onChange={() => handleChangeRadioButton("second", "yes")}
                  />
                  <RadioWithLabel
                    label="No"
                    name="second"
                    checked={optionValues.second === "no"}
                    onChange={() => handleChangeRadioButton("second", "no")}
                  />
                </div>
                <p className="text-sm mb-2">
                  Enrich my data with select third parties for more relevant
                  content.
                  <a href="js:" className="hover:underline">
                    See Privacy Policy
                  </a>
                </p>
                <div className="flex items-center justify-start mb-3">
                  <RadioWithLabel
                    label="Yes"
                    name="third"
                    checked={optionValues.third === "yes"}
                    onChange={() => handleChangeRadioButton("third", "yes")}
                  />
                  <RadioWithLabel
                    label="No"
                    name="third"
                    checked={optionValues.third === "no"}
                    onChange={() => handleChangeRadioButton("third", "no")}
                  />
                </div>
                <p className="text-[#7f7f7f] m-0 text-sm">
                  You can update your preferences in your Profile at any time
                </p>
              </div>
            </div>
            <div
              className="bg-[#191919] max-w-[230px] rounded-[3px] text-white cursor-pointer text-base h-10 flex items-center justify-center mx-auto mb-[52px]"
              onClick={handleClickSubmit}
            >
              Create my free account
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
