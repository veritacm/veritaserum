# Rapport d'inventaire — Diagrammes Mermaid Veritaserum

**Date de scan** : 2026-01-09
**Nombre total de fichiers .md scannés** : 16
**Nombre de fichiers avec diagrammes Mermaid** : 8
**Nombre total de diagrammes Mermaid** : 13

---

## FLOWCHARTS (9 diagrammes à standardiser)

### Direction LR (Left → Right) — 3 flowcharts

1. **07_Responsabilités/Responsabilité_de_la_commune.md** (lignes 18-31)
   - **Contenu** : Les trois registres de responsabilité (administrative, civile, pénale)
   - **Classes CSS** : admin (cyan), civil (bleu), penal (rouge)
   - **À modifier** : LR → TB

2. **03_Autorisations/Autorisation_d_exploiter.md** (lignes 24-42)
   - **Contenu** : Cycle simplifié autorisation d'exploiter
   - **Classes CSS** : ok (vert), ko (rouge), process (gris), decision (jaune)
   - **À modifier** : LR → TB

3. **01_Faits/Chronologie_TEST.md** (lignes 192-209)
   - **Contenu** : Rails A/B/C (Constellation, Institutions, Sécurité)
   - **Classes CSS** : Aucune
   - **À modifier** : LR → TB

### Direction TB (Top → Bottom) — 3 flowcharts

4. **07_Responsabilités/Responsabilité_de_la_commune.md** (lignes 40-67)
   - **Contenu** : Vue d'ensemble acteurs et contrôles
   - **Classes CSS** : institution (bleu), controle (cyan), question (jaune)
   - **À modifier** : Ajouter thème uniquement

5. **02_Droit/Lois_applicables.md** (lignes 31-52)
   - **Contenu** : Hiérarchie des normes juridiques
   - **Classes CSS** : fed (bleu foncé), cant (bleu moyen), comm (bleu clair), tech (violet)
   - **À modifier** : Ajouter thème uniquement

6. **05_Autorités/Commune de Crans-Montana.md** (lignes 74-92)
   - **Contenu** : Vue d'ensemble institutionnelle (Canton → Commune → CSI)
   - **Classes CSS** : canton, commune, commission, service
   - **À modifier** : Ajouter thème uniquement

7. **01_Faits/Chronologie_TEST.md** (lignes 182-189)
   - **Contenu** : Repères chronologiques simplifiés
   - **Classes CSS** : Aucune
   - **À modifier** : Ajouter thème uniquement

### Direction TD (Top → Down, variante de TB) — 2 flowcharts

8. **06_Contrôles/Procédures_de_contrôle.md** (lignes 20-54)
   - **Contenu** : Processus de contrôle de sécurité complet
   - **Classes CSS** : start, process, decision, ok, ko, doc
   - **À modifier** : TD → TB + ajouter thème

9. **03_Autorisations/Autorisations & contrôles – Bars vs Discothèques (VS, état 2025).md** (lignes 92-114)
   - **Contenu** : Procédure "autorisation ↔ sécurité"
   - **Classes CSS** : Aucune
   - **À modifier** : TD → TB + ajouter thème

---

## AUTRES DIAGRAMMES (4 diagrammes non modifiés)

### TIMELINE (2 diagrammes)

10. **01_Faits/Chronologie.md** (lignes 19-36)
    - **Type** : timeline
    - **Contenu** : Repères chronologiques — Veritaserum (1976 → 2026)
    - **Statut** : ✅ Non modifié (type timeline)

11. **01_Faits/Chronologie_TEST.md** (lignes 173-179)
    - **Type** : timeline
    - **Contenu** : Fresque — repères (4 jalons)
    - **Statut** : ✅ Non modifié (type timeline)

### GANTT (1 diagramme)

12. **01_Faits/Chronologie_TEST.md** (lignes 17-36)
    - **Type** : gantt
    - **Contenu** : Vue macro (3 rails) — Gantt (1976-2026)
    - **Statut** : ✅ Non modifié (type gantt)

### SEQUENCE DIAGRAM (1 diagramme)

13. **03_Autorisations/Autorisations & contrôles – Bars vs Discothèques (VS, état 2025).md** (lignes 189-204)
    - **Type** : sequenceDiagram
    - **Contenu** : Chaîne de procédure travaux/modification
    - **Participants** : Exploitant, Commune, Commission du feu, Expert incendie
    - **Statut** : ✅ Non modifié (type sequenceDiagram)

---

## RÉCAPITULATIF PAR TYPE

| Type de diagramme | Nombre | Action |
|-------------------|--------|--------|
| **Flowchart LR** | 3 | ⚙️ Standardiser (LR → TB + thème) |
| **Flowchart TB** | 4 | ⚙️ Standardiser (ajouter thème uniquement) |
| **Flowchart TD** | 2 | ⚙️ Standardiser (TD → TB + thème) |
| **Timeline** | 2 | ✅ Conserver tel quel |
| **Gantt** | 1 | ✅ Conserver tel quel |
| **SequenceDiagram** | 1 | ✅ Conserver tel quel |
| **TOTAL** | **13** | **9 flowcharts à modifier** |

---

## FICHIERS SANS DIAGRAMMES MERMAID (8 fichiers)

- 00_Hub/Hub.md
- Accueil.md
- 99_Privé/Stack_Veritaserum.md
- 04_Sécurité_Incendie/Archive web – "Crans Montana parie sur la sécurité publique".md
- 04_Sécurité_Incendie/Normes_incendie_AEAI.md
- 08_Questions/Questions_factuelles_à_clarifier.md
- 05_Autorités/Commission du feu CM.md
- 98_pages retirees/Commune_Crans-Montana__Pages_retirees.md

---

## ÉTAPE SUIVANTE

**Attente de validation utilisateur pour procéder à la standardisation des 9 flowcharts :**
- Direction → TB (Top to Bottom)
- Palette → Neutre professionnelle (#2C3E50, #7F8C8D, #3498DB)

**Modifications préservées** :
- ✅ Textes des nœuds
- ✅ Logique des connexions
- ✅ Identifiants des nœuds
- ✅ Classes CSS existantes (classDef)
- ✅ Timeline, Gantt, SequenceDiagram (non touchés)
