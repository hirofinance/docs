import Bleed from 'nextra-theme-docs/bleed'
import Callout from 'nextra-theme-docs/callout'

&nbsp;

# Security


## Contract Addresses

| Contract Name | Contract Address | Network |
| --- | --- | --- |
| EXPD               | [0x2eE985d52677BD026a3f3fBD828cE96587de0A80]
(https://arbiscan.io/address/0x2eE985d52677BD026a3f3fBD828cE96587de0A80) | Aribitrum |
| GaugeFactory       | [0xf229505f22e56fbe8215B8a1e96F090aD9Ee418e]
(https://arbiscan.io/address/0xf229505f22e56fbe8215B8a1e96F090aD9Ee418e#code) | Aribitrum |
| BribeFactory       | [0xE0746B5Db886d2F09F1D36E029c6C77b4C02Ec44]
(https://arbiscan.io/address/0xE0746B5Db886d2F09F1D36E029c6C77b4C02Ec44#code) | Aribitrum |
| WrappedBribeFactory| [0x3767570089fbF5e5041Cbcf0AaF33cf190763428]
(https://arbiscan.io/address/0x3767570089fbF5e5041Cbcf0AaF33cf190763428#code) | Aribitrum |
| PairFactory        | [0xf6bD71a33c8Df0b1669E593dfD93bbfcb393c4b3]
(https://arbiscan.io/address/0xf6bD71a33c8Df0b1669E593dfD93bbfcb393c4b3#code) | Aribitrum |
| Router             | [0xC7Eafd56c3845834A3e96942e404f7Cbb9A9e8d8]
(https://arbiscan.io/address/0x9c12939390052919aF3155f41Bf4160Fd3666A6f#code) | Aribitrum |
| EXPDLibrary        | [0x90C5bE0747434de77A5BD8E9e3287bA61151dBC2]
(https://arbiscan.io/address/0x90C5bE0747434de77A5BD8E9e3287bA61151dBC2#code) | Aribitrum |
| VeArtProxy         | [0xcd81A5683E3dc9FEdaC3755E31440Ed637556eAB]
(https://arbiscan.io/address/0xcd81A5683E3dc9FEdaC3755E31440Ed637556eAB#code) | Aribitrum |
| VotingEscrow       | [0xC14384d1b49f1312614333DDe8feEE1341Db76Db]
(https://arbiscan.io/address/0xC14384d1b49f1312614333DDe8feEE1341Db76Db#code) | Aribitrum |
| RewardsDistributor | [0xA50c7Da8de8244F99e6f9a01cd80aDc21EbCAC83]
(https://arbiscan.io/address/0xA50c7Da8de8244F99e6f9a01cd80aDc21EbCAC83#code) | Aribitrum |
| Voter              | [0xD29A6E140226ff6AcDD94D32483b03Be20AAFC8b]
(https://arbiscan.io/address/0xD29A6E140226ff6AcDD94D32483b03Be20AAFC8b#code) | Aribitrum |
| Minter             | [0xb33d56f7021051abbBF044f545d8a8eCA96a391B]
(https://arbiscan.io/address/0xb33d56f7021051abbBF044f545d8a8eCA96a391B#code) | Aribitrum |
| Treasury           | [0xa715921ad0B96331033B8945eDc1E0E3B0C91739]
(https://arbiscan.io/address/0xa715921ad0B96331033B8945eDc1E0E3B0C91739#code) | Aribitrum |

## Differences from Solidly

Here is a list of key differences in the Expand Finance contracts.

### Major changes

  - **Treat external bribes differently than internal bribes (i.e. fees).**
    We split Bribe into two separate contracts, `InternalBribe` and
    `ExternalBribe`. `InternalBribe` functions essentially the same way as `Bribe`
    did, but `ExternalBribe` ensures that rewards are eliglble to be claimed by
    any voter who votes for the underlying gauge during the epoch, instead of
    only voters who vote after the rewards are sent. `ExternalBribe` also ensures
    that rewards can only be claimed after the epoch ends.`ExternalBribe`
    rewards must also be _whitelisted_ via on-chain governance.
  - **One vote per epoch. In Expand, voters are only allowed to make "active"
    voting decisions (i.e. vote and reset) once per epoch.** Voters must wait
    until the next epoch to change their votes. Voters can, however, _cast_
    their votes throughout the epoch.
  - **On-chain governance.** To handle protocol-wide decisions (such as eligible
    tokens for external bribes), we introduce an on-chain Governor. This will
    likely be Tally's first on-chain governor on Optimism following their
    support for the network.
  - **Killable gauges.** To dissuade emissions exploitation via dummy gauges, we're
    allowing the _Expand Commissaire_ (akin to Curve's Emergency DAO) to kill
    any "bad" gauges. The Commissaire is composed of individuals from varying
    parties meant to serve as a credibly neutral decision-maker for the broader
    ecosystem.

### Minor changes

  - **Removed the LP boost for voters.** We removed the boost that voters receive
    when staking their LPs with gauges they voted for. This removes the need
    for a veNFT aggregator (more on this later...).
  - **Removed negative voting.** We found negative voting to be zero-sum for
    Solidly, so we decided to remove it.
  - **Team emissions.** 3% of new emissions will be sent to a team address, meant
    to cover on-going expenses and future development.

### Small changes

  - **Modifiable fees.** Fees are now doubled to 0.02%, modifiable up to 0.05%, and
    tracked differently for volatile vs stable pairs.
  - **Upgradeable veNFT art.** Self-explanatory
