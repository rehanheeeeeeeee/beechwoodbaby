import React from "react";

export default function login() {
  return (
    <div className="flex min-h-full pb-5 items-center justify-center px-4 sm:px-6 lg:px-8">
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="w-full max-w-md">
        <div>
          <Image
            width={1920}
            height={1080}
            className="mx-auto h-48 w-48"
            src={"/logo.png"}
            alt="Your Company"
          />
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
          <Link
            href={"/login"}
            className="w-full text-center hover:text-headingColor duration-150 transition ease-in text-textColor"
            legacyBehavior
          >
            <p className="my-2 text-center font-medium text-md"> Or Login</p>
          </Link>
        </div>
        <form
          onSubmit={addUser}
          className="mt-5 space-y-4"
          action="/api/signup"
          method="POST"
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-textColor focus:z-10 focus:border-textColor focus:outline-none focus:ring-textColor sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-textColor focus:z-10 focus:border-textColor focus:outline-none focus:ring-textColor sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button type="submit" className={styles.signUpBotton}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
