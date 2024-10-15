/*
 * @Author: pegazus-alpha pourdebutantp@gmail.com
 * @Date: 2024-10-15 20:13:53
 * @LastEditors: pegazus-alpha pourdebutantp@gmail.com
 * @LastEditTime: 2024-10-15 22:08:23
 * @FilePath: \pack4\ignition\modules\Lock.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("LockModule", (m) => {
  const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const lock = m.contract("Lock");

  return { lock };
});
