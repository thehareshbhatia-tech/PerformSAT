// PrivacyPolicy.jsx — the /privacy page.
//
// COUNSEL REVIEW REQUIRED: this copy was drafted in-house and has not been
// reviewed by an attorney. The bracketed placeholders ([LEGAL ENTITY NAME],
// [CONTACT EMAIL], [GOVERNING JURISDICTION]) are pending facts from the
// owner and MUST be filled in before public launch. Bump TERMS_VERSION in
// src/constants/legal.js whenever this document materially changes.

import React from 'react';
import LegalPageLayout from './LegalPageLayout';

const PrivacyPolicy = () => (
  <LegalPageLayout title="Privacy Policy" lastUpdated="June 9, 2026">
    <p>
      SEVA (operated by [LEGAL ENTITY NAME], referred to in this policy as
      "SEVA", "we", "us", or "our") is a web application that helps students
      prepare for the digital SAT. This Privacy Policy explains what
      information we collect when you use SEVA, how we use and store it, and
      the choices you have. By creating an account or using the service, you
      agree to the practices described here.
    </p>

    <h2>Information We Collect</h2>
    <p>We collect only the information needed to run the service:</p>
    <ul>
      <li>
        <strong>Account information.</strong> Your email address, the first
        name you provide at signup, and your password (which is handled by
        Firebase Authentication; we never see or store your password in
        plain text).
      </li>
      <li>
        <strong>Study profile.</strong> Information you choose to enter,
        such as whether you have taken the SAT before, a prior SAT score, a
        target score, target schools, a planned test date, and an optional
        profile photo.
      </li>
      <li>
        <strong>Practice and test activity.</strong> Your answers to
        practice questions and full-length practice tests, scores, timing
        data, and the diagnostic results and study plans the app generates
        from them. This is the core data that powers your personalized
        study experience.
      </li>
      <li>
        <strong>AI tutor messages.</strong> Messages you send to the
        built-in AI tutor, together with the question context needed to
        answer them (see Third-Party Services below).
      </li>
      <li>
        <strong>Usage information.</strong> Basic technical and usage data
        generated as you use the app, such as which features you use and
        when you last logged in, used to operate and improve the service.
      </li>
    </ul>
    <p>
      We do not collect payment information, precise location, or contacts,
      and we do not run third-party advertising trackers.
    </p>

    <h2>How We Use Your Information</h2>
    <ul>
      <li>To create and maintain your account and let you log in.</li>
      <li>
        To score your practice work, diagnose strengths and weaknesses,
        generate your study plan, and track your progress over time.
      </li>
      <li>To power the AI tutor's responses to your questions.</li>
      <li>
        To operate, troubleshoot, and improve the service, including
        understanding which features are used.
      </li>
      <li>
        To communicate with you about the service. If you opt in to
        notifications, to send study reminders you can turn off at any
        time.
      </li>
    </ul>
    <p>
      We do not sell your personal information, and we do not use it for
      third-party advertising.
    </p>

    <h2>Data Storage</h2>
    <p>
      Your account and study data are stored in Google Firebase services
      (Firebase Authentication for sign-in and Cloud Firestore for
      application data), hosted on Google Cloud infrastructure. Access to
      your data in Firestore is restricted by security rules so that only
      your authenticated account can read or write your own records. Data
      is encrypted in transit and at rest by Google's infrastructure.
    </p>

    <h2>Third-Party Services</h2>
    <p>
      We use a small number of service providers to operate SEVA. Each
      receives only the data needed to perform its function:
    </p>
    <ul>
      <li>
        <strong>Google Firebase</strong> (Authentication and Cloud
        Firestore) — sign-in and data storage, as described above.
      </li>
      <li>
        <strong>Vercel</strong> — hosts and serves the web application.
        Like any web host, Vercel processes standard request data such as
        IP addresses to deliver the site.
      </li>
      <li>
        <strong>Anthropic</strong> — powers the AI tutor. When you use the
        tutor, your messages and the relevant question context are sent to
        Anthropic's API to generate a response. We do not send your email
        address or account credentials with these requests.
      </li>
    </ul>
    <p>
      These providers process data on our behalf and are not permitted to
      use it for their own advertising purposes.
    </p>

    <h2>Data Retention and Deletion</h2>
    <p>
      We keep your account and study data for as long as your account is
      active, because your practice history is what makes your study plan
      work. You can request deletion of your account and associated data at
      any time by contacting us at [CONTACT EMAIL]. We will delete your
      personal data within a reasonable period after verifying the request,
      except where we are required to retain certain records by law.
    </p>

    <h2>Children's Privacy</h2>
    <p>
      SEVA is intended for students aged 13 and older. During signup, every
      user must confirm that they are 13 or older. We do not knowingly
      collect personal information from children under 13. If you are a
      parent or guardian and believe a child under 13 has created an
      account, contact us at [CONTACT EMAIL] and we will delete the account
      and its data. Users under 18 should review this policy with a parent
      or guardian.
    </p>

    <h2>Contact</h2>
    <p>
      If you have questions about this Privacy Policy or how your data is
      handled, contact [LEGAL ENTITY NAME] at [CONTACT EMAIL]. If we make
      material changes to this policy, we will update the date at the top
      of this page and, where appropriate, notify you in the app.
    </p>

    <p>
      SAT&reg; is a trademark registered by the College Board, which is not
      affiliated with and does not endorse this product.
    </p>
  </LegalPageLayout>
);

export default PrivacyPolicy;
