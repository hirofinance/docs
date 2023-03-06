import Bleed from 'nextra-theme-docs/bleed'
import Callout from 'nextra-theme-docs/callout'
import { Chart } from "react-google-charts";

<Bleed>
  ![Expand Exchange Tokenomics](/velodrome_tokenomics_hero.jpg)
</Bleed>

&nbsp;

# Tokenomics

Expand Exchange uses two tokens to manage its utility and governance:

 * `$EXPD` &mdash; ERC-20 utility token of the protocol
 * `$veEXPD` &mdash; ERC-721 governance token in the form of an NFT
   (non-fungible token)

`$EXPD` is used for rewarding liquidity providers through emissions.

`$veEXPD` is used for governance. Any `$EXPD` holder can vote-escrow their tokens and
receive a `$veEXPD` (also known as veNFT) in exchange. Additional tokens can be
added to the `$veEXPD` NFT at any time.

The lock period (also known as vote-escrowed period, hence the _ve_ prefix) can be up
to 4 years, following the linear relationship shown below:
 * 100 `$EXPD` locked for 4 years will become 100 `$veEXPD`
 * 100 `$EXPD` locked for 1 year will become 25 `$veEXPD`

The longer the vesting time, the higher the voting power (voting weight) and
rewards the `$veEXPD` holder receives.

## ve(3,3) Mechanics

Velodrome Finance mechanics reflect a combination of two DeFi concepts:
 * Vote-Escrow &mdash; first introduced by Curve to strengthen incentives for long-term token holders
 * Staking/Rebasing/Bonding or (3,3) game theory &mdash; designed by Olympus DAO

Combined, the _ve(3,3)_ mechanism rewards behaviors correlated with Velodrome's success, such as
liquidity provision and long-term token holding. Liquidity providers receive `$EXPD` emissions,
and `$veEXPD` holders receive protocol fees, bribes, rebases, and governance power.

![image](/velodrome-circuit.png)

Below, we will walk through the components of the mechanism in order to
explain how it helps the incentives flow to the most valuable of the ecosystem
liquidity pools.

## Initial Distribution

At launch we distributed `$EXPD` and `$veEXPD` to
users and protocols we believe are likeliest to contribute to our
mission to become the liquidity base layer of the Optimism ecosystem.


### Distribution

