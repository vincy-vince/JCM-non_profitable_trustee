import React, { useState } from "react";
import MenuBar from "../components/MenuBar";
import Location from "../components/Location";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// //(judeachristministry.org) CHANGE THE SITE AND UPDATE !!!!!

const Resources = () => {
  return (
    <div>
      <MenuBar />
      <div
        id="resources"
        className=" bg-[url(background-JCM.png)]  h-[400px]  p-10  w-auto  bg-cover  bg-no-repeat  mt-24  mx-auto flex flex-col justify-between xl:h-[630px]"
      >
        <div className="flex flex-col gap-3">
          <h1 className=" text-2xl w-[60%] mt-10 ml-3 font-extrabold  lg:text-3xl xl:text-5xl">
            Privacy Policy
          </h1>

          <button className="w-max font-bold px-3 py-2 bg-blue-950 text-white border-none rounded-lg text-lg mt-10 lg:text-xl xl:text-2xl xl:px-4 xl:py-3 hover:bg-blue-900 transition-colors lg:hidden">
            <HashLink to={"/#home"}>Donate</HashLink>
          </button>
          <button className="w-max font-bold px-3 py-2 bg-blue-950 shadow-md shadow-blue-900 text-white border-none rounded-lg text-lg mt-10 lg:text-xl xl:text-2xl xl:px-4 xl:py-3 hover:bg-blue-900 transition-colors hidden md:hidden lg:block">
            <HashLink to={"/#lghome"}>Donate</HashLink>
          </button>
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
        <div className=" mt-10"></div>
        <p className="text-lg xl:text-xl mb-3">
          Access to and use of this site (judeachristministry.org) is provided
          by Judea Christ Ministry is subject to the terms set out below.
        </p>
        <p className="text-lg xl:text-xl mb-3">
          Please read through the whole of these terms of use, and our privacy
          policy, before using this website.
        </p>
        <h1 className="text-lg lg:text-xl font-extrabold xl:font-2xl">
          PRIVACY STATEMENT
        </h1>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">
            SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?
          </h2>
          <p className="text-lg xl:text-xl mb-3">
            When you purchase something from our store, as part of the buying
            and selling process, we collect the personal information you give us
            such as your name, address and email address.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            When you browse our store, we also automatically receive your
            computer's internet protocol (IP) address in order to provide us
            with information that helps us learn about your browser and
            operating system.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            Email marketing (if applicable): With your permission, we may send
            you emails about our store, new products and other updates.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">SECTION 2 - CONSENT</h2>
          <p className="text-lg xl:text-xl mb-3">
            How do you get my consent? <br />
            When you provide us with personal information to complete a
            transaction, verify your credit card, place an order, arrange for a
            delivery or return a purchase, we imply that you consent to our
            collecting it and using it for that specific reason only.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            If we ask for your personal information for a secondary reason, like
            marketing, we will either ask you directly for your expressed
            consent, or provide you with an opportunity to say no.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            How do I withdraw my consent?
            <br />
            If after you opt-in, you change your mind, you may withdraw your
            consent for us to contact you, for the continued collection, use or
            disclosure of your information, at anytime, by contacting us at
            Judea Christ Ministry or mailing us at: No 53. Mercy Centre Campus,
            Nagavedu Village, Nemili TL, Ranipet DT - 631002, Tamil Nadu, India.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">
            SECTION 3 - DISCLOSURE
          </h2>
          <p className="text-lg xl:text-xl mb-3">
            We may disclose your personal information if we are required by law
            to do so or if you violate our Terms of Service.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">SECTION 4 - PAYMENT</h2>
          <p className="text-lg xl:text-xl mb-3">
            We use Razorpay for processing payments. We/Razorpay do not store
            your card data on their servers. The data is encrypted through the
            Payment Card Industry Data Security Standard (PCI-DSS) when
            processing payment. Your purchase transaction data is only used as
            long as is necessary to complete your purchase transaction. After
            that is complete, your purchase transaction information is not
            saved.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            Our payment gateway adheres to the standards set by PCI-DSS as
            managed by the PCI Security Standards Council, which is a joint
            effort of brands like Visa, MasterCard, American Express and
            Discover.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            PCI-DSS requirements help ensure the secure handling of credit card
            information by our store and its service providers.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            For more insight, you may also want to read terms and conditions of
            razorpay on https://razorpay.com
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">
            SECTION 5 - THIRD-PARTY SERVICES
          </h2>
          <p className="text-lg xl:text-xl mb-3">
            In general, the third-party providers used by us will only collect,
            use and disclose your information to the extent necessary to allow
            them to perform the services they provide to us.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            However, certain third-party service providers, such as payment
            gateways and other payment transaction processors, have their own
            privacy policies in respect to the information we are required to
            provide to them for your purchase-related transactions.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            For these providers, we recommend that you read their privacy
            policies so you can understand the manner in which your personal
            information will be handled by these providers.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            In particular, remember that certain providers may be located in or
            have facilities that are located a different jurisdiction than
            either you or us. So if you elect to proceed with a transaction that
            involves the services of a third-party service provider, then your
            information may become subject to the laws of the jurisdiction(s) in
            which that service provider or its facilities are located.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            Once you leave our store's website or are redirected to a
            third-party website or application, you are no longer governed by
            this Privacy Policy or our website's Terms of Service.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            <span className="text-md">Links</span>
            When you click on links on our store, they may direct you away from
            our site. We are not responsible for the privacy practices of other
            sites and encourage you to read their privacy statements.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">SECTION 6 - SECURITY</h2>
          <p className="text-lg xl:text-xl mb-3">
            To protect your personal information, we take reasonable precautions
            and follow industry best practices to make sure it is not
            inappropriately lost, misused, accessed, disclosed, altered or
            destroyed.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">SECTION 7 - COOKIES</h2>
          <p className="text-lg xl:text-xl mb-3">
            We use cookies to maintain session of your user. It is not used to
            personally identify you on other websites.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">
            SECTION 8 - AGE OF CONSENT
          </h2>
          <p className="text-lg xl:text-xl mb-3">
            By using this site, you represent that you are at least the age of
            majority in your state or province of residence, or that you are the
            age of majority in your state or province of residence and you have
            given us your consent to allow any of your minor dependents to use
            this site.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">
            SECTION 9 - CHANGES TO THIS PRIVACY POLICY
          </h2>
          <p className="text-lg xl:text-xl mb-3">
            We reserve the right to modify this privacy policy at any time, so
            please review it frequently. Changes and clarifications will take
            effect immediately upon their posting on the website. If we make
            material changes to this policy, we will notify you here that it has
            been updated, so that you are aware of what information we collect,
            how we use it, and under what circumstances, if any, we use and/or
            disclose it.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            If our store is acquired or merged with another company, your
            information may be transferred to the new owners so that we may
            continue to sell products to you.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">1. Introduction</h2>
          <p className="text-lg xl:text-xl mb-3">
            1.1 You may access most areas of this website without registering
            your details with us. Certain areas of this site are only open to
            you if you register. Any personal information you supply to us when
            you use our website will be used in accordance with our privacy
            policy.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            1.2 By accessing any part of this website, you shall be deemed to
            have accepted these terms of use and our privacy policy in full. If
            you do not accept them in full, you must leave this website
            immediately.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            1.3 We may make improvements or changes to the information and
            services on our website, or terminate our website, at any time
            without prior notice. We may also modify these terms of use and our
            privacy policy at any time without prior notice, and every such
            modification will be effective immediately upon posting of the
            modified terms of use and/or the modified privacy policy on our
            website. Your continued use of our website is deemed to be your
            acceptance of the modified terms of use and/or the modified privacy
            policy. You should, therefore, review this page regularly to ensure
            that you are aware of all improvements, changes and modifications
            made.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">
            2. Data and information: access and download licence
          </h2>
          <p className="text-lg xl:text-xl mb-3">
            2.1 Unless otherwise stated, the data and information you can access
            on this website has been developed and compiled by Judea Christ
            Ministry or one of its licensors and as such is protected by
            copyright, database and other laws concerning intellectual property.
            All rights in relation to such data and information (as well as in
            relation to the organisation and layout of our website and the
            underlying software code) are reserved by Judea Christ Ministry and
            its licensors.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            2.2 You may access, download and print the data and information and
            retain that data and information as a data source for yourself. You
            may use the information and data only for your own informational
            purposes and, provided that in each case you comply with the
            associated conditions that make use for such purposes lawful, for
            purposes that constitute "fair dealing" within the meaning of the
            Copyright, Designs and Patents Act 1988 and for those purposes which
            that Act and/or the Copyright and Rights in Databases Regulations
            1997 declare not to constitute infringement of the intellectual
            property rights with which they deal.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            2.3 The download licence in paragraph 2.2 is personal, non-exclusive
            and non-transferable and is given on the following basis:
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            a. No documents or related graphics on this web site are modified in
            any way
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            b. No graphics on this website are used separately from accompanying
            text
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            c. Copyright and trade mark notices and this permission notice
            appear in all copies
          </p>
          <p className="text-lg xl:text-xl mb-3">
            2.4 Except as provided in paragraphs 2.2 and 2.3 you may not
            otherwise access, download, copy or use any of the data or
            information on this website, and under no circumstances may you sell
            it or otherwise seek to turn it to account, directly or indirectly.
            Similarly, except as provided in those paragraphs, no part of this
            website may be reproduced or stored in any other website or included
            in any public or private electronic retrieval system or service
            without Judea Christ Ministry's prior written permission or that of
            the relevant licensors.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            2.5 The data and information is provided by us and its licensors at
            no cost to users of this site on an "as is" basis, to provide
            information about Judea Christ Ministry, philanthropy generally,
            methods of charitable giving, the charities which have supplied
            information about themselves for this site and to facilitate the
            building of relationships between donors and charities. Judea Christ
            Ministry and its licensors may make changes to such data and
            information at any time without notice
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            a. No commitment is given to update the data and information on this
            website nor is any assurance given that it is accurate, complete or
            up-to-date
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            b. To the maximum extent permitted by law, Judea Christ Ministry
            provides you with this web site on the basis that Judea Christ
            Ministry excludes all representations, warranties, conditions and
            other terms (including, without limitation, the conditions implied
            by law of satisfactory quality, fitness for purpose and the use of
            reasonable care and skill) which but for this provision might have
            effect in relation to this website.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            2.6 Users of this site should also note that the inclusion on this
            site of data or information about charities or other third parties,
            or links to their web sites, does not in any way constitute an
            endorsement by Judea Christ Ministry of any such charity or third
            party, whether as to its financial condition or prospects, its
            charitable or other status, its continuance in good standing or its
            aims and objectives. Judea Christ Ministry does not verify any of
            the data and information made available by such charities and third
            parties either on this site or on their own websites, the
            responsibility for that data and information remaining with those
            charities and third parties.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">
            3. Availability of access
          </h2>
          <p className="text-lg xl:text-xl mb-3">
            3.1 While we endeavour to ensure that this website is normally
            available 24 hours a day, we shall not be liable if for any reason
            it is unavailable at any time or for any period.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            3.2 Access to this website may be suspended temporarily and without
            notice in the case of system failure, maintenance, upgrade or repair
            or for reasons beyond Judea Christ Ministry's control.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">
            4. Website material and user conduct
          </h2>
          <p className="text-lg xl:text-xl mb-3">
            4.1 Other than personally identifiable information, which is covered
            under our privacy policy, any material you transmit or post to this
            website shall be considered non-confidential and non-proprietary.
            Judea Christ Ministry shall have no obligations with respect to such
            material. Judea Christ Ministry shall be free to edit, copy,
            disclose, distribute, incorporate and otherwise use such material
            and all data, images, sounds, text and other things embodied therein
            for any and all commercial or non-commercial purposes.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            4.2 You are prohibited from posting or transmitting to or from this
            website any material:
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            a. That is threatening, defamatory, obscene, indecent, seditious,
            offensive, pornographic, abusive, liable to incite racial hatred,
            discriminatory, menacing, scandalous, inflammatory, blasphemous, in
            breach of confidence, in breach of privacy, misleading, fraudulent,
            unlawful, constitute a contempt of court or otherwise be prejudicial
            to the administration of civil or criminal justice
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            b. That is in breach of any third party's intellectual or other
            property rights or interests
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            c. which may cause annoyance or inconvenience
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            d. for which you have not obtained all necessary licences and/or
            approvals
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            e. which constitutes or encourages conduct that would be considered
            a criminal offence, give rise to civil liability, or otherwise be
            contrary to the law of or infringe the rights of any third party, in
            India or any other country in the world
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            f. which is technically harmful (including, without limitation,
            computer viruses, logic bombs, Trojan horses, worms, harmful
            components, corrupted data or other malicious software or harmful
            data).
          </p>
          <p className="text-lg xl:text-xl mb-3">
            4.3 You may not misuse the website (including, without limitation,
            by hacking) and may only use the website for lawful and proper
            purposes, in compliance with all applicable laws, regulations and
            codes of practice and otherwise in accordance with the other
            provisions of these terms of use.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            4.4 Without prejudice to paragraphs 4.2 and 4.3, by accessing our
            web site you undertake that you will not:
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            a. use our website in a manner which causes or may cause any
            infringement of the rights of any other
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            b. use any software, routine or device to interfere or attempt to
            interfere electronically or manually with the operation or
            functionality of our website including but not limited to uploading
            or making available files containing corrupt data or viruses via
            whatever means
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            c. deface, alter or interfere with the front end "look and feel" of
            our website or the underlying software code
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            d. take any action that imposes an unreasonable or
            disproportionately large load on our website or related
            infrastructure.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            4.5 JUDEA CHRIST MINISTRY shall fully co-operate with any law
            enforcement authorities or court order requesting or directing JUDEA
            CHRIST MINISTRY to disclose the identity or locate anyone posting
            any material in breach of any of paragraphs 4.2 to 4.4 inclusive.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">
            5. Links to and from other web sites
          </h2>
          <p className="text-lg xl:text-xl mb-3">
            5.1 Links to third party websites on this website are provided
            solely for your convenience. If you use these links, you leave this
            web site. Judea Christ Ministry has not reviewed these third party
            websites and does not control and is not responsible for those
            websites, their content or availability, and in particular JUDEA
            CHRIST MINISTRY is not responsible for any information, goods or
            services contained, offered, described or made available on, or
            accessible through, those websites or by any means referred to on
            those sites. Judea Christ Ministry therefore does not endorse or
            make any representations about those websites, or any material found
            there, or any results that may be obtained from using them. If you
            decide to access any of the third party websites linked or
            accessible through those that are linked to this website, you do so
            entirely at your own risk.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            5.2 If you would like to link to or otherwise make use of any part
            of this website, you may only do so subject to the following
            conditions unless in any particular case Judea Christ Ministry's
            express prior written permission is obtained.
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            a. you do not remove, distort or otherwise alter the size or
            appearance of any graphics or logos
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            b. you do not create a frame or any other browser or border
            environment around this website
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            c. you do not in any way imply that Judea Christ Ministry is
            endorsing any products or services other than its own
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            d. you do not misrepresent your relationship with Judea Christ
            Ministry nor present any other false information about the Judea
            Christ Ministry
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            e. you do not otherwise use any trade or service marks displayed on
            this web site without prior express written permission from JUDEA
            CHRIST MINISTRY
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            f. you do not link from a web site that is not owned by you
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            g. your web site does not contain the sort of content that is
            described in paragraph
          </p>
          <p className="text-lg xl:text-xl mb-3">
            5.3 (a) - (e) inclusive above, infringes any intellectual property
            rights or other rights of any other person or otherwise does not
            comply with all applicable laws and regulations. If you wish to link
            to or otherwise make use of any part of this website on any other
            basis, or you are unsure whether your proposed linking arrangements
            will contravene these terms of use please contact Judea Christ
            Ministry.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            5.4 Judea Christ Ministry expressly reserves the right to revoke the
            right granted in paragraph 5.2 if at any time Judea Christ Ministry
            in its absolute discretion considers a link is:
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            a. inappropriate or controversial
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            b. for breach of these terms and in either case Judea Christ
            Ministry may take any action it deems appropriate.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">
            6. Responsibilities of transactional users
          </h2>
          <p className="text-lg xl:text-xl mb-3">
            6.1 Users who have registered to undertake transactions on one or
            more areas of our website must at all times safeguard their personal
            login details (e.g. user id, passwords, login and access codes and
            PIN numbers). For example, such users should ensure that third
            parties do not overlook them when logging on to transact any
            business. Such users must not disclose their login details to any
            other person nor with multiple users on a network except as may be
            expressly permitted pursuant to the terms of use applicable to the
            transactions for which the user has registered. Responsibility for
            the security of all your login details rests with you
          </p>
          <p className="text-lg xl:text-xl mb-3">
            6.2 If you are registered as described in paragraph 6.1, it is
            important you understand that you are responsible for the accuracy
            and genuineness of all instructions and information sent to us, from
            login to log-off. This means that you must ensure that all
            instructions and information are carefully checked before being sent
            to us. It is also important that you read the information provided
            on the transactional web pages that you are registered to use. That
            information explains the fees and charges payable for the
            transactions concerned, any deductions that will or may be applied
            and the circumstances in which funds you send may not be applied as
            you have instructed.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            6.3 This site is as secure we can make it by using encryption
            technology and adopting security and anti-virus practices routinely
            used and adopted as a matter of good practice by other financial
            services businesses in India. Nevertheless, it is important you
            understand that every internet site, every computer that connects to
            the internet and all internet communication is susceptible to attack
            by computer hackers and the ever-increasing variety and
            sophistication of computer viruses. Judea Christ Ministry will do
            all it reasonably can to protect this site and all internet
            communications passing between Judea Christ Ministry and users, but
            it cannot be held responsible for any losses fairly attributable to
            a user's failure to take its own reasonable precautions to prevent
            interception of or interference with any such communications
            (including, without limitation) failure to use and keep up to date
            firewalls and anti-virus software on the user's own computers or
            computer systems.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">
            7. Sanctions for breach of these terms of use
          </h2>
          <p className="text-lg xl:text-xl mb-3">
            7.1 Where we believe, in our absolute discretion, that you are in
            breach of any of these terms and conditions we will be entitled
            without prior notice to deny you further use of our website and/or
            to remove from our website all information you have made available
            on or through our website. If we take either or both of these
            courses of action our doing so will in all instances be without
            prejudice to any of our other rights, at law or otherwise.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            7.2 You agree to indemnify and keep us indemnified from and against
            any and all actions, proceedings, costs, claims, damages, losses and
            expenses of whatsoever nature and howsoever arising as a result of
            or in connection with any breach by you of these terms and
            conditions, including any failure to indemnify us as required by
            this provision.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">
            8. Exclusion of liability
          </h2>
          <p className="text-lg xl:text-xl mb-3">
            8.1 Judea Christ Ministry, its licensors (whether or not involved in
            creating, producing, maintaining or delivering this website), and
            the trustees, officers, directors, employees, contractors,
            shareholders or agents of each of them, exclude all liability and
            responsibility for any amount or kind of loss or damage that may
            result to you or a third party (including without limitation, any
            direct, indirect, punitive or consequential loss or damages, or any
            loss of income, profits, goodwill, data, contracts, use of money, or
            loss or damages arising from or connected in any way to business
            interruption, and whether in tort (including without limitation
            negligence), contract or otherwise) in connection with this website
            in any way.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            8.2 Or in connection with the use, inability to use or the results
            of use of this website, any websites linked to this website or the
            material on or accessible through such websites, including but not
            limited to loss or damage due to viruses that may infect your
            computer equipment, software, data or other property on account of
            your access to, use of, or browsing this website or your downloading
            of any material from this website or from any websites linked to
            this website or from any websites accessible through those that are
            linked to this website.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            8.3 Nothing in these terms of use shall exclude or limit Judea
            Christ Ministry's liability for:
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            a. death or personal injury caused by negligence
          </p>
          <p className="ml-5 text-lg xl:text-xl mb-3">b. fraud</p>
          <p className="ml-5 text-lg xl:text-xl mb-3">
            c. any liability which cannot be excluded or limited under
            applicable law.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            8.4 If your use of material on this website results in the need for
            servicing, repair or correction of equipment, software or data, you
            assume all costs thereof.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">
            9 - Accuracy of Billing and Account information
          </h2>
          <p className="text-lg xl:text-xl mb-3">
            9.1 We reserve the right to refuse any order you place with us. We
            may, in our sole discretion, limit or cancel quantities purchased
            per person, per household or per order. These restrictions may
            include orders placed by or under the same customer account, the
            same credit card, and/or orders that use the same billing and/or
            shipping address. In the event that we make a change to or cancel an
            order, we may attempt to notify you by contacting the e-mail and/or
            billing address/phone number provided at the time the order was
            made. We reserve the right to limit or prohibit orders that, in our
            sole judgment, appear to be placed by dealers, resellers or
            distributors.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            9.2 You agree to provide current, complete and accurate purchase and
            account information for all purchases made at our store. You agree
            to promptly update your account and other information, including
            your email address and credit card numbers and expiration dates, so
            that we can complete your transactions and contact you as needed.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">
            10 - Personal Information
          </h2>
          <p className="text-lg xl:text-xl mb-3">
            Your submission of personal information through the store is
            governed by our Privacy Policy.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">11 - INDEMNIFICATION</h2>
          <p className="text-lg xl:text-xl mb-3">
            You agree to indemnify, defend and hold harmless Judea Christ
            Ministry and our parent, subsidiaries, affiliates, partners,
            officers, directors, agents, contractors, licensors, service
            providers, subcontractors, suppliers, interns and employees,
            harmless from any claim or demand, including reasonable attorneys’
            fees, made by any third-party due to or arising out of your breach
            of these Terms of Service or the documents they incorporate by
            reference, or your violation of any law or the rights of a
            third-party.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">12 - Termination</h2>
          <p className="text-lg xl:text-xl mb-3">
            The obligations and liabilities of the parties incurred prior to the
            termination date shall survive the termination of this agreement for
            all purposes.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            These Terms of Service are effective unless and until terminated by
            either you or us. You may terminate these Terms of Service at any
            time by notifying us that you no longer wish to use our Services, or
            when you cease using our site.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            If in our sole judgment you fail, or we suspect that you have
            failed, to comply with any term or provision of these Terms of
            Service, we also may terminate this agreement at any time without
            notice and you will remain liable for all amounts due up to and
            including the date of termination; and/or accordingly may deny you
            access to our Services (or any part thereof).
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">
            13 - Entire Agreement
          </h2>
          <p className="text-lg xl:text-xl mb-3">
            The failure of us to exercise or enforce any right or provision of
            these Terms of Service shall not constitute a waiver of such right
            or provision.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            These Terms of Service and any policies or operating rules posted by
            us on this site or in respect to The Service constitutes the entire
            agreement and understanding between you and us and govern your use
            of the Service, superseding any prior or contemporaneous agreements,
            communications and proposals, whether oral or written, between you
            and us (including, but not limited to, any prior versions of the
            Terms of Service).
          </p>
          <p className="text-lg xl:text-xl mb-3">
            Any ambiguities in the interpretation of these Terms of Service
            shall not be construed against the drafting party.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">14 - Governing Law</h2>
          <p className="text-lg xl:text-xl mb-3">
            These Terms of Service and any separate agreements whereby we
            provide you Services shall be governed by and construed in
            accordance with the laws of India and jurisdiction of Chennai, Tamil
            Nadu.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">
            15 - Changes to Terms of Service
          </h2>
          <p className="text-lg xl:text-xl mb-3">
            You can review the most current version of the Terms of Service at
            any time at this page.
          </p>
          <p className="text-lg xl:text-xl mb-3">
            We reserve the right, at our sole discretion, to update, change or
            replace any part of these Terms of Service by posting updates and
            changes to our website. It is your responsibility to check our
            website periodically for changes. Your continued use of or access to
            our website or the Service following the posting of any changes to
            these Terms of Service constitutes acceptance of those changes.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg xl:text-xl">
            16 - Contact Information
          </h2>
          <p className="text-lg xl:text-xl mb-3">
            Questions about the Terms of Service should be sent to us at
            judeachristministry@gmail.com
          </p>
        </div>
      </div>
      <Location />
      <Footer />
    </div>
  );
};

export default Resources;

//(judeachristministry.org) CHANGE THE SITE AND UPDATE !!!!!
