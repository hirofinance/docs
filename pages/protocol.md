import Bleed from 'nextra-theme-docs/bleed'

<Bleed>
  ![Expand Exchange Problem Statement](/velodrome_biker_hero.png)
</Bleed>

&nbsp;

# Protocol Overview

## Problems with Liquidity Incentivization

Almost every protocol in DeFi needs to have a certain amount of liquidity for one reason or another.

| Liquidity    | Example   | Benefit                                        |
| ------------ | --------- | ---------------------------------------------- |
| Native token | EXPD-USDC | Treasury access to capital markets             |
| Stablecoins  | DAI-USDC  | Ensure stability by minimizing depeg risk      |
| Pegged asset | ETH-stETH | Minimize opportunity cost of converting assets |

However, current solutions for incentivizing liquidity come with their own tradeoffs and pitfalls:

- Pool 2 emissions (i.e. attaching a reward to staked LPs) can be costly to maintain, and often times result in a "farm and dump" resulting in "unsticky" liquidity.

- Protocol owned liquidity can be costly to bootstrap, and liquidity may only be needed occasionally, instead of on-going basis.

- Bribing voters in the CRV/CVX system can be costly as incumbents already have a sizeable lead. Additionally, the universe of pool types here are limited.

## Introducing Expand Exchange

Expand addresses these issues and presents an attractive alternative by addressing the core issues in Solidly and adding its own improvements. To recall, the key innovation of Solidly was to align protocol emissions with fees generated, not simply liquidity. To do this, it would allow protocols and other large stakeholders to become veNFT "voters", using their locked voting power to direct future emissions and collecting fees (termed bribes in Solidly) from the pools they voted for.

Expand has made several improvements to the Solidly codebase, all of which were thoughtfully chosen to ensure that the protocol would carry out the original intended mechanism of allowing voters to _fairly compensate_ LPs for impermanent loss.

Solidly had several key issues that prevented its success in the Fantom ecosystem:

## Improvement: Tying Rewards with Emissions

**In Solidly, voting rewards (i.e. bribes) were claimable _before_ the emissions from that vote were committed.** Expand addresses this with new mechanisms:

- First, we allow voters to make only one "active" voting decision (i.e. `Voter.vote()`, `Voter.reset()`) every epoch (note: this does not include the `Voter.poke()` function).
- Additionally, bribes from fees (_internal_) and external sources (_external_) are treated differently.
  Internal bribes function more or less the same way as they did in Solidly, streamed to voters who vote for them.
  External bribes, however, are rewarded _per epoch_ rather than streamed, and are claimable only after the next epoch starts.
  This means that a bribe sent at the last minute of an epoch will accrue to all voters of that epoch, and be claimable once the epoch flips.

The goal of these changes is to ensure a healthy equilibrium between voters and external bribers. Bribers are incentivized to get their bribes early in that week, as to attract early voters. They also benefit from bribing later, as to have more information on competing bribes. Voters face a similar dilemma, as voting too early means forgoing potentially lucrative bribes that come later, and voting too late means voting with a lower (`$veNFT`) balance. Note that this latter affect is especially pronounced for voters who have locked for shorter time periods (e.g. voters who have locked for weeks rather than months/years will experience larger differences in the bribes they receive from voting later vs. earlier in the epoch).

## Improvement: Ensuring Productive Gauges

**In Solidly, exploitive voters were able to direct emissions towards unproductive gauges, including those for pools 100% owned by those voters.

- we will allow whitelist pairs used in gauges. unproductive gauges not allowed by Expand Team.

## Improvement: Prolonged Emissions Decay

**In Solidly, protocol emissions decayed too quickly, leading to minimal incentives for late entrants.** Obviously early adopters should be rewarded for the risks they're taking, but we observed that the emissions decayed too quickly in the Solidly model. As a result, we made a few small tweaks to ensure that while early adopters would still be rewarded, the protocol would still be an attractive opportunity for future protocols.

- First, we modified the emissions growth function to

    > (veNFT.totalSupply ÷ EXPD.totalsupply)³ × 0.5 × Emissions

- Second, we removed negative voting, as we found it too zero-sum.
