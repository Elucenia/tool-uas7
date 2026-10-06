<!-- ELUCENIA technical documentation · uas7 · en · no clinical/professional/rights approval -->

# UAS7 (Urticaria Activity Score)

[conditions, sources and permissions](https://elucenia.org/en/tools/uas7)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Day 1 · wheals (papules) in 24 h

`d1p`

- `0` — None
- `1` — \< 20
- `2` — 20 to 50
- `3` — \> 50 wheals in 24 h or large confluent areas of wheals

### Day 1 · itching

`d1c`

- `0` — Absent
- `1` — Mild (present but not annoying or troublesome)
- `2` — Moderate (troublesome but does not interfere with normal daily activity or sleep)
- `3` — Intense (severe pruritus sufficiently troublesome to interfere with normal daily activity or sleep)

### Day 2 · wheals (papules) in 24 h

`d2p`

- `0` — None
- `1` — \< 20
- `2` — 20 to 50
- `3` — \> 50 wheals in 24 h or large confluent areas of wheals

### Day 2 · itching

`d2c`

- `0` — Absent
- `1` — Mild (present but not annoying or troublesome)
- `2` — Moderate (troublesome but does not interfere with normal daily activity or sleep)
- `3` — Intense (severe pruritus sufficiently troublesome to interfere with normal daily activity or sleep)

### Day 3 · wheals (papules) in 24 h

`d3p`

- `0` — None
- `1` — \< 20
- `2` — 20 to 50
- `3` — \> 50 wheals in 24 h or large confluent areas of wheals

### Day 3 · itching

`d3c`

- `0` — Absent
- `1` — Mild (present but not annoying or troublesome)
- `2` — Moderate (troublesome but does not interfere with normal daily activity or sleep)
- `3` — Intense (severe pruritus sufficiently troublesome to interfere with normal daily activity or sleep)

### Day 4 · wheals (papules) in 24 h

`d4p`

- `0` — None
- `1` — \< 20
- `2` — 20 to 50
- `3` — \> 50 wheals in 24 h or large confluent areas of wheals

### Day 4 · itching

`d4c`

- `0` — Absent
- `1` — Mild (present but not annoying or troublesome)
- `2` — Moderate (troublesome but does not interfere with normal daily activity or sleep)
- `3` — Intense (severe pruritus sufficiently troublesome to interfere with normal daily activity or sleep)

### Day 5 · wheals (papules) in 24 h

`d5p`

- `0` — None
- `1` — \< 20
- `2` — 20 to 50
- `3` — \> 50 wheals in 24 h or large confluent areas of wheals

### Day 5 · itching

`d5c`

- `0` — Absent
- `1` — Mild (present but not annoying or troublesome)
- `2` — Moderate (troublesome but does not interfere with normal daily activity or sleep)
- `3` — Intense (severe pruritus sufficiently troublesome to interfere with normal daily activity or sleep)

### Day 6 · wheals (papules) in 24 h

`d6p`

- `0` — None
- `1` — \< 20
- `2` — 20 to 50
- `3` — \> 50 wheals in 24 h or large confluent areas of wheals

### Day 6 · itching

`d6c`

- `0` — Absent
- `1` — Mild (present but not annoying or troublesome)
- `2` — Moderate (troublesome but does not interfere with normal daily activity or sleep)
- `3` — Intense (severe pruritus sufficiently troublesome to interfere with normal daily activity or sleep)

### Day 7 · wheals (papules) in 24 h

`d7p`

- `0` — None
- `1` — \< 20
- `2` — 20 to 50
- `3` — \> 50 wheals in 24 h or large confluent areas of wheals

### Day 7 · itching

`d7c`

- `0` — Absent
- `1` — Mild (present but not annoying or troublesome)
- `2` — Moderate (troublesome but does not interfere with normal daily activity or sleep)
- `3` — Intense (severe pruritus sufficiently troublesome to interfere with normal daily activity or sleep)

## Method edition

UAS7/Młynek 2008:7 days UAS 0–6, total 0–42; EAACI/GA²LEN/EuroGuiDerm/APAAACI 2022 thresholds

## Documented formula

Each day (24 hours), the patient records:

Wheals: 0 = none; 1 = \< 20; 2 = 20–50; 3 = \> 50 (or large confluent areas).

Itch: 0 absent;1 mild (present, not bothersome);2 moderate (bothersome, not interfering with activity/sleep);3 severe (interferes with activity/sleep).

Daily UAS = 0–6. UAS7 = sum of 7 consecutive days (0–42).

## Limits and population

UAS monitors chronic urticaria activity through the number of wheals and pruritus recorded over days. It does not represent all manifestations, such as angioedema, or replace quality-of-life assessment. UAS7 and later categories must follow their own temporal definition and source.

## References

- [Młynek A et al. How to assess disease activity in patients with chronic urticaria? Allergy, 2008.](https://doi.org/10.1111/j.1398-9995.2008.01726.x)

- [Stull D et al. Analysis of disease activity categories in chronic spontaneous/idiopathic urticaria. Br J Dermatol, 2017.](https://doi.org/10.1111/bjd.15454)

- [Zuberbier T et al. The international EAACI/GA²LEN/EuroGuiDerm/APAAACI guideline for the definition, classification, diagnosis, and management of urticaria. Allergy, 2022.](https://doi.org/10.1111/all.15090)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

No urticaria in the week


### 2

Well-controlled urticaria (1 to 6)


### 3

Moderate activity (16 to 27)

Reassess treatment: increase the antihistamine (up to 4 times the dose) and, if not controlled, omalizumab.


### 4

Severe activity (28 to 42)

Reassess treatment: increase the antihistamine (up to 4 times the dose) and, if not controlled, omalizumab.

