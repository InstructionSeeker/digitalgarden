---
{"date created":"2025-08-18","date modified":"2026-06-18","dg-publish":true,"dg-home":false,"dg-note-icon":null,"tags":["sound","sound_design","vfx"],"aliases":null,"permalink":"/03-areas/creative/music/music-production/vstplugins/vst-plugins/","dgPassFrontmatter":true,"noteIcon":null,"created":"2025-08-18T10:59:51.624+02:00","updated":"2026-06-27T01:18:22.121+02:00","dg-note-properties":{"date created":"2025-08-18","date modified":"2026-06-18","tags":["sound","sound_design","vfx"],"aliases":null}}
---

**If you know any great free or cheap plugins, please let me know!!**

below will be an evergrowing list of plugins I’ve tried… Will see what comes out of it.

- - -
# voice

## effects
[[03 areas/creative/Music/Music production/vstplugins/Techivation T-De-Esser 2\|Techivation T-De-Esser 2]]
[[03 areas/creative/Music/Music production/vstplugins/Tokyo Dawn Labs TDR Nova\|Tokyo Dawn Labs TDR Nova]]
[[03 areas/creative/Music/Music production/vstplugins/Valhalla Supermassive\|Valhalla Supermassive]]
[[03 areas/creative/Music/Music production/vstplugins/ValhallaFreqEcho\|ValhallaFreqEcho]]

# serum/omnisphere replacements:
*gotta replace serum, omnispehere and kontakt with something else…*
- 
# recommendable
- [[03 areas/creative/Music/Music production/vstplugins/Keyzone Classic\|Keyzone Classic]] – really good **free piano** plugin

# granular plugins:
*looking for right ones*
- Ribs – idk how it works
- PolyGAS – idk how it uses or it doesn’t work on mp3 files
- Caster – idk
- [[03 areas/creative/Music/Music production/vstplugins/Emergence\|Emergence]] – simple to use, gives some sort of sound repitition
- Harvester – idk
# on those:
- [[A1TriggerGate\|A1TriggerGate]] – rhytmic sound cut off

# next in line to check… /backlog
- [[03 areas/creative/Music/Music production/vstplugins/vital\|Vital]] – synth
- [[BBC Orchestra\|BBC Orchestra]] – synth
- [[03 areas/creative/Music/Music production/vstplugins/OTT\|OTT]] – compressor
- [[TAL-Reverb-2\|TAL-Reverb-2]]
- [[LABS\|LABS]] – synth
- [[SI-String Section\|SI-String Section]] – 
- [[SI-Drum Kit\|SI-Drum Kit]] – 
- [[DB-Force The Amen\|DB-Force The Amen]] – amen break perkusja
- [[Pneuma\|Pneuma]] – synth, trance type beat
- [[T-Force Alpha Plus\|T-Force Alpha Plus]] – synth, trance type beat
- [[BPB Dirty Filter\|BPB Dirty Filter]] – double filtr with gain, supposedly good for percussion
- [[Reaktor 6\|Reaktor 6]] – synth
- [[Vienna Synchron Player\|Vienna Synchron Player]] – synth
- [[Kontakt\|Kontakt]] –
- [[Wider\|Wider]] – stereo effect
- [[BIAS FX\|BIAS FX]] – guitar effect pipeline
- [[Mercurial Cab\|Mercurial Cab]] – guitar cabinet
- [[Kuassa Amplifikation Lite\|Kuassa Amplifikation Lite]] – amp

# table

```base
filters:
  and:
    - file.hasTag("vstplugin")
    - file.inFolder("03 areas/creative/Music/Music production/vstplugins")
views:
  - type: table
    name: Table
    order:
      - file.name
      - instrument
      - free
      - features
      - usage
      - notes
    columnSize:
      file.name: 220

```
