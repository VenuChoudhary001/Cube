import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const CommunityGuidelines = () => {
  return (
    <>
      <Navbar />
      <section className="container p-6 md:p-0 gap-8 mx-auto flex flex-col mb-12 justify-center pt-12">
        <div className="text-4xl my-8 text-center font-primary500">
          Community Guidelines
        </div>
        <main className="flex flex-col max-w-[90vw] md:max-w-[1000px] mx-auto items-start justify-start gap-4 lg:gap-8">
          <div className="font-primary300 text-[15px] md:text-lg">
            Welcome to the Cube community! We&apos;re committed to fostering an
            environment that promotes honesty, kindness, and respect towards
            others. Our team of moderators and automated systems work together
            to ensure that users who violate these community guidelines may face
            consequences.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            At Cube, we encourage free expression as long as it doesn&apos;t
            harm or offend others. To maintain a safe and welcoming community,
            we require everyone to follow these guidelines both on and offline
            and hold everyone accountable to the same standards.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            Cube is not the place for the following:
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400">Minors: </span>Cube is for users
            who are 18 years of age or older. We don&apos;t allow images of
            unaccompanied minors or any content that encourages harm to minor
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400">Nudity or sexual content: </span>
            Please keep it appropriate for public consumption and refrain from
            sharing sexually explicit content or intimate details in your bio.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400">Harassment: </span>We don&apos;t
            tolerate any targeted abuse or harassment against any user,
            including sending unsolicited sexual content to matches. Reports of
            stalking, threats, bullying, or intimidation are taken seriously.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400">Violence and physical harm:</span>
            We don&apos;t allow violent, graphic, or gory content on Cube, or
            any actions or content that promote or threaten violence, including
            terrorism.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400">Hate speech: </span>We do not
            tolerate any content that promotes or advocates for racism, bigotry,
            hatred, or violence against individuals or groups based on factors
            like race, ethnicity, religion, disability, gender, age, national
            origin, sexual orientation, or gender identity.
          </div>

          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400">Private information : </span>
            Please refrain from sharing any private information such as social
            security numbers, passports, passwords, financial information, or
            unlisted contact information like phone numbers, email addresses,
            home/work addresses.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400">Spam: </span>Don&apos;t use Cube
            to drive people to external websites via a link or otherwise.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400">Promotion or solicitation: </span>
            While it&apos;s fine to invite your matches to events you&apos;re
            attending, using Cube to advertise your business, non-profit,
            political campaign, contest, or to conduct research is prohibited.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400">
              Prostitution and trafficking:{" "}
            </span>
            Promoting or advocating for commercial sexual services, human
            trafficking, or other non-consensual sexual acts is strictly
            prohibited.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400">Scamming: </span> Anyone
            attempting to get other users&apos; private information for
            fraudulent or illegal activity may be banned. Sharing financial
            account information (PayPal, Venmo, etc.) for the purpose of
            receiving money from other users is also prohibited.  
          </div>

          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400">Impersonation : </span>Don&apos;t
            pretend to be someone else or misrepresent any affiliation,
            connection, or association with any person or entity.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400">
              {" "}
              Copyright and trademark infringement:{" "}
            </span>
            Don&apos;t display any copyrighted or trademarked work in your Cube
            profile unless you are allowed to do so.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400"> Illegal usage: </span>Don&apos;t
            use Cube to do anything illegal.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400">One person, one account : </span>{" "}
            Each Cube account must have only one owner. Don&apos;t create an
            account with a friend or significant other, and please don&apos;t
            maintain multiple Cube accounts.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            <span className="font-primary400">Third-party apps : </span>The use
            of any third-party apps that claim to offer our service or unlock
            special Cube features, like auto-swipers, is not allowed.
          </div>
          <div className="font-primary300 text-[15px] md:text-lg">
            Thank you for being considerate and abiding by our community
            guidelines. If you encounter any behavior that violates these
            guidelines or have any questions, please don&apos;t hesitate to
            report it to our moderation team.
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default CommunityGuidelines;
