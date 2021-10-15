import React from "react";
import SiteStyled from "./SiteStyled";
import {
  H1_1,
  H3_1,
  H2_1,
  P,
  B,
  ButtonResolver,
  UL,
  LI,
  OL,
  Strong,
} from "../Element";
import { description, email, name } from "../../../shared";
import { capitalize } from "simpul";
import { effectiveDate } from "../../utils";

const SiteTerms = () => (
  <SiteStyled>
    <H1_1>Terms of Use</H1_1>
    <H3_1>{description.main}</H3_1>
    <H2_1>Terms</H2_1>
    <P>
      Our <B>Services</B> provide the means for these stories and all their
      surrounding interactions, <B>Content</B>, to take place.
    </P>
    <P>
      These Services come with <B>Terms</B> that govern your access to it. As a
      user accessing this site, you agree to be bound by these Terms, all
      applicable laws, rules, and regulations, and agree that you are
      responsible for compliance with any applicable local laws.
    </P>
    <P>
      If you do not agree with any of these terms, you are prohibited from using
      or accessing this site.
    </P>
    <H2_1>Content on the Services</H2_1>
    <H3_1>You own what you write.</H3_1>
    <P>
      Since the materials contained in this web site are protected by applicable
      copyright and trademark law, we reserve the right to remove Content that
      violates copyright infringements/violations, trademark violations, or
      other intellectual property misappropriation or impersonation (
      <B>Content Ownership Violations</B>).
    </P>
    <ButtonResolver resolve="email_feedback" $underline>
      If you believe that your Content has been copied in a way that constitutes
      one of the Content Ownership Violations, please report this by contacting
      us at {email.feedback}.
    </ButtonResolver>
    <H3_1>You are responsible for any Content you provide.</H3_1>
    <P>
      This includes compliance with applicable laws, rules, and regulations. You
      should only provide Content that you are comfortable sharing with others.
    </P>
    <P>
      All Content is the sole responsibility of the person who originated such
      Content. We may not monitor or control the Content posted via the Services
      and we cannot take responsibility for such Content.
    </P>
    <H3_1>Not all Content is welcome.</H3_1>
    <P>Content is prohibited if it:</P>
    <UL>
      <LI>falls under a Content Ownership Violation,</LI>
      <LI>is unlawful,</LI>
      <LI>is harassment,</LI>
      <LI>
        uses {name.main} to solicit or facilitate any transaction or gift
        involving certain goods and services,
      </LI>
      <LI>or, is spam.</LI>
    </UL>
    <P>
      We reserve the right to remove prohibited Content as well as ban users who
      engage in posting such Content.
    </P>
    <H2_1>Behavior on the Services</H2_1>
    <P>
      In addition to not posting prohibited Content, {name.main} users are also
      prohibited from:
    </P>
    <UL>
      <LI>
        creating multiple accounts to evade punishment or avoid restrictions,
      </LI>
      <LI>
        or, doing anything to interfere with or impair the intended operation of
        the Service.
      </LI>
    </UL>
    <P>We reserve the right to ban users who engage in prohibited behavior.</P>
    <H2_1>Disclaimers and Limitation of Liability</H2_1>
    <H3_1>Disclaimers</H3_1>
    <P>
      The materials on {name.main} are provided &quot;as is.&quot;{" "}
      {capitalize(name.main)} makes no warranties, expressed or implied, and
      hereby disclaims and negates all other warranties, including without
      limitation, implied warranties or conditions of merchantability, fitness
      for a particular purpose, or non-infringement of intellectual property or
      other violation of rights.
    </P>
    <H3_1>Limitation of Liability</H3_1>
    <P>
      In no event shall {name.main} be liable for any indirect, incidental,
      special, consequential or punitive damages, or any loss of profits or
      revenues, whether incurred directly or indirectly, or any loss of data,
      use, goodwill, or other intangible losses, resulting from:
    </P>
    <OL>
      <LI>
        your access to or use of or inability to access or use the Services,
      </LI>
      <LI>
        any conduct or content of any third party on the Services, including
        without limitation, any defamatory, offensive or illegal conduct of
        other users or third parties,
      </LI>
      <LI>any content obtained from the Services,</LI>
      <LI>
        or, unauthorized access, use or alteration of your transmissions or
        Content.
      </LI>
    </OL>
    <P>
      The limitations of this subsection shall apply to any theory of liability,
      whether based on warranty, contract, statute, tort (including negligence)
      or otherwise, and whether or not {name.main} has been informed of the
      possibility of any such damage, and even if a remedy set forth herein is
      found to have failed of its essential purpose.
    </P>
    <H2_1>Governing Law</H2_1>
    <ButtonResolver resolve="email_feedback" $underline>
      If you have an issue or a dispute, you agree to raise it and try to
      resolve it with us informally by emailing us at {email.feedback}.
    </ButtonResolver>
    <P>
      Except for the government entities listed below: any claims arising out of
      or relating to these Terms will be governed by the laws of Virginia and
      will be brought solely in the federal or state courts located in Virginia.
      You consent to personal jurisdiction in these courts.
    </P>
    <P>
      If you are a U.S. city, county, or state government entity, then this
      section does not apply to you.
    </P>
    <P>
      If you are a U.S. federal government entity: any claims arising out of or
      relating to these Terms will be governed by the laws of the United States
      of America. To the extent permitted by federal law, the laws of Virginia
      will apply in the absence of applicable federal law. All disputes related
      to these Terms will be brought solely in the federal or state courts
      located in Virginia.
    </P>
    <H2_1>Changes to these Terms</H2_1>
    <P>
      From time to time, these terms get changed. Changes aren’t retroactive and
      the current Terms will govern our relationship with you.
    </P>
    <ButtonResolver resolve="email_feedback" $underline>
      If you have any questions, you may reach us at {email.feedback}.
    </ButtonResolver>
    <Strong>Effective: {effectiveDate}.</Strong>
  </SiteStyled>
);

export default SiteTerms;
