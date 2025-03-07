import axios from "axios";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { toast, Toaster } from "sonner";

function VerifyOtp() {
    const inputs = useRef([]);
    const { state } = useLocation();
    const navigate = useNavigate()

    const otp = state.otp
    const userId = state.userId

    const handlePaste = (e) => {
        const pasteData = e.clipboardData.getData("text");
        const digits = pasteData.split("").filter((char) => /^\d$/.test(char));
        digits.forEach((digit, idx) => {
            if (inputs.current[idx]) {
                inputs.current[idx].value = digit;
                if (idx < inputs.current.length - 1) {
                    inputs.current[idx + 1].focus();
                }
            }
        });
        e.preventDefault();
    };

    const handleInputChange = (e, index) => {
        const value = e.target.value;
        if (!/^\d?$/.test(value)) {
            return;
        }

        e.target.value = value;

        if (value && index < inputs.current.length - 1) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userOtp = inputs.current.map((input) => input.value).join("");

        try {
            axios.post(`${import.meta.env.VITE_BASE_URL}/auth/verify-otp`, { userId, otp: userOtp }).then(res => {

                if (res.data.success) {
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('userId', res.data.userId)
                    navigate('/')
                }
            })
        } catch (error) {
            if (error.status === 400) {
                toast.error(error.response.data.message)
            }
            console.log(error.response.status);
        }
    };

    return (
        <>
            <section>
                <Toaster />
                <div className="relative flex flex-wrap lg:h-screen lg:items-center">
                    <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                        <img
                            alt="cover-img"
                            src="/images/signup-img.jpg"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                        <div className="mx-auto max-w-lg flex flex-col justify-center gap-2">
                            <img src="/images/logo2.svg" className="h-12" alt="" />
                            <h1 className="text-2xl font-bold sm:text-3xl text-center">Verify OTP!</h1>
                        </div>
                        <form className="mx-auto mb-0 mt-8 max-w-lg space-y-4" onSubmit={(e) => handleSubmit(e)}>
                            <div>
                                <div
                                    onPaste={handlePaste}
                                    className="grid md:grid-cols-6 grid-cols-2 gap-4 mb-4"
                                >
                                    {Array.from({ length: 6 }, (_, index) => (
                                        <input
                                            key={index}
                                            name={`otp${index}`}
                                            ref={(el) => (inputs.current[index] = el)}
                                            type="number"
                                            maxLength="1"
                                            onChange={(e) => handleInputChange(e, index)}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                            className="border rounded-lg mx-2 px-3 py-2 text-2xl text-center outline-none border-gray-200 bg-opacity-40"
                                        />
                                    ))}
                                </div>

                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="inline-block rounded-lg bg-lightOrange hover:bg-orange px-5 py-3 text-sm font-semibold duration-200 text-white"
                                    >
                                        Verify
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}

export default VerifyOtp
