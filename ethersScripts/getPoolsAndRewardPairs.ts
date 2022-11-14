import ethers, { utils } from 'ethers';
import collectionStakerAbi from '../contractAbis/collectionstakerAbi.json';

const getPoolsAndRewardPairs = () => {
    const provider = new ethers.providers.JsonRpcProvider("https://alfajores-forno.celo-testnet.org");
    const cStakerContract = new ethers.Contract("0x0cB99ceFA73CCE5c7d26fE7394336238F5c224D7", collectionStakerAbi, provider);
    const filter = {
        address: '0x0cB99ceFA73CCE5c7d26fE7394336238F5c224D7',
        topics: [
            utils.id("IncentiveETHCreated(address poolAddress,IERC20[] rewardTokens,uint256[] rewards,uint256 startTime,uint256 endTime)")
        ]
    }
    cStakerContract.on("IncentiveETHCreated", (poolAddress, rewardTokens, rewards, startTime, endTime) => {
        console.log("Pool Address: ", poolAddress);
        console.log("Reward Tokens: ", rewardTokens);
        console.log("Rewards Rate: ", rewards);
        console.log("Reward Start Time: ", startTime);
        console.log("Reward End Time: ", endTime);
    })
}

export default getPoolsAndRewardPairs;