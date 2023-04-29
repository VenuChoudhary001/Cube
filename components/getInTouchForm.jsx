import React, { useState } from "react";
import { validateEmail, validatePhone } from "../utils";
import Link from "next/link";
const GetInTouchForm = () => {
  const [contact, setContact] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(contact.email) && validatePhone(contact.phone)) {
    }
    console.log(contact);
  };
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-full flex flex-col gap-6"
      >
        <main className="flex gap-2 flex-col w-full">
          <div className="text-sm font-bold ">Full Name</div>
          <input
            required
            type={"text"}
            onChange={(e) =>
              setContact({ ...contact, full_name: e.target.value })
            }
            placeholder="Full name"
            className="outline-none rounded-lg p-3 bg-white border-[1px] border-light-100 text-black/70 placeholder:text-black/70"
          />
        </main>
        <main className="flex gap-2 flex-col w-full">
          <div className="text-sm font-bold ">Email</div>
          <input
            required
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            type={"email"}
            placeholder="you@company.com"
            className="outline-none rounded-lg p-3 bg-white border-[1px] border-light-100 text-black/70 placeholder:text-black/70"
          />
        </main>
        <main className="flex gap-1 flex-col w-full">
          <div className="text-sm font-bold ">Phone number</div>
          <div className="relative flex gap-2 items-center border-[1px] px-3 border-light-100 text-black/70 rounded-lg">
            <input
              required
              onChange={(e) =>
                setContact({ ...contact, phone: e.target.value })
              }
              type={"text/number"}
              maxLength={10}
              className="w-full text-base outline-none p-3"
              placeholder="XXXXXXXXX"
            />
          </div>
        </main>
        <main className="flex gap-2 flex-col w-full">
          <div className="text-sm font-bold ">Message</div>
          <textarea
            required
            onChange={(e) =>
              setContact({ ...contact, message: e.target.value })
            }
            rows={5}
            placeholder="Leave us a message"
            className="outline-none rounded-lg p-3 bg-white border-[1px] border-light-100 text-black/70 placeholder:text-black/70"
          />
        </main>
        <main className="flex items-center gap-2 w-full">
          <div className="flex relative">
            <input
              required
              onChange={(e) =>
                setContact({ ...contact, is_checked: e.target.checked })
              }
              type={"checkbox"}
              className="appearance-none w-[15px] h-[10px] checked:bg-black outline-none  rounded-lg p-3 bg-white border-[1px] border-light-100 text-black/70 placeholder:text-black/70"
            />
          </div>
          <span className="block text-black/70">
            You agree to our friendly{" "}
            <Link
              href={"/privacypolicy"}
              className="underline font-semibold cursor-pointer"
            >
              privacy policy.
            </Link>
          </span>
        </main>
        <button
          type="submit"
          onSubmit={(e) => handleSubmit(e)}
          className="p-3 bg-black/90 w-full rounded-full text-white h-12"
        >
          Send message
        </button>
      </form>
    </>
  );
};

export default GetInTouchForm;
