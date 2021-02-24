---
id: trustworthy-credential
title: "Trustworthy Credential"
scopeid: ctwg-sandbox
type: concept
typeid: trustworthy-credential
stage: draft
hoverText: "Trustworthy Credential: a credential whose payload contains an accreditation credential for credentials of the kind that the trustworthy credential instantiates."
glossaryText: "a credential whose payload contains an %%accreditation credential|accreditation credential%% for credentials of the kind that the trustworthy credential instantiates."
---

### Short Description
A **Trustworthy Credential** (of an %%SSI Assurance Community|ssi-ac%%)’ is a %%verifiable credential|verifiable-credential%%,
- whose %%type|credential-type%% is specified by (and published in the %%Credential Catalogue|credential-catalogue%% of) that %%SSI-AC|ssi-ac%%;
- of which the ‘envelope’ (metadata) includes one or more %%accreditation credential|accreditation credential%% payloads, one of which is issued by, or on behalf of that  %%SSI-AC|ssi-ac%%, and is of a type that is specified (and published) by that %%SSI-AC|ssi-ac%%.

The fact that such credentials contain an %%accreditation credential|accreditation credential%% of the SSI-AC means that it comes with the particular assurances as stated in the associated accreditation scheme. The credential is ‘trustworthy’ for any %%party|party%% that appreciates the assurances provided by that accreditation scheme.

### Purpose
The purpose of **Trustworthy Credentials** is to allow parties in the different roles of issuer, holder and verifier to obtain assurances about their handling of credentials of specific kinds.

### Criteria
A **Trustworthy Credential** (of an %%SSI Assurance Community|ssi-ac%%)’ is a %%verifiable credential|verifiable-credential%%,
- whose %%type|credential-type%% is specified by (and published in the %%Credential Catalogue|credential-catalogue%% of) that %%SSI-AC|ssi-ac%%;
- of which the ‘envelope’ (metadata) includes one or more %%accreditation credential|accreditation credential%% payloads, one of which is issued by, or on behalf of that  %%SSI-AC|ssi-ac%%, and is of a type that is specified (and published) by that %%SSI-AC|ssi-ac%%.

### Examples
Here is an example of a 'Trustworthy Credential' as it might have been issued by ACME to a person called Wayne Dodge. It states that Wayne has been tested on April 30th, 2020, and that the result of the test was negative %%party|party%% . It also contains ACME’s trustworthy credential that allows a verifier to obtain assurance that, according to %%SSI Assurance Community|ssi-ac%% DHAC, ACME is a trusted issuer for this credential.

~~~json
{
    "@context":[
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id":"http://acme.com/credentials/DHAC_Covid19TestResult/172",
    "type":[
        "VerifiableCredential",
        "DHAC:Covid19TestResult"
    ],
    "issuer":"did:example:ebfeb1f712ebc6f1c276e12ec21",
    "issuanceDate":"2020-05-01T12:13:14Z",
    "credentialSubject":{
        "id":"did:example:2bdcc0b259683e194e48037ea21e15d3",
        "name":"Wayne Dodge",
        "covid19TestResult":{
            "tested":"2020-04-30T11:19:10Z",
            "result":"negative"
        },
    "trustworthyCredential":
        [{
            "@context":[
                "https://www.w3.org/2018/credentials/v1",
                "https://www.w3.org/2018/credentials/examples/v1"
            ],
            "id":"http://DHAC.org/trustworthyCredentials/1872",
            "type":[
                "VerifiableCredential",
                "DHACTrustworthyCredential"
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
            }
        }],
        "proof":{
            "type":"RsaSignature2018",
            "created":"2019-06-18T21:19:10Z",
            "proofPurpose":"assertionMethod",
            "verificationMethod":"https://DHAC.org/issuers/keys/3",
            "jws":"eyJhbG...GHSrQyHUdBBPM"
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
