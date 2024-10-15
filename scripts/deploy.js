/*
 * @Author: pegazus-alpha pourdebutantp@gmail.com
 * @Date: 2024-10-15 21:33:18
 * @LastEditors: pegazus-alpha pourdebutantp@gmail.com
 * @LastEditTime: 2024-10-15 22:04:32
 * @FilePath: \pack4\scripts\deploy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const hre = require("hardhat");

async function main() {
  const Vote = await hre.ethers.getContractFactory("Lock");
  const vote = await Vote.deploy();

  await vote.waitForDeployment();

  console.log("Vote contract deployed to:", vote.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
