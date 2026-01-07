---
type: hub
topic: veritaserum_crans_montana
status: draft
updated: 2026-01-07
---

# Fresque chronologique — test visuel

> [!info] Règle d’or
> Pas d’hypothèses. 1 fait = 1 note. Source obligatoire.

Légende: ✅ confirmé / 🟨 à corroborer / ❗ TODO

Dates ci-dessous = repères visuels, à remplacer par dates confirmées.

```mermaid
gantt
    title Vue macro (3 rails)
    dateFormat  YYYY-MM-DD
    axisFormat  %Y

    section Le Constellation (exploitation/tenanciers)
    Période globale (à sourcer) : 1976-01-01, 2025-12-31

    section Institutions (6 communes → fusion 2017)
    6 communes (à sourcer) : 1976-01-01, 2017-01-01
    Après fusion (à sourcer) : 2017-01-01, 2025-12-31

    section Sécurité / contrôles
    Cadre global (à sourcer) : 1976-01-01, 2025-12-31

    section Drame / enquête
    Période 1 (à sourcer) : 2025-12-31, 2026-01-02
    Période 2 (à sourcer) : 2026-01-02, 2026-12-31
```

## Image du lieu

> [!note] Insertion d’image
> Exemple: `![[assets/le_constellation.jpg|Le Constellation — façade (à sourcer)]]`
> Ajoute l’image dans `assets/` et garde un libellé neutre + “à sourcer”.

## Rail A — Le Constellation

> [!warning] 1976 — Début d’exploitation (❗ TODO)
> - Résumé neutre: TODO — à sourcer.
> - Source: TODO — à sourcer.
> - À obtenir: TODO.

> [!warning] Années XXXX — Tenancier #1 (❗ TODO)
> - Résumé neutre: TODO — à sourcer.
> - Source: TODO — à sourcer.
> - À obtenir: TODO.

> [!warning] Années XXXX — Tenancier #2 (❗ TODO)
> - Résumé neutre: TODO — à sourcer.
> - Source: TODO — à sourcer.
> - À obtenir: TODO.

> [!warning] Années XXXX — Changement majeur / travaux (❗ TODO)
> - Résumé neutre: TODO — à sourcer.
> - Source: TODO — à sourcer.
> - À obtenir: TODO.

## Rail B — Institutions (Haut-Plateau → Crans-Montana)

> [!warning] Avant 2017 — 6 communes du Haut-Plateau (❗ TODO)
> - Résumé neutre: TODO — à sourcer.
> - Source: TODO — à sourcer.
> - À obtenir: TODO.

> [!warning] 2017 — Fusion (❗ TODO)
> - Résumé neutre: TODO — à sourcer.
> - Source: TODO — à sourcer.
> - À obtenir: TODO.

> [!warning] Après 2017 — Organisation communale (❗ TODO)
> - Résumé neutre: TODO — à sourcer.
> - Source: TODO — à sourcer.
> - À obtenir: TODO.

## Rail C — Services & sécurité

> [!warning] Organisation sécurité/incendie (❗ TODO)
> - Résumé neutre: TODO — à sourcer.
> - Source: TODO — à sourcer.
> - À obtenir: TODO.

> [!warning] Procédures de contrôle (❗ TODO)
> - Résumé neutre: TODO — à sourcer.
> - Source: TODO — à sourcer.
> - À obtenir: TODO.
> - Lien: [[Procédures_de_contrôle]]

> [!warning] Autorisation d’exploiter (❗ TODO)
> - Résumé neutre: TODO — à sourcer.
> - Source: TODO — à sourcer.
> - À obtenir: TODO.
> - Lien: [[Autorisation_d_exploiter]]

## Tableau récap (à compléter)

| Date | Rail | Fait | Statut | Source |
| --- | --- | --- | --- | --- |
| TODO | A/B/C | TODO | ❗ TODO | à sourcer |

## TODO prioritaires

