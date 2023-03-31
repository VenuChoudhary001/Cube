import Link from "next/link";
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Privacypolicy = () => {
  return (
    <>
      <Navbar />
      <section className="container gap-8 mx-auto flex flex-col justify-center pt-12">
        <div className="text-4xl my-8 text-center font-primary500">
          Privacy Policy
        </div>
        <main className="flex flex-col max-w-[90vw] md:max-w-[1000px] mx-auto items-start justify-start gap-4 lg:gap-8">
          {/* <div className="font-primary300 text-2lg">Terms of Use Agreement</div> */}
          <div className="flex flex-col gap-1">
            <span className="text-dark-300 text-xl font-primary400 ">
              Effective date : <span className=" font-bold">3/4/2023</span>
            </span>
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            At Cube, we take your privacy seriously. This Privacy Policy
            describes the types of information we may collect from you or that
            you may provide when you use Cube&apos;s mobile application (the
            &quot;App&quot;), and our practices for collecting, using,
            maintaining, protecting, and disclosing that information. Your
            privacy is at the core of the way we design and build the services
            and products you know and have come to love, so that you can fully
            trust them and focus on building meaningful connections.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            If you are a California resident, please see our
            <span className="font-primary500 underline">
              &nbsp;California Privacy Statement
            </span>{" "}
            , which supplements this Privacy Policy.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            We appreciate that you trust us with your information and we intend
            to always keep that trust. This starts with making sure you
            understand the information we collect, why we collect it, how it is
            used and your choices regarding your information. This Policy
            describes our privacy practices in plain language, keeping legal and
            technical jargon to a minimum.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            Please read this Privacy Policy carefully to understand our policies
            and practices regarding your information and how we will treat it.
            If you do not agree with our policies and practices, your choice is
            not to use the App. By accessing or using the App, you agree to this
            Privacy Policy.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            This Privacy Policy applies to information we collect:
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            On the App
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            In email, text, and other electronic messages between you and Cube
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            When you interact with our advertising and applications on
            third-party websites and services, if those applications or
            advertising include links to this policy.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            It does not apply to information collected by: us offline or through
            any other means, including on any other website operated by Cube or
            any third party (including our affiliates and subsidiaries); or
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            any third party (including our affiliates and subsidiaries),
            including through any application or content (including advertising)
            that may link to or be accessible from or on the App.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400 ">Our commitment to privacy.</span>
            We design all of our products and services with your privacy in
            mind. We involve experts from various fields, including legal,
            security, engineering, product design and others to make sure that
            our decisions are taken with the utmost respect for your privacy.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400 ">
              Our commitment to transparency.{" "}
            </span>
            Because we use many of the same online services you do, we know that
            insufficient information and overly complicated language are common
            issues in privacy policies. We take the exact opposite approach:
            we&apos;re doing our best to write our Privacy Policy and related
            documents in plain language. We actually want you to read our
            policies and understand our privacy practices!
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400 ">
              Our commitment to security.
            </span>
            We have teams dedicated to keeping your data safe and secure. We
            constantly update our security practices and invest in our security
            efforts to enhance the safety of your information.
          </div>
          <div className="font-primary300 text-[17px] md:text-lg">
            <span className="font-primary500 ">Information We Collect</span>
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            We collect information you provide directly to us, such as when you
            create an account, update your profile, participate in a survey or
            contest, make a purchase, or communicate with us. This information
            may include your name, email address, phone number, location,
            photos, and payment information.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            We also collect information about your use of the Services, such as
            your search queries, preferences, and activity on the Services. This
            information may be collected using cookies, web beacons, and other
            tracking technologies.
          </div>
          <div className="font-primary400 text-[17px] md:text-lg">
            Information We Collect
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            We collect information you provide directly to us, such as when you
            create an account, update your profile, participate in a survey or
            contest, make a purchase, or communicate with us. This information
            may include your name, email address, phone number, location,
            photos, and payment information.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            We also collect information about your use of the Services, such as
            your search queries, preferences, and activity on the Services. This
            information may be collected using cookies, web beacons, and other
            tracking technologies.
          </div>
          <div className="font-primary400 text-[17px] md:text-lg">
            <span className="font-primary400">Information you give us</span>
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            You choose to give us certain information when using our services.
            This includes:
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            When you create an account, you provide us with at least your phone
            number and email address, as well as some basic details necessary
            for the service to work, such as your gender, date of birth, and who
            you&apos;d like to connect with.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            When you complete your profile, you have the option to share your
            sexual orientation, ethnicity, religious beliefs, and political
            opinions with us. Where you provide such elements to us, you consent
            to us using it for the purposes identified and as laid out in this
            Privacy Policy. You can also share additional information with us,
            such as details on your bio and your interests, as well as content
            such as photos, videos, and audio clips. To add certain content,
            like pictures or videos, you may allow us to access your camera,
            photo album, or microphone.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            When you subscribe to a paid service or make a purchase directly
            from us (rather than through a platform such as iOS or Android), you
            provide us with information related to the purchases you make and
            our payment processors with information such as your debit or credit
            card number or other financial information
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            When you participate in surveys, focus groups or market studies, you
            give us your insights into our products and services, responses to
            our questions and testimonials.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            When you choose to participate in our promotions, events or
            contests, we collect the information that you use to register or
            enter.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            If you contact us (e.g., through our customer care team or on social
            media), we collect the information you give us during the
            interaction.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            If you share with us information about other people (for example, if
            you use contact details of a friend for a given feature), we process
            this information on your behalf in order to complete your request.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            Of course, we also process your chats with other users as well as
            the content you publish to operate and secure the services, and to
            keep our community safe.
          </div>
          <div className="font-primary400 text-[17px] md:text-lg">
            <span className="font-primary400">
              Information we receive from others
            </span>
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            In addition to the information you may provide us directly, we
            receive information about you from others, including:
          </div>
          <ul className=" ml-5 list-disc text-[15px] md:text-lg font-primary500">
            <li>Users</li>
          </ul>
          <div className="font-primary300 text-[15px] md:text-lg">
            Users may provide information about you as they use our services,
            for instance as they interact with you or if they submit a report
            involving you.
          </div>
          <ul className=" ml-5 list-disc text-[15px] md:text-lg font-primary500">
            <li>Social Media</li>
          </ul>
          <div className="font-primary300 text-[15px] md:text-lg">
            You may decide to share information with us through your social
            media account, for instance if you decide to create and log into
            your Cube account via your social media or other account (e.g.,
            Facebook, Google or Apple) or to upload onto our services
            information such as photos from one of your social media accounts
            (e.g., Facebook or Instagram).
          </div>
          <ul className=" ml-5 list-disc text-[15px] md:text-lg font-primary500">
            <li>Other Partners</li>
          </ul>
          <div className="font-primary300 text-[15px] md:text-lg">
            We may receive information about you from our partners where our ads
            are published on a partner&apos;s service (in which case they may
            pass along details on a campaign&apos;s success). Where legally
            allowed, we can also receive information about suspected or
            convicted bad actors from third parties as part of our efforts to
            ensure our users&apos; safety and security.
          </div>
          <div className="font-primary400 text-[17px] md:text-lg">
            <span className="font-primary400">
              Information generated or automatically collected when you use our
              services
            </span>
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            When you use our services, this generates technical data about which
            features you&apos;ve used, how you&apos;ve used them and the devices
            you use to access our services. See below for more details.
          </div>
          <ul className=" ml-5 list-disc md:text-lg font-primary500">
            <li>Usage Information</li>
          </ul>
          <div className="font-primary300 text-[15px] md:text-lg">
            Using the services generates data about your activity on our
            services, for instance how you use them (e.g., when you logged in,
            features you&apos;ve been using, actions taken, information shown to
            you, referring webpages address and ads that you interacted with)
            and your interactions with other users (e.g., users you connect and
            interact with, and when you matched and exchanged messages with
            them).
          </div>
          <ul className=" ml-5 list-disc text-[15px] md:text-lg font-primary500">
            <li>Device Information</li>
          </ul>
          <div className="font-primary300 text-[15px] md:text-lg">
            We collect information from and about the device(s) you use to
            access our services, including hardware and software information
            such as IP address, device ID and type, apps settings and
            characteristics, app crashes, advertising IDs (which are randomly
            generated numbers that you can reset by going into your device
            settings and, in some cases, disable entirely), and identifiers
            associated with cookies or other technologies that may uniquely
            identify a device or browser.
          </div>
          <ul className=" ml-5 list-disc text-[17px] md:text-lg font-primary500">
            <li>Information collected by cookies and similar technologies</li>
          </ul>
          <div className="font-primary300 text-[15px] md:text-lg">
            We use and may allow others to use cookies and similar technologies
            (e.g., web beacons, pixels and SDKs) to recognize you and/or your
            device(s). You may read our Cookie Policy for more information on
            why we use them and how you can better control their use.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            Some web browsers (including Safari, Internet Explorer, Firefox and
            Chrome) have a &quot;Do Not Track&quot; (&quot;DNT&quot;) feature
            that tells a website that a user does not want to have his or her
            online activity tracked. If a website that responds to a DNT signal
            receives a DNT signal, the browser can block that website from
            collecting certain information about the browser&apos;s user. Not
            all browsers offer a DNT option and DNT signals are not yet uniform.
            For this reason, many businesses, including Cube, do not currently
            respond to DNT signals.
          </div>
          <ul className=" ml-5 list-disc text-[17px] md:text-lg font-primary500">
            <li>Other Information with your Consent</li>
          </ul>
          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400 ">Precise geolocation data</span>:
            If you give us your consent, we can collect your precise geolocation
            (latitude and longitude) from your device. The collection of your
            geolocation may occur in the background even when you aren&apos;t
            using the services if the permission you gave us expressly permits
            such collection. If you decline permission for us to collect your
            precise geolocation, we will not collect it, and our services that
            rely on precise geolocation may not be available to you.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400 ">Selfie Verification data: </span>
            : If you choose to participate in our Selfie Verification feature,
            we collect your face geometry data, which may be considered
            biometric data in some jurisdictions, to verify that you&apos;re the
            real you. You can learn more about Selfie Verification and how we
            process your face geometry data here. Other information: We may
            collect other information with your permission, such as photos and
            videos (for instance, if you want to publish a photo or video or
            participate in streaming features on our services).
          </div>

          <div className="font-primary300 text-[15px] md:text-lg">
            Other information: We may collect other information with your
            permission, such as photos and videos (for instance, if you want to
            publish a photo or video or participate in streaming features on our
            services).
          </div>
          <div className="font-primary400 text-[17px] md:text-lg">
            <span className="font-primary400">How We Use Your Information</span>
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            We use the information we collect to provide, maintain, and improve
            the Services, to personalize your experience, to communicate with
            you, and to enforce our policies. We may also use your information
            for research and analytics purposes.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            We may use your information to send you marketing communications,
            such as newsletters or promotional emails. You can opt-out of
            receiving these communications at any time by following the
            instructions provided in the communication.
          </div>
          <div className="font-primary400 text-[17px] md:text-lg">
            <span className="font-primary400">
              A. &nbsp;&nbsp;&nbsp;&nbsp;To administer your account and provide
              our services to you
            </span>
          </div>
          <ul className=" ml-5 list-disc text-[15px] md:text-lg font-primary300">
            <li>Create and manage your account</li>
            <li>
              Provide you with customer support and respond to your requests
            </li>
            <li>Communicate with you about our services</li>
            <li>
              Personalize pricing, offer discounts and other promotions, and
              complete your transactions
            </li>
            <li>Administer sweepstakes and contests</li>
          </ul>
          <div className="font-primary400 text-[17px] md:text-lg">
            <span className="font-primary400">
              B.&nbsp;&nbsp;&nbsp;&nbsp; To help you connect with other users
            </span>
          </div>
          <ul className=" ml-5 list-disc text-[15px] md:text-lg font-primary300">
            <li>
              Recommend you to other users and recommend other users to you
            </li>
            <li>Show users&apos; profiles to one another</li>
            <li>Enable users to search for and connect with users</li>
          </ul>
          <div className="font-primary400 text-[17px] md:text-lg">
            <span className="font-primary400">
              C.&nbsp;&nbsp;&nbsp;&nbsp; To provide offers and operate
              advertising and marketing campaigns
            </span>
          </div>
          <ul className=" ml-5 list-disc text-[15px] md:text-lg font-primary300">
            <li>
              Perform and measure the effectiveness of advertising campaigns on
              our services and marketing our services off our platform
            </li>
            <li>
              Communicate with you about products or services that we believe
              may interest you
            </li>
          </ul>
          <div className="font-primary400 text-[17px] md:text-lg">
            <span className="font-primary400">
              D.&nbsp;&nbsp;&nbsp;&nbsp; To improve our services and develop new
              ones
            </span>
          </div>
          <ul className=" ml-5 list-disc text-[15px] md:text-lg font-primary300">
            <li>Administer focus groups, market studies and surveys</li>
            <li>
              Review interactions with customer care teams to improve our
              quality of service
            </li>
            <li>
              Understand how users typically use the services to improve them
              (for instance, we may decide to change the look and feel or even
              substantially modify a given feature based on how users react to
              it)
            </li>
            <li>
              Develop new features and services (for example, we may decide to
              build a new interests-based feature further to requests received
              from users
            </li>
          </ul>
          <div className="font-primary400 text-[17px] md:text-lg">
            <span className="font-primary400">
              E.&nbsp;&nbsp;&nbsp;&nbsp; To prevent, detect and fight fraud and
              other illegal or unauthorized activities
            </span>
          </div>
          <ul className=" ml-5 list-disc text-[15px] md:text-lg font-primary300">
            <li>
              Find and address ongoing, suspected or alleged violations of our
              Terms of Use, nnotably through the review of reports and
              interactions between members
            </li>
            <li>
              Better understand and design countermeasures against violations of
              our Terms of Use
            </li>
            <li>
              Retain data related to violations of our Terms of Use to address
              the violation and prevent against recurrences
            </li>
            <li>
              Enforce or exercise our rights, for example our rights set out in
              our Terms of Use
            </li>
            <li>
              Communicate to individuals who submit a report, including what
              we&apos;ve done as a result of their submission
            </li>
          </ul>
          <div className="font-primary400 text-[17px] md:text-lg">
            <span className="font-primary400">
              F.&nbsp;&nbsp;&nbsp;&nbsp; To ensure legal compliance
            </span>
          </div>
          <ul className=" ml-5 list-disc text-[15px] md:text-lg font-primary300">
            <li>Comply with legal requirements</li>
            <li>Assist law enforcement</li>
            <li>
              For information on how we process personal information through
              profiling and automated decision-making, please see our FAQ.
            </li>
            <li>
              To process your information as described in this Privacy Policy,
              we rely on the following legal bases:
            </li>
            <li>
              Provide our service to you: The reason we process your information
              for purposes A and B above is to perform the contract that you
              have with us. For instance, as you go about using our service to
              build meaningful connections, we use your information to maintain
              your account and your profile, make it viewable to other users and
              recommend other users to you and to otherwise provide our free and
              paid features to you and other users.
            </li>
            <li>
              Legitimate interests: We process your information for purposes C,
              D and E above, based on our legitimate interest. For instance, we
              analyze users&apos; behavior on our services to continuously
              improve our offerings, we suggest offers we think might interest
              you and promote our own services, we process information to help
              keep our users safe and we process data where necessary to enforce
              our rights, assist law enforcement and enable us to defend
              ourselves in the event of a legal action.
            </li>
            <li>
              Comply with applicable laws and regulations: We process your
              information for purpose F above where it is necessary for us to
              comply with applicable laws and regulations and evidence our
              compliance with applicable laws and regulations. For example, we
              retain traffic data and data about transactions in line with our
              accounting, tax and other statutory data retention obligations and
              to be able to respond to valid access requests from law
              enforcement. We also keep data evidencing consents users give us
              and decisions they may have taken to opt-out of a given feature or
              processing.
            </li>
            <li>
              Consent: If you choose to provide us with information that may be
              considered &quot;special&quot; or &quot;sensitive&quot; in certain
              jurisdictions, such as your sexual orientation, you&apos;re
              consenting to our processing of that information in accordance
              with this Privacy Policy. From time to time, we may ask for your
              consent to collect specific information such as your precise
              geolocation or use your information for certain specific reasons.
              In some cases, you may withdraw your consent by adapting your
              settings (for instance in relation to the collection of our
              precise geolocation) or by deleting your content (for instance
              where you entered information in your profile that may be
              considered &quot;special&quot; or &quot;sensitive&quot;). In any
              case, you may withdraw your consent at any time by contacting us
              at the address provided at the end of this Privacy Policy.
            </li>
          </ul>
          <div className="font-primary400 text-[17px] md:text-lg">
            <span className="font-primary400"> Your Rights and Choices</span>
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            We want you to be in control of your information, so we want to
            remind you of the following options and tools available to you:
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            Access / Update tools in the service. Tools and account settings can
            help you access, rectify or remove information that you provided to
            us and that’s associated with your account directly within the
            service. If you have any questions on those tools and settings,
            please contact our customer care team for help here.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            Device permissions. Mobile platforms can have permission systems for
            specific types of device data and notifications, such as phone
            contacts, pictures, location services, push notifications and
            advertising identifiers. You can change your settings on your device
            to either consent or oppose the collection or processing of the
            corresponding information or the display of the corresponding
            notifications. Of course, if you do that, certain services may lose
            functionality.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            Uninstall. You can stop all information collection by an app by
            uninstalling it using the standard uninstall process for your
            device. Remember that uninstalling an app does NOT close your
            account. To close your account, please use the corresponding
            functionality on the service.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            Account closure. You can close your account by using the
            corresponding functionality directly on the service.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            We also want you to be aware of your privacy rights. Depending on
            where you live, you may have the right to:
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            Access/know. You may have the right to request a copy of the
            information we keep about you, and in certain circumstances to
            receive this in a portable format. You can exercise your right to
            access directly within the service by putting in a request here.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            Delete/erase.. You may request that we delete the personal
            information we keep about you. You can exercise your right to delete
            by submitting a request here.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            Correct/rectify/update. You can correct most information you
            provided to us by editing your profile directly in the service. If
            you believe the information we hold about you is inaccurate, you may
            contact us here to rectify it.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            Object/restrict. You may also have the right to object to or request
            that we restrict certain processing. To do so, please contact us
            <Link
              className="underline cursor-pointer font-primary400"
              href={"/contact"}
            >
              &nbsp;here
            </Link>
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            For your protection and the protection of all of our users, we may
            ask you to provide proof of identity before we can answer the above
            requests. Keep in mind, we may reject requests, including if we are
            unable to authenticate you, if the request is unlawful or invalid,
            or if it may infringe on trade secrets or intellectual property or
            the privacy or other rights of someone else. If you wish to receive
            information relating to another user, such as a copy of any messages
            you received from them through our service, the other user will have
            to contact us to submit a separate request for their information. We
            may also ask them to provide proof of identity before we can answer
            the request. Also, we may not be able to accommodate certain
            requests to object to or restrict the processing of personal
            information, notably where such requests would not allow us to
            provide our service to you anymore. For instance, we cannot provide
            our service if we do not have your date of birth and thus cannot
            ensure that you are 18 years of age or older.
          </div>
          <div className="font-primary400 text-[17px] md:text-lg">
            Information Sharing and Disclosure
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            We may share your information with third-party service providers who
            help us to provide and improve the Services, such as payment
            processors, hosting providers, and customer support providers. These
            service providers are bound by confidentiality obligations and are
            prohibited from using your information for any other purpose.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            We may also share your information with third-party advertisers and
            advertising networks, who may use your information to deliver
            targeted advertisements to you. You can opt-out of receiving
            targeted advertisements by following the instructions provided by
            the advertiser or advertising network.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            We may disclose your information in response to a subpoena, court
            order, or other legal process, or to establish or exercise our legal
            rights or defend against legal claims.
          </div>
          <div className="font-primary400 text-[17px] md:text-lg">
            Data Retention and Security
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            We retain your information for as long as necessary to provide the
            Services and to comply with our legal obligations. We implement
            reasonable security measures to protect your information from
            unauthorized access, disclosure, alteration, or destruction.
          </div>
          <div className="font-primary400 text-[17px] md:text-lg">
            Children&#39;s Privacy
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            The Services are not intended for children under the age of 18. We
            do not knowingly collect or solicit personal information from anyone
            under the age of 18. If we learn that we have collected personal
            information from a child under the age of 18, we will promptly
            delete that information.
          </div>
          <div className="font-primary400 text-[17px] md:text-lg">
            International Data Transfers
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            Your information may be transferred to and processed in countries
            other than the country in which you are located. These countries may
            have different data protection laws than your country of residence.
            By using the Services, you consent to the transfer of your
            information to countries outside of your country of residence.
          </div>
          <div className="font-primary400 text-[17px] md:text-lg">
            Your Rights
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            You have certain rights regarding your information, including the
            right to access, correct, or delete your information, as well as the
            right to object to or restrict the processing of your information.
            You can exercise these rights by contacting us at
            hello@cubedating.co.
          </div>
          <div className="font-primary400 text-[17px] md:text-lg">
            Changes to This Policy
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            We may update this Privacy Policy from time to time. If we make
            material changes to this Policy, we will notify you by email or by
            posting a notice on the Services. Your continued use of the Services
            after any such changes constitutes your acceptance of the updated
            Policy.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg mb-8 ">
            Contact Us
            <br />
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at{" "}
            <span className="underline font-primary400`">
              hello@cubedating.co
            </span>
            .
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default Privacypolicy;
