import { signUp } from "@/services/authService";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input/InputForm";
import { ToastContainer, toast } from "react-toastify";

const FormSignUp = () => {
  const handleSignUp = async (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }
    signUp(data, async (status, res) => {
      try {
        if (res.status == 200) {
          window.location.href = "/";
        }else{
          alert(res.message)
        }
      } catch (error) {
        throw error;
      }
    })
  };
  return (
    <>
      <div
        className="font-body flex flex-col justify-center items-center w-[268px] backdrop-blur-md bg-white/25 rounded-xl shadow-[5px_5px_10px_rgba(0,0,0,0.4)]
      md:absolute md:right-10 md:top-16 md:w-[504px] md:px-16 md:pb-8 md:pt-4 
      lg:w-[824px] lg:right-24 lg:top-24 lg:px-14 lg:pb-12 lg:pt-6"
      >
        <div className="w-full gap-2 flex justify-center items-center mt-6 md:justify-end lg:mr-10">
          {/* <img
            src="../images/logo.png"
            alt="Logo Step Up"
            className="w-[28px] lg:w-[60px]"
          /> */}
          <h3 className="font-bold text-lg text-center lg:text-2xl">TravelExpense <span className="text-primary">|</span></h3>
        </div>
        {/* title yang tampil ketika mode dekstop dan tablet saja */}
        <div className="w-full flex justify-start items-center sm:hidden md:block lg:px-20 ">
          <h1 className="hidden font-bold text-xl mt-6 text-left md:block md:ps-4 lg:mt-10 lg:mb-2 lg:text-3xl">
            Sign <span className="text-primary">Up.</span>
          </h1>
        </div>
        <form onSubmit={handleSignUp} className="px-5 w-full lg:px-24">
          <InputForm
            name="username"
            type="username"
            label="Username"
            classname="bg-transparent mt-8 mb-8"
          />
          <InputForm
            name="email"
            type="email"
            label="Email"
            classname="bg-transparent mb-8"
          />
          <InputForm
            name="password"
            type="password"
            label="Password"
            classname="bg-transparent mb-5"
          />
          <Button
            type="submit"
            classname="w-full mt-8 mb-10 p-2 bg-primary rounded-full shadow-buttonShadow active:shadow-none active:translate-y-1"
          >
            Sign Up
          </Button>
          {/* { loginInfo && <p className="text-red-500 w-[50%] text-center mt-2">{loginInfo}</p>} */}
          {/* {loginFailed && <p className="text-lg text-red-500 text-center mt-2">{loginFailed}</p>} */}
          {/* {loginFailed && <p className="text-red-500 text-center mt-2">{loginFailed}</p>} */}
        </form>
      </div>
      {/* <ToastContainer /> */}
    </>
  )
}

export default FormSignUp