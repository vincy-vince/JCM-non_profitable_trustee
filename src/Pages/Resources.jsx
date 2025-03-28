import React, { useState } from "react";
import MenuBar from "../components/MenuBar";
import Location from "../components/Location";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
const Resources = () => {
  const [ShowModal, setShowModal] = useState(false);
  return (
    <div>
      <MenuBar />
      <div
        id="resources"
        className=" bg-[url(background-JCM.png)]  h-[400px]  p-10  w-auto  bg-cover  bg-no-repeat  mt-24  mx-auto flex flex-col justify-between xl:h-[630px]"
      >
        <div className="flex flex-col gap-3">
          <h1 className=" text-2xl w-[60%] mx-auto font-extrabold text-center lg:text-3xl">
            Judea Christ Ministries
          </h1>

          <button
            onClick={() => setShowModal(true)}
            className=" p-1 bg-blue-950 text-white border-none rounded-lg text-lg w-[30%] mx-auto md:hidden lg:hidden"
          >
            Donate
          </button>
          {ShowModal && (
            <div className="fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0">
              <div className="bg-white py-16 px-10 pb-5 rounded-md relative">
                <div className="absolute right-2 top-2 cursor-pointer">
                  {" "}
                  <IoClose
                    onClick={() => {
                      setShowModal(false);
                    }}
                    size={30}
                  ></IoClose>
                </div>
                <div className=" flex flex-col gap-3">
                  <div className="text-center mt-5">
                    {" "}
                    Are you a donar donating from India?
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="border-2 border-blue-950 bg-blue-950 rounded-sm p-3 text-white text-center">
                      {" "}
                      <Link to="/contact"> Yes, I'm a donar from India</Link>
                    </div>
                    <div className="border-2 text-blue-950 border-blue-950 bg-blue-50 rounded-sm p-3 text-center">
                      {" "}
                      <Link to="/contact">
                        No, I'm a foreigner donor outside India
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white p-2 inline-block rounded-lg w-full md:w-[60%] lg:w-[60%] mx-auto">
          <input
            className="text-blue-900 w-[70%] lg:w-[80%] "
            placeholder="Enter your email"
          ></input>
          <button className="bg-red-800 text-white px-4 rounded-md py-2 ml-2 font-bold md:ml-4 lg:ml-2 xl:ml-13">
            Join now
          </button>
        </div>
      </div>

      <div className="mx-20 flex flex-col gap-5">
        <div className="text-lg font-extrabold md:text-xl lg:text-2xl text-center mt-10 mb-10">
          Privacy Policy
        </div>
        <div className="text-lg font-extrabold mx-10">
          SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?
        </div>
        <div className="mx-10">
          <div>
            When you purchase something from our store, as part of the buying
            and selling process, we collect the personal information you give us
            such as your name, address and email address.
          </div>
          <div>
            When you browse our store, we also automatically receive your
            computer's internet protocol (IP) address in order to provide us
            with information that helps us learn about your browser and
            operating system.
          </div>
          <div>
            Email marketing (if applicable): With your permission, we may send
            you emails about our store, new products and other updates.
          </div>
          <div className="text-xl font-extrabold">SECTION 2 - CONSENT</div>
          <div>
            How do you get my consent? When you provide us with personal
            information to complete a transaction, verify your credit card,
            place an order, arrange for a delivery or return a purchase, we
            imply that you consent to our collecting it and using it for that
            specific reason only.
          </div>
          <div>
            If we ask for your personal information for a secondary reason, like
            marketing, we will either ask you directly for your expressed
            consent, or provide you with an opportunity to say no. How do I
            withdraw my consent? If after you opt-in, you change your mind, you
            may withdraw your consent for us to contact you, for the continued
            collection, use or disclosure of your information, at anytime, by
            contacting us at The Social Project or mailing us at: No 53. Mercy
            Centre Campus, Nagavedu Village, Nemili TL, Ranipet DT - 631002,
            Tamil Nadu, India.
          </div>
          <div>SECTION 3 - DISCLOSURE</div>
          <div>
            We may disclose your personal information if we are required by law
            to do so or if you violate our Terms of Service. SECTION 4 - PAYMENT
            We use Razorpay for processing payments. We/Razorpay do not store
            your card data on their servers. The data is encrypted through the
            Payment Card Industry Data Security Standard (PCI-DSS) when
            processing payment. Your purchase transaction data is only used as
            long as is necessary to complete your purchase transaction. After
            that is complete, your purchase transaction information is not
            saved. Our payment gateway adheres to the standards set by PCI-DSS
            as managed by the PCI Security Standards Council, which is a joint
            effort of brands like Visa, MasterCard, American Express and
            Discover. PCI-DSS requirements help ensure the secure handling of
            credit card information by our store and its service providers. For
            more insight, you may also want to read terms and conditions of
            razorpay on https://razorpay.com
          </div>
          <div>SECTION 5 - THIRD-PARTY SERVICES</div>
          <div>
            In general, the third-party providers used by us will only collect,
            use and disclose your information to the extent necessary to allow
            them to perform the services they provide to us. However, certain
            third-party service providers, such as payment gateways and other
            payment transaction processors, have their own privacy policies in
            respect to the information we are required to provide to them for
            your purchase-related transactions. For these providers, we
            recommend that you read their privacy policies so you can understand
            the manner in which your personal information will be handled by
            these providers. In particular, remember that certain providers may
            be located in or have facilities that are located a different
            jurisdiction than either you or us. So if you elect to proceed with
            a transaction that involves the services of a third-party service
            provider, then your information may become subject to the laws of
            the jurisdiction(s) in which that service provider or its facilities
            are located. Once you leave our store's website or are redirected to
            a third-party website or application, you are no longer governed by
            this Privacy Policy or our website's Terms of Service. Links When
            you click on links on our store, they may direct you away from our
            site. We are not responsible for the privacy practices of other
            sites and encourage you to read their privacy statements.
          </div>{" "}
          SECTION 6 - SECURITY{" "}
          <div>
            To protect your personal information, we take reasonable precautions
            and follow industry best practices to make sure it is not
            inappropriately lost, misused, accessed, disclosed, altered or
            destroyed.
          </div>{" "}
          SECTION 7 - COOKIES
          <div>
            We use cookies to maintain session of your user. It is not used to
            personally identify you on other websites.
          </div>
          SECTION 8 - AGE OF CONSENT
          <div>
            By using this site, you represent that you are at least the age of
            majority in your state or province of residence, or that you are the
            age of majority in your state or province of residence and you have
            given us your consent to allow any of your minor dependents to use
            this site.
          </div>{" "}
          SECTION 9 - CHANGES TO THIS PRIVACY POLICY
          <div>
            We reserve the right to modify this privacy policy at any time, so
            please review it frequently. Changes and clarifications will take
            effect immediately upon their posting on the website. If we make
            material changes to this policy, we will notify you here that it has
            been updated, so that you are aware of what information we collect,
            how we use it, and under what circumstances, if any, we use and/or
            disclose it. If our store is acquired or merged with another
            company, your information may be transferred to the new owners so
            that we may continue to sell products to you.
          </div>{" "}
          <div> QUESTIONS AND CONTACT INFORMATION</div>{" "}
          <div>
            If you would like to: access, correct, amend or delete any personal
            information we have about you, register a complaint, or simply want
            more information contact our Privacy Compliance Officer at
            contact@thesocialprojects.org or by mail at No 53. Mercy Centre
            Campus, Nagavedu Village, Nemili TL, Ranipet DT - 631002, Tamil
            Nadu, India. Accessing any part of this website constitutes your
            agreement to be bound by these terms of use and acceptance of our
            privacy policy regardless of whether or not you choose to register
            with us for the purposes of carrying out any transactions. Please
            note paragraph 1.3 below since it allows us to amend these terms of
            use and our privacy policy at any time without prior notice. Certain
            provisions of these terms of use may be superseded by expressly
            designated legal notices or terms located on particular pages of
            this web site. If you do not accept these terms of use, do not use
            this website. Those users who register with us to use one or more of
            the transactional areas of our website have particular
            responsibilities and their specific attention is drawn to paragraph
            6 of these terms of use.
          </div>
        </div>
      </div>
      <Location />
      <Footer />
    </div>
  );
};

export default Resources;
