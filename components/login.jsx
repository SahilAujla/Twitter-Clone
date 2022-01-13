import Head from "next/head";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = ({ providers }) => {
  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
      <Head>
        <title>Login</title>
      </Head>
      <Image
        src="https://rb.gy/ogau5a"
        width={150}
        height={150}
        objectFit="contain"
        alt="logo"
      />

      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            {/* https://devdojo.com/tailwindcss/buttons#_ */}
            <button
              className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium bg-white hover:bg-white group text-white"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#1d9bf0] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative transition duration-300 text-black group-hover:text-white ease">
                Sign in with {provider.name}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Login;
