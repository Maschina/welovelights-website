import { cn } from "@/lib/utils";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PrivacyPolicy = async ({
}) => {
  return (
    <section className={cn("")}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-16">
          <h1 className="mb-4 text-6xl font-bold tracking-tight text-muted-foreground">
            Privacy Policy
          </h1>
          <div className="flex flex-col items-start mb-4">
            <p className="text-base text-muted-foreground">
              Last updated January 02, 2026
            </p>
          </div>
        </div>
        
        <Card className="mb-8 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-primary text-xl">In Short</CardTitle>
          </CardHeader>
          <CardContent className="text-white/80 space-y-3">
            <p>
              We Love Lights collects minimal personal information (Device ID, email/phone, OS version) solely to provide customer support and improve your experience with our app, and only when you explicitly consent to it.
            </p>
            <p>
              Your data is stored securely on EU servers with encryption and strict access controls. We comply with GDPR and never sell your information.
            </p>
            <p>
              You have full rights to access, correct, delete, or export your data at any time. Contact us at <Link href="mailto:hello@welovelights.app" className="text-primary hover:underline">hello@welovelights.app</Link> to exercise your rights.
            </p>
          </CardContent>
        </Card>

        <div className="text-white space-y-4">
          <h2 className="text-lg font-bold">Introduction and organizational info</h2>
          <p>
            We, at We Love Lights, are dedicated to serving our customers and contacts to the best of our abilities. Part of our commitment involves the responsible management of personal information collected through our website welovelights.app, and any related interactions. Our primary goals in processing this information include:
          </p>
          <ul className="list-disc list-inside">
            <li>Enhancing the user experience on our platform by understanding customer needs and preferences.</li>
              <li>Providing timely support and responding to inquiries or service requests.</li>
              <li>Improving our products and services to meet the evolving demands of our users.</li>
              <li>Conducting necessary business operations, such as billing and account management.</li>
          </ul>
          <p>It is our policy to process personal information with the utmost respect for privacy and security. We adhere to all relevant regulations and guidelines to ensure that the data we handle is protected against unauthorized access, disclosure, alteration, and destruction. Our practices are designed to safeguard the confidentiality and integrity of your personal information, while enabling us to deliver the services you trust us with.</p>
          <p>We do not have a designated Data Protection Officer (DPO) but remain fully committed to addressing your privacy concerns. Should you have any questions or require further information about how we manage personal information, please feel free to contact us at hello@welovelights.app or +49 15123505506.</p>
          <p>Your privacy is our priority. We are committed to processing your personal information transparently and with your safety in mind. This commitment extends to our collaboration with third-party services that may process personal information on our behalf, such as in the case of sending invoices. Rest assured, all activities are conducted in strict compliance with applicable privacy laws.</p>
          <h2 className="text-lg font-bold">Scope and application</h2>
          <p>Our privacy policy is designed to protect the personal information of all our stakeholders, including website visitors, registered users, and customers. Whether you are just browsing our website welovelights.app, using our services as a registered user, or engaging with us as a valued customer, we ensure that your personal data is processed with the highest standards of privacy and security. This policy outlines our practices and your rights related to personal information.</p>
          <h2 className="text-lg font-bold">Data collection and processing</h2>
          <p>Our commitment to transparency and data protection extends to how we collect and use your personal information. We gather personal data through various interactions, including but not limited to, when you utilize our services or products such as App &quot;We Love Lights&quot;, or directly provide information to us.</p>
          <p>The following list details the types of personal information we may process:</p>
          <ul className="list-disc list-inside">
            <li>Device ID</li>
            <li>Email address and/or Phone number</li>
            <li>Operating system and version</li>
          </ul>
          <p>Please note, that we only process information that is essential for delivering our services, complying with legal obligations, or enhancing your user experience. Your privacy is paramount, and we are dedicated to handling your personal information responsibly and in accordance with all applicable laws.</p>
          <p>At We Love Lights, we believe in using personal information responsibly and ethically. The data we collect serves multiple purposes, all aimed at enhancing the services we offer and ensuring the highest level of satisfaction among our users, customers, and employees. Here are the key ways in which we use the personal information collected:</p>
          <ul className="list-disc list-inside">
            <li>User feedback and satisfaction</li>
            <li>Customer support</li>
          </ul>
          <p>Your privacy is our priority. We process your personal information transparently and in accordance with your preferences and applicable privacy laws. We are committed to ensuring that your data is used solely for the purposes for which it was collected and in ways that you have authorized.</p>
          <h2 className="text-lg font-bold">Data storage and protection</h2>
          <h3 className="text-md font-bold">Data storage</h3>
          <ul className="list-disc list-inside">
            <li>Personal information is stored in secure servers located in the following locations: EU. For services that require international data transfer, we ensure that such transfers comply with all applicable laws and maintain data protection standards equivalent to those in our primary location.</li>
            <li>Data hosting partners: We partner with reputable data hosting providers committed to using state-of-the-art security measures. These partners are selected based on their adherence to stringent data protection standards.</li>
          </ul>
          <h3 className="text-md font-bold">Data protection measures</h3>
          <ul className="list-disc list-inside">
            <li>Encryption: To protect data during transfer and at rest, we employ robust encryption technologies.</li>
            <li>Access control: Access to personal information is strictly limited to authorized personnel who have a legitimate business need to access the data. We enforce strict access controls and regularly review permissions.</li>
            <li>Security audits and monitoring: Regular security audits are conducted to identify and remediate potential vulnerabilities. We also monitor our systems for unusual activities to prevent unauthorized access.</li>
          </ul>
          <h2 className="text-lg font-bold">Data processing agreements</h2>
          <p>When we share your data with third-party service providers, we do so under the protection of Data Processing Agreements (DPAs) that ensure your information is managed in accordance with GDPR and other relevant data protection laws. These agreements mandate that third parties implement adequate technical and organizational measures to ensure the security of your data.</p>
          <h3 className="text-md font-bold">Transparency and control</h3>
          <p>We believe in transparency and providing you with control over your personal information. You will always be informed about any significant changes to our sharing practices, and where applicable, you will have the option to consent to such changes.</p>
          <p>Your trust is important to us, and we strive to ensure that your personal information is disclosed only in accordance with this policy and when there is a justified reason to do so. For any queries or concerns about how we share and disclose personal information, please reach out to us at hello@welovelights.app or +49 15123505506.</p>
          <h2 className="text-lg font-bold">User rights and choices</h2>
          <p>At We Love Lights, we recognize and respect your rights regarding your personal information, in accordance with the General Data Protection Regulation (GDPR) and other applicable data protection laws. We are committed to ensuring you can exercise your rights effectively. Below is an overview of your rights and how you can exercise them:</p>
          <ul className="list-disc list-inside">
            <li>Right of access (Art. 15 GDPR): You have the right to request access to the personal information we hold about you and to obtain information about how we process it.</li>
            <li>Right to rectification (Art. 16 GDPR): If you believe that any personal information we hold about you is incorrect or incomplete, you have the right to request its correction or completion.</li>
            <li>Right to erasure (&apos;right to be forgotten&apos;) (Art. 17 GDPR): You have the right to request the deletion of your personal information when it is no longer necessary for the purposes for which it was collected, among other circumstances.</li>
            <li>Right to restriction of processing (Art. 18 GDPR): You have the right to request that we restrict the processing of your personal information under certain conditions.</li>
            <li>Right to data portability (Art. 20 GDPR): You have the right to receive your personal information in a structured, commonly used, and machine-readable format and to transmit those data to another controller.</li>
            <li>Right to object (Art. 21 GDPR): You have the right to object to the processing of your personal information, under certain conditions, including processing for direct marketing.</li>
            <li>Right to withdraw consent (Art. 7(3) GDPR): Where the processing of your personal information is based on your consent, you have the right to withdraw that consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.</li>
            <li>Right to lodge a complaint (Art. 77 GDPR): You have the right to lodge a complaint with a supervisory authority if you believe our processing of your personal information violates applicable data protection laws.</li>
          </ul>
          <h3 className="text-md font-bold">Exercising your rights</h3>
          <p>To exercise any of these rights, please contact us at hello@welovelights.app or +49 15123505506. We will respond to your request in accordance with applicable data protection laws and within the timeframes stipulated by those laws. Please note, in some cases, we may need to verify your identity as part of the process to ensure the security of your personal information.</p>
          <p>We are committed to facilitating the exercise of your rights and to ensuring you have full control over your personal information. If you have any questions or concerns about how your personal information is handled, please do not hesitate to get in touch with us.</p>
          <h2 className="text-lg font-bold">Compliance with United States privacy laws</h2>
          <p>To appeal a decision we may make regarding your request, please contact us within 60 days of receiving our response by submitting your request through the link on our website or by using one of the following methods:</p>
          <ul className="list-disc list-inside">
            <li>Email: hello@welovelights.app</li>
            <li>Phone: 15123505506</li>
          </ul>
          <p>In your appeal request, please include your original request, the date of our response, and a brief explanation of why you believe our decision was incorrect.</p>
          <p>For residents of the United States of America the following provisions apply:</p>
          <h3 className="text-md font-bold">A. Individual rights</h3>
          <p>The California Consumer Privacy Act provides residents of California specific rights regarding their personal information, additional to what has been described before.</p>
          <h3 className="text-md font-bold">B. Right to Know</h3>
          <p>You may request that we disclose to you what personal information we have collected, used, shared, or sold about you, and why we collected, used, shared, or sold that information. Specifically, you may request the disclosure of:</p>
          <ul className="list-disc list-inside">
            <li>The categories of personal information collected</li>
            <li>Specific pieces of personal information collected</li>
            <li>The categories of sources from which we collected personal information</li>
            <li>The purposes for which personal information is used</li>
            <li>The categories of third parties with whom personal information is shared</li>
            <li>The categories of information that are sold or disclosed to third parties</li>
          </ul>
          <h3 className="text-md font-bold">C. Right to Delete</h3>
          <p>You may request that we delete personal information we have collected about you.</p>
          <h3 className="text-md font-bold">D. Right to Correct</h3>
          <p>You may ask us to correct inaccurate information that we have about you.</p>
          <h3 className="text-md font-bold">E. Right to Limit</h3>
          <p>You can request us to only use your sensitive personal information (for example, your social security number, your genetic data, etc.) for limited purposes, such as providing you with the services you requested.</p>
          <h3 className="text-md font-bold">F. Right to Opt-Out</h3>
          <p>We Love Lights does not sell or share personal information. In case your data is sold or shared you can make use of your right to opt-out of the sale or sharing of personal information by submitting your request through the link on our website.</p>
          <h3 className="text-md font-bold">G. Right to Non-Discrimination</h3>
          <p>You have the right to be protected from discrimination for exercising your rights.</p>
          <h3 className="text-md font-bold">H. Submitting requests</h3>
          <p>You may submit your request by sending an email to hello@welovelights.app or by phone at +49 15123505506. We will compare the information you submit to us with the information we have in our records to verify your request. We will then respond to your request in accordance with the requirements.</p>
          <h3 className="text-md font-bold">J. Sensitive data and/or biometric data</h3>
          <p>We only process sensitive personal data with your prior consent and only for specific purposes that are clearly disclosed at the time of collection. You may withdraw your consent at any time by submitting your request through the link on our website or by email to hello@welovelights.app.</p>
        </div>
      </div>
    </section>
  );
};

export { PrivacyPolicy };

export default PrivacyPolicy;