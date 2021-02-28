---

id: accreditation-credential

title: "Accreditation Credential"

scopeid: ctwg-sandbox

type: concept

typeid: accreditation-credential

stage: draft

hoverText: "Accreditation Credential --  a verifiable-credential that states that a specific party has satisfied the requirements of a specific accreditation scheme that pertains to one or more speicific credential types, and provides assurances regarding the accreditation process."

---



### Short Description

A **accreditation-credential** is a %%verifiable credential|verifiable-credential%% that states that a specific %%party|party%% has satisfied the requirements of a specific accreditation scheme that pertains to one or more specific %%credential types|credential-type%%, and provides assurances regarding the accreditation process. Typically, accreditation credentials of a given kind, as well as the associated accreditation schemes, are governed by an %%SSI Assurance Community|ssi-ac%%.



%%Parties|party%% can be accredited for different functions, against different schemes.[^1]  We may have schemes not only for accrediting ‘trusted issuers’, but also ‘trusted verifiers’. A %%party|party%% that has been certified against a trusted verifier scheme of a %%SSI-AC|ssi-ac%% would be trusted, at least within the scope of that %%SSI-AC|ssi-ac%%, to request and use credentials of specific kinds only for specific purposes.[^2] Similarly ‘trusted holders’ (i.e. wallet equipment[^3]) that will interact in specified ways with ‘trusted verifiers’ and/or ‘trusted issuers’).[^4]



%%Trustworthy credentials|trustworthy-credential%% are regular credentials that contain an embedded accreditation credential.



If %%SSI-ACs|ssi-ac%% were to provide accreditation credentials for well-designed accreditation schemes, this will be of enormous help for their subscribers to reduce the complexity of requesting credentials. A %%party|party%% that needs credentials for making a particular decision, and that can simply request that the issuing %%party|party%% must have a specific (issuer) accreditation credential of some SSI-AC, doesn’t even have to know the name of the issuing party. For example, a %%party|party%% that requests a credential from a user that states the result of a Covid-19 test does not need to know about each and every (accredited) test-lab; it only needs to know that the credential was issued by a %%party|party%% that has the corresponding accreditation by the appropriate %%SSI-AC|ssi-ac%%.



### Purpose

The purpose of **Accreditation Credentials** is to allow parties in the different roles of issuer, holder and verifier to obtain assurances about their handling of credentials of specific kinds.



### Criteria

An **Accreditation Credential** is a %%verifiable credential|verifiable-credential%%:

- for which a %%SSI-AC|ssi-ac%% has established and published a %%credential type|credential-type%% specification (using its %%Credential Catalogue|credential-catalogue%%);

- that states (implicitly and/or explicitly) at least:

    - the %%party|party%% to which the accreditation credential has been issued;

    - the accreditation scheme whose requirements have been fulfilled by that %%party|party%%[^5];

    - the %%credential types|credential-type%% to which the accreditation credential applies;

    - the (cryptographic) proof methods and associated data that allow the proofs to be verified for the assurances that the accreditation scheme specifies. This obviously includes the proof of provenance and integrity (signature), as well as other proofs that may be required under the accreditation scheme[^6];

    - the %%party|party%% that has audited the accredited party[^7], the date of the audit, and perhaps some other audit-related attributes;

    - … (etc.)



### Example

Here is an example of what a simple Accreditation Credential, in the form of a %%VC|verifiable-credential%%, might look like. This credential (of type \`DHACAccreditationCredential\`) has been issued by an %%SSI-AC|ssi-ac%% named \`DHAC\`. It has been issued to a %%party|party%% called ACME and asserts that ACME is a trusted issuer for credentials of type \`DHAC:Covid19TestResult\`.



~~~json

{

   "@context":" "[

      "https://www.w3.org/2018/credentials/v1",

      "https://www.w3.org/2018/credentials/examples/v1"

   ],

   "id":"http://DHAC.org/accreditationCredentials/1872",

   "type":" "[

      "VerifiableCredential",

      "DHACAccreditationCredential"

   ],

   "issuer":"https://DHAC.org/issuers/4",

   "issuanceDate":"2020-04-30T11:17:24Z",

   "credentialSubject":{

      "id":"did:example:ebfeb1f712ebc6f1c276e12ec21",

      "name":"ACME, Inc.",

      "trustedIssuerCredentialType":"DHAC:Covid19TestResult",

      "trustedIssuerProofType":{

         "type":"RsaSignature2018",

         "verificationMethod":"https://acme.com/issuers/keys/1"

      }

   },

   "proof":{

      "type":"RsaSignature2018",

      "created":"2019-06-18T21:19:10Z",

      "proofPurpose":"assertionMethod",

      "verificationMethod":"https://DHAC.org/issuers/keys/3",

      "jws":"eyJhbG...GHSrQyHUdBBPM"

   }

}

~~~



### Notes



[^1]: As with ISO certification: different management systems of an organization may be certified: the quality management system (ISO 9001), environment management system (ISO 14001), the information security management system (ISO 27001), etc.



[^2]: In the Netherlands, the Burger Service Number (BSN - i.e. the Dutch social security number) may only be legally used within the government, for health purposes, and by banks. Certifying other organizations against a ‘trusted verifier’ scheme might provide sufficient assurances to allow them to use government issued credentials that contain this number.



[^3]: Note that where ‘trusted issuers’ and ‘trusted verifiers’ refer to parties (individuals, organizations), for the holder role we need the actual equipment (wallet app, edge/cloud agent) to be certified, because it is that equipment that will do the actual receiving of credentials, and creating presentations.



[^4]: In order to enforce a SSI-AC policy that states that trusted credentials may only be issued by trusted issuers and requested/used by trusted verifiers, we need realize ourselves that the holder agent (wallet app) does not just perform the holder role, but also the verifier role because it should be capable of asking ‘the verifier’ for its accreditation credential, and only use a trusted credential (under that SSI-AC policy) if the verifier has one (this is also referred to as the ‘verify the verifier’ capability).



[^5]: The accreditation scheme implies the functions that the %%party|party%% can be trusted to properly execute. So you might have a ‘trusted issuer’, or ‘trusted verifier’ accreditation schemes for specific kinds of credentials, as well as of certifying parties against such schemes.



[^6]: Doing this, and including the payload of the accreditation credential in every credential that is issued under this regime, enables verifiers to check the trustworthiness of the issuer based on the SSI-ACs assessment without needing to know who the actual issuer is. The exact/preferred ways of doing this remain to be determined. Candidates include using (pseudonymous) DIDs, and also with ZKP VCs.



[^7]: If a SSI-AC decides to outsource its accreditation process, it should make sure that the associated accreditation credential types that it specifies make verification and validation as easy as possible. There are several possibilities: the SSI-AC can allow organizations to use its ‘accreditation credential signing service’ if they present a credential that states they are a SSI-AC accreditor (so every accreditation credential is signed with a single key that is owned/controlled by the SSI-AC). Alternatively, accreditors may issue accreditation credentials that also include the accreditation credential of the accreditor (there is recursion here…). And there are more ways.