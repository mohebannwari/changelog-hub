import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#e7e5e4]">
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-7">
        {/* Logo and Title Section */}
        <div className="flex w-[312px] flex-col items-center gap-12">
          <div className="flex w-[180px] flex-col items-center gap-3">
            {/* Logo with circular background */}
            <div className="relative w-[75px] shrink-0 rounded-full border-4 border-black/50 bg-[#292524]">
              <div className="flex w-[75px] flex-col items-center gap-7 overflow-clip rounded-[inherit] p-[18px]">
                <div className="relative h-[39px] w-[50px] shrink-0">
                  <div className="absolute bottom-0 left-0 right-0 top-0">
                    <Image
                      alt="ChangeHub Logo"
                      className="block size-full max-w-none"
                      src="/images/logo.svg"
                      width={50}
                      height={39}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="min-w-full text-[32px] font-bold leading-[38px] tracking-[-0.2px] text-[#1c1917]">
              ChangeHub
            </h1>
          </div>

          {/* Login/Sign up Toggle */}
          <div className="relative w-full shrink-0 rounded-[10px] border border-[#d6d3d1] bg-[#ffffff]">
            <div className="flex w-full items-center overflow-clip rounded-[inherit] p-[2px]">
              <div className="flex grow basis-0 items-center justify-center rounded-[8px] border border-[#e7e5e4] bg-[#fafaf9] px-3 py-1">
                <p className="whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#1c1917]">
                  Log in
                </p>
              </div>
              <div className="flex grow basis-0 items-center justify-center rounded-[8px] px-3 py-1">
                <p className="whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#78716c]">
                  Sign up
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex w-full flex-col items-center gap-7">
          <div className="flex w-[312px] flex-col items-center gap-2">
            <div className="flex w-full flex-col items-start gap-[18px]">
              {/* Email Field */}
              <div className="flex w-full flex-col items-start gap-2">
                <div className="flex w-full items-center justify-center gap-[5px] px-2">
                  <p className="grow basis-0 text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#57534e]">
                    Email
                  </p>
                </div>
                <div className="flex w-full items-center gap-0 rounded-[10px] border border-[#d6d3d1] bg-[#ffffff] p-3">
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full border-none bg-transparent text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#1c1917] outline-none placeholder:text-[#a8a29e]"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="flex w-full flex-col items-start gap-2">
                <div className="flex w-full items-center justify-center gap-[5px] px-2">
                  <p className="grow basis-0 text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#57534e]">
                    Password
                  </p>
                </div>
                <div className="flex h-11 w-full items-center gap-0 rounded-[10px] border border-[#d6d3d1] bg-[#ffffff] p-3">
                  <input
                    type="password"
                    placeholder="•••••••••••••••"
                    className="w-full border-none bg-transparent text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#1c1917] outline-none placeholder:text-[#a8a29e]"
                  />
                </div>
              </div>
            </div>

            {/* Sign In Button */}
            <button className="relative flex h-11 w-full items-center justify-center gap-0 rounded-[10px] bg-[#1c1917] px-3 pb-4 pt-3 shadow-[0px_-4px_0px_0px_inset_#000000]">
              <p className="whitespace-pre text-nowrap text-[16px] font-medium leading-[22px] tracking-[-0.18px] text-[#ffffff]">
                Sign in
              </p>
            </button>

            {/* Forgot Password */}
            <div className="flex items-center justify-center gap-0 rounded-[8px] border border-[#fdba74] bg-[#ffedd5] px-3 py-1">
              <p className="whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[#ea580c]">
                Forgot password?
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="relative h-0 w-[312px] shrink-0">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <Image
                alt=""
                className="block size-full max-w-none"
                src="/assets/7d1a08a3ad27b44fa2342fcdeea9e299402e1f47.svg"
                width={312}
                height={1}
              />
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex w-[312px] flex-col items-start gap-2">
            {/* Google - with Last used badge */}
            <div className="relative w-full shrink-0 rounded-[12px] border border-[#93c5fd] bg-[#eff6ff] p-[2px]">
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center justify-center rounded-[8px] px-2 py-1">
                  <p className="whitespace-pre text-nowrap text-[10px] font-semibold leading-3 tracking-[0px] text-[#2563eb]">
                    Last used
                  </p>
                </div>
                <div className="flex h-11 w-full items-center justify-center gap-2 rounded-[10px] border border-[#d6d3d1] bg-[#ffffff] p-3">
                  <div className="relative size-[18px] shrink-0">
                    <Image
                      alt="Google"
                      className="block size-full max-w-none"
                      src="/assets/f02f258bd494d220134d6f525e5e57055a204030.svg"
                      width={18}
                      height={18}
                    />
                  </div>
                  <p className="whitespace-pre text-nowrap text-[16px] font-medium leading-[22px] tracking-[-0.18px] text-[#1c1917]">
                    Continue with Google
                  </p>
                </div>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex h-11 w-full items-center justify-center gap-2 rounded-[10px] border border-[#d6d3d1] bg-[#ffffff] p-3">
              <div className="relative size-[18px] shrink-0">
                <Image
                  alt="GitHub"
                  className="block size-full max-w-none"
                  src="/assets/b2a0ccf59d3b75f077bccfecb666bc9d525cf440.svg"
                  width={18}
                  height={18}
                />
              </div>
              <p className="whitespace-pre text-nowrap text-[16px] font-medium leading-[22px] tracking-[-0.18px] text-[#1c1917]">
                Continue with Github
              </p>
            </div>

            {/* SSO */}
            <div className="flex h-11 w-full items-center justify-center gap-2 rounded-[10px] p-3">
              <div className="relative size-[18px] shrink-0">
                <Image
                  alt="SSO"
                  className="block size-full max-w-none"
                  src="/assets/67054d2e774130cb4cb81e1bf6f51a216e4d6709.svg"
                  width={18}
                  height={18}
                />
              </div>
              <p className="whitespace-pre text-nowrap text-[16px] font-medium leading-[22px] tracking-[-0.18px] text-[#1c1917]">
                Continue with SSO
              </p>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="relative h-0 w-[312px] shrink-0">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <Image
                alt=""
                className="block size-full max-w-none"
                src="/assets/7d1a08a3ad27b44fa2342fcdeea9e299402e1f47.svg"
                width={312}
                height={1}
              />
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex items-center gap-3">
            <p className="whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-stone-500">
              Privacy policy
            </p>
            <div className="flex items-center justify-center">
              <div className="rotate-120 flex-none">
                <div className="relative h-0 w-3">
                  <div className="absolute bottom-0 left-0 right-0 -top-px">
                    <Image
                      alt=""
                      className="block size-full max-w-none"
                      src="/assets/aa421e7d3e51021ef296703b34bfc9535d369cdb.svg"
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
