import Link from "next/link";
import StylizedFrame from "../Elements/StylizedFrame";

const AuthLayout = ({ children, type }) => {
  return (
    <div className="relative lg:overflow-hidden">
      {/* syle ketika tampilan tablet dan dekstop */}
      <StylizedFrame
        urlImage="../images/vector-1.png"
        classname="hidden absolute -left-32 -top-20 md:block md:w-[460px] lg:w-[400px] lg:h-auto -rotate-45"
      ></StylizedFrame>
      <StylizedFrame
        urlImage="../images/vector-1.png"
        classname="hidden absolute right-0 top-[320px] md:block md:w-[200px] lg:w-[320px] lg:top-[260px]"
      ></StylizedFrame>
      <StylizedFrame
        urlImage="../images/bg-login-3.png"
        classname="absolute right-0 top-[0px]"
      ></StylizedFrame>
      <div className="flex justify-center pt-14 md:pt-0">
        <h1 className="font-bold text-3xl z-10 mb-6 md:hidden">Login</h1>
      </div>
      <div className="flex flex-col items-center p-28 min-h-screen bg-white z-10">
        <div className="">
          {children}
        </div>
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  return (
    <p className="mt-10 me-20 text-center z-10">
      {type === "signin"
        ? "Don't have an account? "
        : "Already have an account? "}
      {type === "signin" && (
        <Link className="text-sky-500 font-semibold" href="/signup">
          Register
        </Link>
      )}
      {type === "signup" && (
        <Link className="text-sky-500 font-semibold" href="/">
          Sign In
        </Link>
      )}
    </p>
  );
};

export default AuthLayout;