500M (50%) `$EXPD` tokens will be distributed to the people who have played the biggest role in
incubating Velodrome and those likeliest to contribute to its long-term
success, including:
 * `$WEVE` holders (27%, 108M `$VELO`)
 * `$OP` network users (18%, 72M `$VELO`)
   * 3755 `$VELO`/wallet &mdash; Addresses qualified as [Repeat Optimism Users](https://community.optimism.io/docs/governance/airdrop-1/#optimism-early-adopters)
 * Cross-chain DeFi users (15%, 60M `$VELO`):
   * 3500 `$VELO`/wallet &mdash; Curve Protocol wallets with a 1450+ days (maximum) `$veCRV` lock time
   * 3000 `$VELO`/wallet &mdash; Convex Protocol lockers of `$vlCVX` since new lock contract deployment
   * 3000 `$VELO`/wallet &mdash; Treasure DAO Genesis Mine `$MAGIC` stakers for 1- and 3-month periods
   * 2000 `$VELO`/wallet &mdash; Platypus Protocol stakers with `$vePTP` and `$PTP` balance
   * 500 `$VELO`/wallet &mdash; Redacted Cartel participants in genesis Dutch auction who didn't sell their `$BTRFLY`
   * 500 `$VELO`/wallet &mdash; Eminence Finance wallets affected with EMN, eAAVE, eLINK, eYFI, eSNX or eCRV [balance](https://github.com/banteg/your-eminence/blob/master/shot/01-balances.toml)

### Protocols

We will consider a variety of metrics in assessing the available protocols,
including TVL, transaction volume, unique wallets, and Optimism team input.

The airdrop of 72M (18%) `$veVELO` is aimed at attracting and engaging 10-15 protocols most
likely to contribute to Velodrome and Optimism's long-term success.

The amount of `$veVELO` airdropped will provide just enough voting power to familiarize
the protocols with the ecosystem and give them a head start, but it will leave space
for the protocols to accrue value by acquiring `$VELO` for long-term liquidity provision.

### Grants

We have reserved 24M (6%) `$veVELO` to distribute to partner protocols
after the launch. This will be used to engage partners in the ecosystem through
grants.

### Team

The team will receive an initial allocation that it will use to vote
to drive emissions to key protocol pairs such as `$VELO-$USDC` and to support
ongoing protocol development. The total team allocation is 40M (10%) in `$VELO` and `$veVELO`.

The team will vest 25% of its initial allocation in the form of a
`$veVELO` and use it to vote for `$VELO` pairs in perpetuity.

While a fully autonomous and immutable protocol is an admirable objective, it
comes at a cost. Velodrome Finance will ensure its long-term sustainability by
employing a dedicated team focused on supporting the product, documentation,
community, and ecosystem. As the protocol evolves, the Velodrome team will
consider introducing more immutability or DAO components where appropriate.

To cover ongoing expenses and all the upcoming development efforts, 3% of the
emissions will be going to the team address.

The team vesting compensation breakdown:
 * 15,520,816 `$VELO` vesting for 12 months, 6-month lock in a `$veVELO` followed
   by a linear 6-month unlock period. 0.5% of total emissions, taken from
   emissions to treasury, will be added to this bucket for dilution control.
 * 7,200,000 `$VELO` vesting for 24 months, 12-month lock in a `$veVELO` followed
   by a linear 12-month unlock period.
 * All ongoing payments made to the team members in `$VELO` will vest for 6
   months, 3-month lock in a `$veVELO` followed by a linear 3-month unlock period.

### Optimism Team

The Optimism team has a vested interest in ensuring that Velodrome achieves its
mission of serving as an ecosystem public good. The team will receive 20M (5%) `$veVELO` in the initial
distribution, to support that interest.

### Genesis Liquidity Pools

Genesis Pools will distribute 4M (1%) `$VELO` to liquidity providers of foundational token pairs to
provide better liquidity and user experience from launch day. Genesis pool emissions will be first
directed to the `$VELO`-`$USDC` pool and will start a few days before the first epoch votes are cast.

## Emissions

The initial supply of `$VELO` is 400M.

Weekly emissions start at 15M `$VELO` (3.75% of the initial supply)
and decay at 1% per week (epoch).

`$veVELO` holders receive a rebase proportional to epoch LP emissions
and the ratio of `$veVELO` to `$VELO` supply, thus reducing vote power
dilution for `$veVELO`!

The weekly rebase amount is calculated with the following formula:
> (veVELO.totalSupply ÷ VELO.totalsupply)³ × 0.5 × Emissions

`$veVELO` supply does not affect weekly LP emissions.

### Emission Schedule

<Bleed>
  <Chart
    chartType="LineChart"
    data={[
      ["Week", "LP Emissions", "veRebase (@50% locking rate)", "Total Supply"],
      ["1", 15, 0, 400],
      ["50", 9.1, 2, 1000],
      ["100", 5.5, 1.5, 1500],
      ["150", 3.3, 1, 1700],
      ["200", 2, 0.5, 1800]
    ]}
    options={{
      title: "$VELO Emissions (M)",
      curveType: 'function',
      aggregationTarget: 'series',
      selectionMode: 'multiple',
      legend: { position: "top", textStyle: {color: 'white'}},
      series: {
        0: { targetAxisIndex: 0 },
        1: { targetAxisIndex: 0 },
        2: { targetAxisIndex: 1 },
      },
      vAxes: {
        1: { title: "Total Supply", titleTextStyle: { color: 'white' }},
        0: { title: "Epoch Distribution", titleTextStyle: { color: 'white' }}
      },
      hAxis: {
        title: "Week", titleTextStyle: { color: 'white' },
      },
      backgroundColor: '#111111',
      lineWidth: 3,
      colors: ['#79F8DB', '#2180DF', '#EA1000', '#59BFD8', '#0281FF'],
      legend: {textStyle: {color: 'white'}},
      titleTextStyle: { color: 'white' },
    }}
    width={"100%"}
    height={"600px"}
  />
</Bleed>

## Gauge Voting

`$veVELO` holders decide which liquidity pools receive emissions in a given epoch by
voting on their preferred liquidity pool _gauges_. `$VELO` emissions will be distributed
proportionally to the total votes a liquidity pool receives.

In return, voters receive 100% of the trading fees and bribes collected through the
liquidity pool they vote for. 

Voting for gauges, or in fact any action related to the `$veVELO` NFT is
allowed only once per epoch. This means that calling `Voter.reset()` (used for
resetting an NFT vote state and usually required before merging it into another
`$veVELO` NFT) or `Voter.poke()` (used to re-cast the votes for the current epoch in
order to direct emissions and earn bribes) counts as an action for the current
epoch.

While limiting the protocol participants to one action per epoch is not ideal,
it does make the protocol safer against potential exploitative behaviour.

<Callout>
  Unused `$veVELO` voting power is still taken into account as we calculate the
  weight of the vote upon epoch flip and based on the locked vesting slope.

  Please make sure you always cast 100% of your voting power to avoid
  unexpected outcomes!
</Callout>


## Rewards

There are 4 types of rewards on Velodrome Finance.

### Emissions

Represent `$VELO` distributed to liquidity pool stakers. The amount of
`$VELO` distributed towards every pool is proportional to the voting power
received from the voters every epoch.

These rewards are streaming and are available for claim as these accrue.

### Fees

Represent liquidity pool trading fees distributed to voters in pool tokens (
e.g., if the pool is `vAMM-VELO/USDC` the distributed tokens are `$VELO` and
`$USDC`).

The tokens are streaming proportionally to the voting power cast by a voter and
the accrued amount of trading fees.

These rewards are available for claim as they accrue. They do not need to be claimed each epoch.

### Bribes

In addition to the fees, liquidity pools allow external rewards from anyone
(known as _bribes_). Bribes can be added to _whitelisted_ pools and are distributed 
_only_ to voters on that pool, proportionally to their share of pool votes.

These rewards are available for claim after the epoch flips 
(after Wednesday 23:59 UTC), and are proportional to the voting power cast by a
voter (`$veVELO`).

### Rebases

Represent `$veVELO` distributed to `$veVELO` holders in order to reduce the
voting power dilution.

These rewards are available for claim as these accrue and are streaming
proportionally to all `$veVELO` holders.

## Rewards claim

Rebase rewards claim is available one full epoch after tokens are locked.
External bribe rewards are claimable after a new epoch has started (epochs increment right after 23:59 UTC each Wednesday).

An example of bribes, voting, and rewards claim timeline:
 * A new epoch starts Thursday (00:00 UTC)
 * Bribes are deposited at any point in the epoch
 * Voters vote for their preferred pools
 * Once the next epoch arrives (the following Thursday), users are able to claim rewards from the UI or the corresponding `WrappedExternalBribe` contract

<Bleed>
  <Chart
    chartType="Timeline"
    data={[
      [
        { type: "string", id: "Voting Round" },
        { type: "string", id: "Action" },
        { type: "date", id: "Start" },
        { type: "date", id: "End" },
      ],
      ["Round #1", "Bribes Deposited, Votes Cast", new Date(2022, 5, 2), new Date(2022, 5, 8, 23, 59)],
      ["Round #1", "Rewards Claimable", new Date(2022, 5, 9), new Date(2022, 5, 30)],

      ["Round #2", "Bribes Deposited, Votes Cast", new Date(2022, 5, 9), new Date(2022, 5, 15, 23, 59)],
      ["Round #2", "Rewards Claimable", new Date(2022, 5, 16), new Date(2022, 5, 30)],

      ["Round #3", "Bribes Deposited, Votes Cast", new Date(2022, 5, 16), new Date(2022, 5, 22, 23, 59)],
      ["Round #3", "Rewards Claimable", new Date(2022, 5, 23), new Date(2022, 5, 30)],
    ]}
    options={{
      title: "Bribing, Voting and Rewards Timeline",
      legend: { position: 'top'},
      colors: [
        '#79F8DB', '#2180DF', '#EA1000', '#871000', '#59BFD8', '#0281FF',
        '#FBBF42', '#EDE7DB'
      ],
    }}
    width={"100%"}
  />
</Bleed>

## Whitelisting

While Velodrome supports permissionless liquidity pool and gauge creation, these can
only include _whitelisted_ tokens. The protocol will launch with an extensive list of
pre-whitelisted tokens, including those from partner protocols.

Partners can request additional tokens to be _whitelisted_. 

A permissionless _whitelisting_ on-chain governance process will be implemented in
the future, pending required on-chain governance infrastructure on Optimism.

## Commissaire

Requirements for _whitelisting_ are critical to ensuring that the protocol cannot
be exploited by actors attempting to game emissions.

To support the health of the protocol and ecosystem, the Commissaire (a Curve-esque _Emergency DAO_)
will have the right to disable hostile gauges.

The Commissaire will initially consist of seven members from the Velodrome team and
prominent figures from within the Optimism community.
