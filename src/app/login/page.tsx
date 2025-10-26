import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - ChangeHub",
  description: "Sign in to your ChangeHub account",
};

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[#e7e5e4]">
      {/* Main Container */}
      <div className="relative flex w-[312px] flex-col items-center gap-[28px]">
        {/* Logo and Title */}
        <div className="flex w-[180px] flex-col items-center gap-[12px]">
          <div className="relative size-[40px]">
            <Image
              src="/assets/0366e1ed2c4657a60db28cd985f5e2b2f73d70f5.svg"
              alt="ChangeHub Logo"
              width={40}
              height={40}
              priority
              className="block max-w-none size-full"
            />
          </div>
          <h1 className="w-full min-w-full text-[32px] font-bold leading-[38px] tracking-[-0.2px] text-[#1c1917]">
            ChangeHub
          </h1>
        </div>

        {/* Login/Sign up Toggle */}
        <div className="relative box-border flex content-stretch items-center gap-[20px] rounded-[8px] px-0 pb-0 pt-0">
          <div className="relative box-border flex content-stretch items-center justify-center rounded-[6px] px-[12px] py-[4px]">
            <p className="relative shrink-0 whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#1c1917] underline decoration-solid decoration-[from-font] underline-offset-[40%]">
              Log in
            </p>
          </div>
          <div className="relative box-border flex content-stretch items-center justify-center rounded-[8px] px-[12px] py-[4px]">
            <p className="relative shrink-0 whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#78716c]">
              Sign up
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex w-full flex-col items-start gap-[12px]">
          {/* Email and Password Inputs */}
          <div className="flex w-full flex-col items-start gap-[18px]">
            {/* Email Field */}
            <div className="relative flex w-full shrink-0 flex-col content-stretch items-start">
              <div className="relative box-border flex w-full shrink-0 content-stretch items-center justify-center gap-0 px-[8px] py-[4px]">
                <p className="relative min-h-px min-w-px shrink-0 grow basis-0 text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#57534e]">
                  Email
                </p>
              </div>
              <div className="relative box-border flex h-[40px] w-full shrink-0 content-stretch items-center gap-0 rounded-[8px] border border-solid border-[#d6d3d1] bg-[#ffffff] p-[12px]">
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full border-none bg-transparent text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#1c1917] outline-none placeholder:text-[#a8a29e]"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative flex w-full shrink-0 flex-col content-stretch items-start">
              <div className="relative box-border flex w-full shrink-0 content-stretch items-center justify-center gap-0 px-[8px] py-[4px]">
                <p className="relative min-h-px min-w-px shrink-0 grow basis-0 text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#57534e]">
                  Password
                </p>
              </div>
              <div className="relative box-border flex h-[40px] w-full shrink-0 content-stretch items-center gap-0 rounded-[8px] border border-solid border-[#d6d3d1] bg-[#ffffff] p-[12px]">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border-none bg-transparent text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#1c1917] outline-none placeholder:text-[#a8a29e]"
                />
              </div>
            </div>
          </div>

          {/* Sign In Button */}
          <button className="relative box-border flex h-[44px] w-full shrink-0 content-stretch items-center justify-center gap-0 rounded-[8px] bg-[#1c1917] p-[12px]">
            <p className="relative shrink-0 whitespace-pre text-nowrap text-[16px] font-medium leading-[22px] tracking-[-0.18px] text-[#ffffff]">
              Sign in
            </p>
          </button>
        </div>

        {/* Divider with "Or" */}
        <div className="flex w-full content-stretch items-center gap-[16px]">
          <div className="relative h-0 w-[132px] shrink-0">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <Image
                src="/assets/031521f04edde4bc39e15cfd5da494ee37abb389.svg"
                alt=""
                width={132}
                height={1}
                className="block max-w-none size-full"
              />
            </div>
          </div>
          <p className="relative shrink-0 whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#57534e]">
            Or
          </p>
          <div className="relative h-0 w-[132px] shrink-0">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <Image
                src="/assets/031521f04edde4bc39e15cfd5da494ee37abb389.svg"
                alt=""
                width={132}
                height={1}
                className="block max-w-none size-full"
              />
            </div>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[8px]">
          {/* Google - with Last used badge */}
          <div className="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center gap-0">
            <div className="relative box-border flex shrink-0 content-stretch items-center justify-center rounded-tl-[8px] rounded-tr-[8px] bg-[#93c5fd] px-[8px] pb-[4px] pt-[2px]">
              <p className="relative shrink-0 whitespace-pre text-nowrap text-[10px] font-semibold leading-[12px] tracking-[0px] text-[#1d4ed8]">
                Last used
              </p>
            </div>
            <div className="relative box-border flex h-[44px] w-full shrink-0 content-stretch items-center justify-center gap-[8px] rounded-[12px] border-[3px] border-solid border-[#93c5fd] bg-linear-to-b from-[#ffffff] to-[#dbeafe] p-[12px] overflow-hidden">
              <div className="relative size-[18px] shrink-0 z-10">
                <Image
                  src="/assets/f02f258bd494d220134d6f525e5e57055a204030.svg"
                  alt="Google"
                  width={18}
                  height={18}
                  className="block max-w-none size-full"
                />
              </div>
              <p className="relative shrink-0 whitespace-pre text-nowrap text-[16px] font-medium leading-[22px] tracking-[-0.18px] text-[#1c1917] z-10">
                Continue with Google
              </p>
              <div className="absolute h-[38px] left-[16px] top-[53.5px] w-[280px] pointer-events-none">
                <div className="absolute inset-[-163.16%_-22.14%]">
                  <Image
                    src="/assets/2228ed7284634b8a59b5583af38f1531f13ab434.svg"
                    alt=""
                    width={280}
                    height={38}
                    className="block max-w-none size-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* GitHub */}
          <div className="relative box-border flex h-[44px] w-full shrink-0 content-stretch items-center justify-center gap-[8px] rounded-[8px] border border-solid border-[#d6d3d1] bg-[#ffffff] p-[12px] overflow-hidden">
            <div className="relative size-[18px] shrink-0 z-10">
              <Image
                src="/assets/b2a0ccf59d3b75f077bccfecb666bc9d525cf440.svg"
                alt="GitHub"
                width={18}
                height={18}
                className="block max-w-none size-full"
              />
            </div>
            <p className="relative shrink-0 whitespace-pre text-nowrap text-[16px] font-medium leading-[22px] tracking-[-0.18px] text-[#1c1917] z-10">
              Continue with Github
            </p>
            <div className="absolute h-[38px] left-[16px] top-[53.5px] w-[280px] pointer-events-none">
              <div className="absolute inset-[-163.16%_-22.14%]">
                <Image
                  src="/assets/c5f998d281fd93d0b5b33139f86f9b04d756ae34.svg"
                  alt=""
                  width={280}
                  height={38}
                  className="block max-w-none size-full"
                />
              </div>
            </div>
          </div>

          {/* SSO */}
          <div className="relative box-border flex h-[44px] w-full shrink-0 content-stretch items-center justify-center gap-[8px] rounded-[10px] p-[12px]">
            <div className="relative size-[18px] shrink-0">
              <Image
                src="/assets/67054d2e774130cb4cb81e1bf6f51a216e4d6709.svg"
                alt="SSO"
                width={18}
                height={18}
                className="block max-w-none size-full"
              />
            </div>
            <p className="relative shrink-0 whitespace-pre text-nowrap text-[16px] font-medium leading-[22px] tracking-[-0.18px] text-[#1c1917]">
              Continue with SSO
            </p>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="relative h-0 w-full shrink-0">
          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
            <Image
              src="/assets/c1857b99d6234230e2d3ff88f0ddf54178589c0b.svg"
              alt=""
              width={312}
              height={1}
              className="block max-w-none size-full"
            />
          </div>
        </div>

        {/* Footer Links */}
        <div className="relative flex shrink-0 content-stretch items-center gap-[12px]">
          <p className="relative shrink-0 whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-stone-500">
            Privacy policy
          </p>
          <div
            className="flex items-center justify-center"
            style={{
              height: "calc(1px*((var(--transform-inner-width)*0.8660253882408142)+(var(--transform-inner-height)*0.5000000596046448)))",
              width: "calc(1px*((var(--transform-inner-height)*0.8660253882408142)+(var(--transform-inner-width)*0.5000000596046448)))",
              ["--transform-inner-width" as string]: "12",
              ["--transform-inner-height" as string]: "0",
            }}
          >
            <div className="flex-none rotate-[120deg]">
              <div className="relative h-0 w-[12px]">
                <div className="absolute bottom-0 left-0 right-0 -top-px">
                  <Image
                    src="/assets/aa421e7d3e51021ef296703b34bfc9535d369cdb.svg"
                    alt=""
                    width={12}
                    height={1}
                    className="block max-w-none size-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="relative shrink-0 whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#78716c]">
            Terms of service
          </p>
        </div>
      </div>
    </div>
  );
}
