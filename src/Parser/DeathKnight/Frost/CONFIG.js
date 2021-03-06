import React from 'react';

import { Khazak } from 'CONTRIBUTORS';
import SPECS from 'common/SPECS';

import CHANGELOG from './CHANGELOG';

export default {
  // The people that have contributed to this spec recently. People don't have to sign up to be long-time maintainers to be included in this list. If someone built a large part of the spec or contributed something recently to that spec, they can be added to the contributors list.
  contributors: [Khazak],
  // The WoW client patch this spec was last updated to be fully compatible with.
  patchCompatibility: '7.3.5',
  // Explain the status of this spec's analysis here. Try to mention how complete it is, and perhaps show links to places users can learn more.
  // If this spec's analysis does not show a complete picture please mention this in the `<Warning>` component.
  description: (
    <React.Fragment>
      Welcome to the Frost Death Knight analyzer! This analyzer is still under construction but I hope you will find what is here to be useful.  The current plan is to have a finished analyzer by the release of Battle for Azeroth.  If you have any comments or suggestions feel free to contact Khazak(Khazak#3360) on Discord.<br /><br />

      <br />More resources for Frost:<br />
      <a href="https://discord.gg/acherus" target="_blank" rel="noopener noreferrer">Death Knight Class Discord</a> <br />
      <a href="http://www.wowhead.com/frost-death-knight-guide" target="_blank" rel="noopener noreferrer">Wowhead Guide</a> <br />
    </React.Fragment>
  ),
  // A recent example report to see interesting parts of the spec. Will be shown on the homepage.
  exampleReport: '/report/CHgcAy9mV7MwRPxB/4-Mythic+Garothi+Worldbreaker+-+Kill+(3:42)/19-Khazakk',

  // Don't change anything below this line;
  // The current spec identifier. This is the only place (in code) that specifies which spec this parser is about.
  spec: SPECS.FROST_DEATH_KNIGHT,
  // The contents of your changelog.
  changelog: CHANGELOG,
  // The CombatLogParser class for your spec.
  parser: () => import('./CombatLogParser' /* webpackChunkName: "DeathKnight" */).then(exports => exports.default),
  // The path to the current directory (relative form project root). This is used for generating a GitHub link directly to your spec's code.
  path: __dirname,
};
