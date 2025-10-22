"use client";

import React from "react";

export default function TermsAndConditions() {
    return (
        <main className="bg-gray-50 min-h-screen py-12 px-6 md:px-20">
            <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">

                <h1 className="text-3xl md:text-4xl font-bold text-[#8aa921] mb-6">
                    Terms and Conditions
                </h1>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    Please note that before you register or renew a domain name (including .uk domain names)
                    you should be aware of Nominet’s terms and conditions of Domain Name Registration,
                    which can be found at <a href="https://www.nominet.uk/go/terms" className="text-red-700 underline">www.nominet.uk/go/terms</a>.
                </p>

                {/* Section: Domain Registrations */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-[#8aa921]     mb-3">DOMAIN REGISTRATIONS, RENEWALS AND TRANSFERS</h2>

                    <h3 className="text-xl font-medium text-[#8aa921] mt-4 mb-2">Domain name registration</h3>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                        <strong>Overview:</strong> This Domain Name Registration Agreement (this "Agreement") is entered into by and between Websitebrokers Ltd and you, and is made effective as of the date of electronic acceptance. This Agreement sets forth the terms and conditions of your use of Websitebrokers Ltd Domain Name Registration services (the "Domain Name Registration Services" or the "Services"). The terms "we", "us" or "our" shall refer to Websitebrokers Ltd. The terms "you", "your", "User" or "customer" shall refer to any individual or entity who accepts this Agreement. Unless otherwise specified, nothing in this Agreement shall be deemed to confer any third-party rights or benefits. Your electronic acceptance of this Agreement signifies that you have read, understand, acknowledge and agree to be bound by this Agreement.
                    </p>

                    <h3 className="text-xl font-medium text-[#8aa921] mt-4 mb-2">Fees and Payments</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-2 leading-relaxed space-y-1">
                        <li>Registration fees for .co.uk domain names: £12.99 per year</li>
                        <li>Registration fees for .uk domain names: £9.99 per year</li>
                        <li>Early cancellation during registration period: £19.99</li>
                    </ul>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                        You agree to pay any and all prices and fees due for Services purchased or obtained at this Site at the time you order the Services. Websitebrokers Ltd expressly reserves the right to change or modify its prices and fees at any time, and such changes or modifications shall be posted online at this Site and effective immediately without need for further notice to you. If you have purchased or obtained Services for a period of months or years, changes or modifications in prices and fees shall be effective when the Services in question come up for renewal as further described below.
                        * Renewal price subject to change prior to actual date of renewal.          </p>

                    <h3 className="text-xl font-medium text-[#8aa921] mt-4 mb-2">Charges and Payment Duration and Renewal</h3>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                        It is your sole responsibility to ensure that all of your registered Domain Names are renewed prior to their expiration dates. Once the Domain Name expires, all associated services will be deactivated and it will be removed from your account. You can still contact us to confirm after this point whether the domain name is available to renew. You accept and recognise that once a Domain Name expires, you lose all rights on it.
                    </p>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                        gTLDs renewed after the expiration date that have entered into the renewal status RGP are subject to additional fees from the Registry. The status of your Domain Name can be checked by doing a WHOIS lookup. You accept that we may place the domain name under the RGP status shortly after the Expiration Period. In such cases, you will have the possibility to renew the Domain Name by paying all the applicable fees and any past-due renewal fees. If the Domain Name is not renewed by you during the RGP, the Domain Name will be deleted at the Registry and can be registered by anyone;                            </p>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                        A Domain Name, once registered, will fall due for renewal at the date specified by the Registry, this may not be in line with the initial registration date. It is your responsibility to monitor the renewal dates of your Domain Names and ensure we receive payment by the date it is due.                            </p>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                        Unless you have notified us that you do not wish us to send you reminders of renewal date our sole obligation in relation to the renewal of Domain Names is to issue one reminder to you 30 days before the renewal date at your last notified email address about the renewal date of the relevant Domain Name. This obligation will lapse if your registration of the domain name lapses or terminates for any reason. We will not be liable in respect of the non-renewal of a Domain Name if, having sent you a renewal notice, we do not receive notice of renewal and the applicable payment, or if you fail to notify us of a change of contact details.
                    </p>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                        At the end of the expiration period, you formally accept that we reserve the right, at our own discretion, to either: Transfer the property of the expired domain to its own name or to the name of any of our group companies and to renew the domain to its own name. You hereby accept that we will then become the Registrant of such domain name and have all the corresponding rights. Only in that case, will you have the possibility to get the domain name back up to ninety (90) days after the expiry date of the domain name, by paying all the applicable fees. We will then transfer the property of the domain back to you. After the end of the ninety (90) day period, if you don't exercise the rights under this provision, you will be deemed to have abandoned the Domain Name services, and to relinquish all interests and use of the Domain Name services; or
                    </p>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                        Renew the expired domain name at our costs, keeping the Registrant data unchanged, and following your express approval. In such case, any Services associated to the Domain Name will be deactivated. You will remain the registrant of the Domain Name, and you will be able to get the Domain Name back and recreate the associated services by ordering the Domain Name and the services at the price and under the contractual conditions applicable at the time of your orders; or
                    </p>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                        To delete the domain at the Registry. In such cases, the domain will be released and can be registered by anyone. We decline any and all liability in case the domain name is registered by any third-party. You remain solely responsible for the non-renewal of the domain name before the expiry date and for any consequences that may arise.
                    </p>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                        You formally accept that it is our exclusive decision to opt for one or another of the options listed above. You have no right whatsoever on such options and waives any right of contestation or claim in that respect.
                    </p>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                        For ccTLDs, the domain name expiration process will follow the relevant Registry regulations and processes. You accept and recognise that once a ccTLD expires, you lose all rights on the Domain Name.
                    </p>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                        <span className="text-blue-900 font-bold">Disputes:</span> If we become aware of any dispute with any other person or business or organisation regarding any of your Domain Name(s), we may, at our sole discretion, and without notice or liability to you, cease any further use or service of such Domain Names including, without limitation, deleting or suspending them from our computer systems, and/or making appropriate representations or providing information to any relevant authority or interested party.
                    </p>
                </section>

                {/* Section: Renewal Terms */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-[#8aa921] mb-3">DOMAIN NAME RENEWAL TERMS</h2>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                        When you register a domain name, you will have the following renewal options:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Automatic Renewal:</strong> Automatic Renewal is the default setting. Domain names will automatically renew, for a period equivalent to the length of your original domain name registration, and payment will be taken from the Payment Method you have on file Websitebrokers Ltd ‘s then current rates. Thus, if you have chosen to register your domain name for one (1) year, Websitebrokers Ltd will automatically renew it for one (1) year. If you have chosen to register your domain name for two (2) years, Websitebrokers Ltd will automatically renew it for two (2) years, and so on. If you wish to change your automatic renewal term to a different period from your original term, you may manually renew the domain registration to establish a new default automatic renewal term for the domain.</li>
                        <li><strong>Manual Renewal:</strong> If you have elected to turn off automatic renewal and cancel the product (i.e., cancel the domain name registration) effective at expiration of the then current term, you may nonetheless elect to manually renew the domain name at anytime prior to its expiration date by by calling customer service on Tel. +44 7624 483888 or emailing us at lynnmcnab48@gmail.com (should you in fact want the domain name to be renewed). If you fail to manually implement the renewal before the expiration date, the domain name will be cancelled and you will no longer have use of that name.
                        </li>
                    </ul>
                    <p className="text-gray-700 mb-2 mt-5 leading-relaxed">
                        All renewals will be subject to the terms of this Agreement, as it may be amended from time to time, and you acknowledge and agree to be bound by the terms of this Agreement (as amended) for all renewed domains. Domain name renewals will be non-refundable. In the event that we are unable to automatically renew your domain name for the renewal option selected for any reason, we may automatically renew your domain name for a period less than your original registration period to the extent necessary for the transaction to succeed. If for any reason Websitebrokers Ltd is not able to take the payment from the Payment Method you have on file, and you fail to respond to our notices, your domain name registration will expire. It is your responsibility to keep your Payment Method information current, which includes the expiration date if you are using a credit card. Renewal must be processed no later than seven days before the expiration date, or your domain name will be placed in non-renewal status. When the domain name is in non-renewal status, you can renew the domain name only by calling Websitebrokers.co.uk on Tel. +44 7624 483888 and requesting that the domain name be renewed.If you fail to manually implement the renewal of any cancelled product before the expiration date, the domain name will be cancelled and you will no longer have use of that name. You agree that Websitebrokers Ltd will not be responsible for cancelled domain names that you fail to renew in the timeframes indicated in this Agreement. In any case, if you fail to renew your domain name in a timely fashion, additional charges may apply.                    </p>
                </section>

                {/* Section: Transfers */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-[#8aa921] mb-3">DOMAIN TRANSFERS</h2>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                        On receipt of a transfer-out request, we will use our reasonable endeavours to process...
                    </p>
                </section>

                {/* Section: Reporting Abuse & Legal Info */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-[#8aa921] mb-3">Reporting of Abuse</h2>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                        To report abuse or make a complaint, please use the form on the Contact Us page...
                    </p>

                    <h2 className="text-2xl font-semibold text-[#8aa921] mb-3 mt-4">Legal Information</h2>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                        Please note all information supplied on this website is done with good faith...
                    </p>
                </section>

                <p className="text-gray-500 text-sm mt-8">
                    &copy; {new Date().getFullYear()} Websitebrokers. All rights reserved.
                </p>

            </div>
        </main>
    );
}
