import React from "react";
import MenuBar from "../components/MenuBar";
import Location from "../components/Location";
import Footer from "../components/Footer";
import { HashLink } from "react-router-hash-link";

const RefundPolicy = () => {
  return (
    <div id="resources">
      <MenuBar />
      <div
        id="resources"
        className=" bg-[url(background-JCM.png)]  h-[400px]  p-10  w-auto  bg-cover  bg-no-repeat  mt-24  mx-auto flex flex-col justify-between xl:h-[630px]"
      >
        <div className="flex flex-col gap-3">
          <h1 className=" text-2xl text-black font-extrabold md:text-3xl lg:text-4xl xl:text-5xl ">
            Refund Policy
          </h1>

          <button className="w-max font-bold px-3 py-2 bg-blue-950 text-white border-none rounded-lg text-lg mt-10 lg:text-xl xl:text-2xl xl:px-4 xl:py-3 hover:bg-blue-900 transition-colors lg:hidden">
            <HashLink to={"/#home"}>Donate</HashLink>
          </button>
          <button className="w-max font-bold px-3 py-2 bg-blue-950 shadow-md shadow-blue-900 text-white border-none rounded-lg text-lg mt-10 lg:text-xl xl:text-2xl xl:px-4 xl:py-3 hover:bg-blue-900 transition-colors hidden md:hidden lg:block">
            <HashLink to={"/#lghome"}>Donate</HashLink>
          </button>
        </div>
        <div className="bg-white p-2 inline-block rounded-lg w-full md:w-[60%] lg:w-[60%] mx-auto mt-48 shadow-lg md:mt-50 lg:mt-[180px] xl:mt-[390px]">
          <input
            className="text-blue-900 w-[60%] active:border-none md:w-[73%] lg:w-[80%] "
            placeholder="Enter your email"
          ></input>
          <button className="bg-red-800 text-white px-4 ml-4 rounded-md py-2 font-bold md:ml-0 xl:ml-13 shadow-md shadow-red-800">
            Join now
          </button>
        </div>
      </div>
      {/* text */}
      <div className="mt-15 mx-10 flex flex-col gap-5 md:mx-20 lg:mx-20 xl:mx-20 ">
        <p className="text-lg xl:text-xl mb-3">
          Judea Christ Ministry is instituting a donation refund policy to
          ensure fair and transparent processing of requests for refund of
          donations as digital payments are becoming more frequent. Judea Christ
          Ministry expects that all donors will exercise due care and diligence
          while making donations. Judea Christ Ministry also recognises that a
          donation may be made erroneously or donors may change their mind.
        </p>
        <p className="text-lg xl:text-xl mb-3">
          Judea Christ Ministry will examine each request for refund of donation
          and endeavour to make the refund. Judea Christ Ministry may also seek
          further information / documents and donor must co-operate in this
          regard.
        </p>
        <p className="text-lg xl:text-xl mb-3">
          However, Judea Christ Ministry is not obliged to make refunds and may,
          in its discretion, decline any requests for refund of donations,
          particularly if a tax exemption certificate has been issued.
        </p>
        <p className="text-lg xl:text-xl mb-3">
          If you would like your donation to Judea Christ Ministry to be
          refunded, You must request Judea Christ Ministry in writing or by
          email for a refund and Your request must reach Judea Christ Ministry
          within <span className="font-bold">15 (fifteen)</span> days from the
          date on which you made the donation i.e. the date on which you:
          <br />
          Made the donation online, electronically or through other means, OR
          Handed over the cheque / demand draft to Judea Christ Ministry or
          someone authorised by Judea Christ Ministry for this purpose, OR
          Despatched the cheque / demand draft to Judea Christ Ministry by other
          means.
        </p>
        <p className="text-lg xl:text-xl mb-3">
          The written request stating reason for requesting refund must be sent
          to the address stated below and must contain all the following details
          pertaining to the donation:
        </p>
        <ul className="text-lg xl:text-xl mb-3 list-disc">
          <li className="ml-10 text-lg xl:text-xl mb-3">Date of donation</li>
          <li className="ml-10 text-lg xl:text-xl mb-3">Donation amount</li>
          <li className="ml-10 text-lg xl:text-xl mb-3">
            If donation was made through cheque/draft, please provide
            Cheque/Draft no.
          </li>
          <li className="ml-10 text-lg xl:text-xl mb-3">
            If donation was made through credit card, please provide Credit Card
            no. (last 4 digits only)
          </li>
          <li className="ml-10 text-lg xl:text-xl mb-3">
            If donation was made online, please provide Transaction-ID.
          </li>
        </ul>
        <p className="text-lg xl:text-xl mb-3">
          Upon the receipt of the necessary details, if everything is found in
          adherence to the policy, the refund would be initiated and any charges
          including (processing charges, transaction charges, GST etc., )
          incurred during the payment of donation if applicable would be
          deducted from the refund amount.
        </p>
        <p className="text-lg xl:text-xl mb-3">
          For further queries / questions or refund requests please
          <br />
          <span className="font-bold">Email:</span> &nbsp;
          judeachristministry@gmail.com
          <br />
          <span className="font-bold">Write to:</span>&nbsp; No. 505/B1A, 1st
          Floor, Mappedu Village, Thiruvallur, Tamilnadu- 631 402
        </p>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">
            Late or missing refunds
          </h2>
          <p className="text-lg xl:text-xl mb-3">
            If your refund has been processed and you haven't received a refund
            yet, first check your bank account again.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            Then contact your credit card company, it may take some time before
            your refund is officially posted.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            Next contact your bank. There is often some processing time before a
            refund is posted.
          </p>
        </div>
        <p className="text-lg xl:text-xl mb-3">
          If you've done all of this and you still have not received your refund
          yet, please contact us at &nbsp;{" "}
          <span className="font-bold">
            <a href="">contact@judeachristministry.org</a>
          </span>
        </p>
      </div>
      {/* text */}
      <Location />
      <Footer />
    </div>
  );
};
<div>
  <h2 className="font-bold text-lg xl:text-xl"></h2>
  <p className="text-lg xl:text-xl mb-3"></p>
</div>;
export default RefundPolicy;
