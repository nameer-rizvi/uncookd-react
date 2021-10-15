NOTES:

RE: WriteEditorQuillStyled.readOnly = disabled.

Causes following error: "Warning: unstable_flushDiscreteUpdates"

RE: Performance.

Measured performance of the editor improved 3.5x after falsifying the spell-check prop. Whereas before, performance was severely lagging around the 20k word-count, it is now sufficient at a much-larger 75k word-count. Most online text editors seem to lag at the former benchmark, so having this advantage may prove significant.
