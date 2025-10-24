import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - ChangeHub",
  description: "Sign in to your ChangeHub account",
};

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[#f5f5f4]">
      {/* Main Container */}
      <div className="relative flex flex-col items-center gap-[28px]">
        {/* Logo and Title */}
        <div className="flex w-[312px] flex-col items-center gap-[28px]">
          <div className="flex w-[180px] flex-col items-center gap-[28px]">
            <div className="relative h-[39px] w-[50px]">
              <Image
                src="/assets/d51a7af454ad808ae41a726d178a6d914c2bf153.svg"
                alt="ChangeHub Logo"
                width={50}
                height={39}
                priority
              />
            </div>
            <h1 className="w-full min-w-full text-[32px] font-bold leading-[38px] tracking-[-0.2px] text-[#1c1917]">
              ChangeHub
            </h1>
          </div>

          {/* Login/Sign up Toggle */}
          <div className="w-full rounded-[8px] border-[0.8px] border-solid border-[#e7e5e4] bg-[#ffffff]">
            <div className="flex w-full items-center overflow-clip rounded-[inherit] p-[2px]">
              <div className="flex min-h-px min-w-px grow basis-0 items-center justify-center rounded-[6px] border-[0.6px] border-solid border-[#e7e5e4] bg-[#fafaf9] px-[12px] py-[4px]">
                <p className="whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#1c1917]">
                  Log in
                </p>
              </div>
              <div className="flex min-h-px min-w-px grow basis-0 items-center justify-center rounded-[6px] px-[12px] py-[4px]">
                <p className="whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#78716c]">
                  Sign up
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex w-full flex-col items-center gap-[28px]">
          {/* Email and Password Inputs */}
          <div className="flex w-[312px] flex-col items-center gap-[12px]">
            <div className="flex w-full flex-col items-start gap-[18px]">
              {/* Email Field */}
              <div className="flex w-full flex-col items-start gap-[8px]">
                <div className="flex w-full items-center justify-center gap-[5px] px-[8px] py-0">
                  <p className="min-h-px min-w-px grow basis-0 text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#57534e]">
                    Email
                  </p>
                </div>
                <div className="flex w-full items-center rounded-[8px] border-[0.8px] border-solid border-[#e7e5e4] bg-[#ffffff] p-[12px]">
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full border-none bg-transparent text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#1c1917] outline-none placeholder:text-[#a8a29e]"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="flex w-full flex-col items-start gap-[8px]">
                <div className="flex w-full items-center justify-center gap-[5px] px-[8px] py-0">
                  <p className="min-h-px min-w-px grow basis-0 text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#57534e]">
                    Password
                  </p>
                </div>
                <div className="flex h-[44px] w-full items-center rounded-[8px] border-[0.8px] border-solid border-[#e7e5e4] bg-[#ffffff] p-[12px]">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full border-none bg-transparent text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#1c1917] outline-none placeholder:text-[#a8a29e]"
                  />
                </div>
              </div>
            </div>

            {/* Sign In Button */}
            <button className="flex h-[44px] w-full items-center justify-center rounded-[8px] bg-[#1c1917] p-[12px]">
              <p className="whitespace-pre text-nowrap text-[16px] font-medium leading-[22px] tracking-[-0.18px] text-[#ffffff]">
                Sign in
              </p>
            </button>

            {/* Forgot Password */}
            <div className="flex items-center justify-center rounded-[8px] bg-[#ffedd5] px-[12px] py-[4px]">
              <p className="whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#ea580c]">
                Forgot password?
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="relative h-0 w-[312px]">
            <div className="absolute bottom-[-0.25px] left-0 right-0 top-[-0.25px]">
              <Image
                src="/assets/584482103790c7465f525f943e798c345d53542f.svg"
                alt=""
                width={312}
                height={1}
              />
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex w-[312px] flex-col items-start gap-[12px]">
            {/* Google - with Last used badge */}
            <div className="relative flex h-[44px] w-full items-center justify-center gap-[8px] rounded-[8px] border-[0.8px] border-solid border-[#e7e5e4] bg-[#ffffff] p-[12px]">
              <div className="relative h-[20px] w-[20px]">
                <Image
                  src="/assets/745f5d206a0ce91268bfc3da5cee82d6a29a0990.svg"
                  alt="Google"
                  width={20}
                  height={20}
                />
              </div>
              <p className="whitespace-pre text-nowrap text-[16px] font-medium leading-[22px] tracking-[-0.18px] text-[#1c1917]">
                Continue with Google
              </p>
              {/* Last Used Badge */}
              <div className="absolute -top-2 right-3 flex items-center justify-center rounded-[6px] border border-solid border-[#93c5fd] bg-[#eff6ff] px-[4px] py-[2px]">
                <p className="whitespace-pre text-nowrap text-[10px] font-medium leading-[12px] tracking-[0px] text-[#2563eb]">
                  Last used
                </p>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex h-[44px] w-full items-center justify-center gap-[8px] rounded-[8px] border-[0.8px] border-solid border-[#e7e5e4] bg-[#ffffff] p-[12px]">
              <div className="relative h-[20px] w-[20px]">
                <Image
                  src="/assets/72b7d82e6b0cce4f291c616cdd9aa11ecc3b84c1.svg"
                  alt="GitHub"
                  width={20}
                  height={20}
                />
              </div>
              <p className="whitespace-pre text-nowrap text-[16px] font-medium leading-[22px] tracking-[-0.18px] text-[#1c1917]">
                Continue with Github
              </p>
            </div>

            {/* SSO */}
            <div className="flex h-[44px] w-full items-center justify-center gap-[8px] rounded-[8px] p-[12px]">
              <div className="relative h-[20px] w-[20px]">
                <Image
                  src="/assets/72184b50c14a3877063bdbf54d355bae55d6bc57.svg"
                  alt="SSO"
                  width={20}
                  height={20}
                />
              </div>
              <p className="whitespace-pre text-nowrap text-[16px] font-medium leading-[22px] tracking-[-0.18px] text-[#1c1917]">
                Continue with SSO
              </p>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="relative h-0 w-[312px]">
            <div className="absolute bottom-[-0.25px] left-0 right-0 top-[-0.25px]">
              <Image
                src="/assets/584482103790c7465f525f943e798c345d53542f.svg"
                alt=""
                width={312}
                height={1}
              />
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex items-center gap-[12px]">
            <p className="whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-stone-500">
              Privacy policy
            </p>
            <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.8660253882408142)+(var(--transform-inner-height)*0.5000000596046448)))] w-[calc(1px*((var(--transform-inner-height)*0.8660253882408142)+(var(--transform-inner-width)*0.5000000596046448)))] items-center justify-center">
              <div className="flex-none rotate-[120deg]">
                <div className="relative h-0 w-[12px]">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                    <Image
                      src="/assets/aa421e7d3e51021ef296703b34bfc9535d369cdb.svg"
                      alt=""
                      width={12}
                      height={1}
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#78716c]">
              Terms of service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
