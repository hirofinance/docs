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

Below, we will walk through the components of the mechanism in order to
explain how it helps the incentives flow to the most valuable of the ecosystem
liquidity pools.

## Initial Distribution
The initial supply of `$EXPD` is 800M.

At launch 500M `EXPD` were minted. 
* there is a private seed sale a small amount for using LP.
### Locked As NFTs
300M `EXPD` were locked for 4 years in `veEXPD` of various sizes. 100M, 50M, 1M, 5M These veNFT are described below. 
* 100M of 300M were allocated for Expand Trasury.
* 100M of 300M were allocated for the team
* 100M of 300M are allocated for project partners and public sales

<Bleed>
  <Chart
    chartType="PieChart"
    data={[
      [ "Receivers", "Amount" ],
      [ "Protocol Owned NFTs", 100 ],
      [ "Expand Team NFTs", 100],
      [ "Partner Protocol/DAOs NFTs", 100],
      [ "Team Controlled Initial Liquidity", 10],
      [ "Protocol FLOW Fund", 490]
    ]}
    options={{
      title: "FLOW Distribution (M)",
      backgroundColor: '#111111',
      colors: ['#58FF33', '#43CD24', '#37A220', '#297818', '#CCFF2C', '#367A2B' ],
      legend: {textStyle: {color: 'white' }},
      pieHole: 0.4,
      titleTextStyle: { color: 'white' },
    }}
    width={"100%"}
    height={"600px"}
  />
</Bleed>

## Emissions
Weekly emissions start at 15M `$EXPD` (3.75% of the initial supply)
and decay at 1% per week (epoch).

`$veEXPD` holders receive a rebase proportional to epoch LP emissions
and the ratio of `$veEXPD` to `$EXPD` supply, thus reducing vote power
dilution for `$veEXPD`!

The weekly rebase amount is calculated with the following formula:
> (veEXPD.totalSupply ÷ EXPD.totalsupply)³ × 0.5 × Emissions

`$veEXPD` supply does not affect weekly LP emissions.

## Gauge Voting

`$veEXPD` holders decide which liquidity pools receive emissions in a given epoch by
voting on their preferred liquidity pool _gauges_. `$EXPD` emissions will be distributed
proportionally to the total votes a liquidity pool receives.

In return, voters receive 100% of the trading fees and bribes collected through the
liquidity pool they vote for. 

Voting for gauges, or in fact any action related to the `$veEXPD` NFT is
allowed only once per epoch. This means that calling `Voter.reset()` (used for
resetting an NFT vote state and usually required before merging it into another
`$veEXPD` NFT) or `Voter.poke()` (used to re-cast the votes for the current epoch in
order to direct emissions and earn bribes) counts as an action for the current
epoch.

While limiting the protocol participants to one action per epoch is not ideal,
it does make the protocol safer against potential exploitative behaviour.

<Callout>
  Unused `$veEXPD` voting power is still taken into account as we calculate the
  weight of the vote upon epoch flip and based on the locked vesting slope.

  Please make sure you always cast 100% of your voting power to avoid
  unexpected outcomes!
</Callout>


## Rewards

There are 4 types of rewards on Expand Exchange.

### Emissions

Represent `$EXPD` distributed to liquidity pool stakers. The amount of
`$EXPD` distributed towards every pool is proportional to the voting power
received from the voters every epoch.

These rewards are streaming and are available for claim as these accrue.

### Fees

Represent liquidity pool trading fees distributed to voters in pool tokens (
e.g., if the pool is `vAMM-EXPD/USDC` the distributed tokens are `$EXPD` and
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
voter (`$veEXPD`).

### Rebases

Represent `$veEXPD` distributed to `$veEXPD` holders in order to reduce the
voting power dilution.

These rewards are available for claim as these accrue and are streaming
proportionally to all `$veEXPD` holders.

## Rewards claim

Rebase rewards claim is available one full epoch after tokens are locked.
External bribe rewards are claimable after a new epoch has started (epochs increment right after 23:59 UTC each Wednesday).

An example of bribes, voting, and rewards claim timeline:
 * A new epoch starts Thursday (00:00 UTC)
 * Bribes are deposited at any point in the epoch
 * Voters vote for their preferred pools
 * Once the next epoch arrives (the following Thursday), users are able to claim rewards from the UI or the corresponding `WrappedExternalBribe` contract
 
## Whitelisting

While Expand supports permissionless liquidity pool and gauge creation, these can
only include _whitelisted_ tokens. The protocol will launch with an extensive list of
pre-whitelisted tokens, including those from partner protocols.

Partners can request additional tokens to be _whitelisted_. 
