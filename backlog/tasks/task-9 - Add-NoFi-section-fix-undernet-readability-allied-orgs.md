---
id: TASK-9
title: 'Add NoFi section, fix undernet readability, allied orgs'
status: Done
assignee: []
created_date: '2026-02-26 03:23'
labels:
  - mycostack-website
  - content
  - visual
  - performance
dependencies: []
priority: high
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
**NoFi Section (nofi.lol):**
Post-finance statement — TradFi→DeFi→ReFi→NoFi progression. The point was never to make money, it was to make change. Building systems where financial scaffolding can be composted.

**Undernet Readability Fix:**
Eliminated the jarring brightening effect. Background stays dark (L≤0.20) with light text through Undernet, Anastomosis, and NoFi sections. Only brightens gradually at Emergence (L=0.55) and Network Map (L=0.88).

**Faster Section Reveals:**
- Threshold: 0.15→0.05 (triggers earlier)
- rootMargin: -50px→-20px (triggers sooner)
- translateY: 40px→24px (subtler slide)
- Duration: 0.9s→0.6s (snappier)

**Allied Organizations:**
Network map and footer now include Giveth, Token Engineering Commons, Enspiral, and Grassroots Economics as "building alongside" allies with connections.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 NoFi section with post-finance content and nofi.lol link
- [ ] #2 Undernet section stays dark and readable throughout scroll
- [ ] #3 Section reveals trigger faster and animate quicker
- [ ] #4 Allied organizations appear in network map with connections
- [ ] #5 Footer includes NoFi and building alongside section
- [ ] #6 Build passes with no errors
<!-- AC:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
All changes implemented. Committed a8f0bb4, pushed to dev and merged to main on Gitea. 8 files changed, 301 insertions, 35 deletions.
<!-- SECTION:FINAL_SUMMARY:END -->