- [ ] Lister les sources disponibles et les relier aux faits (voir [[Questions_factuelles_à_clarifier]]).
- [ ] Confirmer la période d’exploitation du Constellation (à sourcer) — lier sources.
- [ ] Identifier les communes du Haut-Plateau avant 2017 (à sourcer).
- [ ] Documenter les procédures de contrôle applicables (à sourcer).
- [ ] Clarifier le cadre d’autorisation d’exploiter (à sourcer).

## Liens internes

[[Chronologie]] [[Questions_factuelles_à_clarifier]] [[Procédures_de_contrôle]] [[Autorisation_d_exploiter]]



```mermaid
flowchart LR
  %% Fresque test (placeholders explicites). Temps = de haut en bas dans chaque colonne.

  subgraph A["Etablissement - Le Constellation"]
  direction TB
    A1976["1976 - Debut exploitation (A SOURCER)"]
    A2015["2015 - Reprise gérance actuelle (A SOURCER)"]
    A2015b["2015-2016 - Travaux ~10 mois (A SOURCER)"]
    A2016["2016 - Reouverture au public (A SOURCER)"]
    Axx1["[PLACEHOLDER] 199X - Changement tenancier (TODO)"]
    Axx2["[PLACEHOLDER] 200X - Travaux / mise aux normes (TODO)"]
  end

  subgraph B["Commune / Institutions"]
  direction TB
    Bpre2017["Avant 2017 - 6 communes du Haut-Plateau (A SOURCER)"]
    Bcherm["Avant 2017 - Constellation sur commune de Chermignon (A SOURCER)"]
    B2017["2017 - Fusion des communes -> Crans-Montana (A SOURCER)"]
    Bleg1["[PLACEHOLDER] 2017-2020 - Legislature #1 (TODO)"]
    Bleg2["[PLACEHOLDER] 2021-2024 - Legislature #2 (TODO)"]
    Bleg3["[PLACEHOLDER] 2025-2028 - Legislature #3 (TODO)"]
  end

  subgraph C["Services securite / controles"]
  direction TB
    Corg0["[PLACEHOLDER] Avant 2017 - Organisation securite (TODO)"]
    Corg1["[PLACEHOLDER] 2017 - Reorganisation post-fusion (TODO)"]
    Corg2["[PLACEHOLDER] 2020 - Procedure controle actualisee (TODO)"]
    Corg3["[PLACEHOLDER] 2023 - Renfort service / delegation (TODO)"]
    Corg4["[PLACEHOLDER] 2025 - Etat des controles (TODO)"]
  end

  %% Liens de repere (alignement narratif, pas causal)
  A1976 -. repere .-> Bpre2017
  Bpre2017 -. repere .-> Corg0

  A2015 -. repere .-> Bpre2017
  A2016 -. repere .-> B2017
  B2017 -. repere .-> Corg1
```









```mermaid
timeline
  title Fresque — repères (à sourcer)
  1976 : Début exploitation (TODO)
  2017 : Fusion Haut-Plateau → Crans-Montana (TODO)
  2025-12-31 : Nuit de l’événement (TODO)
  2026 : Enquête / décisions publiques (TODO)
  ```


```mermaid
flowchart TB
  H["Reperes chronologiques (placeholders - a sourcer)"]
  H --> E1976["1976 - Debut exploitation (TODO)"]
  H --> F2017["2017 - Fusion communes (TODO)"]
  H --> N2025["2025-12-31 / 2026-01-01 - Nuit evenement (TODO)"]
  H --> A2026["2026 - Enquete / decisions publiques (TODO)"]
```


```mermaid
flowchart LR
  subgraph A["Rail A - Le Constellation"]
    A1["1976 - Debut exploitation (TODO)"]
    A2["Tenanciers (TODO)"]
    A3["Changements / travaux (TODO)"]
  end
  subgraph B["Rail B - Institutions"]
    B1["Avant 2017 - 6 communes (TODO)"]
    B2["2017 - Fusion (TODO)"]
    B3["Apres 2017 - Organisation (TODO)"]
  end
  subgraph C["Rail C - Securite"]
    C1["Organisation services (TODO)"]
    C2["Controles (TODO)"]
    C3["Autorisation d'exploiter (TODO)"]
  end
```
